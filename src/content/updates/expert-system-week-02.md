---
title: "From broad topic to bounded rules"
challenge: "expert-system"
week: 2
date: 2026-09-21
authors: ["member-1", "member-2", "member-3", "member-4"]
status: "in-progress"
summary: "Candidate problems become user stories, decision boundaries, and testable rule concepts."
---

## Defining the problem more narrowly

This week, after comparing the initial problem candidates and discussing the trade-offs with the course staff, we defined the final direction for the project. The theme is now focused on credit risk assessment, and we narrowed the scope to a single credit type: automotive credit.

This decision matters because it reduces ambiguity in the rule base. Instead of designing a general-purpose framework for multiple credit products, we can specify a concrete user, a concrete decision outcome, and a smaller set of evidential facts that need to be validated against real-world practices.

## Why automotive credit

We chose automotive credit because it is narrow enough to model as an expert system, but still rich enough to produce meaningful decisions. The problem is concrete: we need to reason about whether a borrower is suitable for an auto loan, what risks are relevant, and which facts should trigger a rejection, a warning, or a recommendation.

This keeps the project aligned with the goals of the challenge: explicit rules, explainable decisions, and a clear way to trace the logic behind each result.

## This week's work

- Finalized the project theme as credit risk assessment.
- Narrowed the scope to automotive credit instead of multiple loan categories.
- Started identifying the key decision variables and rule categories.
- Began contacting a possible domain expert to validate the assumptions behind the credit logic.
- Prepared the interview structure for the first knowledge elicitation session.

## Knowledge elicitation plan

At the start of the week, we are building contact with a potential expert to better understand the domain and refine the knowledge base before writing the inference rules. The goal of this interaction is to clarify:

- which borrower facts matter most for auto-credit decisions;
- which conditions should be treated as hard constraints versus advisory signals;
- how expert judgment is usually translated into explainable risk categories;
- which edge cases should be covered when validating the rules.

This will help us move from a general idea of "credit risk" to a structured rule model with domain-backed reasoning.

## Current prototype shape

```text
Financial facts -> Validation -> Rule agenda -> Recommendation
                                      |
                                      +-> Explanation trace
```

We are still separating hard eligibility constraints from advisory rules. This distinction should make rule priority easier to reason about and prevent a recommendation from hiding a failed requirement.

## In progress

- Define the main variables for automotive credit assessment.
- Prepare the expert interview guide and clarify the expected outcomes.
- Draft the first candidate rules and decision boundaries.
- Document assumptions that still need validation.
- Build a small set of example cases for testing the rule base.

## Placeholder for later this week

- Confirm the meeting with the expert and capture the first knowledge transfer session.
- Convert interview findings into a compact rule catalogue.
- Validate the rule priorities and identify conflicting conditions.
- Finalize the initial decision tree and explainability format.

> The work is still in progress, but the direction is now set: a focused expert system for automotive credit risk assessment, grounded in domain validation and a clear rule structure.
