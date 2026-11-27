import {Page,Locator} from '@playwright/test'

export class FilterByCategory{

    readonly page:Page;
    readonly handtoolsCheckbox:Locator;

    readonly hammerCheckbox:Locator;
    readonly handsawCheckbox:Locator;
    readonly wrenchCheckbox:Locator;
    readonly screwdriverCheckbox:Locator;
    readonly pliersCheckbox:Locator;
    readonly chiselsCheckbox:Locator;
    readonly measuresCheckbox:Locator;

    readonly searchButton:Locator

    constructor(page:Page){
        this.page=page;
        this.handtoolsCheckbox=page.locator('[data-test="category-01M8EE1PNKYFSQMBA4RH8675RA"]');
        
        this.hammerCheckbox=page.locator(       '[data-test="category-01M8EE1PP2ZJA613DX3Z887AR2"]'); 
        this.handsawCheckbox=page.locator(      '[data-test="category-01M8EE1PP2ZJA613DX3Z887AR3"]');
        this.wrenchCheckbox=page.locator(       '[data-test="category-01M8EE1PP2ZJA613DX3Z887AR4"]');
        this.screwdriverCheckbox=page.locator(  '[data-test="category-01M8EE1PP2ZJA613DX3Z887AR5"]');
        this.pliersCheckbox=page.locator(       '[data-test="category-01M8EE1PP2ZJA613DX3Z887AR6"]');
        this.chiselsCheckbox=page.locator(      '[data-test="category-01M8EE1PP2ZJA613DX3Z887AR7"]');
        this.measuresCheckbox=page.locator(     '[data-test="category-01M8EE1PP2ZJA613DX3Z887AR8"]');    
               
        this.searchButton=page.locator('[data-test="search-submit"]');
        

    }

    async gotoHomePage(){
        await this.page.goto('https://practicesoftwaretesting.com/')
    }

    async tickHandtools(){
        await this.handtoolsCheckbox.check();
        
    }
}