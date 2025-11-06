import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I send a POST request to create a new user", () => {
  cy.request("POST", "http://localhost:3000/api/users", {
    name: "Fatma SULU",
    email: "fatma@example.com",
    password: "123456"
  }).as("createUser");
});

Then("I should get a 201 status code", function () {
  cy.get("@createUser").then((response) => {
    expect(response.status).to.eq(201);
  });
});
