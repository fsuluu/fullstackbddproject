import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("the response status should be {int}", (status) => {
  cy.get("@lastResponse").its("status").should("eq", status);
});

Then("the response body should include the category name {string}", (name) => {
  cy.get("@lastResponse").its("body.name").should("include", name);
});

Then("the response body should be an array", () => {
  cy.get("@lastResponse").its("body").should("be.an", "array");
});

Then("the comment body should contain {string}", (text) => {
  cy.get("@lastResponse").its("body.content").should("include", text);
});

Then("the like body should include the user_id and post_id", () => {
  cy.get("@lastResponse").its("body").then((body) => {
    expect(body).to.have.property("user_id");
    expect(body).to.have.property("post_id");
  });
});

Then("the response body should contain the post title {string}", (title) => {
  cy.get("@lastResponse").its("body.title").should("eq", title);
});