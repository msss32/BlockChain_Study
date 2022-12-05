// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";

contract Minting is ERC721 {
    // ERC721 생서어자 함수 ERC721(_name, _symbol)
    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {
    }
    
    function _minting(uint _tokenId) public {
        _mint(msg.sender, _tokenId);
        // _tokenId 키값 조회하면 누가 토큰의 소유자인지 확인 가능
        // _tokenId : 토큰의 고유값, msg.sender 토큰을 받는 계정
    }

    function tokenURI(uint) public override pure returns(string memory) {
        return "https://gateway.pinata.cloud/ipfs/QmacShxXWFc6oenJ31dBQvnc4jE9RfxysCqkCynbG4nNyd";
        // 반환값은 우리가 만들어서 넣어줄 json 객체
        // pure는 state값을 변경할 수 없음
        // 이 함수 밖에 있는 값을 읽어올 수도 없고 변경도 불가능

        // nft 객체의 내용
        // {
        //     "name" : "이름",
        //     "description" : "설명",
        //     "image" : "이미지의 경로",
        //     "attributes" : ["속성값"]
        // }
    }
}