import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Test', () => {

    const selectorsList = {

    
    firstNameField: '[name="firstName"]',
    lastNameField: '[name="lastName"]',
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-mm-dd']",
    genericComboBox: ".oxd-select-text--arrow",
    secondItemComboBox: ":nth-child(9) > span",
    thirdItemComboBox: ".oxd-select-dropdown > :nth-child(2)",
    dateCloseButton: ".--close",
    submitButton: ".orangehrm-left-space",
    
  }

  it.only('User Info Updated - Sucess', () => {
    loginPage.acessLoginpage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDasboardPage()

    menuPage.acessMyInfo()

    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('Empl')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseNumberTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-10-03')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click({ force: true})
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')



    cy.get(selectorsList.genericComboBox).eq(0).click({ force: true})
    cy.get(selectorsList.secondItemComboBox).click()
    cy.get(selectorsList.genericComboBox).eq(1).click({ force: true})
    cy.get(selectorsList.thirdItemComboBox).click()



  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

  })
})