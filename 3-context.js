let a = 5;
function add(num1, num2) {
    const result = num1 + num2 + a;
    return result;
}

const sum = add(4, 5);
console.log(sum);

/* 
==> Execution context & call stack
        - Global Execution Context (GEC)
        - Function Execution Context (FEC)

    --> context -> creates two phase
                    - Creation phase
                    - Execution phase
*/