const { I } = inject();

module.exports = {  
  coverage: 0,
  LAST_CREATED_AUDIENCE_ROW_SELECTOR: '.audiences-table tbody > tr:first-child',
  path: {
    audiences: '/audiences'
  },
  locators: {
    audienceNameInput: { name: 'audienceName' },
    audienceCoverage: '.audience-create__summary-coverage',
    audienceTimeRange: { name: 'timeRange' },
    timeRange: { start: '#DateTimeInput_start', end: '#DateTimeInput_end', applyBtn: '.applyButton' },
    locationPin: '.audience-create__devices-settings .location-pin',
    adPlatformSelectInput: '.audience-create__main-settings .smart-select__input > input',
    adPlatformCardYa: '.advertising-platform-card--yandex',
    adPlatformCardFb: '.advertising-platform-card--facebook',
    lastCreatedAudienceRow: this.LAST_CREATED_AUDIENCE_ROW_SELECTOR,
    lastCreatedAudienceRowYaBtn: locate(this.LAST_CREATED_AUDIENCE_ROW_SELECTOR)
      .find('.btn')
      .withChild('.icon-s24-yandex')
      .as('ya btn'),
    lastCreatedAudienceRowFbBtn: locate(this.LAST_CREATED_AUDIENCE_ROW_SELECTOR)
      .find('.btn')
      .withChild('.icon-s24-facebook')
      .as('fb btn'),
  },
  data: {
    dateStart: '01.09.2021 00:00',
    dateEnd: '30.09.2021 00:00'
  },

  async createAudience(adv, device, dataCollection) {
    I.amOnPage(this.path.audiences)
    I.see('Мои аудитории')
    I.click('Создать аудиторию')
    I.see('Основные настройки аудитории')
    I.fillField(this.locators.audienceNameInput, `${adv}. ${device}. ${dataCollection}.`)
    I.fillField(this.locators.adPlatformSelectInput, `${adv}`)
    I.pressKey('Enter')
    I.click(this.locators.audienceTimeRange)
    I.fillField(this.locators.timeRange.start, this.data.dateStart)
    I.fillField(this.locators.timeRange.end, this.data.dateEnd)
    I.click(this.locators.timeRange.applyBtn)
    I.click('Карта')
    I.click(`${device}`)
    I.click(this.locators.locationPin)
    I.click('Сохранить аудиторию')
    this.coverage = await I.grabTextFrom(this.locators.audienceCoverage)
    I.see('Аудитория сохранена')
    I.amOnPage(this.path.audiences)
  }
}
