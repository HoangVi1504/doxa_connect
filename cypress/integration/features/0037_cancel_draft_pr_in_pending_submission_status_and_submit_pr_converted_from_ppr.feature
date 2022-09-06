@pr @p2p
Feature: 0037 Cancel draft PR in Pending submission status and submit PR converted from PPR

Scenario: 01 Cancel draft PR in Pending Submission status
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And Call API Save draft PR random
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Requisitions" link on the left menu
    And I click to "PRs List" link on the left sub menu
    Then I see 'PR List' page title

    When I input PR title random to 'Search PR' textbox
    Then I see PR status in PR list is "PENDING SUBMISSION"

    When Get PR number in PR list
    And Call API navigate to "Edit draft PR" page of PR random
    And Wait for "6" seconds
    And I click to "Cancel" button format_1
    Then I see notification PR "Do you wish to cancel this request?" display at PR detail page

    When I click to "Yes" button format_1
    Then I see a message "Purchase requisition successfully cancelled" appears

    When I click to "I Understand" button format_1
    Then I see 'PR List' page title

    When I input PR title random to 'Search PR' textbox
    Then I see PR status in PR list is "CANCELLED"

Scenario: 02 Submit PR converted from PPR
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And Call API Raise PPR random
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Pre Purchase Requisition" link on the left menu
    And I click to "Purchase Pre-Requisitions List" link on the left sub menu
    Then I see 'PPR List' page title

    When I input PPR random to 'Search PPR' textbox
    Then I see PPR status in PPR list is "PENDING APPROVAL"

    When I logout account
    Then I see Doxa Connect 2.0 title

    When I login with role "approver 1"
    And Call API approver PPR random
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Pre Purchase Requisition" link on the left menu
    And I click to "Purchase Pre-Requisitions List" link on the left sub menu
    Then I see 'PPR List' page title

    When I input PPR random to 'Search PPR' textbox
    Then I see PPR status in PPR list is "PENDING PURCHASER REVIEW"

    When I logout account
    Then I see Doxa Connect 2.0 title

    When I login with role "creator"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Pre Purchase Requisition" link on the left menu
    And I click to "Purchase Pre-Requisitions List" link on the left sub menu
    Then I see 'PPR List' page title

    When Call API navigate to "Convert to PR" page of PPR random
    And Wait for "6" seconds
    Then I see PPR title random at PPR detail page

    When I click to "Convert To Request" button format_1
    Then I see a message "Converted to PR successfully" appears

    When I click to "I Understand" button format_1
    And I click to "Pre Purchase Requisition" link on the left menu
    And I click to "Purchase Pre-Requisitions List" link on the left sub menu
    Then I see 'PPR List' page title

    When I input PPR random to 'Search PPR' textbox
    Then I see PPR status in PPR list is "CONVERTED TO PR"

    When I click to "Requisitions" link on the left menu
    And I click to "PRs List" link on the left sub menu
    Then I see 'PR List' page title

    When I input PPR title random to 'Search PR' textbox
    Then I see PR status in PR list is "PENDING SUBMISSION"

    When Get PR number in PR list
    And Call API navigate to "Edit draft PR" page of PR random
    And Wait for "6" seconds
    Then I see 'PR detail' page title

    When I select approval route from "pr_v1" json file at Raise PR page
    # And I click to Item delete button at Raise PR page
    # And I add catalogue item from "pr_v5" json file at Raise PR page
    And I click to "Submit" button format_1
    Then I see a message "Purchase requisition successfully submitted" appears

    When I click to "I Understand" button format_1
    Then I see 'PR List' page title

    When I input PPR title random to 'Search PR' textbox
    Then I see PR status in PR list is "PENDING APPROVAL"