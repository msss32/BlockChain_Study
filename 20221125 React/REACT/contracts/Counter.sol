// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Counter {
    uint256 private _count;

    // 이벤트 등록하려면 event를 사용해서 (로그)
    event Count(uint256 count);
    // 이벤트를 이렇게 등록하면 본인이 실행하고 싶을 때 작성해주면 됨
    // 언제 로그를 찍을지

    function current() public view returns(uint256) {
        return _count;
    }

    function increment() public {
        _count += 1;
        emit Count(_count);
        // 변한 상태 변수의 값이 로그에 찍힘
    }
    
    function decrement() public {
        _count -= 1;
    }
}