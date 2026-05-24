# E2E tests (Playwright)

These tests run **locally** — Playwright needs browser binaries that are not
available in the Lovable preview sandbox.

## One-time setup

```bash
npm i -D @playwright/test
npx playwright install --with-deps chromium
```

Add scripts to `package.json`:

```json
{
  "scripts": {
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui"
  }
}
```

## Run

Against the local dev server (auto-started via `webServer` in
`playwright.config.ts`):

```bash
npm run test:e2e
```

Against the deployed preview (or any URL):

```bash
PLAYWRIGHT_BASE_URL=https://your-preview.lovable.app npm run test:e2e
```

## What's covered (`mobile-menu.spec.ts`)

- Backdrop is hidden by default and does not block clicks on content below the header
- Opening the menu shows the backdrop, blocks clicks on content below, and clicking the backdrop closes it
- Menu links navigate and close the menu
- `Escape` closes the menu and restores focus to the toggle

The backdrop is selected via `data-testid="mobile-menu-backdrop"` with a
`data-state="open|closed"` attribute for stable assertions.
