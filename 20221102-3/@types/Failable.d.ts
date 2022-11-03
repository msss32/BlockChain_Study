// typeScript 제네릭
declare type Result<R> = { isError: false; value: R };
declare type Faillure<E> = { isError: true; value: E };
declare type Failable<R, E> = Result<R> | Faillure<E>;
// 선언 시점이 아니라 생성시점에 타입을 명시해서 하나의 타입이 아닌 다양한 타입을 사용할 수 있는 기법이다.

// 사용하는 이유
// 한번의 선언으로 다양한 타입에 재사용이 가능하다는 장점
// 제네릭을 사용하지 않으면 불필요한 타입 변환을 하기 때문에
// 프로그램의 성능 향상에 도움이 된다.

// 제네릭을 쓰지 않으면 타입을 미리 지정하거나 any를 사용하면 되는데
// 타입을 미리 지정해버리면 정해진 타입을 써야하고 any를 사용하면 자료타입을 제한 할 수도 없다.
// 어떤 데이터 타입이 반환되는지 알 수 없다.
