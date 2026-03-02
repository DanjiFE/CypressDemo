import TabPage from "../../support/Pages/TabPage"

describe("New Tab test suite", () => {

    beforeEach(() => {
        TabPage.visit()
    })

    it("Should open new tab page after clicking button", () => {

        TabPage.clickTab()
        TabPage.shouldNavigateToPage()

    })

})