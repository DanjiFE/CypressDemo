class HomePage {




    visit() {
        cy.visit("https://qa-practice.netlify.app/auth_ecommerce")
    }

    openSidebar() {
        cy.get("button#sidebarCollapse.navbar-btn").click()
    }

    clickAuthShop() {
        cy.get("#auth-shop").click()
    }

    enterEmail(email) {
        cy.get("#email").type(email)
    }

    enterPassword(password) {
        cy.get("#password").type(password)
    }

    clickLogin() {
        cy.get("#submitLoginBtn").click()
    }

    verifyLogin() {
        cy.url().should("contain", "/auth_ecommerce")
    }
}

export default HomePage
