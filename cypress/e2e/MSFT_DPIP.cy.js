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

    cy.get(`[id="Panel - 00"] app-dynamic-tabs`, {
      timeout: 10000,
    }).then(($body) => {
      if ($body.find("app-dynamic-message").length > 0) {
        cy.wrap($body)
          .find("app-dynamic-message")
          .should("not.include.text", "I am sorry");
      }
    });
    cy.get("input[id='upload-file-btnPromotions File']").selectFile(
      "cypress/fixtures/files/upload microsoft promotions.xlsx",
      { force: true }
    );
    cy.get(".align-items-start > .mat-focus-indicator").click();
    cy.get("#mat-tab-label-0-1", { timeout: 120000 });
  });

  
});
