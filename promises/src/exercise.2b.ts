/* **** Exercise 2 **** */

declare function IPromiseAllSettled<T>(
  promises: Promise<unknown>[]
): Promise<Awaited<T | { error: "PROMISE REJECTED" }>[]>;

/* b) Modify the Promise.all made in a) to wait for all promises resolution event it some break */
/*
  Rejected Promises should be handled and return an object
  {
	error: 'PROMISE REJECTED',
	payload: any
  }
*/

// export { PromiseAllSettled };
