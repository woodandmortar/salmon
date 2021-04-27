pragma solidity ^0.5.8;

// Imports
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";

// Main token smart contract
contract G0DToken is ERC20Mintable {
  string public constant name = "G0D Token";
  string public constant symbol = "G0D";
  uint8 public constant decimals = 18;
}
