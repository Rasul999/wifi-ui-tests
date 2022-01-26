Feature('98. Выход из ЛК')

Scenario('Выход из личного кабинета', ({ I, mainPage }) => {
  mainPage.logout()
  I.see('Вход')
})