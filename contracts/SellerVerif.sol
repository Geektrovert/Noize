//SPDX-License-Identifier: MIT
pragma solidity >= 0.8.4;
import "./interfaces/IVerification.sol";

contract SellerVerif {
    IVerification private verifierContract;

    enum VerfificationStatus {
        NOT_PROCESSED,
        VERIFIED,
        UNVERIFIED
    }

    struct data {
        string nid;
        string name;
    }

    mapping (address => VerfificationStatus) private sellerVerification;
    mapping (address => data) private verificationData;

    // constructor (address _verifierContract) {
    //     verifierContract = IVerification(_verifierContract);
    // }

    modifier onlyVerifier (address _user) {
        require(verifierContract.confirmVerifier(_user), "Only verifier allowed");
        _;
    }
    

    function viewStatus(address _user) external view returns(VerfificationStatus){
        return sellerVerification[_user];
    }

    function verifySeller(address _user) external {
        sellerVerification[_user] = VerfificationStatus.VERIFIED;
    }

}