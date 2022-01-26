const event = require('codeceptjs').event;
const conf = require('../codecept.conf.js').config;
const fs = require('fs');

module.exports = function () {
  event.dispatcher.on(event.all.after, () => {
    let data = `Stand=${process.env.TEST_URL}\n
                Browser=${process.env.BROWSER}\n
                Allure-reports=${process.env.ALLURE_REPORTS}`
    fs.writeFile('/tmp/allure-results/environment.properties', data, (err) => {
      if (err) throw err;
    })
  })
}