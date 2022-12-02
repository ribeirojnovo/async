// import { asyncSetTimeout } from "./exercise.1a";

/* **** Exercise 1 **** */

/* b) Let's cancel a promise! Create your method that will cancel the promise if it takes more than X seconds.
  - Hint: Promise.race
*/

declare function IPromiseWithCancellation<T>(
  promise: Promise<T>,
  timeout: number
): Promise<T | { cancelation: true }>;

// export { PromiseWithCancellation };
