@gr @p2p
Feature: 0151 Creator create GR from PO with full PO quantity then approver approval GR

Scenario: P2P-GR-S04-001 P2P-GR-S04-004 P2P-GR-S04-005 Creator create GR from PO with full PO quantity
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
    And Call API approver PR random
    And I logout account
    And I login with role "creator"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Orders" link on header menu
    And I click to "Requests Pending Conversion" link on the left menu
    And I click to "PRs To Be Converted List" link on the left sub menu
    Then I see 'PR To Be Converted List' title

    When I input PR No to filter PR in "PRs To Be Converted" list
    Then I see PR status in PR list is "PENDING CONVERSION TO PO"

    When I double click to PR No in 'PR To Be Converted' list
    And Wait for "6" seconds
    Then I see 'PR Convert Detail' page
    And I see PR No in 'PR No' textbox at 'PR Convert Detail' page
    
    When I click to "Convert to PO" button format_1
    Then I see a message "Converted to PO successfully" appears

    When I click to "I Understand" button format_1
    And I click to "Back" button format_1
    Then I see 'PR To Be Converted List' title

    When I click to "Orders List" link on the left menu
    And I click to "POs List" link on the left sub menu
    Then I see 'PO List' page

    When I input PR No to filter PR in "PO" list
    Then I see PO status in list is "PENDING ISSUE"
    And I see Supplier Ack status is "NOT VIEWED"

    When Get PO number in list
    And I double click to PO No in PO list
    And Wait for "3" seconds
    Then I see 'PO Detail' page
    And "buyer" see PO No in 'PO No' textbox at 'PO Detail' page

    When I select "auto approval PO" from 'Approval Route' dropdown at 'PO Detail' page
    And I click to "Issue" button format_1
    Then I see a message "PO has been issued to supplier" appears

    When I click to "I Understand" button format_1
    Then I see 'PO List' page

    When "buyer" input PO No to filter PO in "PO" list
    Then I see PO status in list is "ISSUED"
    And I see Supplier Ack status is "NOT VIEWED"

    When I click to "Receipts" link on header menu
    And I click to "Create Receipt From PO" link on the left menu
    Then I see 'List Create GR From PO' page

    When "buyer" input PO No to filter PO in "Create GR From PO" list
    And I check to PO No checkbox at 'Create GR' page
    And I click to "Create Goods Receipt" button format_2
    And Wait for "6" seconds
    Then I see 'Create GR From PO' page

    # Create GR from PO without input
    When I click to "Create" button format_1
    Then I see a message "Validation error, please check your input." appears

    When I click to "OK" button format_2
    Then I see a validation text of 'Delivery Order No' at 'Create GR' page "Please enter valid Delivery Order No." appears
    And I see a validation text of 'Approval Route' at 'Create GR' page "Please select valid approval route" appears

    # Create GR from PO with receiving quantity more than remaining quantity
    When I input random DO No to DO textbox at 'Create GR' page
    And I select "auto approval Goods Receipt" from 'Approval Route' dropdown at 'Create GR' page
    And I input delivery date as next "2" days to 'Delivery Date' textbox at 'Create GR' page
    And I input "1200" to 'Quantity Receiving' textbox in 'Items Ordered' table at 'Create GR' page
    Then I see a message "Quantity Receiving cannot be greater than Pending Delivery Qty" appears
    
    When I click to "OK" button format_2
    And I input "1000" to 'Quantity Receiving' textbox in 'Items Ordered' table at 'Create GR' page
    And I click to "Create" button format_1
    Then I see a message "Goods receipt successfully submitted for" appears

    When I click to "I Understand" button format_1
    Then I see 'GR List' page

    When I input DO No to filter DO in GR list
    Then I see GR status in GR list is "PENDING APPROVAL"
    And I see approval route in GR list is "auto approval Goods Receipt"

    When Get GR number in list

Scenario: P2P-GR-S05-001 Approver approval GR
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "approver 1"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Receipts" link on header menu
    And I click to "Receipts List" link on the left menu
    Then I see 'GR List' page

    When I input GR No to filter GR in list
    Then I see GR status in GR list is "PENDING APPROVAL"

    When I double click to GR No in list
    And Wait for "6" seconds
    Then I see 'GR Detail' page
    And I see GR No at 'GR Detail' page

    When I click to "Approve" button format_2
    Then I see a message "Goods receipt successfully approved" appears

    When I click to "I Understand" button format_1
    Then I see 'GR List' page

    When I input GR No to filter GR in list
    Then I see GR status in GR list is "COMPLETED"