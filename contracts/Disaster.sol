pragma solidity ^0.5.0;

import "@openzeppelin/contracts/payment/escrow/Escrow.sol";

contract Disaster is Escrow {
    string public name;
    string public description;
    string public location;

    mapping (address => uint) contributionAmount;

    constructor(
        string memory _name,
        string memory _description,
        string memory _location
    ) public {
        name = _name;
        description = _description;
        location = _location;
    }

    /**
     * @dev Track how much has been contributed by a user.
     */
    function deposit (address payee) public payable {
        contributionAmount[msg.sender] += msg.value;
        super.deposit(payee);
    }
}
