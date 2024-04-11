@pr @p2p
Feature: 0135 Submit PR in Pending submission status after save as draft PR then cancel PR in Pending Approval status

Scenario: P2P-PR-S03-001-002-003 Save as draft PR
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to "Requisitions" link on header menu
    And I click to "Requisitions" link on the left menu
    And I click to "Raise Requisition" link on the left sub menu
    Then I see 'Raise Requisition' page title

    # Raise PR with no input => check validation text
    When I expand layout sidebar menu if it open
    And I click to "Submit" button format_1
    And I click to PR title textbox at Raise PR page
    Then I see a validation text of 'Requisition Type' at 'Raise PR' page "Please select valid Type of Requisition" appears
    And I see a validation text of 'PR title' at 'Raise PR' page "Please enter valid PR Title" appears
    And I see a validation text of 'Procurement Type' at 'Raise PR' page "Please select valid Procurement Type" appears
    And I see a validation text of 'Approval Route' at 'Raise PR' page "Please select valid approval route" appears
    And I see a validation text of 'Delivery Address' at 'Raise PR' page "Please select valid Delivery Address" appears
    And I see a validation text of 'Delivery Date' at 'Raise PR' page "Please select valid Delivery Date" appears
    And I see a validation text of 'Delivery Contact Person' at 'Raise PR' page "Please Select Valid Delivery Contact Person" appears
    And I see a validation text of 'Contact Number' at 'Raise PR' page "Please enter valid Contact Number" appears

    When I fill data in Raise Requisition tab from "pr_v5" json file at Raise PR page
    And I fill data in General Information tab from "pr_v5" json file at Raise PR page
    And I fill data in Request Terms tab from "pr_v5" json file at Raise PR page
    And I select 'auto buyer' from 'Delivery Contact Person' dropdown at Raise PR page
    Then I see email address of contact person at Raise PR page is "auto.buyer@getnada.com"
    And I see contact number of contact person at Raise PR page is "987987987"

    # Raise PR with no input when adding manual items => check error message
    When I click to "Add Manual" button format_2
    Then I see Item delete button at Raise PR page

    When I click to "Submit" button format_1
    Then I see a message "Quantity must be greater than 0." appears

    When I click to "OK" button format_2
    When I click to Item delete button at Raise PR page
    And I add catalogue item from "pr_v5" json file at Raise PR page
    # Save as draft PR => PENDING SUBMISSION status
    And I click to "Save As Draft" button format_2
    Then I see a message "Purchase requisition successfully saved" appears  

    When I click to "I Understand" button format_1
    Then I see 'PR List' page title

    When I input PR title from "pr_v5" json file to 'Search PR' textbox
    Then I see PR status in PR list is "PENDING SUBMISSION"
    And I see Requester name in PR list from "pr_v5" json file
    And I see Procurement type in PR list from "pr_v5" json file

    When Get PR number in PR list

Scenario: P2P-PR-S06-001 Submit PR in Pending Submission status after save as draft PR
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Requisitions" link on the left menu
    And I click to "PRs List" link on the left sub menu
    Then I see 'PR List' page title

    When I input PR title from "pr_v5" json file to 'Search PR' textbox
    Then I see PR title in PR list from "pr_v5" json file 
    And I see PR status in PR list is "PENDING SUBMISSION"

    When I double click to PR title in PR list from "pr_v5" json file
    And Wait for "6" seconds
    Then I see 'PR detail' page title
    And I see PR title at PR detail page from "pr_v5" json file

    When I click to "Submit" button format_1
    Then I see a message "Purchase requisition successfully submitted" appears

    When I click to "I Understand" button format_1
    Then I see 'PR List' page title

    When I input PR title from "pr_v5" json file to 'Search PR' textbox
    Then I see PR status in PR list is "PENDING APPROVAL"

Scenario: P2P-PR-S04-001 Cancel PR in Pending Approval status after Submit PR in Pending Submission status
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Requisitions" link on the left menu
    And I click to "PRs List" link on the left sub menu
    Then I see 'PR List' page title

    When I input PR title from "pr_v5" json file to 'Search PR' textbox
    Then I see PR title in PR list from "pr_v5" json file 
    And I see PR status in PR list is "PENDING APPROVAL"

    When I double click to PR title in PR list from "pr_v5" json file
    And Wait for "6" seconds
    Then I see 'PR detail' page title
    And I see PR title at PR detail page from "pr_v5" json file

    When I click to "Cancel" button format_1
    Then I see notification PR "Do you wish to cancel this request?" display at PR detail page
    And I click to "Yes" button format_1
    Then I see a message "Purchase requisition successfully cancelled" appears

    When I click to "I Understand" button format_1
    Then I see 'PR List' page title

    When I input PR title from "pr_v5" json file to 'Search PR' textbox
    Then I see PR status in PR list is "CANCELLED"