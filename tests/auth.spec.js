const { test, expect } = require('@playwright/test')

test.describe('Авторизация', () => {
  test('Получение доступа в ЛК под демо пользователем', async ({ page, demoURL }) => {
    await page.goto(demoURL);
    await expect(page.locator('text=Приветствуем в ЛК Wi-Fi').first()).toBeVisible();
  })
  test('Получение доступа в ЛК под тестовым пользователем', async ({ page, context, baseURL, email, password }) => {
    await page.goto(baseURL);
    await page.click('text=Да, верно');
    await page.fill('[placeholder="Введите номер телефона/эл. почту"]', email);
    await page.fill('[placeholder="Введите пароль"]', password);
    await Promise.all([
      page.waitForNavigation(),
      page.click('button:has-text("Войти")')
    ]);
    await Promise.all([
      page.waitForNavigation(),
      page.click('text=ИП КАСИМОВ АНТОН АЛЬФРЕДОВИЧ')
    ]);
    await page.click('text=Пропустить');
    // сохраняем состояние локального хранилища
    await context.storageState({ path: './storage/state.json' });
    await expect(page.locator('text=Выбор оборудования').first()).toBeVisible();
  })
})

test.describe('Главная страница', async () => {
  test.use({ storageState: './storage/state.json' })
  test('Просмотр правил пользования', async ({ page, baseURL }) => {
    await page.goto(baseURL);
    await page.click('.sidebar__dropdown-tab-indicator');
    await page.click('text=Правила пользования');
    await expect(page.locator('text=1.1. Настоящий документ определяет правила').first()).toBeVisible();
  })

  test('Просмотр оферты', async ({ page, baseURL }) => {
    await page.goto(baseURL);
    await page.click('.sidebar__dropdown-tab-indicator');
    await page.click('text=Оферта на использование Услуги «Рекламная рассылка Дом.ru Бизнес»');
    await expect(page.locator('text=Оферта (предложение заключить договор)').first()).toBeVisible();
  })

  test('Переход на форму подключение радара', async ({ page, baseURL }) => {
    await page.goto(baseURL);
    const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      page.waitForNavigation(/*{ url: 'https://perm.b2b.dom.ru/request' }*/),
      page.click('text=Подключить Wi-Fi радар')
    ]);
    await expect(page1.locator('text=Заявка на подключение услуг').first()).toBeVisible();
  })
})