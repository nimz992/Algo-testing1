import testData from "../fixtures/testData.json";

describe("Data testing", () => {
  beforeEach(() => {
    cy.fixture("credential").then((user) => {
      cy.loginAsSDS(user.email, user.password);
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
      });

      cy.get("app-dynamic-message").contains("I amadwad sorry");
      cy.wait(100000);
    });
  });
});
