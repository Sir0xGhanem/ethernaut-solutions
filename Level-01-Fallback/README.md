# Level 01 - Fallback

## Contract
[Fallback.sol](./src/Fallback.sol)

## Objective
1. Claim ownership of the contract
2. Drain all its balance

## Vulnerability
The `receive()` function allows **anyone** to become owner with just:
- Any contribution > 0
- Sending any ETH directly to the contract

```solidity
receive() external payable {
    require(msg.value > 0 && contributions[msg.sender] > 0);
    owner = msg.sender; // ← anyone can become owner!
}
```

## Attack Steps
1. Call `contribute()` with < 0.001 ETH → sets `contributions[attacker] > 0`
2. Send ETH directly → triggers `receive()` → attacker becomes owner
3. Call `withdraw()` → drain all funds

## How to Run

### Run on Sepolia
```bash
forge script script/Exploit.s.sol \
  --broadcast \
  --rpc-url $RPC_URL \
  --private-key $PRIVATE_KEY
```

## Fix
```solidity
// Wrong
receive() external payable {
    owner = msg.sender;
}

// Correct
receive() external payable {
    contributions[msg.sender] += msg.value;
}
```
