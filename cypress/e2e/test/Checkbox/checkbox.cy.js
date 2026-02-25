import checkboxPage from "../../../support/Pages/CheckboxPage"

describe("Checkbox test suite", () => {

    beforeEach(() => {
        checkboxPage.visit()
    })

    it("Should check and uncheck checkbox", () => {

        checkboxPage.shouldNotBeChecked()
        checkboxPage.check()
        checkboxPage.shouldBeChecked()
        checkboxPage.uncheck()

    })
})