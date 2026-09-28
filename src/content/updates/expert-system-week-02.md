---
title: "From broad topic to bounded rules"
challenge: "expert-system"
week: 2
date: 2026-09-21
authors: ["member-1", "member-2", "member-3", "member-4", "member-5"]
status: "in-progress"
summary: "Candidate problems become user stories, decision boundaries, and testable rule concepts."
---

## Defining the problem more narrowly

This week, after comparing the initial problem candidates and discussing the trade-offs with the professors, we defined the final direction for the project. The theme is now focused on credit risk assessment, and we narrowed the scope to a single credit type: automotive credit.

## Why automotive credit

We chose automotive credit because it is narrow enough to model as an expert system, but still rich enough to produce meaningful decisions. The problem is concrete: we need to reason about whether a borrower is suitable for an auto loan, what risks are relevant, and which facts should trigger a rejection, a warning, or a recommendation.


## Questions asked to the experts

After narrowing the scope down to car loan, we started preparing the questions to ask our experts, and come to following result: 

1. What are the 5–10 factors that carry the most weight when assessing a car loan application?

2. How do these factors interact with one another?

3. Can you give an example of two customers with the same income but different risk assessments?

4. Can you give an example of a customer who is initially considered higher risk but is ultimately deemed acceptable? Why?

5. Are there any factors that, on their own, automatically require rejection, manual review, or a request for additional information?

6. What situations cause a standard application to be referred for manual review?

7. Which factors can offset or compensate for a negative factor?

8. How does the initial down payment affect the risk assessment?

9. How is the relationship between the amount financed and the value of the vehicle assessed?

10. How does the age of the vehicle affect the assessment?

11. Is there a relationship between the age of the vehicle and the maximum financing term?

12. What differences are there when assessing new versus used vehicles?

13. How are different types of credit history interpreted?

14. How are variable incomes or less stable employment situations handled?


## This week's work

- Finalized the project theme as credit risk assessment.
- Narrowed the scope to automotive credit instead of multiple loan categories.
- Started identifying the key decision variables and rule categories.
- Prepared the interview structure for the first knowledge elicitation session.
- Met with two experts in the topic, giving us the neccessary knowledge to pinpoint the main factors in a scoring system for automotive credit approval.


## Next week
Next, we will organize the answers given by the experts and start working on the development of the knowledge base. 