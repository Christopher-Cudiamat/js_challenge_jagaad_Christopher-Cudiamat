/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

describe("Home page E2E test", () => {
  before("Page render correctly in desktop", () => {
    cy.visit("/");
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

    cy.get("[data-testid=loader]")
      .should("exist")
      .then(() => {
        sendResponse();

        cy.get("[data-testid=loader]").should("not.exist");
      });
  });

  it("Header logo has the right text", () => {
    cy.get("[data-testid=logo-text]").should("have.text", "TOUR");
  });

  it("Total price, bag icon and wishilist icon are visible in the header", () => {
    cy.get("[data-testid=total-price]").should("exist");
    cy.get("[data-testid=wishlist-button]").should("exist");
    cy.get("[data-testid=bag-button]").should("exist");
  });

  it("Main page should only have 6 cards at a time", () => {
    cy.get("[data-testid=product-list]>li").eq(5);
  });

  it("Footer has the right text", () => {
    cy.get("[data-testid=footer]").should(
      "have.text",
      "Copyright © 2021 Tour ITA Inc. All rights reserved"
    );
  });

  // // //TEST FOR WISHLIST///////////////////////////////////////////////////

  it("Add to wishlist button is disabled and the bag icon in the header shows a notification above when add to wishlist button is clicked", () => {
    cy.get("[data-testid=add-wishlist-button]").click({ multiple: true });
    cy.get("[data-testid=notification-icon]").should("exist");
    cy.get("[data-testid=add-wishlist-button]").should("be.disabled");
  });

  it("Wishlist modal appears when clicking the wishlist icon in the header", () => {
    cy.get("[data-testid=wishlist-button]").click();
    cy.get("[data-testid=modal]").should("exist");
  });

  it("A wishlisted item will be removed from the wishlist cart when clicking the close icon", () => {
    cy.get("[data-testid=wishlist-remove-button]").eq(0).click();
    cy.get("[data-testid=wishlist-item-container]>li")
      .eq(5)
      .should("not.exist");
  });

  it("When the card's add to cart button is clicked it becomes disabled and the bag icon in the header shows a notification above indicating a new item is added in the cart list", () => {
    cy.get("[data-testid=add-to-cart-button-container] > button").eq(0).click({
      multiple: true,
    });
    cy.get("[data-testid=add-to-cart-button-container] > button")
      .eq(0)
      .should("be.disabled");
    cy.get("[data-testid=notification-icon]").should("exist");
  });

  it("If all whishlist items are removed from the wishlist cart a message will appear saying that there is no result with a button to explore more tours. The notification sign will also disappear", () => {
    cy.get("[data-testid=wishlist-remove-button]").click({ multiple: true });
    cy.get("[data-testid=wishlist-item-container]>li").should("not.exist");
    cy.get("[data-testid=no-result-wishlist]").should("exist");
    cy.get("[data-testid=explore-button]").should("exist");
  });

  it("By clicking the explore button the wishlist modal will disappear", () => {
    cy.get("[data-testid=explore-button]").click({ multiple: true });
    cy.get("[data-testid=modal]").should("not.exist");
  });

  // //TEST FOR CART///////////////////////////////////////////////////

  it("When the home page card's add to cart button is clicked it becomes disabled along with the add to wishlist button while the bag icon in the header shows a notification above ", () => {
    cy.get("[data-testid=add-to-cart-button]").eq(0).click();
    cy.get("[data-testid=notification-icon]").should("exist");
    cy.get("[data-testid=add-to-cart-button]").eq(0).should("be.disabled");
    cy.get("[data-testid=add-wishlist-button]").eq(0).should("be.disabled");
  });

  it("Cart modal appears when clicking the bag icon in the header amd it will show all the added items to the cart", () => {
    cy.get("[data-testid=bag-button]").click();
    cy.get("[data-testid=modal]").should("exist");
  });

  it("If the quantity of an item is 1, the minus quantity ( - )button is disabled", () => {
    cy.get("[data-testid=quantity-item]").contains("1");
    cy.get("[data-testid=remove-quantity-button]").should("be.disabled");
  });

  it("If the quantity of an item is more than 1, the add quantity ( + ) button is enabled", () => {
    cy.get("[data-testid=add-quantity-button]").eq(0).click();
    cy.get("[data-testid=quantity-item]").eq(0).contains("2");
    cy.get("[data-testid=remove-quantity-button]").should("be.enabled");
  });

  it("Clicking the remove button removes an item from the cart list and when there is no item left a message will appear saying that there is no result found with a button explore tours. The notification sign will also disappear", () => {
    cy.get("[data-testid=remove-all-button]").click({ multiple: true });
    cy.get("[data-testid=cart-list-items]>li").should("not.exist");
    cy.get("[data-testid=no-result-cart-list]").should("exist");
    cy.get("[data-testid=explore-button]").should("exist");
  });

  it("Clicking the backdrop will close any modal", () => {
    cy.get("[data-testid=backdrop]").click({ force: true });
    cy.get("[data-testid=modal]").should("not.exist");
  });

  //Pagination test
  it("Active page should have a bold font weight for emphasis. Page number will start with 1 and the previos or left arrow should not be visible", () => {
    cy.get(".active").should("have.css", "font-weight", "700");
    cy.get(".pagination > li > a").eq(1).contains("1");
    cy.get(".pagination > li > a > img").first().should("not.visible");
  });

  it("Clicking anythe last number of the pagination will hide the next arrow", () => {
    cy.get(".pagination > li > a").eq(-2).click();
    cy.get(".pagination > li > a > img").last().should("not.visible");
  });
});
