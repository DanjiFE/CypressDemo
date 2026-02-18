<reference types="cypress" />

// it('Assertions test', () => {
//     cy.visit('https://qa-practice.netlify.app/auth_ecommerce')
//     cy.get(".shop-item").its("length").should("be.gte", 3)

// })

it('Disabled element test', () => {
    cy.visit('https://the-internet.herokuapp.com/dynamic_controls')
    cy.get("input[type='text']").should("be.disable")

})
