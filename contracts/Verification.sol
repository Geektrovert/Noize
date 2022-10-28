//SPDX-License-Identifier: MIT
pragma solidity >= 0.8.4;
import "@openzeppelin/contracts@4.4.0/token/ERC20/IERC20.sol";

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
        IERC20(securityToken).transferFrom(msg.sender, address(this), 10*10**18);
        isVerifier[msg.sender] = true;
    }

}