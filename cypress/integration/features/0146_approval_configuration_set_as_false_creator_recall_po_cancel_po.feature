@po @p2p
Feature: 0146 Approval Configuration set as FALSE, creator recall PO, cancel PO in PENDING APPROVAL status

Scenario: P2P-PO-S03-002-004-005 Approval Configuration set as FALSE, creator recall PO, cancel PO in PENDING APPROVAL status
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And Call API Raise PR random
    And I logout account
    And I login with role "approver 1"
    And Call API approver PR random
    And I logout account
    And I login with role "creator"
    And Call API convert PR just created random to PO
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Requisitions" link on the left menu
    And I click to "PRs List" link on the left sub menu
    Then I see 'PR List' page title

    When I input PR title random to 'Search PR' textbox
    And Get PR number in PR list
    And I click to "Orders" link on header menu
    And I click to "Orders List" link on the left menu
    And I click to "POs List" link on the left sub menu
    Then I see 'PO List' page

    When I input PR No to filter PR in "PO" list
    Then I see PO status in list is "PENDING ISSUE"
    And I see Supplier Ack status is "NOT VIEWED"

    When Get PO number in list
    And I double click to PO No in PO list
    And Wait for "6" seconds
    Then I see 'PO Detail' page
    And I see PO No in 'PO No' textbox at 'PO Detail' page

    When I input "4500" to 'Item Unit Price' textbox at 'PO Detail' page
    And I click to "Issue" button format_1
    Then I see a message "Approval route is required" appears

    When I click to "OK" button format_1
    And I select approval route "auto approval PO" at 'PO detail' page
    And I click to "Issue" button format_1
    Then I see a message "PO has been submitted for approval" appears

    When I click to "I Understand" button format_1
    Then I see 'PO List' page 

    When "buyer" input PO No to filter PO in "PO" list
    Then I see PO status in list is "PENDING APPROVAL"

    # P2P-PO-S03-004 Recall PO
    When I double click to PO No in PO list
    And Wait for "6" seconds
    Then I see 'PO Detail' page
    And I see PO No in 'PO No' textbox at 'PO Detail' page

    When I click to "Recall" button format_1
    Then I see a notification appears "Do you wish to recall this request?"

    When I click to "Yes" button format_1
    Then I see a message "Recall is successful" appears

    When I click to "I Understand" button format_1
    Then I see 'PO List' page

    When "buyer" input PO No to filter PO in "PO" list
    Then I see PO status in list is "RECALLED"

    # Issue DO with RECALLED status
    When I double click to PO No in PO list
    And Wait for "6" seconds
    Then I see 'PO Detail' page
    And I see PO No in 'PO No' textbox at 'PO Detail' page

    When I click to "Issue" button format_1
    Then I see a message "PO has been submitted for approval" appears

    When I click to "I Understand" button format_1
    Then I see 'PO List' page

    When "buyer" input PO No to filter PO in "PO" list
    Then I see PO status in list is "PENDING APPROVAL"

    # P2P-PO-S03-005 Cancel PO in PENDING APPROVAL status
    When I double click to PO No in PO list
    And Wait for "6" seconds
    Then I see 'PO Detail' page
    And I see PO No in 'PO No' textbox at 'PO Detail' page

    When I click to "Cancel" button format_1
    Then I see a notification appears "Do you wish to cancel this order?"

    When I click to "Yes" button format_1
    Then I see a message "The purchase order has successfully been cancelled" appears

    When I click to "I Understand" button format_1
    Then I see 'PO List' page

    When "buyer" input PO No to filter PO in "PO" list
    Then I see PO status in list is "CANCELLED"