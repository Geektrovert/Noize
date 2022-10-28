//SPDX-License-Identifier: MIT
pragma solidity >= 0.8.4;

interface IVerification {
    function confirmVerifier(address _user) external view returns (bool);
}