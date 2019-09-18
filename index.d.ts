declare module '@ChrisTalman/node-utilities'
{
	/** Initialises handler to be invoked when process receives signals relevant to a graceful exit. */
	export function initialiseGracefulExitHandler(handleGracefulExit: () => void): void;
	/** Generates hash for value according to encoding. */
	import { HexBase64Latin1Encoding as DigestEncoding } from 'crypto';
	export function generateHash({value, algorithm, encoding}: {value: string, algorithm: 'sha256', encoding: DigestEncoding}): string;
}