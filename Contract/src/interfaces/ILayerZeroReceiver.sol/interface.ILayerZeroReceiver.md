# ILayerZeroReceiver
[Git Source](https://github.com/manifoldfinance/mevETH2/blob/25149b626aad16b7ef2da38d73bddd982040bc12/src/interfaces/ILayerZeroReceiver.sol)




## Functions
### lzReceive

This function is used to receive data from a different chain.

*This function takes in four parameters:
- _srcChainId: The ID of the source chain.
- _srcAddress: The address of the source chain.
- _nonce: A unique identifier for the transaction.
- _payload: The data to be received.*


```solidity
function lzReceive(uint16 _srcChainId, bytes calldata _srcAddress, uint64 _nonce, bytes calldata _payload) external;
```

