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

  it("Main page should only have 6 cards at a time", () => {
    cy.get("[data-testId=product-list]>li").eq(5);
  });

  it("Footer has the right text", () => {
    cy.get("[data-testId=footer]").should(
      "have.text",
      "Copyright © 2021 Tour ITA Inc. All rights reserved"
    );
  });

  //TEST FOR WISHLIST///////////////////////////////////////////////////

  it("Add to wishlist button is disabled and the bag icon in the header shows a notification above when add to wishlist button is clicked", () => {
    cy.get("[data-testId=add-wishlist-button]").click({ multiple: true });
    cy.get("[data-testId=notification-icon]").should("exist");
    cy.get("[data-testId=add-wishlist-button]").should("be.disabled");
  });

  it("Wishlist modal appears when clicking the wishlist icon in the header", () => {
    cy.get("[data-testId=wishlist-button]").click();
    cy.get("[data-testId=modal]").should("exist");
  });

  it("A wishlisted item will be removed from the wishlist cart when clicking the close icon", () => {
    cy.get("[data-testId=wishlist-remove-button]").eq(0).click();
    cy.get("[data-testId=wishlist-item-container]>li")
      .eq(5)
      .should("not.exist");
  });

  it("When the card's add to cart button is clicked it becomes disabled and the bag icon in the header shows a notification above indicating a new item is added in the cart list", () => {
    cy.get("[data-testId=add-to-cart-button-container] > button").eq(0).click({
      multiple: true,
    });
    cy.get("[data-testId=add-to-cart-button-container] > button")
      .eq(0)
      .should("be.disabled");
    cy.get("[data-testId=notification-icon]").should("exist");
  });

  it("If all whishlist items are removed from the wishlist cart a message will appear saying that there is no result with a button to explore more tours. The notification sign will also disappear", () => {
    cy.get("[data-testId=wishlist-remove-button]").click({ multiple: true });
    cy.get("[data-testId=wishlist-item-container]>li").should("not.exist");
    cy.get("[data-testId=no-result-wishlist]").should("exist");
    cy.get("[data-testId=explore-button]").should("exist");
  });

  it("By clicking the explore button the wishlist modal will disappear", () => {
    cy.get("[data-testId=explore-button]").click({ multiple: true });
    cy.get("[data-testId=modal]").should("not.exist");
  });

  //TEST FOR CART///////////////////////////////////////////////////

  it("When the home page card's add to cart button is clicked it becomes disabled along with the add to wishlist button while the bag icon in the header shows a notification above ", () => {
    cy.get("[data-testId=add-to-cart-button]").eq(0).click();
    cy.get("[data-testId=notification-icon]").should("exist");
    cy.get("[data-testId=add-to-cart-button]").eq(0).should("be.disabled");
    cy.get("[data-testId=add-wishlist-button]").eq(0).should("be.disabled");
  });

  it("Cart modal appears when clicking the bag icon in the header amd it will show all the added items to the cart", () => {
    cy.get("[data-testId=bag-button]").click();
    cy.get("[data-testId=modal]").should("exist");
  });

  it("If the quantity of an item is 1, the minus quantity ( - )button is disabled", () => {
    cy.get("[data-testId=quantity-item]").contains("1");
    cy.get("[data-testId=remove-quantity-button]").should("be.disabled");
  });

  it("If the quantity of an item is more than 1, the add quantity ( + ) button is enabled", () => {
    cy.get("[data-testId=add-quantity-button]").eq(0).click();
    cy.get("[data-testId=quantity-item]").eq(0).contains("2");
    cy.get("[data-testId=remove-quantity-button]").should("be.enabled");
  });

  it("Clicking the remove button removes an item from the cart list and when there is no item left a message will appear saying that there is no result found with a button explore tours. The notification sign will also disappear", () => {
    cy.get("[data-testId=remove-all-button]").click({ multiple: true });
    cy.get("[data-testId=cart-list-items]>li").should("not.exist");
    cy.get("[data-testId=no-result-cart-list]").should("exist");
    cy.get("[data-testId=explore-button]").should("exist");
  });

  it("Clicking the backdrop will close any modal", () => {
    cy.get("[data-testId=backdrop]").click({ force: true });
    cy.get("[data-testId=modal]").should("not.exist");
  });

  it("Modal disappears when clicking explore button inside it", () => {
    cy.get("[data-testId=explore-button]").click();
    cy.get("[data-testId=modal]").should("not.exist");
  });

  it("Cart list modal appears when clicking bag icon", () => {
    cy.get("[data-testId=bag-button]").click();
    cy.get("[data-testId=modal]").should("exist");
  });

  it("Modal disappears when clicking explore button inside it", () => {
    cy.get("[data-testId=explore-button]").click();
    cy.get("[data-testId=modal]").should("not.exist");
  });
});
