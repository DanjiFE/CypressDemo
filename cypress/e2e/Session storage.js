/// <reference types="cypress" />

describe('SessionStorage before page load', () => {

    it('should set token before app loads', { tags: ['smoke', 'regression'] }, () => {
        cy.visit('https://automationexercise.com/login', {
            onBeforeLoad(win) {
                win.sessionStorage.setItem('ivan30@gmail.com', '112233')
            }
        })

        // Проверяем, что мы на странице
        cy.url().should('include', 'https://automationexercise.com/')

        // Проверяем, что токен действительно есть
        cy.window()
            .its('sessionStorage')
            .invoke('getItem', 'ivan30@gmail.com')
            .should('equal', '112233')
    })

})
