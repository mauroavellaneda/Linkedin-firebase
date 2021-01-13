describe("Linkedin interface", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders header", () => {
    cy.get(".header").within(() => {
      cy.get(".header__left")
        .find("img")
        .should(
          "have.attr",
          "src",
          "https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
        );
      cy.get(".header__search")
        .find("input")
        .should("have.attr", "type", "text");
    });
  });
});
