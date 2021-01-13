describe("Linkedin sidebar", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders sidebar top", () => {
    cy.get(".sidebar").within(() => {
      cy.get(".sidebar__top").within(() => {
        cy.get(".sidebar__img").should("have.attr", "alt", "cover");
        cy.get(".sidebar__name").should("contain", "Mauro Avellaneda");
        cy.get(".sidebar__email").should(
          "contain",
          "mauroeavellaneda@gmail.com"
        );
      });
    });
  });
  it("renders sidebar stats", () => {
    cy.get(".sidebar__stats").children().should("have.length", 2);
    cy.get(".sidebar__stats").within(() => {
      cy.get(".sidebar__stat").should("contain", "Who viewed your profile");
      cy.get(".sidebar__statNumber").should("contain", "86");
      cy.get(".sidebar__stat").should("contain", "Views of your post");
      cy.get(".sidebar__statNumber").should("contain", "362");
    });
  });
  it("renders sidebar bottom", () => {
    cy.get(".sidebar__bottom").within(() => {
        cy.get(".sidebar__recent").should("contain", "Recent");


    })

  })


});
