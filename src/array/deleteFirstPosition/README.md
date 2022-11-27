# 배열의 첫번째 원소를 제거해보아요.

> Array.shift 를 통해 첫번째 원소제거 가능하다. 어떻게 제거되는지 알아보도록 하자.

## 배열의 첫번째 요소를 제거하는 코드는 다음과 같다.

```javascript

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

```
 
 이는 앞전의 insert 연산과 비슷하다.
 단지 첫번째 인덱스에 undefined 를 삽입하고, 해당 undefined 를 제거한 배열을 새롭게 반환하는 것이다.

## 타입스크립트를 사용하여 구현해보자. 

```typescript

type strOrNum = string | number
type strOrNumOrUn = strOrNum | undefined
type deleteFnType = <T extends strOrNumOrUn[]>(arr: T) => strOrNum[] 

const reIndex_ts2: deleteFnType = (arr) => {
    const newArr: strOrNum[] = [] 
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] !== undefined) newArr.push(arr[i]!)
    }
    return newArr
}

const deleteFirstPosition_ts: deleteFnType = (arr) => {
    arr[0] = undefined
    return reIndex_ts2(arr)
}

const nums2 = [1, 2, 3]
const newNums2 = deleteFirstPosition_ts(nums2)
console.log(newNums2) // [2, 3]

```

타입스크립트를 통해 구현해 보았다.
어떠한 연산이 이루어지는지 알수 있다.