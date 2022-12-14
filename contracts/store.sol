// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;
import "@openzeppelin/contracts@4.4.0/token/ERC20/IERC20.sol";

contract Store{
    struct Product{
        uint id;
        string name;
        address owner;
        address creator;
        uint price;
        string image_url;
        bool sellable;
    }
    Product[] private products;
    address private tokenAddress;

    event ProductSold(uint index, address owner);

    constructor (address _tokenAddress) {
        tokenAddress = _tokenAddress;
    }

    function createProduct(
        string memory _name,
        uint _price,
        string memory _image_url
    ) external{
        Product memory newProduct = Product({
            id: products.length,
            name: _name,
            owner: msg.sender,
            creator: msg.sender,
            price: _price,
            image_url: _image_url,
            sellable: true
        });
        products.push(newProduct);
    }

    function getAllProducts() external view returns (Product[] memory) {
        return products;
    }

    function buyproduct(uint id)external{
        IERC20(tokenAddress).transferFrom(msg.sender, products[id].creator, products[id].price);
        products[id].owner = msg.sender;
        emit ProductSold(id, msg.sender);
    }



}