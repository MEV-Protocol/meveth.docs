# ITinyMevEth

[Git Source](https://github.com/manifoldfinance/mevETH2/blob/25149b626aad16b7ef2da38d73bddd982040bc12/src/interfaces/ITinyMevEth.sol)

smol interface for interacting with MevEth

## Functions

### grantRewards

This function is payable and should be called with the amount of rewards to be granted.

_Function to grant rewards to other users._

```solidity
function grantRewards() external payable;
```

### grantValidatorWithdraw

This function must be called with a validator address and a payable amount.

_Function to allow a validator to withdraw funds from the contract._

```solidity
function grantValidatorWithdraw() external payable;
```
