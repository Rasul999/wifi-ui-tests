const { I } = inject();

module.exports = {
  yaCard: '.advertising-platform-card--yandex',
  adUrl: {
    ya: 'https://passport.yandex.ru/'
  },
  path: {
    adPlatforms : '/advertising-platforms'
  },
  locators: {
    buttons: {
      send: locate(this.yaCard).find('.icon-s24-send').as('ya send'),
      logout: locate(this.yaCard).find('.icon-s24-log-out').as('ya lg'),
      submit: '.Button2_type_submit'
    },
    field: {
      yaLogin: '#passp-field-login',
      yaPassord: '#passp-field-passwd'
    },
    select: {
      ya: locate(this.yaCard).find('.smart-select-container').as('ya select'),
      yaOpt: locate(this.yaCard).find('#react-select-2-option-0').as('ya opt')
    }
  },
  data: {
    yaLogin: 'prof.work1',
    yaPassord: 'Qwerty1!!!'
  },

  authYa() {
    I.amOnPage(this.path.adPlatforms)
    I.see('Рекламные площадки')
    I.click('Авторизоваться', this.yaCard)
    I.switchToNextTab()
    I.seeInCurrentUrl(this.adUrl.ya)
    I.fillField(this.locators.field.yaLogin, this.data.yaLogin)
    I.click(this.locators.buttons.submit)
    I.fillField(this.locators.field.yaPassord, this.data.yaPassord)
    I.click(this.locators.buttons.submit)
    I.click('Войти как prof.work1')
    I.switchToNextTab()
  },
  sendAudienceInYa() {
    I.amOnPage(this.path.adPlatforms)
    I.click(this.locators.select.ya)
    I.click(this.locators.select.yaOpt)
    I.click(this.locators.buttons.send)
  },
  logoutInYa() {
    I.amOnPage(this.path.adPlatforms)
    I.click(this.locators.buttons.logout)
  }
}
