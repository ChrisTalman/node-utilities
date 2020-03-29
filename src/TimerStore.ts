'use strict';

// Types
export interface Options
{
	log?: boolean;
};

/** Store for timers with method to clear all them all. */
export class TimerStore
{
	private readonly options: Options;
	private readonly timers: Array<NodeJS.Timeout> = [];
	/** Initialises instance. */
	constructor(options: Options = {log: true})
	{
		this.options = options;
	};
	/** Registers timeout in store. */
	public register(timeout: NodeJS.Timeout)
	{
		this.timers.push(timeout);
	};
	/** Clears all registered timeouts. */
	public clear()
	{
		this.log('Clearing timers:', this.timers.length);
		for (let timer of this.timers)
		{
			clearTimeout(timer);
		};
		this.log('Cleared timers.');
	};
	/** Emits console.log() if logging is enabled. */
	private log(... messages: Array<any>)
	{
		if (!this.options.log) return;
		console.log(... messages);
	};
};