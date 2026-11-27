import { test, expect } from '@playwright/test';

test('home page title', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0');
});

test('search pliers', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  await page.locator('[data-test="search-query"]').click();
  
  await page.locator('[data-test="search-query"]').fill('pliers');
  await page.locator('[data-test="search-submit"]').click();
  await page.getByTestId('search-result-count').click();
  await page.locator('[data-test="product-01M8BZ2QZQ03XYG44P4DTMKKTS"]').click();
  await page.getByRole('img', { name: 'Pliers', exact: true }).click();
  
});


test('invalid login', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="email"]').click();
  await page.locator('[data-test="email"]').fill('risper@gmail.com');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('1234qwerty');
  await page.locator('[data-test="login-submit"]').click();
  await page.getByText('Invalid email or password').click();
});