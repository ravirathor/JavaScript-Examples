Array.prototype.groupBy = function(fn) {
    return this.reduce((result, item) => {
        console.log(result ,item)  //{} 6.1
        const key = fn(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});
};
// Example usage:
const array = [6.1, 4.2, 6.3];
const grouped = array.groupBy(Math.floor);
//console.log(grouped);
// Output: { '4': [ 4.2 ], '6': [ 6.1, 6.3 ] }
// - We add a `groupBy` method to the `Array` prototype.
// - The `groupBy` method uses the `reduce` function to iterate over the array.
// - For each item, it calls the provided function `fn` to get the key.
// - It then groups the items based on these keys.

// Feel free to test it out with different arrays and functions! If you have any questions or need further assistance, just let me know. 😊
