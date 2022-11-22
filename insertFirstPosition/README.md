# 배열에 첫번째 원소로 넣어 보아요.

> Array 에는 unshift 라는 연산자가 존재한다. 이 연산자는 배열에 첫번째 요소로 넣어주는 메소드이다. 배열의 첫번째 요소로 어떻게 할당하는지 알아보는 것을 알아보자

## 첫번째 원소 할당을 위해서는 다음과 같은 연산이 필요해요

```javascript
[1] -> [2] -> [3]
```

일단 함수를 만들어 보도록 하자.

```javascript
function insertFirstPostion(arr, val) {
    for (let i = arr.length; i > 0; i += 1) {
        arr[i] = arr[i - 1];
    }
    arr[0] = val;
}
```

위 함수의 내용을 살펴보
