---
layout: post
uuid: bteinturier-blinded-paths-2023
title: Generating optimal Blinded Paths in the Lightning Network
author: Bastien Teinturier
affiliation: ACINQ
email: bastien@acinq.fr
---

### Scope

Source-routed payments in the lightning network require recipients to provide a destination for pathfinding. [Blinded paths](https://github.com/lightning/bolts/commit/ebd0659fc97bea779803a5255e84411a365de403) have recently been introduced to the specification to improve recipient privacy by providing the sender with an encrypted multi-hop path from a known, cleartext introduction node to themselves. This is similar to Tor’s rendez-vous onion routing protocol, but uses a different cryptographic protocol.

### Problem definition

Blinded paths need to provide aggregate information about the fee and time lock required for the encrypted portion of the path so that senders can send payments that meet the routing policies of the nodes in the nodes in the blinded path. This information can be compared to the publicly known lightning graph to attempt to de-anonymize blinded paths.

Open questions for blinded path selection are:
- The length of a blinded route and its introduction point can be used to “triangulate” the
recipient. How many distinct introduction nodes are safe for a node to use?
- How to manage the trade-off between reliability and privacy, as blinded paths limit the
last-mile options for payments
- Blinded path creators can inflate the fees and expiry for the blinded section, and include
dummy hops to prevent the aggregate values from being correlated with the public graph. What are best practices for this?

It is not trivial to compute a reliable score for each of the two trade-offs above. But it is important to figure out a way to do so, and a graph algorithm that selects good blinded paths based on that scoring.

### State of the art

Close to none. While blinded payments are supported in most lightning implementations today (October 2023), all of them defer the selection of the blinded paths to the end user.