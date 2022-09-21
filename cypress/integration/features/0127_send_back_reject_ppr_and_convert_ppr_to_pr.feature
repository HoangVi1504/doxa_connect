@ppr @p2p
Feature: 0127 Send back, reject PPR and convert PPR to PR

Scenario: P2P-PPR-S08-001 Send back PPR
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

    When Get PPR number in 'PPR' list
    And I logout account
    And I login with role "approver 1"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Pre Purchase Requisition" link on the left menu
    And I click to "Purchase Pre-Requisitions List" link on the left sub menu
    Then I see 'PPR List' page title

    When I input PPR number just created to 'Filter PPR No' in "PPR" list
    Then I see PPR status in PPR list is "PENDING APPROVAL"

    When I double click to PPR number just created in 'PPR' list
    And Wait for "3" seconds
    Then I see 'PPR detail' page title
    And I see PPR title random at PPR detail page

    When I click to "Send Back" button format_2
    And I input reason send back PPR "auto send back this PPR" at 'PPR' page
    And I click to "Send Back" button format_1

    Then I see a message "PPR sent back successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'PPR List' page title

    When I input PPR number just created to 'Filter PPR No' in "PPR" list
    Then I see PPR status in PPR list is "SENT BACK"

Scenario: P2P-PPR-S09-001 Reject PPR
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

    When Get PPR number in 'PPR' list
    And I logout account
    And I login with role "approver 1"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Pre Purchase Requisition" link on the left menu
    And I click to "Purchase Pre-Requisitions List" link on the left sub menu
    Then I see 'PPR List' page title

    When I input PPR number just created to 'Filter PPR No' in "PPR" list
    Then I see PPR status in PPR list is "PENDING APPROVAL"

    When I double click to PPR number just created in 'PPR' list
    And Wait for "3" seconds
    Then I see 'PPR detail' page title
    And I see PPR title random at PPR detail page

    When I click to "Reject" button format_2
    And I input reason reject PPR "auto reject this PPR" at 'PPR' page
    And I click to "Reject" button format_1

    Then I see a message "PPR rejected successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'PPR List' page title

    When I input PPR number just created to 'Filter PPR No' in "PPR" list
    Then I see PPR status in PPR list is "REJECTED"

Scenario: P2P-PPR-S10-001 Convert PPR to PR
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And Call API Raise PPR random
    And I logout account
    And I login with role "approver 1"
    And Call API approver PPR random
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Pre Purchase Requisition" link on the left menu
    And I click to "Purchase Pre-Requisitions List" link on the left sub menu
    Then I see 'PPR List' page title

    When I input PPR random to 'Search PPR' textbox
    Then I see PPR status in PPR list is "PENDING PURCHASER REVIEW"

    When Get PPR number in 'PPR' list
    And I logout account
    And I login with role "creator"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Pre Purchase Requisition" link on the left menu
    And I click to "Purchase Pre-Requisitions List" link on the left sub menu
    Then I see 'PPR List' page title

    When I input PPR number just created to 'Filter PPR No' in "PPR" list
    Then I see PPR status in PPR list is "PENDING PURCHASER REVIEW"

    When I double click to PPR number just created in 'PPR' list
    And Wait for "4" seconds
    Then I see PPR title random at PPR detail page

    When I click to "Convert To Request" button format_1
    Then I see a message "Converted to PR successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'PR List' page title

    When I input PPR number just created to 'Filter PPR No' in "PR" list
    Then I see PR status in PR list is "PENDING SUBMISSION"

    When I click to "Purchase Pre-Requisitions List" link on the left sub menu
    Then I see 'PPR List' page title

    When I input PPR number just created to 'Filter PPR No' in "PPR" list
    Then I see PPR status in PPR list is "CONVERTED TO PR"