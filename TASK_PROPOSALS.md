# Task Proposals

## 1) Typo fix task: unify "AWAY" vs "GUEST" naming
- **Issue found:** The UI labels the second team as **AWAY**, but the score element id and JavaScript variables use **GUEST** (`id="GUEST"`, `guestScore`, `guestBtn*`).
- **Why this is a typo-level issue:** It is a wording inconsistency likely caused by mixed terminology rather than intentional behavior.
- **Suggested task:** Rename the second team identifiers from `GUEST`/`guest*` to `AWAY`/`away*` (or vice versa), and keep one term across HTML, CSS selectors (if any), and JS.
- **Files involved:** `index.html`, `script/index.js`.
- **Acceptance criteria:** Team name and related ids/variables/buttons use one consistent term everywhere.

## 2) Bug fix task: add standards mode HTML doctype
- **Issue found:** `index.html` does not declare `<!DOCTYPE html>`.
- **Why this is a bug:** Without doctype, browsers may enter quirks mode, causing layout and sizing differences across browsers.
- **Suggested task:** Add `<!DOCTYPE html>` and `lang="en"` at the top-level HTML element.
- **Files involved:** `index.html`.
- **Acceptance criteria:** Document starts with `<!DOCTYPE html>` and renders in standards mode in modern browsers.

## 3) Documentation discrepancy task: update README to match this project
- **Issue found:** README content is generic Scrimba/Vite boilerplate and does not describe this scoreboard app’s behavior, controls, or structure.
- **Why this is a documentation discrepancy:** Documentation implies template context rather than the current app’s purpose and usage.
- **Suggested task:** Replace README with project-specific docs (what the app does, controls, run/build commands, and file structure).
- **Files involved:** `README.md`.
- **Acceptance criteria:** README clearly documents Basketball Scorecard functionality and accurate local development commands.

## 4) Test improvement task: add automated scoring behavior tests
- **Issue found:** There are no automated tests for score increments/reset.
- **Suggested task:** Extract score update logic into testable functions and add unit tests (e.g., Vitest + jsdom) for:
  1. +1/+2/+3 button behavior for both teams,
  2. reset button behavior,
  3. initial score state.
- **Files involved:** new test files + small refactor of `script/index.js`.
- **Acceptance criteria:** Test suite runs in CI/local and covers the key user interactions with passing results.
