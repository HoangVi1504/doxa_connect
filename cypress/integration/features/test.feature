@pr
Feature: Raise and approval PR with Non-Project, add catalogue items to 2 approver

Scenario: 02 Approver approval PR
    # Approver 1 approval PR
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Requisitions" link on the left menu
    And I click to "PRs List" link on the left sub menu

    When Call API Raise PR random
    And I logout account
    And I login with role "approver 1"
    And Call API approver PR random