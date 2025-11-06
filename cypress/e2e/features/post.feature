Feature: Posts API

  # Her senaryodan önce yazar oluşturulacak
  Background:
    Given I create a user as author

  Scenario: Create a new post
    When I send a POST request to create a new post
    Then the response status should be 201
    And the response body should contain the post title "Test Post"

  Scenario: Get posts list
    Given there is at least one post
    When I request the posts list
    Then the response status should be 200
    And the response body should be an array
