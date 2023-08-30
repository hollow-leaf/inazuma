// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.7.0) (access/Ownable.sol)

pragma solidity ^0.8.0;

import "./HypercertMinter/lib/openzeppelin-contracts-upgradeable/contracts/token/ERC1155/ERC1155Upgradeable.sol";
import "./HypercertMinter/src/HypercertMinter.sol";
import "./Greencoin/Greencoin.sol";
import "./Greencoin/contracts/utils/Strings.sol";

contract Inazuma {
    address constant _hypermint_address = 0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07;
    address constant _greencoin_address = 0xe492DF5f551c8889adc1312793aB815E3f773717;
    address owner;
    address _contract_address;

    mapping (string => bool) verified_uri;
    mapping (string => address) contributor_uri;
    mapping (address => uint256) total_amount;

    constructor(){
        owner = msg.sender;
    }

    function _transfer(address receiver, uint256[] memory tokenID, bytes memory b) private {
        for (uint i = 0; i<tokenID.length; i++){
            require(verified_uri[HypercertMinter(_hypermint_address).uri(tokenID[i])]);
            total_amount[contributor_uri[HypercertMinter(_hypermint_address).uri(tokenID[i])]] = total_amount[contributor_uri[HypercertMinter(_hypermint_address).uri(tokenID[i])]] - HypercertMinter(_hypermint_address).unitsOf(tokenID[i]);
            ERC1155Upgradeable(_hypermint_address).safeTransferFrom(owner, receiver, tokenID[i], 1, b);
        }
    }

    function buy (uint256[] memory tokenID, uint256 amount) public {
        require(amount == _total_balance(tokenID));
        GreenCoin(_greencoin_address).approve(address(this), amount);
        GreenCoin(_greencoin_address).transferFrom(msg.sender, owner, amount);
        bytes memory b = "Transfer Cert To Buyer";
        _transfer(msg.sender, tokenID, b);
    }

    function verify(uint tokenID, string memory cid, uint256 amount) public  {
        require(verified_uri[cid]==false); //this
        require(msg.sender==contributor_uri[cid]);
        require(Strings.equal(HypercertMinter(_hypermint_address).uri(tokenID),cid));
        require(HypercertMinter(_hypermint_address).unitsOf(tokenID)==amount);
        total_amount[msg.sender] = total_amount[msg.sender] + amount;
        verified_uri[cid] = true;
        GreenCoin(_greencoin_address).transferFrom(owner, msg.sender, amount);
    }

    function set_contributer(string memory uri, address contributor) public {
        require(msg.sender==owner);
        require(verified_uri[uri]==false);
        contributor_uri[uri] = contributor;
    }

    function token_is_verified(uint256 tokenID) public view returns (bool){
        return verified_uri[HypercertMinter(_hypermint_address).uri(tokenID)];
    }

    function provider_given_amount(address provider) public view  returns (uint256) {
        return total_amount[provider];
    }

    function _total_balance (uint256[] memory tokenID) private view returns (uint256) {
        uint256 balance = 0;
        for (uint i = 0; i<tokenID.length; i++){
            balance = balance + HypercertMinter(_hypermint_address).unitsOf(tokenID[i]);
        }
        return  balance;
    }

}