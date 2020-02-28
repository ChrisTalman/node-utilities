'use strict';

// External Modules
import * as Crypto from 'crypto';

// Types
interface Wrapper
{
	initialisationVector: Buffer;
	tag: Buffer;
	payload: Buffer;
};

/** Encrypt and decrypt values using common secret. */
export class Cipher
{
	public readonly algorithm: string;
	public readonly encoding: Crypto.Utf8AsciiBinaryEncoding = 'utf8';
	public readonly initialisationVectorLength: number = 16;
	private readonly secret: string;
	constructor({secret, algorithm, encoding, initialisationVectorLength}: {secret: string, algorithm: string, encoding?: Crypto.Utf8AsciiBinaryEncoding, initialisationVectorLength?: number})
	{
		this.secret = secret;
		this.algorithm = algorithm;
		if (typeof encoding === 'string') this.encoding = encoding;
		if (typeof initialisationVectorLength === 'number') this.initialisationVectorLength = initialisationVectorLength;
	};
	public encrypt(value: string)
	{
		const initialisationVector = Crypto.randomBytes(this.initialisationVectorLength);
		const cipher = Crypto.createCipheriv(this.algorithm, this.secret, initialisationVector);
		const updatedBuffer = cipher.update(value, this.encoding);
		const finalBuffer = cipher.final();
		const tag = (cipher as unknown as {getAuthTag: () => Buffer}).getAuthTag();
		const wrapper: Wrapper =
		{
			initialisationVector,
			tag,
			payload: Buffer.concat([updatedBuffer, finalBuffer])
		};
		const json = JSON.stringify(wrapper);
		const encryptedBuffer = Buffer.from(json);
		const encrypted = encryptedBuffer.toString('base64');
		return encrypted;
	};
	public decrypt(value: string)
	{
		const base64 = Buffer.from(value, 'base64');
		const wrapper: Wrapper = JSON.parse(base64.toString('utf8'));
		const initialisationVector = Buffer.from(wrapper.initialisationVector);
		const tag = Buffer.from(wrapper.tag);
		const payload = Buffer.from(wrapper.payload);
		const decipher = Crypto.createDecipheriv(this.algorithm, this.secret, initialisationVector);
		(decipher as unknown as {setAuthTag: (tag: Buffer) => void}).setAuthTag(tag);
		const decrypted = decipher.update(payload).toString() + decipher.final('utf8');
		return decrypted;
	};
};