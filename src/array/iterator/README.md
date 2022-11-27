# Iterator 를 알아보아요.

> Iterator 는 ES2015 에서 부터 지원하는 새로운 spec 이다.<br/> ***Iterator 는 시퀀스를 정의하고 종료시의 반환값을 잠재적으로 정의하는 객체이다. <br/>- MDN web docs***

이는 기존의 Array 를 통한 순회와는 조금은 다른 방식이다.

> 반복자(Iterator) 를 생성하면 next 메소드를 반복적으로 호출하여 명시적으로 반복시킬수 있다.<br/> 반복자를 반복시키면 반복자는 value, done 을 가진 객체를 반환한다.<br/>시퀀스의 마지막 값이 이미 산출되었다면 done 값은 true 가 된다. 

여기서 중요한 점은 배열은 완전히 할당되어야 하지만, Iterator 는 필요한 배열의 원소를 가리키기만 하면 되므로, 필요한 만큼만 할당하면 되는 장점이 존재한다.

## Using the @@iterator object

다음의 예문을 살펴보자.

```javascript

const nubmers = [1, 2, 3, 4, 5];
let iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // 4
console.log(iterator.next().value); // 5

```

위의 numbers 배열의 내부 메서드인 iterator 를 실행시켰다.
이렇게 실행된 iterator 는 이제 next 메서드를 가지며, 메서드를 실행시키면 value, done 을 가진 객체를 반환한다.

위 예시는 value 값을 가져와 console 로 찍은 것이다.

위 예시를 보면 알겠지만, iterator 로 변환하는 method 는 Symbol 로 이루어져 있는것을 볼 수 있다.

만약 이러한 iterator 를 간단하게 코드로 구현해본다면 어떠한 느낌일까?

```javascript

const numbers = [1, 2, 3, 4, 5];

const iter_test = (arr) => {
    let i = 0;
    return {
        next() {
            let returnVal = arr[i] == undefined ?
               { value: null, done: true } :
               { value: arr[i], done: false};
            i += 1;
            return returnVal
        }
    }
}

const iter = iter_test(numbers);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
/*
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 4, done: false }
{ value: 5, done: false }
{ value: null, done: true }
*/

```

이렇게 만들어진 iterator 를 어떻게 활용할까?
바로 for...of 문을 사용하여 쉽게 활용 및 사용 가능하다.

## for...of 문을 보도록 하자.

for...of 문은 Iterator 를 위해 생겨난 반복문이라고 생각이 든다.

기존 for...in 문을 제공했을때 배열의 index 및 값을 참조하기 위해 어떻게 작성했는지 보도록 하자.

```javascript

const nubmers = [1, 2, 3, 4, 5];

for ( let idx in numbers ) {
    console.log(idx); // 0 1 2 3 4
}

```

그렇다. 위의 for..in 문을 사용하여 배열을 순회할때 배열의 vlaue 가 아닌 Index 값을 반환하는것을 볼 수 있다.

for...in 문 자체가 프로토타입 체인상의 모든 프로퍼티 키를 열거하도록 만들어진 반복문이기 때문에 위 같이 반환된다.

배열의 값을 반환하기 위해서는 다음처러 추가적 작업이 필요하다.

```javascript

const nubmers = [1, 2, 3, 4, 5];

for ( let idx in numbers ) {
    console.log(numbers[idx]); // 1 2 3 4 5
}

```

반면 for...of 는 어떨까?

```javascript
const nubmers = [1, 2, 3, 4, 5];

for ( let val of numbers ) {
    console.log(val); // 1 2 3 4 5
}

```

for...of 는 해당 배열의 값을 반환하는 것 을 볼 수 있다.

for...of 는 순회할때마다 해당 배열의 @@iterator 의 next 메소드를 실행하여, 반환되는 객체의 value 값을 반환하기에 위와 같은 연산이 가능하다.

단, 반복 순회할 객체가 내부적으로 @@iterator 가 있어야 해당 객체글 iterator 로 변경 가능하다.

그래서 이렇게 @@iterator 를 가진 객체를 자바스크립트에서는 iterable object 라 한다.

실제로 Object 자체에는 @@iterator 가 없으므로, 일반 Object 는 iterable 하지 않다.

iterable 한 객체는 다음과 같다

| name |
| :--- |
| String |
| Array |
| Map |
| Set |
| DOMCollection |
| Node List |

## Array entries, keys and values

ES2015 에서는 iterator 검색을 위한 세가지 방법을 소개한다.

| name | description |
| :--- | :--- |
| entries | key / value 쌍을 포함한 배열을 value 에 반환한다.<br/>이때 첫번째 index 는 position 이며 두번째 index 는 배열의 value 이다. |
| keys | 배열의 idx 만을 value 에 반환한다. |
| values | 배열의 값을 value 에 반환한다. |


이를 entries 부터 하나씩 살펴보자.

```javascript

const numbers = [1, 2, 3, 4, 5];

const entriesNumbers = numbers.entries();
console.log(entriesNumbers.next());
console.log(entriesNumbers.next());
console.log(entriesNumbers.next());
console.log(entriesNumbers.next());
console.log(entriesNumbers.next());
console.log(entriesNumbers.next());

/*
{ value: [ 0, 1 ], done: false }
{ value: [ 1, 2 ], done: false }
{ value: [ 2, 3 ], done: false }
{ value: [ 3, 4 ], done: false }
{ value: [ 4, 5 ], done: false }
{ value: undefined, done: true }
*/

for ( let n of numbers.entries() ) {
    console.log(n)
}

/*
[ 0, 1 ]
[ 1, 2 ]
[ 2, 3 ]
[ 3, 4 ]
[ 4, 5 ]
*/

```
entriesNumbers 에서 next 를 반환할 때 마다 value 와 done 을 포함한 객체를 확인할 수 있다.

보다시피 value 에는 배열을 가지고 있으며, 해당 배열의 첫번째는 index 값, 두번째는 배열의 value 이다.

당연스럽게도 for...of 문을 사용하여 해당 값을 순회하면, 순회된 값은 iterator 객체의 value 값을 가지므로, 각 값은 index, value pair 인 배열이다.

다음은 keys 를 살펴보자.

```javascript

const numbers = [1, 2, 3, 4, 5];

const keysNumbers = numbers.keys();
keysNumbers.next();
keysNumbers.next();
keysNumbers.next();
keysNumbers.next();
keysNumbers.next();
keysNumbers.next();
/*
{ value: 0, done: false }
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 4, done: false }
{ value: undefined, done: true }
*/

for ( let key of numbers.keys() ) {
    console.log(key);// 0 1 2 3 4
}

```

위는 배열의 key 를 반환하는 iterator 이다.
당연스럽게도, for...of 의 key 값은 배열의 index 이다.

이와는 반대로 values 는 배열의 value 를 반환한다.

```javascript

const numbers = [1, 2, 3, 4, 5];

const valuesNumbers = numbers.values();
keysNumbers.next();
keysNumbers.next();
keysNumbers.next();
keysNumbers.next();
keysNumbers.next();
keysNumbers.next();
/*
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 4, done: false }
{ value: 5, done: false }
{ value: undefined, done: true }
*/

for ( let val of numbers.values() ) {
    console.log(val);// 1 2 3 4 5
}

```

이렇게 iterator 가 어떻게 동작하는지 그 개념에 대해서 알아 보았다.
