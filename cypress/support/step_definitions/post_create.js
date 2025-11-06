import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

let userId;
let categoryId;
let postId;

Given("I create a user as author", () => {
  cy.request("POST", "/api/users", {
    name: `Author User ${Date.now()}`,
    email: `author_${Date.now()}@example.com`,
    password: "password123"
  }).then((res) => {
    userId = res.body.id;

    // Aynı anda bir category de oluştur
    cy.request("POST", "/api/categories", { name: `Category_${Date.now()}` })
      .then(catRes => {
        categoryId = catRes.body.id;
      });
  });
});

Given("there is at least one post", () => {
  // Kullanıcı ve category varsa direkt post oluştur
  if (!userId || !categoryId) {
    cy.request("POST", "/api/users", {
      name: `Author User ${Date.now()}`,
      email: `author_${Date.now()}@example.com`,
      password: "password123"
    }).then(userRes => {
      userId = userRes.body.id;
      cy.request("POST", "/api/categories", { name: `Category_${Date.now()}` })
        .then(catRes => {
          categoryId = catRes.body.id;
          cy.request("POST", "/api/posts", {
            title: "Existing post",
            content: "Post content",
            user_id: userId,
            category_id: categoryId
          }).as("lastResponse");
        });
    });
  } else {
    cy.request("POST", "/api/posts", {
      title: "Existing post",
      content: "Post content",
      user_id: userId,
      category_id: categoryId
    }).as("lastResponse");
  }
});

When("I send a POST request to create a new post", () => {
  cy.request("POST", "/api/posts", {
    title: "Test Post",
    content: "Important content",
    user_id: userId,
    category_id: categoryId
  }).as("lastResponse");
});

When("I request the posts list", () => {
  cy.request("GET", "/api/posts").as("lastResponse");
});