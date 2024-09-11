describe("Calculator", () => {
  beforeEach(() => {
    cy.fixture("credential").then((user) => {
      cy.loginAsSDS(user.email, user.password);
    });

    cy.visit("https://algocore-uat.algoplus.com/home");
  });

  it("Testing DRF CALC", () => {
    cy.title().should("eq", "Algo - Creative Intelligence");
    cy.url().should("include", "/home");

    cy.get("#mat-input-0", {
      timeout: 10000,
    }).type(`drf calc{enter}`);

    // Checks app-dynamic-tabs for response.
    cy.get(`[id="Panel - 00"] app-dynamic-tabs`, {
      timeout: 10000,
    }).then(($body) => {
      // Check if app-dynamic-message is displayed.
      if ($body.find("app-dynamic-message").length > 0) {
        // Check if app-dynamic-message has text "I am sorry".
        cy.wrap($body)
          .find("app-dynamic-message div div", { timeout: 1000 })
          .should("not.contain", "I am sorry");
      } else {
        // Pass the test if the error message is not found
        cy.log("No error message element found, test passed.");
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
