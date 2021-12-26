const { test, expect } = require('@playwright/test')
const { FakturaWelcomePage } = require('../pages/welcome.page')
const { ClientPage } = require('../pages/client.page')
const { MainPage } = require('../pages/main.page')

test.describe('Профиль клиента', () => {
    test('Смена языка на ENG', async ({ page }) => {
        const fakturaWelcome = new FakturaWelcomePage(page)
        const client = new ClientPage(page)
        const main = new MainPage(page)

        await fakturaWelcome.getClientPage()
        await client.login()
        await main.switchEng()
        await expect(main.accounts).toBeVisible()
        await expect(main.accounts).toHaveText('Cards & accounts')
    })
    test('Выход из ЛК клиента', async ({ page }) => {
        const fakturaWelcome = new FakturaWelcomePage(page)
        const client = new ClientPage(page)
        const main = new MainPage(page)

        await fakturaWelcome.getClientPage()
        await client.login()
        await main.logout()
        await expect(client.logo).toBeVisible()
    })
})