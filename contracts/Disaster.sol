pragma solidity ^0.5.0;

import "@openzeppelin/contracts/payment/escrow/RefundEscrow.sol";

contract Disaster is RefundEscrow {
    string public name;
    string public description;
    string public location;

    mapping (address => uint) contributionAmount;

    constructor(
        string memory _name,
        string memory _description,
        string memory _location,
        address payable _beneficiary
    ) public RefundEscrow(_beneficiary) {
        name = _name;
        description = _description;
        location = _location;
    }

    /**
     * @dev Override deposit and track how much has been contributed by a user.
     */
    function deposit(address payee) public payable {
        contributionAmount[msg.sender] += msg.value;
        super.deposit(payee);
    }
}
