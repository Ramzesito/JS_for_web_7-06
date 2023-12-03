describe("Book all tests", () => {

    beforeEach(() => {
        cy.visit("/");
        let resX = Cypress.env('note').x;
        let resY = Cypress.env('note').y;
        cy.viewport(resX, resY);
    });

    it.only("Should successfully login", () => {    
        cy.login(Cypress.env('note').x, "test");
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

    // it.only("Should add existing book in favorites", () => {
    //     cy.login("test@test.com", "test");
        
    //     let t = cy.get(".mt-3 .card-title").contains("Book1").get(".btn-success").click();
    //     cy.log(t);
        
    //     //cy.get(".mt-3 .card-title")
    // });

});