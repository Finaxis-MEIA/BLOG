---
title: "Refining explanations and preparing for Demo Day"
challenge: "expert-system"
week: 6
date: 2026-10-19
authors: ["member-1", "member-2", "member-3", "member-4", "member-5", "member-6"]
status: "in-progress"
summary: "We refined decision explanations, added collateral-gap analysis, revised certainty factors, improved form validation and deployment, and finalized the reports and Demo Day materials."
---

This week, we refined how the system explains credit decisions, extended the treatment of vehicle depreciation, and revised the certainty model. We also improved form validation, added automated deployment, and finalized the ENGCIA and PPROGIA reports alongside our Demo Day materials.

## How and Why-not explanations

We expanded the explanation module so analysts can explore the rules behind an outcome. The web application now lists rules for the loan, applicant and guarantor, showing which were used during evaluation.

Opening a used rule shows **How**: the conditions that supported it, followed recursively through the reasoning chain. Opening an unused rule shows **Why not**: the condition that failed, with alternative reasoning paths where applicable.

We simplified the presentation into static explanation trees that can be read at the analyst’s own pace. We also corrected rule identifiers, pricing-failure explanations and final-decision wording, and fixed an issue that could leave the result page empty.

## Vehicle depreciation and the need for a guarantor

We added collateral-gap analysis to Drools, comparing the outstanding debt with the vehicle’s estimated depreciated value throughout the loan.

This captures cases where a strong applicant score alone is insufficient: vehicle depreciation can leave the loan inadequately secured and trigger a guarantor requirement.

The web application now explains this distinction explicitly. Where available, it shows the peak gap and the month in which it occurs, separating a collateral-driven guarantor requirement from one caused by an intermediate credit score.

## Revising certainty factors

We revised the Drools certainty model to represent uncertainty in the rules and decision thresholds, under the assumption that the bank has verified the application data.

Decisions close to a scoring threshold now receive lower certainty within a configurable margin zone. Missing mileage and unanswered integrity checks also reduce certainty. A low-certainty result is flagged for manual review without changing the underlying score or decision.

The API and administration page were updated to support the new settings. These uncertainty parameters remain team-defined and require further validation.

## Improving the application and deployment

We added checks for impossible or contradictory form values, including relationships between age and employment history, vehicle condition and age, and mileage for used vehicles. Optional numeric fields now start empty.

Across the application repositories, we added deployment workflows triggered by changes to the main branch. We also moved the Drools HTTP service to Spring Boot, packaged as an executable JAR, and corrected HTTPS handling behind proxies so login requests retain the correct origin.

## Reports and Demo Day preparation

We finalized the ENGCIA and PPROGIA reports through several rounds of revisions, incorporating teacher feedback and documenting the implemented reasoning, explanations, verification and limitations.

We also added the Demo Day pitch deck and script, and updated the deployment architecture diagram to reflect the hosted system.

## This week’s work

- Expanded rule explanations with recursive How and Why-not trees.
- Added collateral-gap analysis and clearer guarantor explanations.
- Revised certainty factors and their administration settings.
- Improved form validation and result-page reliability.
- Added automated deployment and updated the Drools service.
- Finalized both reports and prepared Demo Day materials.

## Next week

With Demo Day approaching, our next focus is rehearsing the pitch and checking the complete demonstration flow, from entering an application to explaining its decision.
