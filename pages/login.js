const { I } = inject();

module.exports = {
  loginDemo() {
    I.amOnPage('/public/demo')
    I.click('Пропустить')
  }
}
