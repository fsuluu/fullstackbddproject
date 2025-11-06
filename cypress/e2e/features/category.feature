Feature: Categories API

  Scenario: Create a category
    Given I send a POST request to create a category
    Then the response status should be 201
    And the response body should include the category name "TestCategory"

  Scenario: List categories
    Given there is at least one category
    When I request the categories list
    Then the response status should be 200