# 배열의 마지막 원소를 삭제해 보아요.

> Javascript 의 Array 는 pop 이라는 native method 를 제공한다. pop 은 배열의 마지막 원소를 제거하고 해당원소를 반환하는 메소드이다. 이러한 연산방식을 구현해 본다.

## 마지막 원소를 삭제하기 위해서는 다음의 연산이 필요하다.

---

1. 다음의 배열이 있다고 가정하자.
```javascript
[1] -> [2] -> [3]
```

2. 마지막 원소를 지운다.
```javascript
[1] -> [2] -> []
```

3. 마지막 원소가 undefined 가 되므로, 새로운 배열을 만든다.
```javascript
pre: [1] -> [2] -> []
new: [] -> []
```

4. pre 에 있는 배열의 원소를 순회하여 new 배열에 할당한다.<br/> 이때 중요한 것은 pre 의 원소가 undefiend 이면 할당하지 않는것이다.
```javascript
new: [1] -> [2]
```

---

위 방식대로 Code를 만들어 보도록 하자

```javascript
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
```

함수를 reIndex 와 deleteLastPosition 2개를 만들었다.

reIndex 의 역할을 undefined 를 체크하여 undefined 가 없는 배열을 반환하는 역할을 하며, deleteLastPosition 은 배열상에 마지막 원소에 undefined 를 넣고 반환되는 reIndex 의 배열을 재 반환하는 역할을 한다.

deleteLastPosition 은 마지막 노드에 undefined 를 삽입하고, reIndex 는 undefined 를 없앤 새로운 배열을 반환하는 역할을 한다고 생각하면 될것이다.

이렇게 해야 undefined 가 없는 배열 반환이 가능하다.

## 타입스크립트로 구현해 보아요.

타입스크립트로 구현한 코드는 다음과 같다.

```typescript

type NumOrStr = number | string
type NumOrStrOrUn = NumOrStr | undefined
type ReIndexType = (arr: NumOrStrOrUn[]) => NumOrStr[]

const reIndex_ts: ReIndexType = (arr) => {
    const newArr: NumOrStr[] = []
    for ( let i = 0; i < arr.length; i += 1 ) {
        if (arr[i] !== undefined) newArr.push(arr[i]!)
    }
    return newArr
}

const deleteLastPosition_ts: ReIndexType = (arr) => {
    arr[arr.length - 1] = undefined
    return reIndex_ts(arr)
}

const nums_ts: NumOrStrOrUn[] = [1, 2, 3]
const newNums_ts = deleteLastPosition_ts(nums_ts)
console.log(newNums_ts)

```

위 코드를 작서하는데 타입 개념이 익숙하지 않는것이 느껴진다.

몇번의 타입지정 끝에 구현할수 있었다.
타입스크립트의 타입 공부 그리고 제너릭에 대해 다시 살펴봐야 겠다.