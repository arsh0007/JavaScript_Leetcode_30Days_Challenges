/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
    arr = [...arr]
    i = 0
    while(i < arr.length)
    {
        if(Array.isArray(arr[i]))
        {
            arr.splice(i, 1, ...arr[i])
        }
        else 
        {
            yield arr[i]
            i += 1
        }
    }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
