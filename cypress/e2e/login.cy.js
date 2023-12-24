describe("Login tests", () => {

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

});

