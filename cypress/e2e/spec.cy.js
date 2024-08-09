import testData from "../fixtures/testData.json";

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("https://algocore-uat.algoplus.com/_admin/Login");
    cy.fixture("credential").then((user) => {
      cy.get("#mat-input-0").clear().type(user.email);
      cy.get("#mat-input-1").clear().type(user.password);
      cy.get("#login").click();
      cy.get(":nth-child(1) > .mat-focus-indicator").click();
    });
  });
  testData.ask.forEach((value, index) => {
    it(`Ask: ${value}`, () => {
      // sendMsgAfterDefaultMsg(value);
      sendMessageToCore(value);
    });
  });

  function sendMsgAfterDefaultMsg(value) {
    cy.intercept(
      "POST",
      "https://algocoreapi-algocore-uat.algoplus.com/v1/messages/send"
    ).as("send-message");

    // It will wait for sendMessage call and then use the message_id returned in response to get status of the message.
    cy.wait("@send-message", { requestTimeout: 100000 }).then((obj) => {
      const messageId = obj.response.body.message_id;
      cy.intercept(
        "GET",
        `https://algocoreapi-algocore-uat.algoplus.com/v2/messages/${messageId}`
      ).as("message-status");
      //This function will wait recursively untill processing on intent is completed
      waitForAliasAndSendMessage("@message-status", value);
    });
  }

  function waitForAliasAndSendMessage(alias, value) {
    cy.wait(alias, { requestTimeout: 100000 }).then((obj) => {
      const statusCode = obj.response.statusCode;
      if (statusCode == 200) {
        if (obj.response.body.response.has_error)
          throw new Error("Has Error True");
        else sendMessageToCore(value);
      } else if (statusCode == 202) waitForAliasAndSendMessage(alias, value);
      else throw new Error("Request Failed!");
    });
  }

  function waitForAlias(alias) {
    cy.wait(alias, { requestTimeout: 100000 }).then((obj) => {
      const statusCode = obj.response.statusCode;

      if (statusCode == 200) {
        if (obj.response.body.response.has_error) {
          throw new Error("Has Error True");
        } else return;
      } else if (statusCode == 202) waitForAlias(alias);
      else throw new Error("Request Failed!");
    });
  }

  function sendMessageToCore(value) {
    console.log("sendMessageToCore");

    waitForElementToExist("#mat-input-2");
    cy.get("#mat-input-2").type(`${value}{enter}`);

    cy.intercept(
      "POST",
      "https://algocoreapi-algocore-uat.algoplus.com/v1/messages/send"
    ).as("send-message");

    cy.wait("@send-message", { requestTimeout: 100000 }).then((obj) => {
      waitForCoreMessageResponse(obj.response.body.message_id);
    });
  }

  function waitForCoreMessageResponse(message_id) {
    console.log("waitForCoreMessageResponse");

    cy.intercept(
      "GET",
      `https://algocoreapi-algocore-uat.algoplus.com/v2/messages/${message_id}`
    ).as("message-status");
    cy.wait("@message-status", { requestTimeout: 100000 }).then((obj) => {
      const statusCode = obj.response.statusCode;
      if (statusCode == 200) {
        if (obj.response.body.response.has_error) {
          throw new Error("Has Error True");
        } else return;
      } else if (statusCode == 202) waitForAlias("@message-status");
      else throw new Error("Request Failed!");
    });
  }

  function waitForElementToExist(selector, interval = 1000) {
    cy.get("body").then(($body) => {
      if ($body.find(selector).length > 0) {
        cy.get(selector).should("exist");
      } else {
        cy.wait(interval);
        waitForElementToExist(selector, interval);
      }
    });
  }

  function waitForElementToNotExist(selector, interval = 1000) {
    cy.get("body").then(($body) => {
      if ($body.find(selector).length == 0) {
        cy.get(selector).should("not.exist");
      } else {
        cy.wait(interval);
        waitForElementToNotExist(selector, interval);
      }
    });
  }
});
