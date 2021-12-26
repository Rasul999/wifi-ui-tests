const config = {
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    baseURL: 'https://demo.faktura.ru',
  },
};

module.exports = config;