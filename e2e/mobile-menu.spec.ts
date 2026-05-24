import { test, expect } from "@playwright/test";

test.describe("Mobile menu — backdrop & below-menu clicks", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("backdrop is hidden by default and content below header is clickable", async ({ page }) => {
    const backdrop = page.getByTestId("mobile-menu-backdrop");
    await expect(backdrop).toHaveAttribute("data-state", "closed");
    await expect(backdrop).toHaveCSS("opacity", "0");
    await expect(backdrop).toHaveCSS("pointer-events", "none");

    // A button/link in the page body (below the header) should receive the click
    const firstCta = page.getByRole("link", { name: /begin your story|почати|раскажіть|empezar|raccontaci/i }).first();
    await expect(firstCta).toBeVisible();
    await firstCta.click({ trial: true });
  });

  test("opening menu shows backdrop and blocks below-menu clicks; clicking backdrop closes it", async ({ page }) => {
    const toggle = page.getByRole("button", { name: /menu/i });
    const backdrop = page.getByTestId("mobile-menu-backdrop");

    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(backdrop).toHaveAttribute("data-state", "open");
    await expect(backdrop).toHaveCSS("opacity", "1");

    // Backdrop should intercept clicks intended for elements below the menu
    const bodyCta = page.getByRole("link", { name: /begin your story|почати|раскажіть|empezar|raccontaci/i }).first();
    const intercepted = await bodyCta.click({ trial: true, timeout: 1500 }).then(
      () => false,
      () => true,
    );
    expect(intercepted).toBe(true);

    // Click on backdrop closes the menu and returns focus to the toggle
    await backdrop.click({ position: { x: 20, y: 200 } });
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(backdrop).toHaveAttribute("data-state", "closed");
    await expect(toggle).toBeFocused();
  });

  test("menu links navigate and close the menu", async ({ page }) => {
    await page.getByRole("button", { name: /menu/i }).click();

    const menu = page.getByRole("dialog", { name: /mobile navigation/i });
    await menu.getByRole("link", { name: /about/i }).click();

    await expect(page).toHaveURL(/\/about/);
    await expect(page.getByTestId("mobile-menu-backdrop")).toHaveAttribute("data-state", "closed");
  });

  test("Escape closes the menu and restores focus", async ({ page }) => {
    const toggle = page.getByRole("button", { name: /menu/i });
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");

    await page.keyboard.press("Escape");
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(toggle).toBeFocused();
  });
});
