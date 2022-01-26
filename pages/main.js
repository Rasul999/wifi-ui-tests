const { I } = inject();

module.exports = {
  locators: {
    ssoLogin: { name: 'username' },
    ssoPassword: { name: 'password' },
    ssoFirstClient: '#tomsName-0',
    authenticatedLayout: '.layout.layout--authenticated',
    sidebarUserDropdownTab: '.sidebar__dropdowns > .sidebar__dropdown-tab:first-child',
    sidebarLogoutBtn: locate('.sidebar__dropdowns .dropdown__menu-item').withText('Выйти').as('Выйти'),
    sidebarRulesBtn: locate('.sidebar__dropdowns .dropdown__menu-item').withText('Правила пользования').as('Правила пользования'),
    sidebarOfferBtn: locate('.sidebar__dropdowns .dropdown__menu-item').withText('Рекламная рассылка').as('Оферта на использование Услуги «Рекламная рассылка Дом.ru Бизнес»'),
    sidebarRadarOfferBtn: locate('.sidebar__dropdowns .dropdown__menu-item').withText('Wi-Fi Радар').as('Оферта на подключение Услуги «Wi-Fi Радар 2 в 1»'),
    modalContent: '.card-modal__content'
  },
  logout() {
    I.amOnPage('/')
    I.click(this.locators.sidebarUserDropdownTab)
    I.click(this.locators.sidebarLogoutBtn)
  }
}
