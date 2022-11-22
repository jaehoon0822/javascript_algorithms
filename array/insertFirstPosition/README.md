# 배열에 첫번째 원소로 넣어 보아요.

> Array 에는 unshift 라는 연산자가 존재한다. 이 연산자는 배열에 첫번째 요소로 넣어주는 메소드이다. 배열의 첫번째 요소로 어떻게 할당하는지 알아보는 것을 알아보자

---

## 첫번째 원소 할당을 위해서는 다음과 같은 연산이 필요해요

1) 다음과 같은 배열이 존재한다고 생각하자.

```javascript
[1] -> [2] -> [3]
```

2) 다음처럼 새롭개 넣을 배열을 만들 공간을 만든다.

```javascript
[1] -> [2] -> [3] -> []
```

3) 하지만, 새롭게 넣을 배열은 첫번재 배열이므로 각 값을 한개씩 옆으로 이동 시켜야 한다.

```javascript
[] -> [1] -> [2] -> [3]
```

4) 이동 시켰다면, 첫번째 배열에 값을 넣는다.

```javascript
[0] -> [1] -> [2] -> [3]

```

---

위 연산에 대한 함수로직을 만들어 보도록 하자.

```javascript
function insertFirstPostion(arr, val) {
    for (let i = arr.length; i > 0; i += 1) {
        arr[i] = arr[i - 1];
    }
    arr[0] = val;
}

let arr = [1, 2, 3];

insertFirstPosition(arr, 0);
console.log(arr); // [0, 1, 2, 3]
```

함수를 사용해 첫번째 값으로 배열을 넣고 두번째 값으로 추가할 값을 넣는다.

그런후 반복문을 통해 각 값을 옆으로 이동시킨이후, 첫번째 값에 val 을 할당한다.

---

## 다음은 이를 타입스크립트로 구현한 코드이다.

```typescript

function insertFirstPosition<T extends number | string>(arr: T[], val: T) {
    for (let i = arr.length; i > 0; i -= 1) {
        arr[i] = arr[i - 1]
    }

    arr[0] = val;
}

const arr: number[] = [1, 2, 3];

insertFirstPosition(arr, 0);

console.log(arr);

```
