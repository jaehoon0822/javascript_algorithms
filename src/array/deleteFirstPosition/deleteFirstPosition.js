 reIndex = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] !== undefined) newArr.push(arr[i]);
    }
    return newArr;
}

const deleteFirstPosition = (arr) => {
    arr[0] = undefined;
    return reIndex(arr);
}

const arr = [1, 2, 3];
const newArr = deleteFirstPosition(arr);
console.log(newArr); // [2, 3]
