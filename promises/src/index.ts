/* **** Exercise 1 a) **** */
import { asyncSetTimeout } from "./exercise.1a";

asyncSetTimeout(() => 2 + 2, 2000).then((result) =>
  console.log("asyncSetTimeout Result => ", result)
); // 4

/* **** Exercise 1 b) **** */
import SimpleService from "./lib/service";
import { PromiseWithCancellation } from "./exercise.1b";
import { PromiseAll } from "./exercise.2a";
import { PromiseAllSettled } from "./exercise.2b";

const promise = SimpleService.fetch({ timeout: 3000 });

PromiseWithCancellation(promise, 2000).then((result) =>
  console.log("PromiseWithCancellation Result => ", result)
);

/* **** Exercise 2 a) **** */
const promises = [3000, 1000, 5000].map((timeout) =>
  SimpleService.fetch({ timeout })
);

PromiseAll(promises).then((results) => {
  console.log("PromiseAll results => ", ...results); // 3000, 1000, 5000
});

/* **** Exercise 2 b) **** */

const promisesToSettle = [3000, null, 5000].map((timeout) =>
  SimpleService.fetch({ timeout })
);

PromiseAllSettled(promisesToSettle).then((results) => {
  console.log("PromiseAllSettled results => ", ...results); // 3000, { error: 'PROMISE REJECTED', payload: { timeout: null } }, 5000
});
