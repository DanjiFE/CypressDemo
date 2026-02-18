/// <reference types="cypress" />

describe("viewport test iphone 12 pro max", () => {

    it('Viewport', () => {
        cy.viewport(390, 844)
        cy.visit("https://qa-practice.razvanvancea.ro/")

        cy.get("button#sidebarCollapse.navbar-btn").click()
        cy.get("#forms").click()
        cy.get("#register").click()

        cy.contains("h2", 'Register Form')
    })



    it("viewport test Iphone SE2 - mouse hover", () => {
        cy.viewport("iphone-se2")
        cy.visit("https://qa-practice.razvanvancea.ro/")

        cy.get("button#sidebarCollapse.navbar-btn").click()
        cy.get("#forms").click()
        cy.get("#register").click()
        cy.url().should("contain", "/register")

        cy.get("#firstName").type("Daniel")
        cy.get("#lastName").type("Test")
        cy.get("#phone").type("093131313")
        cy.get("#countries_dropdown_menu").select("Albania")
        cy.get("#emailAddress").type("test@test.com")
        cy.get("#password").type("112233")


        cy.get("#exampleCheck1").click()
        cy.get("#registerBtn").click()
    })

    it("Log in accrount", () => {
        cy.visit("https://qa-practice.netlify.app/auth_ecommerce")
        cy.get("button#sidebarCollapse.navbar-btn").click()
        cy.get("#auth-shop").click()
        cy.get("#email").type("admin@admin.com")
        cy.get("#password").type("admin123")
        cy.get("#submitLoginBtn").click()

        cy.url().should("contain", "/auth_ecommerce")
    })

    it("checkbox", () => {
        cy.visit("https://qa-practice.razvanvancea.ro/#")
        cy.get("button#sidebarCollapse.navbar-btn").click()
        cy.get("#buttons").click()
        cy.get("#checkboxes").click()


        cy.url().should("contain", "/checkboxes")
    })

    it("touch on mobile", () => {
        cy.visit("https://qa-practice.razvanvancea.ro/#")
        cy.viewport(350, 788)
        cy.get("button#sidebarCollapse.navbar-btn").trigger("touchstart", { force: true })
    })
})

