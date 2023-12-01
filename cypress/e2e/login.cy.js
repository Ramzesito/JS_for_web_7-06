// it("Should open the main page", () => {
//     cy.visit("localhost:3000");
//     cy.contains('Books list');
// });

it("Should successfully login", () => {
    cy.visit("localhost:3000");
    cy.contains('Log in').click();
    cy.get("#mail").type("test@test.com");
    cy.get("#pass").type("test");
    cy.contains("Submit").click();
    cy.contains("Добро пожаловать test@test.com").should("be.visible");
});

it("Should not login with empty login", () => {
    cy.visit("localhost:3000");
    cy.contains('Log in').click();
    cy.get("#mail").type(" ");
    cy.get("#pass").type("test");
    cy.contains("Submit").click();
    //добавить assertion
    cy.get("#mail")
        .then(($el) => $el[0].checkValidity())
        .should("be.false");
    cy.get("#mail")
        .then(($el) => $el[0].validationMessage)
        .should("contain", "Заполните это поле.");
});

it.only("Should not login with empty password", () => {
    cy.visit("localhost:3000");
    cy.contains('Log in').click();
    cy.get("#mail").type("test@test.com");
    cy.contains("Submit").click();
    cy.get('#pass').then($el => $el[0].checkValidity()).should('be.false');
});