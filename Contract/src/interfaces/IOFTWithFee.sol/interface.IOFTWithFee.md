# IOFTWithFee

[Git Source](https://github.com/manifoldfinance/mevETH2/blob/25149b626aad16b7ef2da38d73bddd982040bc12/src/interfaces/IOFTWithFee.sol)

**Inherits:** [ICommonOFT](/src/interfaces/ICommonOFT.sol/interface.ICommonOFT.md)

_Interface of the IOFT core standard_

## Functions

### sendFrom

_send `_amount` amount of token to (`_dstChainId`, `_toAddress`) from `_from` `_from` the owner of token `_dstChainId` the destination chain identifier `_toAddress` can be any size depending on the `dstChainId`. `_amount` the quantity of tokens in wei `_minAmount` the minimum amount of tokens to receive on dstChain `_refundAddress` the address LayerZero refunds if too much message fee is sent `_zroPaymentAddress` set to address(0x0) if not paying in ZRO (LayerZero Token) `_adapterParams` is a flexible bytes array to indicate messaging adapter services_

```solidity
function sendFrom(
    address _from,
    uint16 _dstChainId,
    bytes32 _toAddress,
    uint256 _amount,
    uint256 _minAmount,
    LzCallParams calldata _callParams
)
    external
    payable;
```
