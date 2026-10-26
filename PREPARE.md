# Before the interview

Accuracy matters more than polish. Confirm every item marked **[CONFIRM]** in the deck. If you cannot confirm it, leave it out of the spoken script.

## Verification checklist

### Story and claims

- [ ] Tenure, employer names, and contract dates (three-month Singapore contract; Autonom8 dates)
- [ ] Whether the nDots corporate landing screenshot is the vertical-video experiment, or only related marketing UI
- [ ] Whether `ndots/MArch website/kg-ui.png` is the university student product, or a related dots interface
- [ ] Whether Next Stop screens are work you can show, and what you designed vs implemented
- [ ] ~10,000 Indian and American customers for the mutual-fund product — keep, qualify, or drop
- [ ] Your specific contributions on CAFS Money (which screens, APIs, or features)
- [ ] Next.js POC: repo, what was built, what was not migrated
- [ ] Autonom8 product name if you are allowed to say it; otherwise keep “the SaaS platform”
- [ ] Which Autonom8 services you wrote in Node.js vs Golang
- [ ] Which services used PostgreSQL, Redis, JWT, Docker, CI/CD
- [ ] AI: what you personally implemented vs team vs existing platform
- [ ] Pinecone: exploration only, or used in a shipped path
- [ ] MCP: exact tool/registry name, your role, POC vs production
- [ ] Any screenshot that includes other people’s PII — crop or replace before presenting

### Practical setup

- [ ] Open `index.html` from this folder (double-click, or `npx serve` if you prefer a local server)
- [ ] Confirm images load: nDots hero, kg-ui, Next Stop, CAFS home and search
- [ ] Press **F** for fullscreen, **N** for notes, **T** for the 20-minute timer
- [ ] Rehearse once with the timer. Target 18–20 minutes including transitions
- [ ] Have a backup: this folder on a USB drive, plus `SPEAKER-SCRIPT.md` printed or on your phone
- [ ] If presenting on a borrowed laptop, test the file:// path; encoded spaces in image URLs should work
- [ ] Replace the two remaining placeholders (initial idea; MCP details) or skip them verbally

## Technical questions to prepare

An interviewer who has watched this deck is likely to ask the following. Prepare short, honest answers. “I don’t know / I didn’t own that” is better than a guess.

### Frontend and product

1. How did the student profile open from a Three.js iframe — postMessage, shared URL state, or something else?
2. What did Operational Transformation actually do in that product, from the web app’s point of view?
3. How did you structure Redux on the mutual-fund app? What belonged in global state vs local state?
4. What made the mutual-fund routes “dynamic”?
5. In the Next.js POC, what rendering strategy did you try (SSR, SSG, hybrid), and what broke?

### Backend and data

6. Walk through a mutual-fund purchase at API level, as far as you actually know it.
7. How did you handle JWT expiry and protected routes?
8. What did you learn from BSE API integration — errors, rate limits, mapping to MongoDB documents?
9. In Golang, how did you structure a service (handlers, packages, config)?
10. How did you design a schema before the API existed? Give one real table or document example.
11. When did you use Redis, and for what (cache, session, lock)? If you didn’t, say so.

### Delivery and collaboration

12. What did a GitLab merge request look like on your team? What did you look for in review?
13. How did Docker and CI/CD show up in your daily work — did you write pipelines, or consume them?
14. Tell me about a bug that escaped into production. What would you add now — test, contract, or review?
15. How did you work with testers and UX without waiting for a perfect brief?

### AI (keep this modest)

16. What was retrieved from the knowledge base, and what was left to the model?
17. What was Pinecone’s job in the pipeline you explored?
18. What is MCP, in your own words, and what exactly did you try?
19. How would you stop an agent answering from the wrong customer’s knowledge?
20. What would you test before putting retrieval-augmented answers in front of a customer?

### Cross-cutting

21. Point to one thing you built that was *not* asked for, and how you decided it was worth the time.
22. Where are you weakest today — Golang internals, testing, or system design — and how are you closing that?
23. Which part of this journey would you *not* want to repeat, and why?

## Interviewer review (already applied)

- The narrative is one arc: interfaces → product ownership → structured delivery → services → careful AI exploration.
- Production work and POCs are labelled.
- Architectures are not mixed across companies.
- No invented revenue, conversion, or performance numbers.
- Screenshots are real; missing evidence is a placeholder, not a fake dashboard.
- Speaking time is sized for 20 minutes if you follow `SPEAKER-SCRIPT.md` and do not extra-explain every chip.
