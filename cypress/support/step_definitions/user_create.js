import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I send a POST request to create a new user", () => {
  cy.request("POST", "/api/users", {
    name: `Fatma ${Date.now()}`,
    email: `fatma${Date.now()}@example.com`,
    password: "123456"
  }).as("lastResponse");
});

Then("I should get a 201 status code", () => {
  cy.get("@lastResponse").its("status").should("eq", 201);
});