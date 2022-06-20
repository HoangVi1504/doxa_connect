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
    And Call API convert PR to PO
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Orders" link on header menu
    And I click to "Orders List" link on the left menu
    And I click to "POs List" link on the left sub menu
    And I input PO No to filter PO in list
    Then I see see PO status in list is "PENDING ISSUE"
    And I see Supplier Ack status is "NOT VIEWED"

    When Get PO number in list
    And I double click to PO No in list
    Then I see 'PO Detail' page

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
    And I double click to PO No in list
    Then I see 'PO Detail' page
    And I see "View PO" button format_1

    When Call API view PO
    And I click to "Back" button format_1
    And I input PO No to filter PO in list
    Then I see PO status in list is "ISSUED"
    And I see Supplier Ack status is "VIEWED"

    When I click to "Receipts" link on header menu
    And I click to "Create Delivery Order" link on the left menu
    And I input PO No to filter PO in list
    Then I see DO status "NOT ISSUED"

    When I click to PO No checkbox
    And I click to "Create Delivery Order" button format_2
    Then I see create DO page

    When I click to "Create" button format_1
    Then I see a message "Validation error, please check your input." appears
    
    When I click to "OK" button format_1
    Then I see a validation text of 'Delivery date' at Create DO page "Please select valid Delivery Date" appears

    When I input delivery date as next "2" days to 'Delivery Date' textbox at Create DO page
    And I input quantity "1200" to 'To Convert' textbox in DO detail table
    And I click to "Create" button format_1
    Then I see a message "Items delivering is more than what requested" appears

    When I click to "OK" button format_1
    And I input quantity "1000" to 'To Convert' textbox in DO detail table
    And I click to "Create" button format_1
    Then I see a message "Delivery order has been successfully created" appears

    When I click to "I Understand" button format_1
    And I input PO No to filter PO in list
    Then I see DO status in DO list is "PENDING ISSUE"

    When Get DO No in list
    And I double click to Do No in list
    Then I see DO detail page
    And I see DO No in DO textbox at DO detail

    When I click to "Issue" button format_1
    Then I see a message "Delivery order has been successfully updated" appears

    When I click to "I Understand" button format_1
    And I input DO No to filter DO in list
    Then I see DO status in DO list is "PENDING RECEIPT"

Scenario: 03 Creator create GR from DO with full DO quantity
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Receipts" link on header menu
    And I click to "Create Receipt from DO" link on the left menu
    And I input DO No to filter DO in list
    Then I see DO status in DO list is "PENDING RECEIPT"

    When I click to DO No checkbox 
    And I click to "Create Goods Receipt" button format_2
    Then I see Create GR From DO page

    When I click to "Create" button format_1
    Then I see a message "Validation error, please check your input." appears

    When I click to "I Understand" button format_1
    Then I see a validaiion text of 'Delivery Date' at Create GR From DO page "Please select valid Delivery Date" appears
    And I see a validaiton text of 'Approval Route' at Create GR From DO page "Please select valid approval route" appears

    When I input delivery date as next "2" days to 'Delivery Date' textbox at Create GR From DO page
    And I input "auto approval Goods Receipt" to Approval Route textbox at Create GR From DO page
    And I input "1200" to Qty Receiving textbox at Create GR From DO page
    And I click to "Create" button format_1
    Then I see a message "Quantity Receiving cannot be greater than Delivery Order Quantity" appears

    When I click to "OK" button format_1
    And I input "1000" to Qty Receiving textbox at Create GR From DO page
    And I click to "Create" button format_1
    Then I see a message "Goods receipt successfully submitted" appears

    When I click to "I Understand" button format_1
    And I input DO No to filter Order Processed in list
    Then I see GR status in GR list is "PENDING APPROVAL"

    When Get GR number is list

Scenario: 04 Approver approval GR in Pending Approval status
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "approver 1"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Receipts" link on header menu
    And I click to "Receipts List" link on the left menu
    And I input GR No to filter GR in list
    Then I see GR status in GR list is "PENDING APPROVAL"

    When I double click to GR No in list
    Then I see GR detail page
    And I see GR No at GR detail page

    When I click to "Approve" button format_2
    Then I see a message "Goods receipt successfully approved" appears

    When I click to "I Understand" button format_1
    And I input GR No to filter GR in list
    Then I see GR status in GR list is "COMPLETED"