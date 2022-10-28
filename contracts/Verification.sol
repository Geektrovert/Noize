//SPDX-License-Identifier: MIT
pragma solidity >= 0.8.4;

contract Verifier {
    mapping (address => bool) private isVerifier;
    mapping (address => uint) private deposit;
    address private securityToken;

    constructor (address _tokenAddress) {
        securityToken = _tokenAddress;
    }

    modifier notVerifier(address _user) {
        require(!isVerifier[_user], "User is already a verifier");
        _;
    }

    function signUp() notVerifier(msg.sender) external {
        // TODO: add security deposit
        isVerifier[msg.sender] = true;
    }


}