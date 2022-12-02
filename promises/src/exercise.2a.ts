/* **** Exercise 2 **** */

declare function IPromiseAll<T>(
  promises: Promise<unknown>[]
): Promise<Awaited<T>[]>;

/* a) Create you own Promise.all */

function PromiseAll(promises: Promise<unknown>[]): Promise<Awaited<unknown>[]> {
  const numberOfPromises = promises.length;
  const fulfilledPromises = Array(numberOfPromises);
  let counter = 0;

  return new Promise((resolve) => {
    promises.forEach((promise, index) => {
      promise.then((result) => {
        counter++;
        fulfilledPromises[index] = result;

        if (counter === numberOfPromises) {
          resolve(fulfilledPromises);
        }
      });
    });
  });
}

export { PromiseAll };
