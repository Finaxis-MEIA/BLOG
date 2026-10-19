---
title: "Connecting the engines and explaining the decisions"
challenge: "expert-system"
week: 5
date: 2026-10-12
authors: ["member-1", "member-2", "member-3", "member-4", "member-5", "member-6"]
status: "in-progress"
summary: "We connected Drools and Prolog to the API and web app, added new knock-out rules, introduced fuzzy scoring, certainty factors and why/why-not explanations, and drafted the final reports."
---

## From standalone engines to a connected system

With the preliminary report delivered, this week was about turning our separate pieces into one working system. Both inference engines are now exposed over HTTP: the Drools rule base runs behind its own service, and the Prolog knowledge base is served by an SWI-Prolog HTTP server. The API defines a common engine contract and lets us switch the active engine through configuration, so the same loan application can be evaluated by either Drools or Prolog.

On the web application, we integrated Drools end to end, added an engine switch in the sidebar and a settings dialog, and gave the interface a round of visual polish. The Prolog side also gained a graphical menu, making it easier to explore the knowledge base interactively.

## New knock-out rules

Following the expert feedback, we extended the set of eliminatory rules that reject an application before any scoring takes place:

- **K11 – Vehicle age at maturity**: applications are rejected when the vehicle would be older than 15 years at the end of the loan.
- **K12 – Integrity check**: an applicant with a financial offence on record is rejected, with a configurable threshold setting.
- **K13 – Active court cases**: applicants or guarantors with active court cases are rejected.

Each rule was implemented in Drools, exposed through the API, added as a question in the web form, and documented in the knowledge base specification.

## Fuzzy scoring and certainty factors

In Drools, scores no longer jump abruptly at a threshold: values near a band boundary now get a gradual, fuzzy transition between neighbouring scores. We also added **certainty factors** that reflect how reliable each input is; when overall certainty is low, the system recommends manual review without changing the decision.

## Explaining the reasoning

A key goal of an expert system is transparency, so the engine now returns **why** and **why-not** explanations. For any rule or conclusion, the analyst can see why it fired or why it did not, including the input values, fuzzy memberships, certainty calculations, and scoring that was skipped after a knock-out. The web app includes a new explanation panel to browse these traces.

## Vehicle mileage

We added an optional mileage field to the vehicle domain. Mileage is now validated and used in depreciation scoring in Drools, and it is supported across the API and the loan application form.

## Reports

On the documentation side, we produced the first versions of the final ENGCIA report and the PPROGIA report, added a diagram of the API flow, and went through several rounds of corrections. We also documented the new knock-out rules and the fuzzy and certainty extension.

## This week's work

- Exposed the Drools and Prolog engines over HTTP and added an active-engine switch in the API.
- Integrated Drools into the web app with an engine selector, settings dialog and UI refinements.
- Added a graphical menu to the Prolog knowledge base.
- Implemented knock-out rules K11 (vehicle age at maturity), K12 (integrity check) and K13 (active court cases).
- Introduced fuzzy scoring bands and certainty factors in Drools.
- Added why/why-not explanations and an explanation panel in the web app.
- Added vehicle mileage support across Drools, the API and the web form.
- Drafted the final ENGCIA and PPROGIA reports and an API flow diagram.

## Next week

Next, we will validate the fuzzy widths and certainty factors with the experts, build test scenarios to compare Drools and Prolog results, and keep refining the final reports for submission.
