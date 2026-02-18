/// <reference types="cypress" />

import ActionFragment from "/cypress/support/Fragments/ActionFragment"
var ActionFragment = new ActionFragment

class OpenItem {
    openProductDetails() {
        headerFragment.openProductDetails()
    }
}
export default OpenItem;