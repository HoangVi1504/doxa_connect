@pr @p2p
Feature: 0136 Approver reject and send back PR in Pending Approval status

Scenario: P2P-PR-S09-001 Approver Reject PR in PENDING APPROVAL status
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And Call API Raise PR random
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Requisitions" link on the left menu
    And I click to "PRs List" link on the left sub menu
    Then I see 'PR List' page title

    When I input PR title random to 'Search PR' textbox
    Then I see PR status in PR list is "PENDING APPROVAL"

    When Get PR number in PR list
    And I logout account
    And I login with role "approver 1"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Requisitions" link on the left menu
    And I click to "PRs List" link on the left sub menu
    Then I see 'PR List' page title

    When I input PR title random to 'Search PR' textbox
    Then I see PR status in PR list is "PENDING APPROVAL"

    When Call API navigate to "PR detail" page of PR random
    And Wait for "6" seconds
    And I click to "Reject" button format_1
    And I input reason send back or reject "auto reject this PR" at Raise PR page
    And I click to Reject PR button at Raise PR page
    Then I see a message "Purchase requisition successfully rejected" appears

    When I click to "I Understand" button format_1
    Then I see 'PR List' page title

    When I input PR title random to 'Search PR' textbox
    Then I see PR status in PR list is "REJECTED"

Scenario: P2P-PR-S08-001 Approver Send back PR in PENDING APPROVAL status
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And Call API Raise PR random
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Requisitions" link on the left menu
    And I click to "PRs List" link on the left sub menu
    Then I see 'PR List' page title

    When I input PR title random to 'Search PR' textbox
    Then I see PR status in PR list is "PENDING APPROVAL"

    When Get PR number in PR list
    And I logout account
    And I login with role "approver 1"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Requisitions" link on the left menu
    And I click to "PRs List" link on the left sub menu
    Then I see 'PR List' page title

    When I input PR title random to 'Search PR' textbox
    Then I see PR status in PR list is "PENDING APPROVAL"

    When Call API navigate to "PR detail" page of PR random
    And Wait for "6" seconds
    And I click to "Send Back" button format_1
    And I input reason send back or reject "auto send back this PR" at Raise PR page
    And I click to Send Back PR button at Raise PR page
    Then I see a message "Purchase requisition successfully sent back" appears

    When I click to "I Understand" button format_1
    Then I see 'PR List' page title

    When I input PR title random to 'Search PR' textbox
    Then I see PR status in PR list is "SENT BACK"

Scenario: P2P-PR-S05-001 Creator recall PR in Pending Approval status then submit PR in Recalled status
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And Call API Raise PR random
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Requisitions" link on the left menu
    And I click to "PRs List" link on the left sub menu
    Then I see 'PR List' page title

    When I input PR title random to 'Search PR' textbox
    Then I see PR status in PR list is "PENDING APPROVAL"

    When Get PR number in PR list
    And Call API navigate to "PR detail" page of PR random
    And Wait for "6" seconds
    And I click to "Recall" button format_1
    Then I see notification PR "Do you wish to recall this request?" display at PR detail page

    When I click to "Yes" button format_1
    Then I see a message "Purchase requisition successfully recalled" appears

    When I click to "I Understand" button format_1
    Then I see 'PR List' page title

    When I input PR title random to 'Search PR' textbox
    Then I see PR status in PR list is "RECALLED"

    When Get PR number in PR list
    And Call API navigate to "Edit PR detail" page of PR random
    And Wait for "6" seconds
    And I select delivery address from "pr_v1" json file at Raise PR page
    And I click to Item delete button at Raise PR page
    And I add catalogue item from "pr_v5" json file at Raise PR page
    And I click to "Submit" button format_1
    Then I see a message "Purchase requisition have been successfully editted" appears

    When I click to "I Understand" button format_1
    Then I see 'PR List' page title

    When I input PR title random to 'Search PR' textbox
    Then I see PR status in PR list is "PENDING APPROVAL"