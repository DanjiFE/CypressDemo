import fragmentSelectors from "/cypress/support/Selectors.js/fragmentSelectors";

class ActionFragment {
    openProductDetails(name) {
        cy.get(fragmentSelectors.actionsFragment.itemName).eq(13).trigger('mouseover')
        cy.get(fragmentSelectors.actionsFragment.itemName).eq(13).click()
    }
}

export default ActionFragment;