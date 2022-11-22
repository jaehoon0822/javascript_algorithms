# Fibonacci 

## fibonacci 에 대해서 알아보아요.

> 첫째 및 둘째 항이 1이며 그 뒤의 모든 항은 바로 앞 두 항의 합인 수열이다. [ 위치백과: 피보나치 수]

1) 수열이므로 배열을 사용해 표한하면 쉽게 피보나치 수를 만들 수 있다.

```javascript
const fibonacci = [];
```

2) 알고 있듯이, 첫번째, 두번째 항이 1 이므로  두 값을 1로 설정한다.

```javascript
fibonacci[0] = 1
fibonacci[1] = 1
```

3) 만들어진 fibonacci 의 다음 값을 만들기 위해 앞의 두 항의 값을 더한이후 다음의 배열에 삽입한다.

이때 반복문을 사용하므로, 조건상 20까지의 fibonacci 순열을 만든다.

```javascript
for(let i = 2; i < 20; i += 1) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
```

4) 이렇게 만들어진 순열을 제대로 만들어 보았는지 출력해 본다.

```javascript
for (let i = 0; i < fibonacci.legnth; i += 1) {
    console.log(fibonacci[i]);
}
```

이렇게 만들어진 자바스크립트는 다음과 같다

```javascript

const fibonacci = [];

fibonacci[0] = 1;
fibonacci[1] = 1;

for (let i = 2; i < 20; i += 1 ) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (let i = 0; i < fibonacci.length; i += 1) {
   console.log(fibonacci[i]);
} 

```
