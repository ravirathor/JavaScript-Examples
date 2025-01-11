const compose = (functions) =>{
    return (x) =>
    {
        return functions.reduceRight((acc, fn) => fn(acc), x); 
        
    };
}

// Example usage:
const functions = [
    x => x + 1,
    x => x * 2,
    x => x - 3
];

const composedFunction = compose(functions);
console.log(composedFunction(5)); // Output: 5
