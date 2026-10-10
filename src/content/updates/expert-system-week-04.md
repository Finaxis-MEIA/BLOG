---
title: "Delivering the preliminary report and developing our rule engines"
challenge: "expert-system"
week: 4
date: 2026-10-05
authors: ["member-1", "member-2", "member-3", "member-4", "member-5", "member-6"]
status: "in-progress"
summary: "We delivered and presented our preliminary report in the theoretical class, while progressing in the lab by building the Prolog inference engine and KB, and advancing our Drools rule base."
---

## Delivering and presenting the preliminary report

This week marked an important milestone with our first formal project submission: we delivered our preliminary report and presented it during the theoretical class. The report was our sole official deliverable for Week 4, serving as a comprehensive checkpoint before the full implementation phase.

In the report, we consolidated the foundation of our work so far, including the formal problem definition, the knowledge elicitation process conducted with automotive credit experts, the conceptual architecture, and the initial knowledge representation. During the theoretical class, we presented our proposed reasoning pipeline and decision flowcharts to the professors and colleagues. 

## Refining the fact model and decision flow

Following up on the initial mappings from last week, we refined the fact model to ensure that our data structures accurately represent real-world automotive credit applications. We organized the domain into clear fact entities, categorizing parameters across applicant financial profiles (income stability, debt-to-income ratio, credit history), vehicle characteristics (vehicle age, market value, loan-to-value ratio), and financing terms (down payment percentage, loan tenure).

We also adjusted our decision flowcharts based on the edge cases examined while preparing our presentation. In particular, we clarified the thresholds separating automatic rejection, automatic approval, and referral for manual review, ensuring each pathway has unambiguous decision criteria.

## Prolog knowledge base and inference motor

In our technical work beyond the report deliverable, we developed the initial knowledge base (KB) and inference motor in Prolog to explore declarative and symbolic reasoning for automotive credit.

We translated domain entities, financial constraints, and credit policies into Prolog facts and predicates. The inference motor evaluates incoming loan requests through logical deduction, verifying eligibility criteria, testing debt-to-income limits, and determining whether an application should be approved, rejected, or referred for human review. Implementing this inference motor in Prolog allows us to test the soundness and completeness of our rule logic in a formal environment before integrating the broader system.

## Implementing the rule base in Drools

In parallel with our Prolog experimentation, we advanced the development of the rule base in Drools. We began converting our conceptual decision pathways into production rule definitions (`.drl`), using pattern matching logic to evaluate application facts against credit constraints.

Our ongoing Drools implementation focuses on:
- **Eligibility filters**: Detecting disqualifying conditions such as severe defaults or insufficient initial deposits.
- **Financial capacity assessment**: Evaluating debt-to-income (DTI) and effort rates against risk thresholds.
- **Collateral and vehicle rules**: Validating that loan terms are compatible with vehicle depreciation and vehicle age.
- **Outcome classification**: Classifying applications into approved, rejected, or flagged for manual review with clear explanatory justifications.

## This week's work

- Finalized, delivered, and presented the preliminary report in the theoretical class.
- Received feedback on our system architecture and decision flow during the classroom presentation.
- Refined the domain fact model and clarified entity relationships across applicant, loan, and vehicle attributes.
- Built the knowledge base (KB) and inference motor in Prolog to test logic-based credit evaluation.
- Advanced the implementation of core rules in Drools for eligibility filtering, capacity evaluation, and outcome classification.

## Next week

Next, we will expand both the Drools rule base and the Prolog knowledge base to handle complex edge cases and compensating factors, develop comprehensive test scenarios to benchmark rule execution across both engines, and start exploring how explanatory traces can be generated to explain the system's reasoning.
