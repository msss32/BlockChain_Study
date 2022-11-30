// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract FruitShop {
    mapping(address => uint) myApple;
    mapping(address => uint) myBanana;
    mapping(address => uint) myCherry;

    function buyApple(uint _count) public payable {
        myApple[msg.sender] += _count;
    }
    function buyBanana(uint _count) public payable {
        myBanana[msg.sender] += _count;
    }
    function buyCherry(uint _count) public payable {
        myCherry[msg.sender] += _count;
    }

    function sellApple(uint applePrice, uint _count) public payable {
        require(myApple[msg.sender] >= _count);
        uint256 refund = _count * applePrice;
        myApple[msg.sender] -= _count;
        payable(msg.sender).transfer(refund);
    }
    function sellBanana(uint bananaPrice, uint _count) public payable {
        require(myBanana[msg.sender] >= _count);
        uint256 refund = _count * bananaPrice;
        myBanana[msg.sender] -= _count;
        payable(msg.sender).transfer(refund);
    }
    function sellCherry(uint cherryPrice, uint _count) public payable {
        require(myCherry[msg.sender] >= _count);
        uint256 refund = _count * cherryPrice;
        myCherry[msg.sender] -= _count;
        payable(msg.sender).transfer(refund);
    }

    function getApple() view public returns (uint){
        return myApple[msg.sender];
    }
    function getBanana() view public returns (uint){
        return myBanana[msg.sender];
    }
    function getCherry() view public returns (uint){
        return myCherry[msg.sender];
    }
}