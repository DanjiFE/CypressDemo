/// <reference types="cypress" />

describe('Поиск велодорожки на veliki.com.ua', () => {
    it("Alerts test", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick = 'jsAlert()']").click()
        cy.on("window:alert", (text) => {
            expect(text).to.eq("I am a JS Alert")
        })
        cy.get("button[onclick = 'jsConfirm()']").click()
        cy.on("window:confirm", (text) => {
            expect(text).to.include("JS Confirm")
        })
    })

    it("Alerts test", () => {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get("a[href='/windows/new']").invoke("removeAttr", "target").click()
        cy.contains("New Window").should("be.visible")
        cy.go("back")
        cy.go("forward")
        cy.contains("New Window").should("be.visible")
    })

})