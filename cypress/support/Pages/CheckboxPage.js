class CheckboxPage {

    elements = {
        checkbox: () => cy.get("input[type='checkbox']")
    }

    visit() {
        cy.visit("/checkboxes")
    }

    check() {
        this.elements.checkbox().check()
    }

    uncheck() {
        this.elements.checkbox().uncheck()
    }

    shouldBeChecked() {
        this.elements.checkbox().should("be.checked")
    }

    shouldNotBeChecked() {
        this.elements.checkbox().should("not.be.checked")
    }
}

export default new CheckboxPage()