import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

let userId;
let postId;
let categoryId;

Given("I have a user and a post", () => {
  cy.request("POST", "/api/users", {
    username: `commentUser_${Date.now()}`,
    email: `commentUser_${Date.now()}@example.com`,
    password: "123456",
  }).then(userRes => {
    userId = userRes.body.id;
    cy.request("POST", "/api/categories", { name: `Category_${Date.now()}` })
      .then(catRes => {
        categoryId = catRes.body.id;
        cy.request("POST", "/api/posts", {
          title: "Post for Comment",
          content: "Testing comment system",
          user_id: userId,
          category_id: categoryId
        }).then(postRes => {
          postId = postRes.body.id;
        });
      });
  });
});

When("I send a POST request to create a comment", () => {
  cy.request("POST", "/api/comments", {
    content: "Nice post!",
    user_id: userId,
    post_id: postId,
  }).as("lastResponse");
});