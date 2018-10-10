pragma solidity ^0.4.23;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/TutorialToken.sol";

contract TestTutorialToken {

   function testInitialBalanceUsingDeployedContract() public {
    TutorialToken tutorial = TutorialToken(DeployedAddresses.TutorialToken());

    uint expected = 12000;

    Assert.equal(tutorial.getBalance(tx.origin), expected, "Owner should have 12000 TutorialToken initially");
  }

}