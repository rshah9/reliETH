pragma solidity ^0.5.0;

import "./Disaster.sol";

contract Relieth {
    Disaster[] disasters;

    function createDisaster(
        string memory _name,
        string memory _description,
        string memory _location,
        address payable _beneficiary
    ) public returns (Disaster disaster) {
        Disaster disaster = new Disaster(
            _name,
            _description,
            _location,
            _beneficiary
        );
        disasters.push(disaster);

        return disaster;
    }
}
