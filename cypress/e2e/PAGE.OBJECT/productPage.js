/// <reference types="cypress" />

import cypress from "cypress"
import HomePage from "../PAGE.OBJECT/homePage"



describe("Login Test", () => {

    const homePage = new HomePage()

    it("Log in account", () => {

        homePage.visit()
        homePage.openSidebar()
        homePage.clickAuthShop()
        homePage.enterEmail("admin@admin.com")
        homePage.enterPassword("admin123")
        homePage.clickLogin()
        homePage.verifyLogin()

    })

})
