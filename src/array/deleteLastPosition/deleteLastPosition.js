const reIndex =  (arr) => {
    const newIndex = [];
    for (let i = 0; i < arr.length; i += 1) {
        if ( arr[i] !== undefined ) {
            newIndex.push(arr[i]);
        }
    }
    return newIndex;
}

const deleteLastPosition = (arr) => {
    arr[arr.length - 1] = undefined;
    const reIndexArray = reIndex(arr);
    return reIndexArray
}

const nums = [1, 2, 3];
const newNums = deleteLastPosition(nums);

console.log(newNums); // [1 ,2]
