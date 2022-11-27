const insertLastPosition = (arr, val) => {
    let len = arr.length;
    arr[len] = val
}

const numbers  = [1, 2, 3]
insertLastPosition(numbers, 4);
console.log(numbers); // [1, 2, 3, 4]

// 위의 연산은 Array.push 를 통해 쉽게 구현 가능하다.
// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]
