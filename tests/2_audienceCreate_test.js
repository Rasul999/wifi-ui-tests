Feature('2. Создание аудиторий');

Scenario('Создание аудитории с mac-адресами устройств с оборудования 2в1', async ({ I, audienceCreatePage }) => {
    await audienceCreatePage.createAudience('Яндекс.Аудитории', '2в1', 'Все')
    I.see(audienceCreatePage.coverage)
})
Scenario('Создание аудитории с номерами телефонов устройств с оборудования Хотспот', async ({ I, audienceCreatePage}) => {
    await audienceCreatePage.createAudience('Facebook', 'Хотспот', 'Посетилели')
    I.see(audienceCreatePage.coverage)
})