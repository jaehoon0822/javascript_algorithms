# SPLICE 를 활용해보아요.

> Array 네이티브 메소드 중에 splice method 가 존재한다.<br/> splice 는 배열에 값을 쉽게 제거하거나, 삽입할 수 있는 유용한 메서드이다. 살펴보도록 하자.

1 부터 6까지 가진 배열이 있다고 가정해보자.
이때 2 번째 부터 4번째까지 원소를 삭제한다고 하면 다음처럼 만들 수 있다.

```javascript

const arr = [1, 2, 3, 4, 5, 6];
arr.splice(2, 3);

console.log(arr); // [1, 2, 6]

```

다시 삽입도 가능하다.
이번에는 2번째 위치에 삭제는 안하고, 3 부터 4까지 삽입한다.

```javascript

const arr = [1, 2, 3, 4, 5, 6];
arr.splice(2, 3);

console.log(arr); // [1, 2, 6]

arr.splice(2, 0, 3, 4, 5);

console.log(arr); // [1, 2, 3, 4, 5, 6]

```

위 code 를 보면 알겠지만 splice 의 parameter 는 다음과 같은 기능을 한다.

| 1th | 2th | n th |
|:--|:--|:--|
| index | howmany | added item  |

이렇게 각각의 parameter 를 사용해서 원하는 값을 삽입 및 제거 가능하다.