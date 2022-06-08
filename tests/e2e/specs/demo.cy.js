// https://docs.cypress.io/api/table-of-contents

describe("My First Test", () => {
  beforeEach(() => {
    cy.intercept("http://localhost:3838/demo/**", (req) => {
      console.log("req.url", req.url);
      const someId = /\/demo\/(.*)/.exec(req.url)[1];
      console.log("Path Param ID:", someId);
      if (someId) {
        console.log("Got Id, send stuff");
        req.reply("Intercepted GET with id" + someId);
      } else {
        console.log("NO ID");
        req.reply("Intercepted LIST");
      }
    });
  });

  it("Visits the app root url", () => {
    cy.visit("/");
  });

  it("Other", () => {
    cy.log("Other");
  });
});
