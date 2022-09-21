@ppr @p2p
Feature: 0126 Cancel draft PPR, recall submitted PPR then submit PPR in recalled status

Scenario: P2P-PPR-S04-002 Cancel draft PPR in PENDING SUBMISSION status
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And Call API save af draft PPR random
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Pre Purchase Requisition" link on the left menu
    And I click to "Purchase Pre-Requisitions List" link on the left sub menu
    Then I see 'PPR List' page title

    When I input PPR random to 'Search PPR' textbox
    Then I see PPR status in PPR list is "PENDING SUBMISSION"

    When Get PPR number in 'PPR' list
    And I double click to PPR number just created in 'PPR' list
    And Wait for "3" seconds
    Then I see 'PPR detail' page title
    And I see PPR title random at PPR detail page

    When I click to "Cancel" button format_2
    And I input reason cancel PPR "auto cancel this PPR" at Raise PPR page
    And I click to "Cancel" button format_1
    Then I see a message "PPR cancelled successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'PPR List' page title

    When I input PPR number just created to 'Filter PPR No' in "PPR" list
    Then I see PPR status in PPR list is "CANCELLED"

Scenario: P2P-PPR-S05-001 P2P-PPR-S06-002 Recall submitted PPR in PENDING APPROVAL status then submit PPR in RECALLED status
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
    And I double click to PPR number just created in 'PPR' list
    And Wait for "3" seconds
    Then I see 'PPR detail' page title
    And I see PPR title random at PPR detail page

    When I click to "Recall" button format_2
    Then I see a notification appears "Do you wish to recall this request?"

    When I click to "Yes" button format_1
    Then I see a message "PPR recalled successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'PPR List' page title

    When I input PPR number just created to 'Filter PPR No' in "PPR" list
    Then I see PPR status in PPR list is "RECALLED"

    # Submit PPR with RECALLED status
    When I double click to PPR number just created in 'PPR' list
    And Wait for "3" seconds
    Then I see 'PPR detail' page title
    And I see PPR title random at PPR detail page

    When I click to "Submit" button format_2
    Then I see a message "PPR edited successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'PPR List' page title

    When I input PPR number just created to 'Filter PPR No' in "PPR" list
    Then I see PPR status in PPR list is "PENDING APPROVAL"