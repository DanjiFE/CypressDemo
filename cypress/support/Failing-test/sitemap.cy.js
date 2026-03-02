describe('Поиск велодорожки на veliki.com.ua', () => {
    it('Открывает конкретную модель велодорожки', () => {

        cy.visit('https://veliki.com.ua/ua/');

        // 1. Открываем бургер-меню
        cy.get('span.butt-menu').click();

        // 2. Ждём, пока меню откроется, и кликаем по категории
        cy.get('a[title="Фітнес і тренажерний зал"]')
            .should('be.visible')
            .within(() => {
                cy.get('a[title="Бігові доріжки"]')
                    .should('be.visible')
                    .click();

                // 3. Кликаем "Бігові доріжки"
                cy.contains('a', 'Бігові доріжки')
                    .should('be.visible')
                    .click();
            });

        // 4. Проверка URL
        cy.url().should('include', 'treadmills');

        // 5. Поиск модели
        const treadmillName = 'Бігова доріжка FitLogic T46C';
        cy.get('input[type="search"]')
            .should('be.visible')
            .type(`${treadmillName}{enter}`);

        // 6. Переход в карточку товара
        cy.contains('a', treadmillName)
            .should('be.visible')
            .click();

        // 7. Проверка заголовка страницы товара
        cy.get('h1').should('contain.text', treadmillName);
    });
});
