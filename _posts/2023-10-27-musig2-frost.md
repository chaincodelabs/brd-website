---
layout: post
uuid: jposner-musig2-frost-2023
title: Integrating MuSig2 with FROST Signatures to Enhance Lightning Network Security
author: Jesse Posner
affiliation: Block
email: jesse.posner@gmail.com
---

### Scope

One of the best methods of keeping bitcoin secure is to utilize multi-signatures scripts that require the signatures of multiple keys to unlock the coins. However, while the Lightning Network protocol utilizes 2-of-2 multi-signatures to require the signatures of both Lightning counterparties, it does not permit the use of multi-signatures to secure the keys for a single counterparty, making it difficult to secure these secrets.

With the advent of Taproot Lightning channels, we can now utilize Schnorr signatures and multi-party computation to distribute these secrets. However, there are a number of unsolved problems that must be addressed to make this possible.

Bringing distributed security to Lightning would revolutionize Lightning key management and significantly improve the security of Lightning wallets.

### Problem definition

Taproot Lightning channels utilize MuSig2, a Schnorr multi-signature protocol, to build an aggregate key from 2 component keys, 1 for each counterparty. This aggregate key requires the signatures of both component keys to produce a valid signature for the aggregate key. Instead of relying on a script for the multi-signature, Taproot allows for Schnorr multi-signatures that can be used in the “key-spend path.”

For each counterparty to distribute the security of their component keys, a counterparty can generate their component key with FROST, another Schnorr multi-signature protocol. Whereas MuSig2 is limited to an n-of-n construction (e.g. 2-of-2), FROST generates aggregate keys that require t-of-n signatures. For example, Alice and Bob are counterparties in a Lightning channel. They have a MuSig2 aggregate key that secures the channel which consists of Alice’s component key and Bob’s component key. If Alice generates her component key using FROST,then t-of-n signatures are required for her to sign with her component key, thus providing for distributed security.

However, this requires nesting a FROST key as a component key within MuSig2, and we don’t yet have a security proof for this scheme. This is the first unsolved problem.

In addition, with Taproot Lightning channels, nonces are committed in advance of producing signatures. However, when using FROST, each subset of signers produces a different nonce, which is a problem because that would mean only the subset of signers that produces the nonce could sign for the state update in the channel. This is particularly problematic for offline signer:

![diagram](css/img/posts/musig2-frost.svg)

### State of the art

A potential solution to the delay signing issue with respect to nonce commitments is to use the pre-FROST threshold Schnorr scheme from Stinson & Strobl for nonce generation. In that scheme, rather than using additive secret sharing for the nonces, we use polynomial secret sharing so that any subset of signers is able to sign for the nonce that is committed to in the channel.

A detailed description of the open problems and potential solutions can be found [here](https://gist.github.com/jonasnick/6a56ae6bdc7c3a444d01817a897fbcf6). There’s also a [matrix channel](https://matrix.to/#/%23l2-multisig:matrix.org) where these problems and solutions have been discussed further, and where cryptographers and Lightning developers are available to discuss and answer questions.