exports.ClientPage = class ClientPage {
    constructor(page) {
        this.page = page
        this.logo = page.locator('#idf')
        this.name = page.locator('text=Иван Иванов').first()
    }
    async login() {
        await this.page.fill('input[name="login"]', 'demo')
        await this.page.fill('input[name="password"]', 'demo')
        await this.page.click('text=Войти')
    }
}