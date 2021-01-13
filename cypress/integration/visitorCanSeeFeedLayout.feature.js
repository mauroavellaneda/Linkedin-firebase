describe("Linkedin feed", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders top feed", () => {
    cy.get(".feed").children().should("have.length", 1);
    cy.get(".feed").within(() => {
      cy.get(".feed__inputContainer").children().should("have.length", 2);
      cy.get(".feed__inputContainer").within(() => {
        cy.get("form").within(() => {
          cy.get("input").should("have.attr", "type", "text");
          cy.get("button").should("contain", "Send");
        });
      });
      cy.get(".feed__inputOptions").children().should("have.length", 4);
      cy.get(".feed__inputOptions").within(() => {
        cy.get("InputOption").should("have.attr", "title", "Photo");
      });
    });
  });
});
