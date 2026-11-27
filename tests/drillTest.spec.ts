import { test, expect } from '@playwright/test';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

test('Flakiness drill - unfixed', async ({ page }) => {

  const filePath = path.join(
    __dirname,
    'drill',
    'index.html'
  );

  const fileUrl = pathToFileURL(filePath).href;

  
  await page.goto(fileUrl);

  
  await page.getByRole('button', { name: 'Save' }).click();

  // Wait for the expected application state
  await expect(page.locator('p')).toHaveText('Saved');
  
});

