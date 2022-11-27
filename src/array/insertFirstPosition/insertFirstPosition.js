function insertFirstPosition(arr, num) {
    for (let i = arr.length - 1; i > 0; i -= 1) {
        arr[i] = arr[i - 1];
    }

    arr[0] = num;
}


const arr = [1, 2 ,3 ,4 ,5];
insertFirstPosition(arr, 6);

console.log(arr);
