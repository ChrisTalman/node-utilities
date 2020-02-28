declare module '@chris-talman/node-utilities'
{
	// External Modules
	import * as Crypto from 'crypto';

	/** Initialises handler to be invoked when process receives signals relevant to a graceful exit. */
	export function initialiseGracefulExitHandler(handleGracefulExit: () => void): void;

	/** Generates hash for value according to encoding. */
	export function generateHash({value, algorithm, encoding}: {value: string, algorithm: 'sha1' | 'sha256' | 'sha384' | 'sha512', encoding: Crypto.HexBase64Latin1Encoding}): string;

	/** Encrypt and decrypt values using common secret. */
	export class Cipher
	{
		public readonly algorithm: string;
		public readonly encoding: Crypto.Utf8AsciiBinaryEncoding;
		private readonly secret: string;
		constructor({secret, algorithm, encoding}: {secret: string, algorithm: string, encoding?: Crypto.Utf8AsciiBinaryEncoding});
		public encrypt(value: string): string;
		public decrypt(value: string): string;
	}

	/** Listens to unhandled exceptions and rejections, logs them, and then exits with error code `1`. */
	export function listenUnhandledErrors(): void;
}