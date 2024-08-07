import testData from "../fixtures/testData.json";

describe("Data testing", () => {
  beforeEach(() => {
    cy.fixture("credential").then((user) => {
      cy.loginSession(user.email, user.password);
    });

    cy.visit("https://algocore-uat.algoplus.com/home");
  });

  testData.ask.forEach((value) => {
    it(`Test Data Ask: "${value}"`, () => {
      cy.title().should("eq", "Algo - Creative Intelligence");
      cy.url().should("include", "/home");

      cy.get("#mat-input-0", {
        timeout: 10000,
      }).type(`${value}{enter}`);

      cy.get(`[id="Panel - 00"] app-dynamic-tabs`, {
        timeout: 10000,
      }).then(($body) => {
        if ($body.find("app-dynamic-message").length > 0) {
          // Fail the test if the error message element is found
          throw new Error("Error message element found, failing the test.");
        } else {
          // Pass the test if the error message element is not found
          cy.log("No error message element found, test passed.");
        }
      });
    });
  });
});
