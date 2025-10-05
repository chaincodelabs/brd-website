---
layout: post
uuid: truffing-post-quantum-2023
title: Post-Quantum
author: Tim Ruffing
affiliation: Blockstream
email: crypto@timruffing.de
---

### Advanced post-quantum signatures

Signatures in Bitcoin have, already for a long time, supported advanced key derivation, e.g. BIP32 wallets with hierarchical derivation.

The Taproot softfork with support for Schnorr signature verification made it significantly easier to use further advanced signing functionality, e.g., Taproot itself, compatible Schnorr multi-signatures (using MuSig2), compatible Schnorr threshold signatures (using FROST), and adaptor signatures. ("Compatibility" here means that the resulting signatures can be verified like ordinary single-signer signatures and thus are understood by the Bitcoin network.)

This raises the question if the same or similar functionality is possible in a post-quantum world. That is, is it possible to construct a post-quantum signature scheme that supports (as many as possible) the following features?
- public hierarchical derivation
- Taproot (i.e., public keys can be commitments to additional data) - natural constructions of compatible multi-signatures
- natural constructions of compatible threshold signatures
- adaptor signatures

While there has been research achieving some of these features individually (hierarchical derivation[^1][^2], multi-signatures[^3][^4], threshold signatures[^5]), the big picture remains unexplored.

[^1]: Deterministic Wallets in a Quantum World. Nabil Alkeilani Alkadri, Poulami Das, Andreas Erwig, Sebastian Faust, Juliane Krämer, Siavash Riahi, Patrick Struck. [ACM CCS 2020](https://eprint.iacr.org/2020/1149.pdf)
[^2]: Post-Quantum Secure Deterministic Wallet: Stateless, Hot/Cold Setting, and More Secure. Mingxing Hu. [Preprint](https://eprint.iacr.org/2023/062.pdf)
[^3]: Two-round n-out-of-n and Multi-Signatures and Trapdoor Commitment from Lattices. Ivan Damgård, Claudio Orlandi, Akira Takahashi, and Mehdi Tibouchi. [JoC 2022](https://eprint.iacr.org/2020/1110.pdf)
[^4]: DualMS: Efficient Lattice-Based Two-Round Multi-Signature with Trapdoor-Free Simulation. Yanbo Chen. [CRYPTO 2023](https://eprint.iacr.org/2023/263.pdf)
[^5]: Sharing the LUOV: Threshold Post-Quantum Signatures. Daniele Cozzo and Nigel P. Smart. [IMA CC 2019](https://eprint.iacr.org/2019/1060.pdf)