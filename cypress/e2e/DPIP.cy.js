describe("DPIP files upload", () => {
  beforeEach(() => {
    cy.fixture("credential").then((user) => {
      cy.loginAsDPIP(user.email, user.password);
    });

    cy.visit("https://algocore-uat.algoplus.com/home");
  });

  it("upload air dates", () => {
    cy.title().should("eq", "Algo - Creative Intelligence");
    cy.url().should("include", "/home");

    cy.get(`[id="Panel - 00"] app-dynamic-tabs`, {
      timeout: 30000,
    });

    cy.get("#mat-input-0", {
      timeout: 10000,
    }).type(`upload air dates{enter}`);

    cy.get(`[id="Panel - 01"] app-dynamic-tabs`, {
      timeout: 10000,
    }).then(($body) => {
      if ($body.find("app-dynamic-message").length > 0) {
        cy.wrap($body)
          .find("app-dynamic-message")
          .should("not.include.text", "I am sorry");
      }
    });
    cy.get("input[id='upload-file-btnupload air dates']").selectFile(
      "cypress/fixtures/files/upload air dates.xlsx",
      { force: true }
    );
    cy.get(".align-items-start > .mat-focus-indicator").click();
    cy.get("#mat-tab-label-1-1", { timeout: 120000 });
  });

  it("upload microsoft cpfr", () => {
    cy.title().should("eq", "Algo - Creative Intelligence");
    cy.url().should("include", "/home");

    cy.get(`[id="Panel - 00"] app-dynamic-tabs`, {
      timeout: 30000,
    });

    cy.get("#mat-input-0", {
      timeout: 10000,
    }).type(`upload microsoft cpfr{enter}`);

    cy.get(`[id="Panel - 01"] app-dynamic-tabs`, {
      timeout: 10000,
    }).then(($body) => {
      if ($body.find("app-dynamic-message").length > 0) {
        cy.wrap($body)
          .find("app-dynamic-message")
          .should("not.include.text", "I am sorry");
      }
    });
    cy.get("input[id='upload-file-btnupload air dates']").selectFile(
      "cypress/fixtures/files/upload microsoft cpfr.xlsx",
      { force: true }
    );
    cy.get(".align-items-start > .mat-focus-indicator").click();
    cy.get("#mat-tab-label-0-1", { timeout: 120000 });
  });

  it("upload ladder plan", () => {
    cy.title().should("eq", "Algo - Creative Intelligence");
    cy.url().should("include", "/home");

    cy.get(`[id="Panel - 00"] app-dynamic-tabs`, {
      timeout: 30000,
    });

    cy.get("#mat-input-0", {
      timeout: 10000,
    }).type(`upload ladder plan{enter}`);

    cy.get(`[id="Panel - 01"] app-dynamic-tabs`, {
      timeout: 10000,
    }).then(($body) => {
      if ($body.find("app-dynamic-message").length > 0) {
        cy.wrap($body)
          .find("app-dynamic-message")
          .should("not.include.text", "I am sorry");
      }
    });
    cy.get("input[id='upload-file-btnupload air dates']").selectFile(
      "cypress/fixtures/files/upload ladder plan.xlsx",
      { force: true }
    );
    cy.get(".align-items-start > .mat-focus-indicator").click();
    cy.get("#mat-tab-label-0-1", { timeout: 120000 });
  });

  it("upload amazon ladder plan", () => {
    cy.title().should("eq", "Algo - Creative Intelligence");
    cy.url().should("include", "/home");

    cy.get(`[id="Panel - 00"] app-dynamic-tabs`, {
      timeout: 30000,
    });

    cy.get("#mat-input-0", {
      timeout: 10000,
    }).type(`upload amazon ladder plan{enter}`);

    cy.get(`[id="Panel - 01"] app-dynamic-tabs`, {
      timeout: 10000,
    }).then(($body) => {
      if ($body.find("app-dynamic-message").length > 0) {
        cy.wrap($body)
          .find("app-dynamic-message")
          .should("not.include.text", "I am sorry");
      }
    });
    cy.get("input[id='upload-file-btnupload air dates']").selectFile(
      "cypress/fixtures/files/upload amazon ladder plan.xlsx",
      { force: true }
    );
    cy.get(".align-items-start > .mat-focus-indicator").click();
    cy.get("#mat-tab-label-0-1", { timeout: 120000 });
  });
});
