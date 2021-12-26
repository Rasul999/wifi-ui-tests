const config = {
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    demoURL: 'https://beta.wifi.ru/public/demo',
    baseURL: 'https://beta.wifi.ru/',
    email: 'marina.pestereva90@mail.ru',
    password: 'Qwerty1!'
  },
};

module.exports = config;