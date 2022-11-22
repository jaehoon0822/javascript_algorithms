/** 
 
@title Fibonacci 
@langauge javascript

@description

처음 시작하는 2개의 숫자는 1, 1 이다.

그리고 두개의 숫자를 더한 값은 다음의 이어지는값이 된다.

이렇게 이어지는 숫자값(앞의 2개의 원소를 더한 값)의 마지막 값을 구한다.

 **/

// fibonacci 를 위한 배열을 만든다.
const fibonacci = [];

// 처음 시작하는 2개의 숫자는 1, 1 이다.

fibonacci[1] = 1;
fibonacci[2] = 1;

// 앞의 2개의 숫자를 더한값을 다음의 이어지는 배열에 할당한다.
// 무한적으로 값을 더할 수 없으니 20까지의 값만 구한다.
for (let i = 3; i < 20; i += 1 ) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

// 이렇게 구한 fibonacci 를 출력해본다.출력본다
for (let i = 1; i < fibonacci.length; i += 1) {
   console.log(fibonacci[i]);
} 
