Feature('1. Авторизация')

Scenario('Демо авторизация в личном кабинете', ({ I, loginPage, mainPage }) => {
  loginPage.loginDemo()
  I.seeElement(mainPage.locators.authenticatedLayout)
})