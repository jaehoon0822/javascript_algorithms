# The stack data structure

> ***Stack 은 정렬된 항목의 모음이다.***<br/> Stack 은  ***LIFO(Last In First Out)*** 이라 불리며, 말 그대로 마지막으로 들어간 항목이 첫번째로 반환된다.

stack 구조는 책을 쌓듯이 이루어진다. 책을 위에 쌓으면 치울때 가장 상단의 책을 먼저 치우게 된다.

이러한 방식으로 stack 구조는 마지막 요소를 먼저 반환하며, 마지막 반환요소는 첫번째 요소가 된다.

## Creating an array-based Stack class

자 이제 stack 구조에 대해서 알아보았다.
이제 이를 코드로 구현해보자.

```javascript
class Stack {
    constructor() {
        this.items = [];
    }
}
```

stack class 를 생성했다.
constructor 함수 내부에는 this.items 라는 내부 프로퍼티를 만들어 내부적으로 사용할 수 있도록 만들었다.

items 의 역할은 간단하다.
해당 stack 방식으로 추가할 빈 배열을 하나 만들었다고 생각하면 된다.

이제 만들어진 class 안에 동작할 method 를 구현해야 한다.
만들어질 메소드는 다음과 같다

| method name | description |
| :--- | :--- |
| push | 이 메소드는 새로운 요소를 stack 에 추가한다. |
| pop | 이 메소드는 마지막 요소를 stack 에서 제거한다.</br> 그리고 제거된 요소를 반환한다. |
| peek | 이 메소드는 stack 의 마지막 요소를 반환한다. </br> 하지만, 해당 요소는 제거되지 않는다.
| isEmpty | 이 메소드는 stack 이 비어 있을때, true 를 그렇지 않다면 false 를 반환한다. |
| clear | 이 메소드는 stack 은 완전히 비운다. |
| size | 이 메소드는 stack 에 몇개의 원소가 있는지 숫자로 반환한다. <br/> 배열의 length 와 같다고 생각하면 된다.|

이제 위 메서드를 하나씩 구현해 보도록 하자

### push

stack 에 새로운 요소를 추가하기 위해 push method 를 만들어보도록 하자.

```javascript

class Stack {
    constructor() {
        this.items = [];
    }

    push(elem) {
        this.items.push(elem);
    }
}

```

push 는 기존의 javascript 에서 제공되는 native method 인 Array 의 push 를 사용하면된다.

이는 구현되어 있는 메서드로써 사용해도 충분히 구현 가능하다.

### pop

stack 에 새로운 요소를 제거해보도록 해보자.
요소를 제거이후 제거된 요소는 반환된다.

```javascript

class Stack {
    constructor() {
        this.items = [];
    }

    push(elem) {
        this.items.push(elem);
    }

    pop() {
        return this.items.pop();
    }
}


```

Array 에서 제공하는 native method 인 pop 을 사용하여 구현하도록 한다.

### peek

stack 에서 가장 마지막 요소를 반환하도록 한다. 이때 반환되더라도 해당 요소는 제거되지 않는다.

```javascript

class Stack {
    constructor() {
        this.items = [];
    }

    push(elem) {
        this.items.push(elem);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }
}

```
이는 가장 마지막 요소이므로 this.itmes 의 length - 1 값을 인덱스로 사용하여 반환한다.

### size

stack 에 몇개의 요소가 있는지 알아야 한다.
그러므로 stack 의 길이를 알 수 있는 메서드를 만든다.

```javascript

class Stack {
    constructor() {
        this.items = [];
    }

    push(elem) {
        this.items.push(elem);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }
}

```

이렇게 items 의 길이를 반환하면 쉽게 size 를 알 수 있다.

### clear

stack 생성이후 stack 을 초기화할 일이 생길 수 있다.
이때 사용하는 메소드가 clear 이다.

```javascript

class Stack {
    constructor() {
        this.items = [];
    }

    push(elem) {
        this.items.push(elem);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.itmes = [];
    }
}

```

간단하게 this.items 의 배열을 빈배열로 만들면 된다.

### isEmpty

stack 생성이후 해당 stack 이 빈 stack 인지 알 필요가 있다.
이때 사용하는 함수가 isEmpty 이다.

```javascript

class Stack {
    constructor() {
        this.items = [];
    }

    push(elem) {
        this.items.push(elem);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.itmes = [];
    }

    isEmpty() {
        return this.items.length === 0 ? true : false;
    }
}

```

this.items,length 가 0 이면 ture 를 아니면 false 를 반환한다.

## 위 Stack 을 조금더 개선해 보아요.

위 stack 은 array 를 사용하여 구현했다.
array 는 많은 문제점이 있을 수 있다.

바로 할당 관련된 문제인데, 순차 자료구조라는 것이다.
순차 자료구조는 배열의 값을 할당하기 위해 메모리 주소가 연속적으로 있는 구조를 말한다.

이러한 메모리주소가 순차적으로 연결 되어 있다면, 처음 배열을 생성할때 해당 배열의 자료형에 맞는 메모리를 확보한후 할당하는 연산이 이루어진다.

만약 새로운 배열이 새로 삽인된다고 하더라도, 이러한 연속된 메모리 주소를 확인이후, 해당 타입의 배열 원소를 추가한다.

이는 배열의 갯수가 많아지면 많아질수록 비효율적인 연산이 이루어질 수 있다.

이러한 방식의 연산이 아닌 참조값을 사용하여 각 값을 연결 짓는것이 훨씬 효율적일 것이다.

이러한 참조값을 저장하여 stack 을 구현해 보도록 하자.

```javascript

class ImprovedStack {
    constructor() {
        this.items = {};
        this.counter = 0;
    }

    push(elem) {
       this.itmes[counter] = elem; 
        couter += 1;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }

        this.counter -= 1;
        const result = this.items[this.counter];
        delete this.items[this.counter];
        return result;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.itmes[this.counter - 1];
    }

    clear() {
        this.items = {};
        this.counter = 0;
    }

    isEmpty() {
        this.counter !== 0 ? false : true;
    }

    size() {
        return counter;
    }
}

```

여기서 주의 깊게 볼것은 items 를 배열이 아닌 객체로 만들었다는 것이다.

또한 counter 를 만들어 숫자 값을 증가, 증감 시키며 객체의 property name 으로 사용했다는 것이다.

이러한 방식으로 인해 itmes 를 마치 유사 배열(Array like) 로 만들어 Stack 을 구현 했다.

이렇게 만들면 각 값이 존해하는 메모리주소를 참조하는 형태로써 존재하기에 순차적 자료구조의 단점을 완전히 없앴다는 것이다.

이렇게 향상된 Stack 을 만들었다.