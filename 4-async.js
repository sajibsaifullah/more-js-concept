/* 
JS==> single threaded
            - Synchronous
            - Asynchronous--- promise, async, fetch
*/

console.log(1);
console.log(2);
// doSomething();

const timeoutId = setTimeout(() => {
    // console.log('lazy logged');
}, 4000);

let num = 0;
const intervalId = setInterval(() => {
    // console.log(num++);
}, 1000)

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json));
// console.log(4);
console.log(5);
console.log(6);

function doSomething() {
    console.log(3);
}
