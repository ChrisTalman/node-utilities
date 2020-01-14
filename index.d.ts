declare module '@chris-talman/node-utilities'
{
	/** Initialises handler to be invoked when process receives signals relevant to a graceful exit. */
	export function initialiseGracefulExitHandler(handleGracefulExit: () => void): void;

	/** Generates hash for value according to encoding. */
	import { HexBase64Latin1Encoding as DigestEncoding } from 'crypto';
	export function generateHash({value, algorithm, encoding}: {value: string, algorithm: 'sha1' | 'sha256' | 'sha384' | 'sha512', encoding: DigestEncoding}): string;

	/** Listens to unhandled exceptions and rejections, logs them, and then exits with error code `1`. */
	export function listenUnhandledErrors(): void;
}