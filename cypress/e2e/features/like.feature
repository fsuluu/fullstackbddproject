Feature: Likes API

  Scenario: Like a post
    Given I have a user and a post to like
    When I send a POST request to create a like
    Then the response status should be 201