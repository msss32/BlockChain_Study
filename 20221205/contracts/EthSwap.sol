// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract EthSwap {
    // ERC20 타입의 token 변수
    // CA값을 받을거
    // 데이터 타입을 ERC20으로 선언해준 이유는
    // 컨트랙트끼리 상호작용을 하기 위해서
    // SeokToken.sol 컨트랙트에 있는 함수를 호출하고 싶을 때
    // token 변수를 사용해 호출 가능(CA값을 담아 놓을 것이기 때문)
    ERC20 public token;

    // 토큰과 이더의 환율
    uint public rate = 100;

    constructor(ERC20 _token) {
        // CA값을 담아줌
        token = _token;
    }

    function getToken() public view returns (address) {
        // SeokToken의 CA값
        return address(token);
    }

    function getSwapBalance() public view returns(uint) {
        // token.balanceOf 잔애긍ㄹ 보여주는 함수
        return token.balanceOf(msg.sender);
    }

    function getMsgSender() public view returns(address) {
        return msg.sender;
    }

    // 토큰 구매 함수
    function buyToken() public payable {
        uint256 tokenAmount = msg.value * rate;
        // this는 해당 컨트랙트를 의미 this == EthSwap
        // address(this) == 해당 컨트랙트의 CA
        // require에 충족하지 못했을 때 에러문구 2번째 매개변수로
        // 에러 문구 문자열 작성
        // 상호작용을 위해서는 에러문구를 사용해서 에러 핸들러로 동작
        require(token.balanceOf(address(this)) >= tokenAmount, "err");
        token.transfer(msg.sender, tokenAmount);
    }

    // 토큰 판매 함수
    function sellToken(uint256 _amount) public payable {
        require(token.balanceOf(msg.sender) >= _amount);
        uint256 etherAmount = _amount/rate;
        require(address(this).balance >= etherAmount);
        token.transferFrom(msg.sender, address(this), _amount);
        payable(msg.sender).transfer(etherAmount);
    }
}