Feature: Comments API

  Scenario: Create a comment on a post
    Given I have a user and a post
    When I send a POST request to create a comment
    Then the response status should be 201
    And the comment body should contain "Nice post"