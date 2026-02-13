import fragmentSelectors from "/cypress/support/Selectors.js/fragmentSelectors";

class HeaderFragment {
    goToWhatNew() {
        cy.get(fragmentSelectors.HeaderFragment).click()

    }
}

export default HeaderFragment;