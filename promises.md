# Plan Javascript Async
## -- First Some History 

- Node - Callback Hell
- Promise Api
- Promise.all
- Async Await

- ✨Magic ✨

## -- Async-Await vs Promise API  
  

| Promise API | Async-Await |
| ------ | ------ |
| Promise is an object representing intermediate state of operation which is guaranteed to complete its execution at some point in future. | Async/Await is a syntactic sugar for promises, a wrapper making the code execute more synchronously. |
| Promise has 3 states – resolved, rejected and pending. | It does not have any states. It returns a promise either resolved or rejected. |
| If the function “fxn1” is to executed after the promise, then promise.then(fxn1) continues execution of the current function after adding the fxn1 call to the callback chain. | If the function “fxn1” is to executed after await, then await X() suspends execution of the current function and then fxn1 is executed.       |
| Error handling is done using .then() and .catch() methods. | Error handling is done using .try(), .catch() and .finally() methods. |
| Promise chains can become difficult to understand sometimes. | 	Using Async/Await makes it easier to read and understand the flow of the program as compared to promise chains.  |

## -- Books and References
  
[Event Loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ) 
   
[Clean Coder](https://www.bookdepository.com/Clean-Coder-Robert-C-Martin/9783826696954?ref=grid-view&qid=1670008731237&sr=1-1) 
  
[High Performance Browser Networking](https://www.bookdepository.com/High-Performance-Browser-Networking-Ilya-Grigorik/9781449344764?ref=grid-view&qid=1670008763969&sr=1-1)

  
