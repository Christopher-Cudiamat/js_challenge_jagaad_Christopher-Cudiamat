/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

describe("Home page E2E test", () => {
  before("Page render correctly in desktop", () => {
    cy.visit("/");
    cy.viewport(1280, 900);
    cy.server();
  });

  it("Should show the loading spinner when loading the data then hide it afterwards ", () => {
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

    cy.get("[data-testId=loader]")
      .should("exist")
      .then(() => {
        sendResponse();

        cy.get("[data-testId=loader]").should("not.exist");
      });
  });

  it("Header logo has the right text", () => {
    cy.get("[data-testId=logo-text]").should("have.text", "TOUR");
  });

  it("Total price, bag icon and wishilist icon are visible in the header", () => {
    cy.get("[data-testId=total-price]").should("exist");
    cy.get("[data-testId=wishlist-button]").should("exist");
    cy.get("[data-testId=bag-button]").should("exist");
  });

  it("A modal appears when clicking wishlist icon", () => {
    cy.get("[data-testId=wishlist-button]").click();
    cy.get("[data-testId=modal]").should("exist");
  });

  it("Modal disappears when clicking explore button inside it", () => {
    cy.get("[data-testId=explore-button]").click();
    cy.get("[data-testId=modal]").should("not.exist");
  });

  it("A modal appears when clicking bag icon", () => {
    cy.get("[data-testId=bag-button]").click();
    cy.get("[data-testId=modal]").should("exist");
  });

  it("Modal disappears when clicking explore button inside it", () => {
    cy.get("[data-testId=explore-button]").click();
    cy.get("[data-testId=modal]").should("not.exist");
  });

  it("Add to wishlist button is disabled and the bag icon in the header shows a notification above when add to wishlist button is clicked", () => {
    cy.get("[data-testId=add-wishlist-button]").click({ multiple: true });
    cy.get("[data-testId=notification-icon]").should("exist");
    cy.get("[data-testId=add-wishlist-button]").should("be.disabled");
  });

  it("Add to cart button is disabled and the bag icon in the header shows a notification above when add to cart button is clicked", () => {
    cy.get("[data-testId=add-to-cart-button]").click({ multiple: true });
    cy.get("[data-testId=notification-icon]").should("exist");
    cy.get("[data-testId=add-to-cart-button]").should("be.disabled");
  });

  it("Main page should only have 6 cards at a time", () => {
    cy.get("[data-testId=product-list]>li").eq(5);
  });

  it("Footer has the right text", () => {
    cy.get("[data-testId=footer]").should(
      "have.text",
      "Copyright © 2021 Tour ITA Inc. All rights reserved"
    );
  });
});
