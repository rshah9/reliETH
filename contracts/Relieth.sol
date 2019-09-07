pragma solidity ^0.5.0;

import "./Disaster.sol";

contract Relieth {
    Disaster[] disasters;

    function createDisaster(
        string memory name,
        string memory description,
        string memory location
      ) public returns (Disaster) {
        Disaster disaster = new Disaster(
            name,
            description,
            location
        );

        disasters.push(disaster);

        return disaster;
    }
}
