/// <reference types="cypress" />

describe("Me first test suite", () => {
    it("first test", () => {
        cy.visit("https://velosklad.com.ua/")

        cy.get('.search__input')
            .type('bmx')

        cy.get('.search-results__list')
            .should('be.visible')

        cy.get('.search-results__item')
            .should('have.length.greaterThan', 0)
        cy.get("div.astra-shop-summary-wrap").as("productsSelector")
        cy.get("@productsSelector").find("a")
    })
})


describe('Позитивный автотест главной страницы', () => {
    it('Сайт успешно открывается и содержит заголовок', () => {
        // Arrange + Act
        cy.visit('https://www.haytime.fi/en') // 

        // Assert
        cy.get('h1')
            .should('be.visible')
            .and('not.be.empty')
    })
})
