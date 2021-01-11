describe("Linkedin interface", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders header", () => {
    cy.get(".header").within(() => {
      cy.get(".title").should("contain", "Test header");
      cy.get(".header__left").should("contain", "");
      cy.get(".header__rigth").should("contain", "");
    });
  });
});
