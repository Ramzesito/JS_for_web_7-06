describe("Favorites tests", () => {

    beforeEach(() => {
        cy.visit("/");
        let resX = Cypress.env('x');
        let resY = Cypress.env('y');
        cy.log(`Ставим разрешение  ${resX}х${resY}`);
        cy.viewport(resX, resY);
    });

    // первоначальное условие - книга еще не должна быть в избранном
    it("Should add to favorites", () => {
        cy.login("test@test.com", "test");
        const title = "Super Book";
        const desc = "Super Description";
        const authors = "Super Man";
        // создать и добавить книгу в избранное
        cy.addInFavorites(title, desc, authors);
        // перейти в раздел Избранное
        cy.get("h4").contains("Favorites").click(); 
        // найти эту книгу в разделе Избранное
        cy.get("div.card-title").contains(title);   
    });

    it("Should delete from favorites", () => {
        cy.login("test@test.com", "test");
        const title = "Book for delete";
        const desc = "Super Description";
        const authors = "Super Man";
        // создать и добавить книгу в избранное
        cy.addInFavorites(title, desc, authors);
        // перейти в раздел Избранное
        cy.get("h4").contains("Favorites").click(); 
        // находим и удаляем книгу из избранного
        cy.get("a.mt-3 .card-title").contains(title).parent().parent().contains("Delete from favorite").click();
        // проверяем, что ее там нет
        cy.get("a.mt-3 .card-title").contains(title).should('not.exist');
    });

    // перейти в Favorites и убедиться, что находимся там
    it("Should be inside favorites", () => {
        cy.login("test@test.com", "test");
        const title = "Special for test";
        const desc = "Spec";
        const authors = "Spec";
        // создать и добавить книгу в избранное
        cy.addInFavorites(title, desc, authors);

        cy.visit("/favorites");

        let booksCount = 0;
        cy.get("a.mt-3 .card-title").each((el) => {
            booksCount++;
            cy.log(`в цикле ${booksCount}`);
        });
        cy.log(`после цикла ${booksCount}`);
        //expect(booksCount).be.above(0);
    });

});

