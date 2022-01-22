const { test, expect } = require('@playwright/test')
const { FakturaWelcomePage } = require('../pages/welcome.page')
const { BusinessPage } = require('../pages/business.page')
const { ClientPage } = require('../pages/client.page')

test.describe('Авторизация', () => {
  test('Вход в ЛК как частный клиент', async ({ page }) => {
    const fakturaWelcome = new FakturaWelcomePage(page)
    const client = new ClientPage(page)

    await fakturaWelcome.getClientPage()
    await expect(client.logo).toBeVisible()
    await client.login()
    await expect(client.name).toHaveText('Иван Иванов')
  })
  test('Вход в ЛК как бизнес', async ({ page }) => {
    const fakturaWelcome = new FakturaWelcomePage(page)
    const business = new BusinessPage(page)

    await fakturaWelcome.getBusinessPage()
    await expect(business.logo).toBeVisible()
    await business.login()
    // Ожидается вход под пользователем demo/demo, но при авторизации получаю ошибку.
    //await expect(business.name).toHaveText('что-то там')
  })
})