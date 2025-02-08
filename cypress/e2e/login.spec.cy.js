import userData from '../fixtures/user-data.json'
import DashboardPage from '../pages/dashboardPage'
import LoginPage from '../pages/loginPage'



const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()


describe('Login Orange HRM Test', () => {

it('Login - Fail', () => {
    loginPage.acessLoginpage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAcessInvalid()
  })

it('Login - Success', () => {
    loginPage.acessLoginpage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDasboardPage()
  })

})