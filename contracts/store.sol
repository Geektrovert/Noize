// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;
import "@openzeppelin/contracts@4.4.0/token/ERC20/IERC20.sol";

contract Store{
    struct Product{
        string id,
        string name,
        address buyer,
        address creator,
        uint index,
        uint price
    }
}