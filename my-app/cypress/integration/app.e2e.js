/* eslint-disable no-undef */
export {};
describe("App E2E", () => {
  it("should visit localhost", () => {
    cy.visit("/");
    cy.get("h1").should("have.text", "TOUR");
  });
});
