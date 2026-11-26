import {Page,Locator} from '@playwright/test'

export class searchProduct{

    readonly page:Page;
    readonly search:Locator;
    readonly searchButton:Locator

    constructor(page:Page){
        this.page=page;
        this.search=page.locator('search-query');
        this.searchButton=page.locator('search-submit');
        

    }

    async gotoHomePage(){
        await this.page.goto('https://practicesoftwaretesting.com/')
    }

    async searchItem(item:string){
        await this.search.fill(item);
        await this.searchButton.click();
    }
}