# Level 02 - Fallout

## Contract
[Fallout.sol](./src/Fallout.sol)

## Objective
Claim ownership of the contract.

## Vulnerability
The constructor is named `Fal1out` (with the number 1) instead of `Fallout`.
In Solidity `^0.6.0`, constructors were defined by a function with the same name as the contract.
A typo in the name means it's just a regular public function — anyone can call it and become owner.

```solidity
// Looks like a constructor, but it's not!
function Fal1out() public payable {
    owner = msg.sender;
}
```

## Attack Steps
1. Call `Fal1out()` → become owner instantly

## How to Run
```bash
forge script script/ExploitFallout.s.sol \
  --broadcast \
  --rpc-url $RPC_URL \
  --private-key $PRIVATE_KEY
```

## Fix

```solidity
// Wrong (Solidity ^0.6.0 style, typo risk)
function Fallout() public payable { ... }

// Correct
constructor() public payable { ... }
```