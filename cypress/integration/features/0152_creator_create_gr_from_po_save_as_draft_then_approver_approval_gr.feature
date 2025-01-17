@gr @p2p
Feature: 0152 Creator create GR from PO save as draft then approver approval GR

Scenario: P2P-GR-S04-002 Creator create GR from PO with partial PO quantity
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And Call API Raise PR random
    And I logout account
    And I login with role "approver 1"
    And Call API approver PR random
    And I logout account
    And I login with role "creator"
    And Call API convert PR just created random to PO
    And Call API submit PO

    # Create GR from PO
    When I click to "Receipts" link on header menu
    And I click to "Create Receipt From PO" link on the left menu
    Then I see 'Create GR From PO' page

    When "buyer" input PO No to filter PO in "Create GR From PO" list
    And I check to PO No checkbox at 'Create GR' page
    And I click to "Create Goods Receipt" button format_2
    And Wait for "6" seconds
    Then I see 'Create GR From PO' page

    When I input random DO No to DO textbox at 'Create GR' page
    And I select "auto approval Goods Receipt" from 'Approval Route' dropdown at 'Create GR' page
    And I input delivery date as next "2" days to 'Delivery Date' textbox at 'Create GR' page
    And I input "500" to 'Quantity Receiving' textbox in 'Items Ordered' table at 'Create GR' page
    And I click to "Create" button format_1
    Then I see a message "Goods receipt successfully submitted for" appears

    When I click to "I Understand" button format_1
    Then I see 'GR List' page

    When I input DO No to filter DO in GR list
    Then I see GR status in GR list is "PENDING APPROVAL"
    And I see approval route in GR list is "auto approval Goods Receipt"

    When Get GR number in list

Scenario: P2P-GR-S05-001 Approver approval GR after creator create GR from PO with partial PO quantity
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

    When I click to "Orders" link on header menu
    And I click to "Orders List" link on the left menu
    And I click to "POs List" link on the left sub menu
    Then I see 'PO List' page

    When "buyer" input PO No to filter PO in "PO" list
    Then I see PO status in list is "PARTIALLY DELIVERED"

Scenario: P2P-GR-S04-003 Creator save as draft GR from PO then submit GR in Pending Submission status
    # Save as draft GR from PO => GR in Pending Submission status
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Receipts" link on header menu
    And I click to "Create Receipt From PO" link on the left menu
    Then I see 'Create GR From PO' page
    
    When "buyer" input PO No to filter PO in "Create GR From PO" list
    Then I see PO status in list is "PARTIALLY DELIVERED"
    
    When I check to PO No checkbox at 'Create GR' page
    And I click to "Create Goods Receipt" button format_2
    And Wait for "6" seconds
    Then I see 'Create GR From PO' page

    When I input random DO No to DO textbox at 'Create GR' page
    And I select "auto approval Goods Receipt" from 'Approval Route' dropdown at 'Create GR' page
    And I input delivery date as next "2" days to 'Delivery Date' textbox at 'Create GR' page
    And I input "250" to 'Quantity Receiving' textbox in 'Items Ordered' table at 'Create GR' page
    And I click to "Save As Draft" button format_1
    Then I see a message "Goods receipt successfully saved" appears
    
    When I click to "I Understand" button format_1
    Then I see 'GR List' page

    When I input DO No to filter DO in GR list
    Then I see GR status in GR list is "PENDING SUBMISSION"
    And I see approval route in GR list is "auto approval Goods Receipt"

    # Submit GR in Pending Submission status => GR in Pending Approval status
    When Get GR number in list
    And I double click to GR No in list
    And Wait for "6" seconds
    Then I see 'GR Detail' page
    And I see GR No at 'GR Detail' page

    When I click to "Submit" button format_1
    Then I see a message "Goods receipt successfully submitted" appears

    When I click to "I Understand" button format_1
    Then I see 'GR List' page

    When I input GR No to filter GR in list
    Then I see GR status in GR list is "PENDING APPROVAL"

Scenario: 04 Approver approval GR then creator close PO
    # Approver approval GR
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

    # # Creator close PO in PARTIALLY DELIVERED status
    When I logout account
    And I login with role "creator"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Orders" link on header menu
    And I click to "Orders List" link on the left menu
    And I click to "POs List" link on the left sub menu
    Then I see 'PO List' page

    When "buyer" input PO No to filter PO in "PO" list
    Then I see PO status in list is "PARTIALLY DELIVERED"

    When I double click to PO No in PO list
    And Wait for "3" seconds
    Then I see 'PO Detail' page
    And "buyer" see PO No in 'PO No' textbox at 'PO Detail' page

    When I click to "Mark Completed" button format_1
    And I input reason close PO at 'PO Detail' page is "auto close this PO"
    And I click to Mark Complete button at 'PO Detail' page
    Then I see a message "PO was closed successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'PO List' page

    When "buyer" input PO No to filter PO in "PO" list
    Then I see PO status in list is "CLOSED"