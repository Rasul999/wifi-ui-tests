const { expect } = require('@playwright/test');

exports.FakturaWelcomePage = class FakturaWelcomePage {
    constructor(page) {
        this.page = page;
        this.getClientLink = page.locator('text=Для частных клиентов')
        this.getBusinessLink = page.locator('text=Для бизнеса')
    }
    async goToWelcomePage() {
        await this.page.goto('https://demo.faktura.ru/')
    }
    async getClientPage() {
        this.goToWelcomePage()
        await this.getClientLink.first().click()
    }
    async getBusinessPage() {
        this.goToWelcomePage()
        await this.getBusinessLink.first().click()
    }
}