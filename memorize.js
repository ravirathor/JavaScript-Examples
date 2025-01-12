
const memoize=(fn) =>{
    const cache = new Map();
    
    return (...args)=> {
         console.log("args",args)
        const key = JSON.stringify(args);
        console.log(key)
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// Define the functions
const sum =(a, b) =>{
    return a + b;
}

const fib=(n)=>{
    if (n <= 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

const factorial=(n)=> {
    if (n <= 1) {
        return 1;
    }
    return factorial(n - 1) * n;
}

// Memoize the functions
const memoizedSum = memoize(sum);
const memoizedFib = memoize(fib);
const memoizedFactorial = memoize(factorial);

// Example usage
console.log(memoizedSum(3, 2));  // Output: 5
console.log(memoizedSum(2, 3));  // Output: 5 (separate call)
console.log(memoizedFib(5));     // Output: 8
console.log(memoizedFactorial(5));  // Output: 120
