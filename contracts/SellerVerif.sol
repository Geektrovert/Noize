//SPDX-License-Identifier: MIT
pragma solidity >= 0.8.4;
import "./interfaces/IVerification.sol";

contract SellerVerif {
    IVerification private verifierContract;

    enum VerfificationStatus {
        NOT_PROCESSED,
        VERIFIED,
        UNVERIFIED,
        INVALID
    }

    struct Data {
        string nid;
        bytes32 name;
        bytes32 sellerAddress;
    }

    mapping (bytes32 => VerfificationStatus) private sellerVerification;
    mapping (address => uint) private sellerIndex;
    Data[] private sellerData;

    constructor (address _verifierContract) {
        verifierContract = IVerification(_verifierContract);
        sellerData.push(Data({
            nid: "",
            name: "",
            sellerAddress: 0
        }));
    }

    modifier onlyVerifier (address _user) {
        require(verifierContract.confirmVerifier(_user), "Only verifier allowed");
        _;
    }

    modifier onlyNonVerified (uint index, address _user) {
        bytes32 addressHash = keccak256(abi.encodePacked(_user));
        require(sellerVerification[sellerData[index].sellerAddress] != VerfificationStatus.VERIFIED, "Verified merchants not allowed");
        require(sellerData[index].sellerAddress != addressHash, "Can't verify own");
        _;
    }

    function submitData(string memory _nid, bytes32 _name) external{
        if (sellerIndex[msg.sender] == 0) {
            sellerData.push(Data({
                nid: _nid,
                name: _name,
                sellerAddress: keccak256(abi.encodePacked(msg.sender))
            }));
            sellerIndex[msg.sender] = sellerData.length - 1;
        } else {
            sellerData[sellerIndex[msg.sender]].nid = _nid;
            sellerData[sellerIndex[msg.sender]].name = _name;
        }
    }
    

    function viewStatus(address _user) external view returns(VerfificationStatus){
        return sellerVerification[keccak256(abi.encodePacked(_user))];
    }

    function verifySeller(uint id, VerfificationStatus status, string memory _name) onlyVerifier(msg.sender) onlyNonVerified(id, msg.sender) external {
        if (status == VerfificationStatus.VERIFIED && keccak256(abi.encodePacked(_name)) == sellerData[id].name) {
            sellerVerification[sellerData[id].sellerAddress] = VerfificationStatus.VERIFIED;
        } else if (status == VerfificationStatus.UNVERIFIED) {
            sellerVerification[sellerData[id].sellerAddress] = VerfificationStatus.UNVERIFIED;
        }
    }

}