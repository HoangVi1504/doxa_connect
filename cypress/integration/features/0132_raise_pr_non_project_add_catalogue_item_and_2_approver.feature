@pr @p2p
Feature: 0132 Raise PR with Non-project, add catalogue item and 2 approver

Scenario: P2P-PR-S01-002 Raise PR with Non-project, add catalogue item and 2 approver
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to "Requisitions" link on header menu
    And I click to "Requisitions" link on the left menu
    And I click to "Raise Requisition" link on the left sub menu
    Then I see 'Raise Requisition' page title

    When I expand layout sidebar menu if it open
    And I fill data in Raise Requisition tab from "pr_v2" json file at Raise PR page
    And I fill data in General Information tab from "pr_v2" json file at Raise PR page
    And I fill data in Request Terms tab from "pr_v2" json file at Raise PR page
    And I select 'auto buyer' from 'Delivery Contact Person' dropdown at Raise PR page
    Then I see email address of contact person at Raise PR page is "auto.buyer@getnada.com"
    And I see contact number of contact person at Raise PR page is "987987987"

    When I add catalogue item from "pr_v2" json file at Raise PR page
    And I click to "Submit" button format_2
    Then I see a message "Purchase requisition successfully submitted" appears

    When I click to "I Understand" button format_1
    Then I see 'PR List' page title

    When I input PR title from "pr_v2" json file to 'Search PR' textbox
    Then I see PR title in PR list from "pr_v2" json file
    And I see PR status in PR list is "PENDING APPROVAL"
    And I see Requester name in PR list from "pr_v2" json file
    And I see Procurement type in PR list from "pr_v2" json file

    When Get PR number in PR list

Scenario: P2P-PR-S07-001 Approver approval PR
    # Approver 1 approval PR
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "approver 1"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Requisitions" link on the left menu
    And I click to "PRs List" link on the left sub menu
    Then I see 'PR List' page title

    When I input PR title from "pr_v2" json file to 'Search PR' textbox
    Then I see PR title in PR list from "pr_v2" json file 
    And I see PR status in PR list is "PENDING APPROVAL"

    When I double click to PR title in PR list from "pr_v2" json file
    And Wait for "6" seconds
    Then I see 'PR detail' page title
    And I see PR title at PR detail page from "pr_v2" json file

    When I click to "Approve" button format_2
    Then I see a message "Purchase requisition successfully approved" appears   

    When I click to "I Understand" button format_1
    And I logout account
    Then I see 'Doxa Connect' image appears

    When I login with role "approver 2"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Requisitions" link on the left menu
    And I click to "PRs List" link on the left sub menu
    Then I see 'PR List' page title

    When I input PR title from "pr_v2" json file to 'Search PR' textbox
    Then I see PR title in PR list from "pr_v2" json file

    When I double click to PR title in PR list from "pr_v2" json file
    And Wait for "6" seconds
    Then I see 'PR detail' page title
    And I see PR title at PR detail page from "pr_v2" json file

    When I click to "Approve" button format_2
    Then I see a message "Purchase requisition successfully approved" appears   

    When I click to "I Understand" button format_1
    Then I see 'PR List' page title

    When I input PR title from "pr_v2" json file to 'Search PR' textbox
    Then I see PR status in PR list is "PENDING CONVERSION TO PO"