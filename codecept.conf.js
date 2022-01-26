exports.config = {
  tests: 'tests/*_test.js',
  output: '/tmp/output',
  helpers: {
    Playwright: {
      browser: process.env.BROWSER,
      url: process.env.TEST_URL,
      show: !Number(process.env.HEADLESS),
      windowSize: '1280×1024',
      restart: false,
      ignoreHTTPSErrors: true,
      keepBrowserState: true,
      keepCookies: true,
      waitForNavigation: 'networkidle',      
    }
  },
  include: {
    I: './steps_file.js',
    advertisingPlatformsPage: './pages/advertisingPlatforms.js',
    audienceCreatePage: './pages/audienceCreate.js',    
    loginPage: './pages/login.js',
    mainPage: './pages/main.js',
  },
  name: 'wifi-frontend',
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
    allure: {
      enabled: true,
      outputDir: process.env.ALLURE_REPORTS,
    },
    genEnvProperties: {
      require: './plugin/genEnvProperties',
      enabled: true,
    }
  }
}
