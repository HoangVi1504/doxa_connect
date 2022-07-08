@gr
Feature: 0053 Creator create GR from DO with full quantity then approver approval GR

Scenario: 01 Creator convert PR to PO then issue PO
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
    And I input PR title random to 'Search PR' textbox
    And Get PR number in PR list
    And I click to "Orders" link on header menu
    And I click to "Orders List" link on the left menu
    And I click to "POs List" link on the left sub menu
    And I input PR No to filter PR in list
    Then I see PO status in list is "PENDING ISSUE"
    And I see Supplier Ack status is "NOT VIEWED"

    When Get PO number in list
    And I double click to PO No in PO list
    And Wait for "6" seconds
    Then I see 'PO Detail' page
    And I see PO No in 'PO No' textbox at 'PO Detail' page

    When I click to "Issue" button format_1
    Then I see a message "PO has been issued to supplier" appears

    When I click to "I Understand" button format_1
    And I input PO No to filter PO in list
    Then I see PO status in list is "ISSUED"
    And I see Supplier Ack status is "NOT VIEWED"

Scenario: 02 Connected supplier create DO from PO with full quantity then issue DO
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "supplier 1"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Orders" link on header menu
    And I click to "Orders List" link on the left menu
    And I click to "POs List" link on the left sub menu
    And I input PO No to filter PO in list
    And I double click to PO No in PO list
    And Wait for "6" seconds
    Then I see 'PO Detail' page
    And I see PO No in 'PO No' textbox at 'PO Detail' page

    When "Supplier" call API view PO
    And I click to "Back" button format_1
    And I input PO No to filter PO in list
    Then I see PO status in list is "ISSUED"
    And I see Supplier Ack status is "VIEWED"

    When I click to "Receipts" link on header menu
    And I click to "Create Delivery Order" link on the left menu
    And I input PO No to filter PO in list
    Then I see DO status in Create DO list is "NOT ISSUED"

    When I check to PO No checkbox at 'Create DO' page
    And I click to "Create Delivery Order" button format_2
    Then I see 'Create DO' page

    When I click to "Create" button format_1
    Then I see a message "Validation error, please check your input." appears
    
    When I click to "OK" button format_1
    Then I see a validation text of 'Delivery date' at 'Create DO' page "Please select valid Delivery Date" appears

    When I input delivery date as next "2" days to 'Delivery Date' textbox at 'Create DO' page
    And I input quantity "1200" to 'To Convert' textbox in DO detail table
    And I click to "Create" button format_1
    Then I see a message "Items delivering is more than what requested" appears

    When I click to "OK" button format_1
    And I input quantity "1000" to 'To Convert' textbox in DO detail table
    And I click to "Create" button format_1
    Then I see a message "Delivery order has been successfully created" appears

    When I click to "I Understand" button format_1
    And I input PO No to filter PO in list
    Then I see DO status in list is "PENDING ISSUE"

    When Get DO number in list
    And I double click to Do No in DO list
    And Wait for "6" seconds
    Then I see 'DO Detail' page
    And I see DO No in 'DO No' textbox at 'DO Detail' page

    When I click to "Issue" button format_1
    Then I see a message "Delivery order has been successfully updated" appears

    When I click to "I Understand" button format_1
    And I input DO No to filter DO in DO list
    Then I see DO status in list is "PENDING RECEIPT"

Scenario: 03 Creator create GR from DO with full DO quantity
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Receipts" link on header menu
    And I click to "Create Receipt from DO" link on the left menu
    And I input DO No to filter DO in DO list
    Then I see DO status in list is "PENDING RECEIPT"

    When I check to DO No checkbox at 'Create GR' page 
    And I click to "Create Goods Receipt" button format_2
    And Wait for "5" seconds
    Then I see 'Create GR From DO' page
    And I see Do No at Create GR From DO page

    When I click to "Create" button format_1
    Then I see a message "Validation error, please check your input." appears

    When I click to "OK" button format_1
    Then I see a validation text of 'Delivery Date' at 'Create GR' page "Please select valid Delivery Date" appears
    And I see a validation text of 'Approval Route' at 'Create GR' page "Please select valid approval route" appears

    When I select approval route "auto approval Goods Receipt" at 'Create GR' page
    And I input delivery date as next "2" days to 'Delivery Date' textbox at 'Create GR' page
    And I input "1200" to 'Quantity Receiving' textbox at table
    And I click to "Create" button format_1
    Then I see a message "Quantity Receiving cannot be greater than Delivery Order Quantity" appears

    When I click to "OK" button format_1
    And I input "1000" to 'Quantity Receiving' textbox at table
    And I click to "Create" button format_1
    Then I see a message "Goods receipt successfully submitted" appears

    When I click to "I Understand" button format_1
    And I input DO No created from PO to filter DO in GR list
    Then I see GR status in GR list is "PENDING APPROVAL"
    And I see approval route in GR list is "auto approval Goods Receipt"

    When Get GR number in list

Scenario: 04 Approver approval GR in Pending Approval status
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "approver 1"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Receipts" link on header menu
    And I click to "Receipts List" link on the left menu
    And I input GR No to filter GR in list
    Then I see GR status in GR list is "PENDING APPROVAL"

    When I double click to GR No in list
    And Wait for "6" seconds
    Then I see 'GR Detail' page
    And I see GR No at 'GR Detail' page

    When I click to "Approve" button format_2
    Then I see a message "Goods receipt successfully approved" appears

    When I click to "I Understand" button format_1
    And I input GR No to filter GR in list
    Then I see GR status in GR list is "COMPLETED"