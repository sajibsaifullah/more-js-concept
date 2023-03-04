const getData = new Promise((resolve, reject) => {
    const num = Math.random() * 10;
    console.log(num);
    if (num < 5) {
        resolve(56665);
    }
    else {
        reject('No data available');
    }
})
// getData.then(data => console.log(data + 10));
getData
    .then(data => console.log(data + 22))
    .catch(err => console.error('ERR:', err));

/* 
==> What is promise?
==> How does promise work?

*/