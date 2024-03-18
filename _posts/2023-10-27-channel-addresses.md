---
layout: post
uuid: lfournier-channel-addresses-2023
title: Channel Addresses
author: Lloyd Fournier
affiliation: Independent
email: lloyd.fourn@gmail.com
---

### Scope

Why can’t you just send money to a Bitcoin address and have it create a payment channel? There is no reason why this couldn’t be possible in theory – the address just needs to be a 2-of-2 multisig and have some way for the owner of the address to get the initial coins back.

Channel establishment is one of the core interactive protocols involved in scaling Bitcoin. If we can turn it into an non-interactive protocol we have dramatically simplified Bitcoin’s future. Furthermore, if we can make it as simple as sending to an address we’ve created frictionlessly interoperable with every other Bitcoin protocol.

Other than simplification consider the following concrete implications:

- A user can withdraw directly from an exchange into a lightning channel
- Funding a lightning channel with an LSP by sending to an address would be non-custodial and happen in one transaction (currently you must trust them to credit you with a channel in another transaction)
- Lighting channels can be trivially established through coin-joins and other batch transaction systems

### Problem definition

Channel addresses must meet the following requirements:

- They can be created without interacting with a channel counterparty. Knowing the public keys of both channel parties should be sufficient to derive (multiple) addresses
- The channel should be established regardless of how much money is sent to the address
- The distribution of the funds in the channel should be committed to in the channel. It is sufficient to achieve it with distribution of 100% on one side but being able to have other distributions is a bonus
- The funds need to be recoverable by one of the channel parties regardless of what amount is sent to the address and without assuming the other channel party is online
- If the channel uses revocation punishment then the mechanism in (4) obviously needs to be revocable

### State of the art

1. The [Swap-in-Potentiam](https://bitcoinops.org/en/newsletters/2023/01/11/#non-interactive-ln-channel-open-commitments') is similar to channel addresses except it requires two on-chain transactions to finally establish the channel, however you can start using the channel after the first transaction is confirmed on-chain
2. [Non-interactive channel](https://utxos.org/uses/non-interactive-channels) establishment is possible with OP_CTV. Although it’s non-interactive the script pubkey commits to the value of the channel so it is not viable as an address (since if the wrong amount was sent it would be stuck)
3. It’s possible that [OP_TXHASH](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2023-September/021975.html) would enable channel addresses