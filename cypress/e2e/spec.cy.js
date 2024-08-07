import testData from "../fixtures/testData.json";


describe("Data testing", () => {
 beforeEach(() => {
   cy.visit("https://algocore-uat.algoplus.com/_admin/Login");
   cy.fixture("credential").then((user) => {
     cy.get("#mat-input-0").clear().type(user.email);
     cy.get("#mat-input-1").clear().type(user.password);
     cy.get("#login").click();
     cy.get(":nth-child(1) > .mat-focus-indicator").click();
   });
 });

 testData.ask.forEach((value) => {
   it(`Test Data Ask: "${value}"`, () => {
     cy.wait(5000);
     cy.get("#mat-input-2").type(`${value}{enter}`);
     cy.wait(5000);
     cy.get(`[id="Panel - 00"] app-dynamic-message`).should("not.exist");
   });
 });
});