---
layout: post
uuid: skanjalkar-ln-gossip-2023
title: Lightning Gossip using ZKPs
author: Sanket Kanjalkar
affiliation: Block
email: sanket1729@gmail.com
---

### Scope

The primary objective of this project is to enhance the privacy of Lightning Network's gossip protocol through the incorporation of zero-knowledge proofs (ZKPs). The proposed solution will encompass several key components, including a well-defined problem statement, the application of ZKPs, an analysis of the chosen ZK system, and an evaluation of the performance overhead associated with the integration of privacy solutions. Optionally, this may involve the practical implementation of the proposed solution within an existing Lightning Network implementation.

### Problem definition

The current routing of payments in the Lightning Network relies on complete knowledge of the network's graph structure. Nodes, when creating new channels, broadcast messages in the form of "channel announcements." These announcements serve a dual purpose: first, they signify the creation of a new edge within the Lightning graph, and second, they serve as a preventive measure against potential denial-of-service (DoS) attacks launched by nodes announcing spurious channel connections.

Presently, Lightning Network nodes include an additional signature (called “stake certificates”) that attests to their ownership of the UTXO that funded the channel. Unfortunately, this also exposes the transaction ID linking the Lightning channel to the Bitcoin blockchain transaction ledger. Even though newer taproot channels make UTXOs indistinguishable from other spend outputs, they still divulge the funding transaction as part of the channel announcement.

To address this, a solution is sought that enables network participants to prove that a channel opening UTXO is derived from a Taproot UTXO within the last N blocks. The Taproot upgrade is instrumental here, as it ensures that all taproot transaction outputs are represented as elliptic curve points, making them more amenable to ZK proofs.

The ideal ZK proof system for this context should introduce minimal operational overhead to existing Lightning Network processes. This implies that proof sizes should be compact, as the data is disseminated across the network. Verification speed is a consideration but not a primary bottleneck, as channel announcements can tolerate some delay. Pairing assumptions can be made use of for further efficiency gains. Optionally, if these proofs can be aggregated at the gossip layer it further improves efficiency.

### State of the art

Most state-of-the-art work in the context of the Lightning Network predominantly focuses on [privacy vulnerabilities](https://arxiv.org/pdf/2003.12470.pdf). While this is essential, it doesn't address the specific privacy concerns associated with channel announcement in the Lightning Network.

A lot of work has been investigated into the improvement of ZCash UTXO double spend protocol with [Sapling](https://z.cash/upgrade/sapling/), [Orchard](https://z.cash/upgrade/network-upgrade-5/). Existing work has been put in [set membership](https://eprint.iacr.org/2019/1255.pdf) protocols that can be actively leveraged to obtain maximal efficiency.

The classic solution to this problem are linkable ring signatures of which the most modern instantiation is [Triptych](https://eprint.iacr.org/2020/018) with `O(log(N))` size and `O(N)` linear verification. See also [waxwing's post](https://reyify.com/blog/little-riddle) on this.

A different implementation may place the public keys into some sort of accumulator. The goal of this is that verification time is in `O(log(N))` instead of `O(N)` as in linkable ring signatures. According to the [curve tree paper](https://eprint.iacr.org/2022/756.pdf), set inclusion proofs are size `O(log(n))` and have verifier time `O(D-th root of n)` where `D` is the number of levels in the tree.

### Challenges

The challenges presented by this project are analogous to those encountered in the prevention of double-spending, as observed in ZCash. However, the problem at hand presents unique challenges and opportunities:

- ZKPs: The first challenge revolves around the need to ensure that zero-knowledge proofs are employed only once per UTXO. If implemented without careful consideration, this may lead to the same UTXO being claimed by multiple channel openings, potentially triggering a Denial of Service (DoS) attack. To mitigate this, the introduction of a nullifier concept, akin to those used in Zcash, is required. However, traditional Zcash-style nullifiers present challenges due to the ever-growing list of nullifiers that need to be tracked. Given the relatively small set of outputs that require proof in this context, alternative techniques offering enhanced privacy should be explored
- Multi-Party Computation (MPC): The second challenge pertains to the necessity of implementing Multi-Party Computation (MPC) to generate the proof. Unlike traditional zero-knowledge settings, the prover in this scenario is shared between the two parties opening the channel. Neither party is willing to divulge their secrets to the other, necessitating the use of MPC to generate the proof while preserving privacy. This introduces complexity to the implementation and necessitates a thorough assessment of security implications. Exploring options to simplify or represent the ZK protocol/circuit in an MPC-friendly manner is essential