# IStakingModule

[Git Source](https://github.com/manifoldfinance/mevETH2/blob/25149b626aad16b7ef2da38d73bddd982040bc12/src/interfaces/IStakingModule.sol)

## Functions

### deposit

_Allows users to deposit funds into the contract._

```solidity
function deposit(ValidatorData calldata data, bytes32 latestDepositRoot) external payable;
```

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `ValidatorData` | ValidatorData calldata containing the validator's public key, withdrawal credentials, and amount of tokens to be deposited. |
| `latestDepositRoot` | `bytes32` | bytes32 containing the latest deposit root. |

### validators

```solidity
function validators() external view returns (uint256);
```

### mevEth

```solidity
function mevEth() external view returns (address);
```

### VALIDATOR_DEPOSIT_SIZE

VALIDATOR_DEPOSIT_SIZE() This function returns the size of the validator deposit.

_This function is used to determine the size of the validator deposit. It is used to ensure that validators have the correct amount of funds in order to participate in the network._

```solidity
function VALIDATOR_DEPOSIT_SIZE() external view returns (uint256);
```

### payRewards

This function is used to pay rewards to the users.

_This function is used to pay rewards to the users. It takes in a uint256 rewards parameter which is the amount of rewards to be paid._

```solidity
function payRewards(uint256 rewards) external;
```

### payValidatorWithdraw

This function allows a validator to withdraw their rewards from the contract.

_This function is called by a validator to withdraw their rewards from the contract. It will transfer the rewards to the validator's address._

```solidity
function payValidatorWithdraw() external;
```

### recoverToken

```solidity
function recoverToken(address token, address recipient, uint256 amount) external;
```

### record

record() function is used to record the data in the smart contract.

_record() function takes no parameters and returns four uint128 values._

```solidity
function record() external returns (uint128, uint128, uint128, uint128);
```

### registerExit

registerExit() allows users to exit the system.

_registerExit() is a function that allows users to exit the system. It is triggered by an external call._

```solidity
function registerExit() external;
```

### batchMigrate

```solidity
function batchMigrate(IStakingModule.ValidatorData[] calldata batchData) external;
```

## Structs

### ValidatorData

_Structure for passing information about the validator deposit data._

```solidity
struct ValidatorData {
    address operator;
    bytes pubkey;
    bytes32 withdrawal_credentials;
    bytes signature;
    bytes32 deposit_data_root;
}
```
