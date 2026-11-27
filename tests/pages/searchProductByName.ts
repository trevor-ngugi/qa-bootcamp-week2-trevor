import {Page,Locator} from '@playwright/test'

export class SearchProduct{

    readonly page:Page;
    readonly search:Locator;
    readonly searchButton:Locator

    constructor(page:Page){
        this.page=page;
        this.search=page.locator('[data-test="search-query"]');
        this.searchButton=page.locator('[data-test="search-submit"]');
        

    }

    async gotoHomePage(){
        await this.page.goto('https://practicesoftwaretesting.com/')
    }

    async searchItem(item:string){
        await this.search.fill(item);
        await this.searchButton.click();
    }
}