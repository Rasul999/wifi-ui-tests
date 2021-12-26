exports.BusinessPage = class BusinessPage {
    constructor(page) {
        this.page = page
        this.logo = page.locator('.pubpage__logo')
        this.name = page.locator('text=Иван Иванов').first()
    }
    async login() {
        await this.page.click('text=По логину и паролю')
        await this.page.fill('input[name="loginF2B"]', 'demo')
        await this.page.fill('input[name="password:password"]', 'demo')
        await this.page.click('.o-button_login')
    }
}