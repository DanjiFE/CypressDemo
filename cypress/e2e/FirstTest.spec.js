/// <reference types="cypress" />

describe("Me first test suite", () => {
    it("first test", () => {
        cy.visit("https://velosklad.com.ua///")
        ccy.get('.search__input').type('bmx')
        cy.get("#search-results__list li").should("have.length", 3)
    })
})