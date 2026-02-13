/// <reference types="cypress" />

describe("checkbox test & dropdown test suite", () => {

    it("Disabled element test", () => {
        cy.visit("https://qa-practice.netlify.app/checkboxes")

        cy.get("input[type='checkbox']").should("not.be.checked")
        cy.get("input[type='checkbox']").check()
        cy.get("input[type='checkbox']").should("be.checked")
        cy.get("input[type='checkbox']").uncheck()
    })

    it("Dropdowns test", () => {
        cy.visit("https://qa-practice.netlify.app/dropdowns")
        cy.get("select#dropdown-menu").select("country")
        cy.get("select#dropdown-menu option:selected")
            .should("have.text", "country")
    })

    it("Dropdowns test: all countries by value", () => {
        cy.visit("https://qa-practice.netlify.app/dropdowns")

        cy.get("#dropdown-menu option").each(($option) => {
            const value = $option.val()
            const text = $option.text()

            if (value) {
                cy.get("#dropdown-menu").select(value)
                cy.get("#dropdown-menu option:selected")
                    .should("have.text", text)
            }
        })
    })

})
