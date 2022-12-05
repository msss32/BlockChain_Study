// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract FruitShop {
    mapping(address => uint256) myApple;
    mapping(address => uint256) myBanana;
    mapping(address => uint256) myCherry;

    function buyApple(uint256 _count) public payable {
        myApple[msg.sender] += _count;
    }
    function buyBanana(uint256 _count) public payable {
        myBanana[msg.sender] += _count;
    }
    function buyCherry(uint256 _count) public payable {
        myCherry[msg.sender] += _count;
    }

    function sellApple(uint256 applePrice, uint256 _count) public payable {
        require(myApple[msg.sender] >= _count);
        uint256 refund = _count * applePrice;
        myApple[msg.sender] -= _count;
        payable(msg.sender).transfer(refund);
    }
    function sellBanana(uint256 bananaPrice, uint256 _count) public payable {
        require(myBanana[msg.sender] >= _count);
        uint256 refund = _count * bananaPrice;
        myBanana[msg.sender] -= _count;
        payable(msg.sender).transfer(refund);
    }
    function sellCherry(uint256 cherryPrice, uint256 _count) public payable {
        require(myCherry[msg.sender] >= _count);
        uint256 refund = _count * cherryPrice;
        myCherry[msg.sender] -= _count;
        payable(msg.sender).transfer(refund);
    }

    function getApple() view public returns (uint256){
        return myApple[msg.sender];
    }
    function getBanana() view public returns (uint256){
        return myBanana[msg.sender];
    }
    function getCherry() view public returns (uint256){
        return myCherry[msg.sender];
    }
}