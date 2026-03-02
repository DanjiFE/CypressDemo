/// <reference types="cypress" />
import LoginPage from "cypress/support/Pages/LoginPage"
import OpenItem from "cypress/support/Pages/OpenItem"

describe("Log and buy products", () => {
    var loginpage = new LoginPage
    var OpenItem = new OpenItem

    it('authorization test', () => {
        loginpage.openLoginPage()
        loginpage.authorize("ivan30@gmail.com", "112233")
        loginpage.chooseWhatNew()

        OpenItem.openProductDetails

        cy.get('.product-image-wrapper').eq(13).trigger('mouseover')
        cy.get('.product-image-wrapper').eq(13).click()

        cy.get('.product-image-wrapper').eq(2).trigger('mouseover')
        cy.get('.product-image-wrapper').eq(2).click()

        cy.get('.product-image-wrapper').eq(13).trigger('mouseover')
        cy.get('.product-image-wrapper').eq(13).click()

        cy.get('a[href="/view_cart"] i').click()
        cy.url().should("contain", "/view_cart")

    })
})
