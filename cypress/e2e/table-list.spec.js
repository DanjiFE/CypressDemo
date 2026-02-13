/// <reference types="cypress" />

describe('Handling tables and lists', () => {
    it("list-test", () => {
        var expectedmobilenames = [
            "Apple iPhone 12, 128GB, Black",
            "Huawei Mate 20 Lite, 64GB, Black",
            "Samsung Galaxy A32, 128GB, White",
            "Apple iPhone 13, 128GB, Blue",
            "Nokia 105, Black"
        ]

        cy.visit("https://qa-practice.netlify.app/products_list");
        let mobilenames
        cy.get("span.shop-item-title").then(($elements) => {
            mobilenames = $elements.toArray().map(element => element.innerText)
            expect(mobilenames).to.deep.eq(expectedmobilenames)
            expect(mobilenames).to.include("Apple iPhone 12, 128GB, Black")
        })
    })


    it("table-test", () => {
        cy.visit("https://qa-practice.netlify.app/web-table")

        cy.get("table#peopleTable tr td:nth-child(4)")
            .contains("el_icarus@yahoo.com")
            .should("be.visible")
    })
})