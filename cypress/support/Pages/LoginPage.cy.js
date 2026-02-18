/// <reference types="cypress" />
import loginPageSelectors from "cypress/support/Selectors.js/LoginPageSelectors"

import HeaderFragment from "/cypress/support/fragments/HeaderFragment"
var headerFragment = new HeaderFragment

class LoginPage {
    openLoginPage() {
        cy.visit("https://automationexercise.com/login")
    }


    authorize(email, password) {
        cy.get(loginPageSelectors.emailTextbox).type(email)
        cy.get(loginPageSelectors.passwordTextbox).type(password)
        cy.get(loginPageSelectors.signInButton).click()
    }

    chooseWhatNew() {
        headerFragment.goToWhatNew()
    }
}

export default LoginPage;