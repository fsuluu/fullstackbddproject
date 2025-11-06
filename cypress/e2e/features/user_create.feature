Feature: Create a new user

  Scenario: Successfully creating a new user
    Given I send a POST request to create a new user
    Then I should get a 201 status code
