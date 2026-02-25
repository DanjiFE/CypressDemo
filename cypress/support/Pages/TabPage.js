class TabPage {

    elements = {
        newTabButton: () => cy.get("#newTabBtn"),
        newTabLink: () => cy.get("#newTabBtn a")
    }

    visit() {
        cy.visit("/tab")
    }

    clickTab() {
        // убираем target="_blank"
        this.elements.newTabLink()
            .invoke("removeAttr", "target")
            .click()
    }

    shouldNavigateToPage() {
        cy.url().should("include", "/web-table")
    }
}

export default new TabPage()