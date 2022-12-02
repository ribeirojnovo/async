/* **** Exercise 1 **** */

declare function IAsyncSetTimeout<T>(
  callback: TimerHandler,
  timeout: number
): Promise<T>;

/* a) Let's turn this setTimeout predictable! Convert the setTimeout into a Promise API setTimeout */
/*
	Regular: `setTimeout(callback, timeout)` - completely async
	Promise: `setTimeoutPromise(callback, timeout).then(result => console.log(result))`
	
	Example:
		`
			asyncSetTimeout(() => 2 + 2, 2000).then(result => console.log(result)) // 4
		`
*/

// export { asyncSetTimeout };
