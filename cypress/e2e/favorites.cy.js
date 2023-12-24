describe("Favorites tests", () => {

    beforeEach(() => {
        cy.visit("/");
        let resX = Cypress.env('x');
        let resY = Cypress.env('y');
        cy.log(`Ставим разрешение  ${resX}х${resY}`);
        cy.viewport(resX, resY);
    });

    // первоначальное условие - книга еще не должна быть в избранном
    it.only("Should add to favorites", () => {
        cy.login("test@test.com", "test");
        const title = "Super Book";
        const desc = "Super Description";
        const authors = "Super Man";
        // добавить книгу в избранное
        cy.addInFavorites(title, desc, authors);
        // перейти в раздел Избранное
        cy.get("h4").contains("Favorites").click(); 
        // найти эту книгу в разделе Избранное
        cy.get("div.card-title").contains(title);   
    });

    // первоначальное условие - книга уже должна быть в избранном
    it.skip("Should delete from favorites", () => {
        cy.login("test@test.com", "test");
        cy.get("a.mt-3 .card-title").contains("Book2").parent().parent().find(".btn").click();    
    });

    // перейти в Favorites и убедиться, что находимся там (при наличии хоть одной книги)
    it.skip("Should be inside favorites", () => {
        cy.login("test@test.com", "test");
        cy.visit("/favorites");

        let booksCount = 0;
        cy.get("a.mt-3 .card-title").each((el) => {
            booksCount++;
            cy.log(booksCount);
        });
        cy.log(booksCount);
        //expect(booksCount).be.above(0);
    });

});

