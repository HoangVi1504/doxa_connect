@gr @p2p
Feature: 0154 Creator create GR from DO with partial quantity then approver approval GR

Scenario: P2P-GR-S01-002 P2P-GR-S02-001 Connected supplier create DO from PO with partial quantity then issue DO 
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
    And I logout account

    # Connected supplier create DO from PO with partial quantity then issue DO
    When I login with role "supplier 34"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Orders" link on header menu
    And I click to "Orders List" link on the left menu
    And I click to "POs List" link on the left sub menu
    Then I see 'PO List' page

    When "supplier" input PO No to filter PO in "PO" list
    And I double click to PO No in PO list
    And Wait for "3" seconds
    Then I see 'PO Detail' page
    And "supplier" see PO No in 'PO No' textbox at 'PO Detail' page

    When "supplier" call API view PO
    And I click to "Back" button format_1
    Then I see 'PO List' page

    When "supplier" input PO No to filter PO in "PO" list
    Then I see PO status in list is "ISSUED"
    And I see Supplier Ack status is "VIEWED"

    When I click to "Receipts" link on header menu
    And I click to "Create Delivery Order" link on the left menu
    Then I see 'Create DO' page

    When "supplier" input PO No to filter PO in "Create DO" list
    Then I see DO status in Create DO list is "NOT ISSUED"

    When I check to PO No checkbox at 'Create DO' page
    And I click to "Create Delivery Order" button format_2
    Then I see 'DO' page

    When I input delivery date as next "2" days to 'Delivery Date' textbox at 'Create DO' page
    And I input quantity "700" to 'To Convert' textbox in DO detail table
    When I click to "Create" button format_1
    Then I see a message "Delivery order has been successfully created" appears

    When I click to "I Understand" button format_1
    Then I see 'DO List' page

    When "supplier" input PO No to filter PO in "DO" list
    Then I see DO status in list is "PENDING ISSUE"

    When Get DO number in list
    And I double click to Do No in DO list
    And Wait for "6" seconds
    Then I see 'DO Detail' page
    And I see DO No in 'DO No' textbox at 'DO Detail' page

    When I click to "Issue" button format_1
    Then I see a message "Delivery order has been successfully updated" appears

    When I click to "I Understand" button format_1
    Then I see 'DO List' page

    When I input DO No to filter DO in "DO" list
    Then I see DO status in list is "PENDING RECEIPT"

Scenario: P2P-GR-S03-002 Creator create GR from DO with partial DO quantity
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Receipts" link on header menu
    And I click to "Create Receipt From DO" link on the left menu
    Then I see 'Create GR From DO' page

    When I input DO No to filter DO in "Create GR From DO" list
    Then I see DO status in list is "PENDING RECEIPT"

    When I check to DO No checkbox at 'Create GR' page
    And I click to "Create Goods Receipt" button format_2
    And Wait for "6" seconds
    Then I see 'Create GR From DO' page
    And I see Do No in 'DO Number' textbox at 'Create GR From DO' page

    When I select "auto approval Goods Receipt" from 'Approval Route' dropdown at 'Create GR' page
    And I input delivery date as next "4" days to 'Delivery Date' textbox at 'Create GR' page
    And I input "300" to 'Quantity Receiving' textbox in 'Items Ordered' table at 'Create GR' page
    And I click to "Create" button format_1
    Then I see a message "Goods receipt successfully submitted" appears

    When I click to "I Understand" button format_1
    Then I see 'GR List' page

    When I input DO No created from PO to filter DO in GR list
    Then I see GR status in GR list is "PENDING APPROVAL"
    And I see approval route in GR list is "auto approval Goods Receipt"

    When Get GR number in list

Scenario: P2P-GR-S05-001 Approver approval GR in Pending Approval status
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

Scenario: P2P-GR-S01-002 P2P-GR-S02-001 Connected supplier create DO from PO with partial quantity then issue DO 
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "supplier 34"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Receipts" link on header menu
    And I click to "Delivery Orders List" link on the left menu
    Then I see 'DO List' page

    When I input DO No to filter DO in "DO" list
    Then I see DO status in list is "PARTIALLY DELIVERED"

    When I click to "Create Delivery Order" link on the left menu
    Then I see 'Create DO' page

    When "supplier" input PO No to filter PO in "Create DO" list
    Then I see DO status in Create DO list is "PARTIALLY ISSUED"

    When I check to PO No checkbox at 'Create GR' page
    And I click to "Create Delivery Order" button format_2
    Then I see 'DO' page

    When I input delivery date as next "2" days to 'Delivery Date' textbox at 'Create DO' page
    And I input quantity "400" to 'To Convert' textbox in DO detail table
    And I click to "Create" button format_1
    Then I see a message "Delivery order has been successfully created" appears

    When I click to "I Understand" button format_1
    Then I see 'DO List' page

    When "supplier" input PO No to filter PO in "DO" list
    Then I see DO status in list is "PENDING ISSUE"

    When Get DO number in list
    And I double click to Do No in DO list
    And Wait for "6" seconds
    Then I see 'DO Detail' page
    And I see DO No in 'DO No' textbox at 'DO Detail' page

    When I click to "Issue" button format_1
    Then I see a message "Delivery order has been successfully updated" appears

    When I click to "I Understand" button format_1
    Then I see 'DO List' page

    When I input DO No to filter DO in "DO" list
    Then I see DO status in list is "PENDING RECEIPT"

Scenario: P2P-GR-S03-003 Creator creaate GR from DO and save as draft then Submitting GR in Pending Submission status
    # Entity admin uncheck all function in Approval Configuration
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And Call API uncheck all function in Approval Configuration

    # Creator creaate GR from DO and save as draft then Submitting GR in Pending Submission status
    When I logout account 
    And I login with role "creator"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Receipts" link on header menu
    And I click to "Create Receipt From DO" link on the left menu
    Then I see 'Create GR From DO' page

    When I input DO No to filter DO in "Create GR From DO" list
    Then I see DO status in list is "PENDING RECEIPT"

    When I check to DO No checkbox at 'Create GR' page 
    And I click to "Create Goods Receipt" button format_2
    And Wait for "6" seconds
    Then I see 'Create GR From DO' page
    And I see Do No in 'DO Number' textbox at 'Create GR From DO' page

    When I select "auto approval Goods Receipt" from 'Approval Route' dropdown at 'Create GR' page
    And I input delivery date as next "4" days to 'Delivery Date' textbox at 'Create GR' page
    And I input "400" to 'Quantity Receiving' textbox in 'Items Ordered' table at 'Create GR' page
    And I click to "Save As Draft" button format_1
    Then I see a message "Goods receipt successfully saved" appears

    When I click to "I Understand" button format_1
    Then I see 'GR List' page

    When I input DO No created from PO to filter DO in GR list
    Then I see GR status in GR list is "PENDING SUBMISSION"
    And I see approval route in GR list is "auto approval Goods Receipt"

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

Scenario: P2P-GR-S05-001 Approver approval GR in Pending Approval status
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