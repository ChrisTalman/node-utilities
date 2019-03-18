'use strict';

// External Modules
import { mirror } from '@ChrisTalman/isomorphic-utilities';

// Constants
const GRACEFUL_EXIT_SIGNAL = mirror
(
    {
        SIGTERM: true,
        SIGINT: true
    }
);
const GRACEFUL_EXIT_SIGNALS = Object.values(GRACEFUL_EXIT_SIGNAL);

/** Initialises handler to be invoked when process receives signals relevant to a graceful exit. */
export function initialiseGracefulExitHandler(handleGracefulExit: () => void)
{
    for (let signal of GRACEFUL_EXIT_SIGNALS)
    {
        process.on(signal, handleGracefulExit);
    };
};