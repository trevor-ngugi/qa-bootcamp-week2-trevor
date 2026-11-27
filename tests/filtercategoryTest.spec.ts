import { test, expect } from '@playwright/test';
import { FilterByCategory } from './pages/filterByCategoryObject';

test('C2 Filter by category ', async ({ page }) => {

    const filterCategory=new FilterByCategory(page);
    await filterCategory.gotoHomePage();
    await filterCategory.tickHandtools();
    await expect(filterCategory.handtoolsCheckbox).toBeChecked();
    await expect(filterCategory.hammerCheckbox).toBeChecked();
    await expect(filterCategory.handsawCheckbox).toBeChecked();
    await expect(filterCategory.measuresCheckbox).toBeChecked();
    await expect(filterCategory.chiselsCheckbox).toBeChecked();
    await expect(filterCategory.pliersCheckbox).toBeChecked();
    await expect(filterCategory.screwdriverCheckbox).toBeChecked();
    await expect(filterCategory.wrenchCheckbox).toBeChecked();


});