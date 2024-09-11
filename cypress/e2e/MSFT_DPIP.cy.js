describe("MSFT/DP-IP files upload", () => {
  beforeEach(() => {
    cy.fixture("credential").then((user) => {
      cy.loginAsMSFTDPIP(user.email, user.password);
    });

    cy.visit("https://algocore-uat.algoplus.com/home");
  });

  it("upload microsoft promotions", () => {
    cy.title().should("eq", "Algo - Creative Intelligence");
    cy.url().should("include", "/home");
    cy.get("#mat-input-0", {
      timeout: 10000,
    }).type(`upload microsoft promotions{enter}`);

    // Checks app-dynamic-tabs for response.
    cy.get(`[id="Panel - 01"] app-dynamic-tabs`, {
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

    cy.get("input[id='upload-file-btnPromotions File']").selectFile(
      "cypress/fixtures/files/upload microsoft promotions.xlsx",
      { force: true }
    );

    cy.get(".align-items-start > .mat-focus-indicator").click();
    cy.get("#mat-tab-label-1-1", { timeout: 300000 });
  });
});
