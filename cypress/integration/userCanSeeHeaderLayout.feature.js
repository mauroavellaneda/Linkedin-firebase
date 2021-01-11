describe("Linkedin interface", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders header", () => {
    cy.get(".header").within(() => {
      cy.get(".header__left").within(() => {
        cy.get("img").should("contain", "search");
        cy.get(".header__search").should("contain", "SearIcon");
      });
      cy.get(".header__rigth").should("contain", "HeaderOption");
    });
  });
});
