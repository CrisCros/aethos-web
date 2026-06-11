---
name: aethos-project-review
description: Final pre-deploy review for Aethos website changes.
---

# Aethos Pre-Deploy Review

Before deploying, check:
- no console errors
- no hydration warnings
- all routes work
- all nav links work
- language routes work
- theme toggle works
- dark mode is readable
- mobile layout works
- contact form works
- metadata exists
- headings are correct
- no fake clients or metrics
- no broken visuals
- no overflow on mobile
- no obvious AI-template feeling

Run:
- npm run lint
- npm run build
- manual mobile check
- dark mode check
- light mode check

Return:
- pass/fail
- issues found
- files modified
- what was verified