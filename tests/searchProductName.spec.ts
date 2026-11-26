import { test, expect } from '@playwright/test';
import { SearchProduct} from './pages/searchProductByName'

test('search item by name', async ({ page }) => {

    const searchPage=new SearchProduct(page);

    await searchPage.gotoHomePage();
    await searchPage.searchItem('pliers');
    



});