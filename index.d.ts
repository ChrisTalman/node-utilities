declare module '@ChrisTalman/node-utilities'
{
    /** Initialises handler to be invoked when process receives signals relevant to a graceful exit. */
    export function initialiseGracefulExitHandler(handleGracefulExit: () => void): void;
}