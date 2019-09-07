pragma solidity ^0.5.0;

import "@openzeppelin/contracts/payment/PullPayment.sol";

contract Disaster is PullPayment {
    string public name;
    string public description;
    string public location;
    address[] public contributerArray;

    mapping (address => uint) contributers;

    constructor(
        string memory _name,
        string memory _description,
        string memory _location
      ) public {
        name = _name;
        description = _description;
        location = _location;
    }
}
