# Array 에 대해서 알아보자.

> Javascript 에는 연산관련해서 NativeMethod 를 제공하여, 배열에 할당 및 제거가 쉽게 가능하다. 하지만 C 언어만 보더라도 연산을 위해 직접 처리연산을 해주어야 한다. Array 구조가 어떻게 이루어져 있는지 살펴보고 어떻게 처리 되는지 이해하는건 좋은 토대가 될것같다.

## Array의 구조가 어떻게 이루어져 있는지 알아보아요.

Array 는 살펴볼때 그냥 연산을 위해 순서있게 나열된 원소들의 집합으로 볼수 있다.
C 언어에서는 Array 를 만들때, 원소의 데이터 크기에 따른 원소들의 크기에 맞추어 메모리 할당이 이루어진다.

다음 코드를 보자.

```c
int arr = [1, 2, 3]
```

위에는 int 타입의 배열 3개를 만들었다.
또한 메모리주소 1개당 1byte 라고 가정한다.

int 는 4byte 이므로, 1개의 원소당 4byte 가 필요하다.
메모리주소 0x100 에 1 이라고 하는 원소가 추가되면, 0x103 까지의 공간이 필요하다.

그런다음, 2 라는 원소는 0x104 부터 0x107 까지 차지하고,
3 라는 원소는 0x108 부터 0x10b 까지 공간을 차지한다.

즉 위의 arr 는 0x100 ~ 0x10b 까지의 공간을 만들고 해당 원소를 할당하는 연산을 한다고 생각하면된다.

이러한 연산방식을 알 필요가 있을까?

지금은 아니지만 앞으로 자료구조를 배울때, 이러한 배열 연산방식을 알고 공부하는것이 이해하기 좋다.

지금은 Array 가 만들어질때, ***순차적 자료구조*** 를 통해 공간이 할당된다 생각하는것이 좋을 듯 싶다.
