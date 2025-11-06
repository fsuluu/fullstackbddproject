import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

Given("there is at least one category", () => {
  cy.request("POST", "/api/categories", { name: `Category_${Date.now()}` })
    .as("lastResponse");
});

When("I send a POST request to create a category", () => {
  cy.request("POST", "/api/categories", { name: "TestCategory" })
    .as("lastResponse");
});

When("I request the categories list", () => {
  cy.request("GET", "/api/categories")
    .as("lastResponse");
});