//SPDX-License-Identifier: MIT
pragma solidity >= 0.8.4;
import "@openzeppelin/contracts@4.4.0/token/ERC20/IERC20.sol";

contract Verifier {
    mapping (address => bool) private isVerifier;

    modifier notVerifier(address _user) {
        require(!isVerifier[_user], "User is already a verifier");
        _;
    }

    function signUp() notVerifier(msg.sender) external {
        isVerifier[msg.sender] = true;
    }

    function confirmVerifier(address _user) external view returns (bool) {
        return isVerifier[_user];
    }
}