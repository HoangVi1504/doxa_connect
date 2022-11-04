@cn @inv_cn
Feature: 0172 Buyer create Credit Note with tax adjustment then AP Specialist and Approver approve Credit Note

Scenario Outline: Create PO invoice
    # Raise PR then Convert to PO and issue PO to supplier
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And Call API Raise PR random with item quantity "<quantity>", unit price "<unitPrice>"
    And I logout account
    And I login with role "approver 1"
    And Call API approver PR random
    And I logout account
    And I login with role "creator"
    And Call API convert PR just created random to PO
    And Call API submit PO

    # Create PO Invoice
    When I click to hamburger menu
    And I click to "Invoices" button format_2
    And Wait for "3" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Invoices" link on header menu
    And I click to "Invoices" link on the left menu
    And I click to "Create Invoice" link on the left sub menu
    Then I see 'Create Invoice' page

    When I select "PO Invoice" from 'Invoice Type' dropdown at 'Create Invoice' page
    And I select "TEST_SUPPLIER_34" from 'Supplier Code' dropdown at 'Create Invoice' page
    Then I see company name "TEST SUPPLIER 34" at 'Create Invoice' page

    When I input PO No to filter PO in 'Select PO' table at 'Create Invoice' page
    And I check to PO No just created checkbox at 'Create Invoice' page
    Then I see PO No in 'Added PO' table at 'Create Invoice' page

    When I input "<invQty>" to 'Invoice Quantity' textbox in "Added PO" table at 'Create Invoice' page
    And I select "11052022" from 'Tax Code' dropdown in "Added PO" table at 'Create Invoice' page
    Then I see 'Invoice Sub Total' is equal to "<invSubTotal>" at 'Create Invoice' page
    And I see 'Invoice Tax' is equal to "<tax>" at 'Create Invoice' page
    And I see 'Invoice Total' is equal to "<invTotal>" at 'Create Invoice' page

    When I click to "Issue" button format_1
    Then I see a message "Project invoice created" appears

    When I click to "I Understand" button format_1
    Then I see 'Invoice List' page

    When I click to "Invoice Pending Approval" link on the left sub menu
    Then I see 'Invoices Pending Approval List' page

    When I input PO No to filter PO in 'Invoice Pending Approval' list
    Then I see Invoice status in list is "PENDING TWO WAY"
    And I see Invoice Type in list is "PO INVOICE"

    When Get INV number in list
    And I click to "Invoices List" link on the left sub menu
    Then I see 'Invoice List' page

    When "buyer" input INV No to filter INV in "INV" list
    Then I see Invoice status in list is "PENDING TWO WAY"
    And I see Matching in list is "TWO WAY"

    Examples:
    # tax percentage = 0.5
    # invSubtotal = invQty * unitPrice
    # tax = invSubTotal * tax percentage 
    # invTotal = invSubTotal + tax
    |quantity|unitPrice|invQty|invSubTotal|tax|invTotal|
    |1000|5000|100|500,000.00|2,500.00|502,500.00|

Scenario Outline: P2P-CN-S01-002-003 Buyer create Credit Note with tax adjustment
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to hamburger menu
    And I click to "Invoices" button format_2
    And Wait for "3" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Invoices" link on header menu
    And I click to "Credit Notes" link on the left menu
    And I click to "Create Credit Note" link on the left sub menu
    Then I see 'Create Credit Note' page

    When I click to "Issue" button format_1
    Then I see a message "Validation error, please check your input." appears

    When I click to "OK" button format_1
    Then I see a validation text of 'Supplier Code' "Please select valid Supplier" appears at 'Create Credit Note' page

    When I select "TEST_SUPPLIER_34" from 'Supplier Code' dropdown at 'Create Credit Note' page
    Then I see company name "TEST SUPPLIER 34" at 'Create Credit Note' page

    When I select INV No from 'Reference Invoice' dropdown at 'Create Credit Note' page
    And I input credit note date as next "2" days to 'Creadit Note Date' textbox at 'Create Credit Note' page
    And I input "<cnQty>" to 'Item Quantity' textbox at 'Create Credit Note' page
    And I select "G/L auto 1" from 'GL Account' dropdown at 'Create Credit Note' page
    Then I see 'CN Sub Total' is equal to "<cnSubTotal>" at 'Credit Note' page
    And I see 'CN Tax' is equal to "<tax>" at 'Credit Note' page
    And I see 'CN Total' is equal to "<cnTotal>" at 'Credit Note' page
    
    When I input "-10" to 'Item Quantity' textbox at 'Create Credit Note' page
    And I click to "Issue" button format_1
    Then I see a message "Item Quantity must be greater than 0" appears

    When I click to "OK" button format_1
    And I input "<cnQty>" to 'Item Quantity' textbox at 'Create Credit Note' page
    And I input "-5000" to 'Unit Price' textbox at 'Create Credit Note' page
    And I click to "Issue" button format_1
    Then I see a message "Item Unit Price must be greater than 0" appears

    When I click to "OK" button format_1
    And I input "<unitPrice>" to 'Unit Price' textbox at 'Create Credit Note' page
    And I input "-1" to 'Exchange Rate' textbox at 'Create Credit Note' page
    And I click to "Issue" button format_1
    Then I see a message "Item Exchange Rate must be greater than 0" appears

    When I click to "OK" button format_1
    And I input "<exchangeRate>" to 'Exchange Rate' textbox at 'Create Credit Note' page
    And I input "a" to 'Item Quantity' textbox at 'Create Credit Note' page
    Then I see a message "please enter the number!" appears
    
    When I click to "OK" button format_1
    And I input "a" to 'Unit Price' textbox at 'Create Credit Note' page
    Then I see a message "please enter the number!" appears

    When I click to "OK" button format_1
    And I input "a" to 'Exchange Rate' textbox at 'Create Credit Note' page
    Then I see a message "please enter the number!" appears

    When I click to "OK" button format_1
    And I click to 'Item Delete' button in 'Add Item' table at 'Create Credit Note' page
    And I click to "Issue" button format_1
    Then I see a message "Please add valid Item Credit Note" appears

    When I select INV No from 'Reference Invoice' dropdown at 'Create Credit Note' page
    And I input credit note date as next "2" days to 'Creadit Note Date' textbox at 'Create Credit Note' page
    And I input "<cnQty>" to 'Item Quantity' textbox at 'Create Credit Note' page
    And I input "<exchangeRate>" to 'Exchange Rate' textbox at 'Create Credit Note' page
    And I select "G/L auto 1" from 'GL Account' dropdown at 'Create Credit Note' page
    Then I see 'CN Sub Total' is equal to "<cnSubTotal>" at 'Credit Note' page
    And I see 'CN Tax' is equal to "<tax>" at 'Credit Note' page
    And I see 'CN Total' is equal to "<cnTotal>" at 'Credit Note' page

    When I click to 'Plus Tax' button at 'Credit Note' page
    Then I see 'CN Sub Total' is equal to "50,000.00" at 'Credit Note' page
    And I see 'CN Tax' is equal to "250.01" at 'Credit Note' page
    And I see 'CN Total' is equal to "50,250.01" at 'Credit Note' page
    
    When I click to "Preview Credit Note" button format_1
    Then I see pop-up appears to show preview of credit note
    
    When I click to "Close" button format_2
    And I click to "Issue" button format_1
    Then I see a message "Credit note has been created successfull" appears

    When I click to "I Understand" button format_1
    Then I see 'Credit Note List' page

    When "buyer" input INV No to filter INV in 'Credit Notes' list
    Then I see credit note status in list is "PENDING APPROVAL"

    When I get CN number in list
    And I double click to CN No in 'Credit Notes' list
    And Wait for "6" seconds
    Then I see 'Credit Note Details' page
    And I see CN No in 'Credit Note No' textbox appears

    Examples:
    # tax percentage = 0.5
    # cnSubtotal = cnQty * unitPrice
    # tax = cnSubTotal * taxPercentage
    # cnTotal = cnSubTotal + tax
    |quantity|unitPrice|cnQty|exchangeRate|cnSubTotal|tax|cnTotal|
    |1000|5000|10|1|50,000.00|250.00|50,250.00|

Scenario: P2P-CN-S03-002 P2P-CN-S04-002 AP Specialist and Approver approve Credit Note
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "ap specialist"
    And I click to hamburger menu
    And I click to "Invoices" button format_2
    And Wait for "3" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Invoices" link on header menu
    And I click to "Credit Notes" link on the left menu
    And I click to "Credit Note List" link on the left sub menu
    Then I see 'Credit Note List' page

    When I input CN No to filter CN in 'Credit Notes' list
    Then I see credit note status in list is "PENDING APPROVAL"

    When I double click to CN No in 'Credit Notes' list
    And Wait for "6" seconds
    Then I see 'Credit Note Details' page
    And I see CN No in 'Credit Note No' textbox appears
    And I see 'CN Sub Total' is equal to "50,000.00" at 'Credit Note' page
    And I see 'CN Tax' is equal to "250.01" at 'Credit Note' page
    And I see 'CN Total' is equal to "50,250.01" at 'Credit Note' page

    When I select "AUTO CN APPROVER 1" from 'Approval Route' dropdown at 'Credit Note Details' page
    And I click to "Approve" button format_1
    Then I see a message "Credit note has been approved" appears

    When I click to "I Understand" button format_1
    Then I see 'Credit Note List' page

    When "buyer" input INV No to filter INV in 'Credit Notes' list
    Then I see credit note status in list is "PENDING CN APPROVAL"

    When I logout account
    And I login with role "approver 1"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Invoices" link on header menu
    And I click to "Credit Notes" link on the left menu
    And I click to "Credit Note List" link on the left sub menu
    Then I see 'Credit Note List' page

    When I input CN No to filter CN in 'Credit Notes' list
    Then I see credit note status in list is "PENDING CN APPROVAL"

    When I double click to CN No in 'Credit Notes' list
    And Wait for "6" seconds
    Then I see 'Credit Note Details' page
    And I see CN No in 'Credit Note No' textbox appears
    And I see 'CN Sub Total' is equal to "50,000.00" at 'Credit Note' page
    And I see 'CN Tax' is equal to "250.01" at 'Credit Note' page
    And I see 'CN Total' is equal to "50,250.01" at 'Credit Note' page

    When I click to "Approve" button format_1
    Then I see a message "Credit Note Approved" appears

    When I click to "I Understand" button format_1
    Then I see 'Credit Note List' page

    When I input CN No to filter CN in 'Credit Notes' list
    Then I see credit note status in list is "APPROVED"