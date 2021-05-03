let letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

describe("TOPi Recipe UI", () => {
  it("Should return true when title component is correct", () => {
    cy.visit("/");
    cy.contains("Receitas de comida para Programadores").should(
      "to.have.length",
      1
    );
  });

  it("Should have 26 different id's on search by first letter menu", () => {
    for (var x = 0; x < letters.length; x++) {
      cy.get(`[id=search-${letters[x]}]`).should("to.have.length", 1);
    }
  });

  it("Should have search by first letter menu", () => {
    for (var x = 0; x < letters.length; x++) {
      cy.contains(letters[x]).should("to.have.length", 1);
    }
  });

  it("Should return the meal if the meal exists", () => {
    cy.visit("/");
    cy.get("[id=search-input]").type("egg");
    cy.get("[id=search-btn]").click();
    cy.get("[class=meal-name]").should("to.have.length", 5);
  });

  it("Should return message if the meal doesn't exist", () => {
    cy.visit("/");
    cy.get("[id=search-input]").type("asdygatsfbavsd");
    cy.get("[id=search-btn]").click();
    cy.contains("Ops, parece que não encontramos nenhuma receita!").should(
      "to.have.length",
      1
    );
  });

  it("Should open and close the modal", () => {
    cy.visit("/");
    cy.get("[data-id=I]").click();
    cy.wait(3000);
    cy.get("[class=recipe-btn]").click();
    cy.contains("Irish stew").should("to.have.length", 1);
    cy.wait(3000);
    cy.get("[id=recipe-close-btn]").click();
  });
});
