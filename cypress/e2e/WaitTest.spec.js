/// <reference types="cypress" />
describe('Waiter test suite', () => {
    it('Button "Osta nyt" is clickable and navigates to another page', () => {
        cy.visit('https://www.haytime.fi/');
        cy.wait(3000)
        cy.contains('.elementor-heading-title', 'Osta nyt')
            .should('be.visible')
            .should('not.be.disabled')
            .click();

        cy.url().should('not.eq', 'https://www.haytime.fi/');
    })

    it("The internet wait test", () => {
        cy.visit("https://the-internet.herokuapp.com/dynamic_loading/1")
        cy.get('#start button').click()
        cy.get("div#finish h4", { timeout: 5000 }).should("be.visible")

    })
})