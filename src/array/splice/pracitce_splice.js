const arr = [1, 2, 3, 4, 5, 6];
arr.splice(2, 3);

console.log(arr);

arr.splice(1, 0, 3, 4, 5);

console.log(arr); // [1, 2, 3, 4, 5, 6]
