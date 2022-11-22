function insertFirstPosition<T extends number | string>(arr: T[], val: T) {
    for (let i = arr.length; i > 0; i -= 1) {
        arr[i] = arr[i - 1]
    }

    arr[0] = val;
}

const arr: number[] = [1, 2, 3];

insertFirstPosition(arr, 0);

console.log(arr);

