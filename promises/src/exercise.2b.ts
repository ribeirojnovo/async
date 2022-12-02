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

function PromiseAllSettled<T>(
  promises: Promise<T>[]
): Promise<Awaited<T | { error: "PROMISE REJECTED" }>[]> {
  const numberOfPromises = promises.length;
  const fulfilledPromises = Array(numberOfPromises);
  let counter = 0;

  return new Promise((resolve) => {
    promises.forEach((promise, index) => {
      promise
        .then((result) => {
          counter++;
          fulfilledPromises[index] = result;

          if (counter === numberOfPromises) {
            resolve(fulfilledPromises);
          }
        })
        .catch(() => {
          counter++;
          fulfilledPromises[index] = {
            error: "PROMISE REJECTED",
          };
          if (counter === numberOfPromises) {
            resolve(fulfilledPromises);
          }
        });
    });
  });
}

export { PromiseAllSettled };
