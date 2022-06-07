@pr
Feature: Raise and approval PR with Non-Project, add catalogue items to 2 approver

Scenario: 02 Approver approval PR
    # Approver 1 approval PR
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "approver 1"

    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Requisitions" link on the left menu
    And I click to "PRs List" link on the left sub menu

    And Wait for "3" seconds

    When Call API double click to PR title "PR100000069" in PR list
    Then I see 'PR detail' page title

    When I click to "Approve" button format_2
    Then I see a message "Purchase requisition successfully approved" appears

    When I click to "I Understand" button format_1
    And I logout account
    Then I see Doxa Connect 2.0 title