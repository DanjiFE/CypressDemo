///<reference types="cypress" />
///<reference types="cypress-iframe" />
import 'cypress-iframe'

describe("Handling iFrames", () => {
    it('iFrame test', () => {
        cy.visit("https://qa-practice.netlify.app/iframe")
        cy.frameLoaded('#iframe-checkboxes')
        cy.iframe('#iframe-checkboxes')
            .find('p.lead')
            .should(
                'contain.text',
                'This is a simple hero unit'
            )
    })
})
