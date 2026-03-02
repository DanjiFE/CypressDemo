describe('Pagination Test', () => {
    beforeEach(() => {
        cy.visit('https://j8cad7wyd8-staging.wpdns.site/yield-sec/') // укажите нужный URL страницы с пагинацией
    })

    it('Проверяет, что все кнопки пагинации работают и отображают контент', () => {
        // Получаем все доступные номера страниц в пагинации, включая кнопки 'следующая', '...' и т.п.
        cy.get('a.page-numbers')
            .then($pages => {
                // Превращаем jQuery-объект в массив для удобства перебора
                const pagesCount = $pages.length

                // Функция для рекурсивного теста по каждой странице пагинации
                function testPage(index) {
                    if (index >= pagesCount) return

                    const page = $pages[index]

                    // Кликаем на страницу, если она не активна (не текущая)
                    if (!page.classList.contains('current')) {
                        cy.wrap(page).click()
                    }

                    // После клика ждем загрузки и проверяем, что контент подгрузился
                    // Например, проверяем наличие карточек новостей
                    cy.get('div.blog-posts > article').should('exist')

                    // Если нужно, можно проверить, что номер активной страницы совпадает с ожидаемым
                    cy.get('span.page-numbers.current')
                        .should('contain.text', page.textContent.trim())

                    // Переходим к следующей странице
                    testPage(index + 1)
                }

                // Запускаем проверку с первой страницы
                testPage(0)
            })
    })
})