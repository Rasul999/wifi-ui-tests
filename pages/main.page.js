exports.MainPage = class MainPage {
    constructor(page) {
        this.page = page
        this.accounts = page.locator('text=Cards & accounts')
    }
    async switchEng() {
        await this.page.click('text=Eng')
    }
    async logout() {
        await this.page.click('#id2f')
    }
}