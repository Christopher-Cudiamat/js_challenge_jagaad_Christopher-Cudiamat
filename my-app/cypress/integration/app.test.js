/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

describe("Home page E2E test", () => {
  beforeEach("Page render correctly in desktop", () => {
    cy.visit("/");
    cy.get(".container").should("exist");
    cy.viewport(1280, 900);
    cy.server();
  });

  it("Should show the loading spinner when loading the data then hide it afterwards", () => {
    let sendResponse;
    const trigger = new Promise((resolve) => {
      sendResponse = resolve;
    });

    cy.intercept("data-url", (request) => {
      return trigger.then(() => {
        request.reply();
      });
    });

    cy.visit("/");

    // eslint-disable-next-line jest/valid-expect-in-promise
    cy.get("[data-testId=loader]")
      .should("be.visible")
      .then(() => {
        sendResponse();

        cy.get("[data-testId=loader]").should("not.exist");
      });
  });

  it("Header logo has the right text", () => {
    cy.get("[data-testId=logo-text]").should("have.text", "TOUR");
  });

  it("Clicking bag icon shows the modal", () => {
    cy.get("[data-testId=bag-button]").click();
    cy.get("[data-testId=no-result]").should("exist");
  });
});
