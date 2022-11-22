# 배열의 마지막 원소를 넣어 보아요. 

> Array.push 를 통해 마지막원소를 넣을 수 있다. 어떻게 push 연산이 이루어지는지 간단하게 구현해보자.

## 마지막 원소에 넣기 위해서는 다음의 연산이 필요해요.

---

1. 다음과 같은 배열이 존재한다고 생각하자.
```js
[1] -> [2] -> [3]
```

2. 마지막 원소를 넣을 공간을 만든다.
```js
[1] -> [2] -> [3] -> []
```

3. 마지막 공간에 원소값을 할당한다.
```js
[1] -> [2] -> [3] -> [4]
```

---

위의 사항을 javascript 코드로 구현해보자.
```javascript
 
const insertLastPosition = (arr, val) => {
    let len = arr.length;
    arr[len] = val
}

const numbers  = [1, 2, 3]
insertLastPosition(numbers, 4);
console.log(numbers); // [1, 2, 3, 4]

```

이러한 방식으로 코드 구현이 가능하다.
여기서 len 은 array 의 length 값을 얻어 할당한다.
lentgh 값은 배열의 마지막 index + 1 이므로, 새롭게 추가할 원소의 마지막 index가 된다.

## 이를 타입스크립트로 구현해본다.

```typescript

type InsertLastPosition = <T extends number | string>(arr: T[], val: T) => void

const insertLastPosition_ts: InsertLastPosition = (arr, val) => {
    const len = arr.length;    
    arr[len] = val
}

const nums: number[] = [1, 2, 3]
insertLastPosition_ts(nums, 4)
console.log(nums) // [1, 2, 3, 4]

```
