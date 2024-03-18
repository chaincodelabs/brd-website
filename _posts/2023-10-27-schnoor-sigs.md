---
layout: post
uuid: truffing-schnorr-2023
title: Schnorr signatures
author: Tim Ruffing
affiliation: Blockstream
email: crypto@timruffing.de
---

### Blind Schnorr multi-party signatures

*Blind* Schnorr multisignatures and threshold signature schemes (i.e., some cosigners are blind) have great potential to enhance user's privacy in semi-custodial applications with a semi-trusted cosigner, e.g., a server that cosigns transactions of a user only if the user presents a second authentication factor.

Due to the fact that reuse of public keys is discouraged for privacy reasons, schemes will need to hide the signed message *and the aggregate public key* from blind cosigners.

While there have been ad-hoc proposals in that direction[^1][^2], they lack a formal security analysis, including a proper security definition.

[^1]: Schnorr Blinded Custody ([ref](https://github.com/oleganza/bitcoin-papers/blob/master/BitcoinBlindSignatures.md))
[^2]: Private Collaborative Custody with FROST ([ref](https://gist.github.com/nickfarrow/4be776782bce0c12cca523cbc203fb9d))

### Practical deterministic Schnorr multi-party signatures

Implementations of DL-based signature schemes such as ECDSA and Schnorr signatures typically de-randomize the signing algorithm to avoid catastrophic accidents caused by bad random sources.

However, the same de-randomization techniques do not apply to multi-party signatures,
and thus all "natural" constructions of Schnorr multi-signature and Schnorr threshold signature schemes critically rely on the availability of good randomness during signing.

While it is possible[^3][^4][^5] to de-randomize multi-party signing protocols, all known protocols suffer from a lack of efficiency and in particular a high implementation complexity.

More research is necessary to obtain practical protocols for which, in typical scenarios, the additional risk stemming from the implementation complexity is lower than the risk of relying on randomness.

[^3]: MuSig-DN: Schnorr Multi-Signatures with Verifiably Deterministic Nonces. Jonas Nick, Tim Ruffing, Yannick Seurin, and Pieter Wuille. [ACM CCS 2020](https://eprint.iacr.org/2020/1057.pdf)
[^4]: Threshold Schnorr with Stateless Deterministic Signing from Standard Assumptions. François Garillot, Yashvanth Kondi, Payman Mohassel, and Valeria Nikolaenko [CRYPTO 2021](https://eprint.iacr.org/2021/1055.pdf)
[^5]: Two-Round Stateless Deterministic Two-Party Schnorr Signatures From Pseudorandom Correlation Functions. Yashvanth Kondi, Claudio Orlandi, Lawrence Roy. [Preprint](https://eprint.iacr.org/2023/216.pdf)