---
title: "From broad topic to bounded rules"
challenge: "expert-system"
week: 2
date: 2026-09-14
authors: ["member-2", "member-3", "member-4"]
status: "in-progress"
summary: "Candidate problems become user stories, decision boundaries, and testable rule concepts."
---

## Narrowing the problem

This week moves from topic names to operational definitions. For each candidate, we are specifying the user, required facts, possible recommendation, and explanation the system must return.

## Current prototype shape

```text
Financial facts -> Validation -> Rule agenda -> Recommendation
                                      |
                                      +-> Explanation trace
```

We are also separating hard eligibility constraints from advisory rules. This distinction should make rule priority easier to reason about and prevent a recommendation from hiding a failed requirement.

## In progress

- Write ten boundary cases for each finalist.
- Identify conflicting rules and define precedence.
- Record assumptions that require domain validation.
- Agree on success measures for correctness and explanation quality.

## Blocker

Public financial guidance is not always precise enough to encode directly. Any inferred threshold must be explicitly labelled as a project assumption rather than presented as professional financial advice.
