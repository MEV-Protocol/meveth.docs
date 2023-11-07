# IAuth

[Git Source](https://github.com/manifoldfinance/mevETH2/blob/25149b626aad16b7ef2da38d73bddd982040bc12/src/interfaces/IAuth.sol)

## Functions

### addAdmin

Adds an admin to the contract.

_Only existing admins can add new admins._

```solidity
function addAdmin(address newAdmin) external;
```

### addOperator

This function adds a new operator to the contract.

_This function adds a new operator to the contract. It is only callable by the contract owner. The new operator must be a valid Ethereum address._

```solidity
function addOperator(address newOperator) external;
```

### admins

This function is used to check if an address is an admin.

_This function is used to check if an address is an admin. It takes an address as an argument and returns a boolean value._

```solidity
function admins(address) external view returns (bool);
```

### deleteAdmin

This function is used to delete an admin from the list of admins.

_This function requires the address of the admin to be deleted. It will delete the admin from the list of admins._

```solidity
function deleteAdmin(address oldAdmin) external;
```

### deleteOperator

This function is used to delete an operator from the contract.

_This function is called by the owner of the contract to delete an operator from the contract. The address of the operator to be deleted is passed as an argument._

```solidity
function deleteOperator(address oldOperator) external;
```

### operators

This function checks if the given address is an operator.

_This function is used to check if the given address is an operator. It returns a boolean value indicating whether the address is an operator or not._

```solidity
function operators(address) external view returns (bool);
```

## Events

### AdminAdded

```solidity
event AdminAdded(address indexed newAdmin);
```

### AdminDeleted

```solidity
event AdminDeleted(address indexed oldAdmin);
```

### OperatorAdded

```solidity
event OperatorAdded(address indexed newOperator);
```

### OperatorDeleted

```solidity
event OperatorDeleted(address indexed oldOperator);
```
