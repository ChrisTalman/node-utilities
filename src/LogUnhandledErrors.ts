'use strict';

/** Listens to unhandled exceptions and rejections, logs them, and then exits with error code `1`. */
export function listenUnhandledErrors()
{
	process.on('uncaughtException', error => handleUnhandledError(error, 'exception'));
	process.on('unhandledRejection', error => handleUnhandledError(error, 'rejection'));
};

function handleUnhandledError(error: any, type: 'exception' | 'rejection')
{
	console.error('Unhandled ' + type + ':');
	console.error(error);
	process.exit(1);
};