Feature('3. Авторизация и выгрузка аудитории в Я.Аудитории');

Scenario('Авторизация на рекламной площадке Я.Аудитории', ({ I, advertisingPlatformsPage }) => {
    advertisingPlatformsPage.authYa()
    I.see('prof.work1', advertisingPlatformsPage.yaCard)
})
Scenario('Отправка аудитории в Я.Аудитории', ({ I, advertisingPlatformsPage }) => {
    advertisingPlatformsPage.sendAudienceInYa()
    I.see('Перейти в ЛК', advertisingPlatformsPage.yaCard)
})
Scenario('Выход из Я.Аудитории', ({ I, advertisingPlatformsPage }) => {
    advertisingPlatformsPage.logoutInYa()
    I.see('Авторизоваться', advertisingPlatformsPage.yaCard)
})