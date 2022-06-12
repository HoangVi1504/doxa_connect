@pr
Feature: 0033 Raise PR with Non-project, add manual item and 1 approver

Scenario: 01 Raise PR with Non-project, add manual item and 1 approver
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to "Requisitions" link on header menu
    And I click to "Requisitions" link on the left menu
    And I click to "Raise Requisition" link on the left sub menu
    Then I see 'Raise Requisition' page title

    When I expand layout sidebar menu if it open
    And I fill data in Raise Requisition tab from "pr_v3" json file at Raise PR page
    And I fill data in General Information tab from "pr_v3" json file at Raise PR page
    And I fill data in Request Terms tab from "pr_v3" json file at Raise PR page
    And I add manual item from "pr_v3" json file at Raise PR page
    And I click to "Submit" button format_2
    Then I see a message "Purchase requisition successfully submitted" appears

    When I click to "I Understand" button format_1
    And I input PR title from "pr_v3" json file to 'Search PR' textbox
    Then I see PR title in PR list from "pr_v3" json file
    And I see PR status in PR list is "PENDING APPROVAL"
    And I see Requester name in PR list from "pr_v3" json file
    And I see Procurement type in PR list from "pr_v3" json file
    And I see Approval Route in PR list from "pr_v3" json file

    When Get PR number in PR list

Scenario: 02 Approver approval PR
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "approver 1"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Requisitions" link on the left menu
    And I click to "PRs List" link on the left sub menu
    And I input PR title from "pr_v3" json file to 'Search PR' textbox
    Then I see PR title in PR list from "pr_v3" json file 
    And I see PR status in PR list is "PENDING APPROVAL"

    # When I double click to PR title in PR list from "pr_v3" json file
    # work around
    When Call API navigate to "PR detail" page of PR random
    And Wait for "10" seconds
    # end work round
    Then I see 'PR detail' page title
    And I see PR title at PR detail page from "pr_v3" json file

    When I click to "Approve" button format_2
    Then I see a message "Purchase requisition successfully approved" appears   

    When I click to "I Understand" button format_1
    And I input PR title from "pr_v3" json file to 'Search PR' textbox
    Then I see PR status in PR list is "PENDING CONVERSION TO PO"