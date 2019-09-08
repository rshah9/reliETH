pragma solidity ^0.5.0;

import "./Disaster.sol";

contract Relieth {
    Disaster[] private disasters;

    function createDisaster(
        string memory _name,
        string memory _description,
        string memory _location,
        address payable _beneficiary
    ) public returns (Disaster disaster) {
        disaster = new Disaster(
            _name,
            _description,
            _location,
            _beneficiary
        );
        disasters.push(disaster);
    }

    function getDisasters() public view returns (Disaster[] memory) {
        return disasters;
    }
}
