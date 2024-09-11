describe("DPIP files upload", () => {
  beforeEach(() => {
    cy.fixture("credential").then((user) => {
      cy.loginAsDPIP(user.email, user.password);
    });

    cy.visit("https://algocore-uat.algoplus.com/home");
  });
  // --------------------------------------------------------------------

  // ------------------------ upload air dates ---------------------
  it("upload air dates", () => {
    cy.title().should("eq", "Algo - Creative Intelligence");
    cy.url().should("include", "/home");

    cy.get(`[id="Panel - 00"] app-dynamic-tabs`, {
      timeout: 200000,
    });

    cy.get("#mat-input-0", {
      timeout: 10000,
    }).type(`upload air dates{enter}`);

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

    cy.get("input[id='upload-file-btnupload air dates']").selectFile(
      "cypress/fixtures/files/upload air dates.xlsx",
      { force: true }
    );
    cy.get(".align-items-start > .mat-focus-indicator").click();
    cy.get("#mat-tab-label-1-1", { timeout: 120000 });
  });
  // --------------------------------------------------------------------

  // ------------------------ upload microsoft cpfr ---------------------
  it("upload microsoft cpfr", () => {
    cy.title().should("eq", "Algo - Creative Intelligence");
    cy.url().should("include", "/home");

    cy.get(`[id="Panel - 00"] app-dynamic-tabs`, {
      timeout: 200000,
    });

    cy.get("#mat-input-0", {
      timeout: 10000,
    }).type(`upload microsoft cpfr{enter}`);

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

    cy.get("input[id='upload-file-btnupload air dates']").selectFile(
      "cypress/fixtures/files/upload microsoft cpfr.xlsx",
      { force: true }
    );

    cy.get(".align-items-start > .mat-focus-indicator").click();
    cy.get("#mat-tab-label-1-1", { timeout: 120000 });
  });
  // --------------------------------------------------------------------

  // ------------------------ upload ladder plan ---------------------
  it("upload ladder plan", () => {
    cy.title().should("eq", "Algo - Creative Intelligence");
    cy.url().should("include", "/home");

    cy.get(`[id="Panel - 00"] app-dynamic-tabs`, {
      timeout: 200000,
    });

    cy.get("#mat-input-0", {
      timeout: 10000,
    }).type(`upload ladder plan{enter}`);

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

    cy.get("input[id='upload-file-btnupload air dates']").selectFile(
      "cypress/fixtures/files/upload ladder plan.xlsx",
      { force: true }
    );

    cy.get(".align-items-start > .mat-focus-indicator").click();
    cy.get("#mat-tab-label-1-1", { timeout: 120000 });
  });
  // --------------------------------------------------------------------

  // ------------------------ upload amazon ladder plan ---------------------
  it("upload amazon ladder plan", () => {
    cy.title().should("eq", "Algo - Creative Intelligence");
    cy.url().should("include", "/home");

    cy.get(`[id="Panel - 00"] app-dynamic-tabs`, {
      timeout: 200000,
    });

    cy.get("#mat-input-0", {
      timeout: 10000,
    }).type(`upload amazon ladder plan{enter}`);

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

    cy.get("input[id='upload-file-btnupload air dates']").selectFile(
      "cypress/fixtures/files/upload amazon ladder plan.xlsx",
      { force: true }
    );

    cy.get(".align-items-start > .mat-focus-indicator").click();
    cy.get("#mat-tab-label-1-1", { timeout: 120000 });
  });

  // ------------------------ upload open orders ---------------------
  it("upload open orders", () => {
    cy.title().should("eq", "Algo - Creative Intelligence");
    cy.url().should("include", "/home");

    cy.get(`[id="Panel - 00"] app-dynamic-tabs`, {
      timeout: 200000,
    });

    cy.get("#mat-input-0", {
      timeout: 10000,
    }).type(`upload open orders{enter}`);

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

    cy.get("input[id='upload-file-btnupload open orders']").selectFile(
      "cypress/fixtures/files/upload open orders.xlsx",
      { force: true }
    );

    cy.get(".align-items-start > .mat-focus-indicator").click();
    cy.get("#mat-tab-label-1-1", { timeout: 120000 });
  });

  // ------------------------ upload release schedule ---------------------
  it("upload release schedule", () => {
    cy.title().should("eq", "Algo - Creative Intelligence");
    cy.url().should("include", "/home");

    cy.get(`[id="Panel - 00"] app-dynamic-tabs`, {
      timeout: 200000,
    });

    cy.get("#mat-input-0", {
      timeout: 10000,
    }).type(`upload release schedule{enter}`);

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

    cy.get("input[id='upload-file-btnupload release schedule']").selectFile(
      "cypress/fixtures/files/upload release schedule.xlsx",
      { force: true }
    );

    cy.get(".align-items-start > .mat-focus-indicator").click();
    cy.get("#mat-tab-label-1-1", { timeout: 120000 });
  });

  // ------------------------ upload microsoft promotions ---------------------
  it("upload microsoft promotions", () => {
    cy.title().should("eq", "Algo - Creative Intelligence");
    cy.url().should("include", "/home");

    cy.get(`[id="Panel - 00"] app-dynamic-tabs`, {
      timeout: 200000,
    });

    cy.get("#mat-input-0", {
      timeout: 10000,
    }).type(`upload microsoft promotions{enter}`);

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

    cy.get("input[id='upload-file-btnupload microsoft promotions']").selectFile(
      "cypress/fixtures/files/upload microsoft promotions.xlsx",
      { force: true }
    );

    cy.get(".align-items-start > .mat-focus-indicator").click();
    cy.get("#mat-tab-label-1-1", { timeout: 120000 });
  });

  // ------------------------ upload promotions ---------------------
  it("upload promotions", () => {
    cy.title().should("eq", "Algo - Creative Intelligence");
    cy.url().should("include", "/home");

    cy.get(`[id="Panel - 00"] app-dynamic-tabs`, {
      timeout: 200000,
    });

    cy.get("#mat-input-0", {
      timeout: 10000,
    }).type(`upload promotions{enter}`);

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

    cy.get("input[id='upload-file-btnupload promotions']").selectFile(
      "cypress/fixtures/files/upload promotions.xlsx",
      { force: true }
    );

    cy.get(".align-items-start > .mat-focus-indicator").click();
    cy.get("#mat-tab-label-1-1", { timeout: 120000 });
  });
});
