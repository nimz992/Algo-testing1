describe("Calculator", () => {
  beforeEach(() => {
    cy.fixture("credential").then((user) => {
      cy.loginSession(user.email, user.password);
    });

    cy.visit("https://algocore-uat.algoplus.com/home");
  });

  it("Testing DRF CALC", () => {
    cy.title().should("eq", "Algo - Creative Intelligence");
    cy.url().should("include", "/home");

    cy.get("#mat-input-0", {
      timeout: 10000,
    }).type(`drf calc{enter}`);

    cy.get(`[id="Panel - 00"] app-dynamic-tabs`, {
      timeout: 10000,
    }).then(($body) => {
      if ($body.find("app-dynamic-message").length > 0) {
        cy.wrap($body)
          .find("app-dynamic-message")
          .should("not.include.text", "I am sorry");
      }
    });

    cy.get(".p-dropdown").click();
    cy.get(":nth-child(2) > .p-ripple").click();
    cy.get(":nth-child(3) > .form-group > .ng-valid").type("2024-08-30");
    cy.get(":nth-child(4) > .form-group > .ng-untouched").clear().type("14");
    cy.get(":nth-child(5) > .form-group > .w-100").type("2258760200000");
    cy.get(".w-100.align-items-start > .mat-focus-indicator").click();
    cy.get("#mat-tab-label-0-1", { timeout: 10000 }).should("exist");
  });
});
