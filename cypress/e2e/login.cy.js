describe("Book all tests", () => {

    beforeEach(() => {
        cy.visit("/");
        let resX = Cypress.env('x');
        let resY = Cypress.env('y');
        cy.log(`Ставим разрешение  ${resX}х${resY}`);
        cy.viewport(resX, resY);
    });

    it("Should successfully login", () => {
        cy.login("test@test.com", "test");
        cy.contains("Добро пожаловать test@test.com").should("be.visible");
    });

    it("Should not login with empty login", () => {
        cy.login(null, "test");
        //добавить assertion
        cy.get("#mail")
            .then(($el) => $el[0].checkValidity())
            .should("be.false");
        cy.get("#mail")
            .then(($el) => $el[0].validationMessage)
            .should("contain", "Заполните это поле.");            
    });

    it("Should not login with empty password", () => {
        cy.login("test@test.com", null);
        cy.get('#pass').then($el => $el[0].checkValidity())
            .should('be.false');
    });

    // первоначальное условие - книга еще не должна быть в избранном
    it.skip("Should add to favorites", () => {
        cy.login("test@test.com", "test");
        cy.get("a.mt-3 .card-title").contains("Book1").parent().parent().find(".btn").click();    
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

