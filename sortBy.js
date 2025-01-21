
function sortByFunction(arr, fn) {
    return arr.slice().sort((a, b) => fn(a) - fn(b));
}

// Example usage:
const array = [5, 3, 8, 1];
const sortedArray = sortByFunction(array, x => x);
console.log(sortedArray); // Output: [1, 3, 5, 8]

const array2 = ['apple', 'banana', 'cherry'];
const sortedArray2 = sortByFunction(array2, x => x.length);
console.log(sortedArray2); // Output: ['apple', 'cherry', 
