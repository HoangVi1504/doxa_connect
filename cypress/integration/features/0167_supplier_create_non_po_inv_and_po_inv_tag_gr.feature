@inv @inv_cn
Feature: 0167 Supplier create non-PO invoice and PO invoice that tag a GR

Scenario Outline: P2P-INV-S05-001 P2P-INV-S04-001 Supplier create Non-PO invoice
    # The supplier creates the invoice with invalid input
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "supplier 34"
    And I click to hamburger menu
    And I click to "Invoices" button format_2
    And Wait for "3" seconds
    And "supplier" call API set "Invoice" 'Document Prefix' as "Default"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Invoices" link on header menu
    And I click to "Invoices" link on the left menu
    And I click to "Create Invoice" link on the left sub menu
    Then I see 'Create Invoice' page

    When I click to "Issue" button format_1
    Then I see a message "Validation error, please check your input." appears

    When I click to "OK" button format_1
    Then I see a validation text of 'Invoice Type' "Please select valid Invoice Type" appears
    And I see a validation text of 'Due Date' "Please select valid Invoice Due Date" appears
    And I see a validation text of 'Buyer' "Please select valid Buyer" appears

    When I select "Non-PO Invoice" from 'Invoice Type' dropdown at 'Create Invoice' page
    And I select "AUTO_BUYER" from 'Buyer Code' dropdown at 'Create Invoice' page
    Then "supplier" see company name "AUTO BUYER" and "Add Item" table at 'Create Invoice' page

    When I click to "Add Manual" button format_2
    Then I see 'Item Delete' button in "Add Item" table at 'Create Invoice' page
    
    When I input "auto code" to 'Item Code' textbox in 'Add Item' table at 'Create Invoice' page
    And I input "item test inv" to 'Item Name' textbox in "Add Item" table at 'Create Invoice' page
    And I input "auto model" to 'Model' textbox in 'Add Item' table at 'Create Invoice' page
    And I input "auto size" to 'Size' textbox in 'Add Item' table at 'Create Invoice' page
    And I input "auto brand" to 'Brand' textbox in 'Add Item' table at 'Create Invoice' page
    And I input "-100" to 'Invoice Quantity' textbox in "Add Item" table at 'Create Invoice' page
    And I input "5000" to 'Invoice Unit Price' textbox in "Add Item" table at 'Create Invoice' page
    And I select "Supplier34_TC" from 'Tax Code' dropdown in "Add Item" table at 'Create Invoice' page
    And I select "CEN" from 'UOM' dropdown in 'Add Item' table at 'Create Invoice' page
    And I click to "Issue" button format_1
    Then I see a message "Invoice Quantity must be greater than 0" appears

    When I click to "OK" button format_1
    And I input "100" to 'Invoice Quantity' textbox in "Add Item" table at 'Create Invoice' page
    And I input "-5000" to 'Invoice Unit Price' textbox in "Add Item" table at 'Create Invoice' page
    And I click to "Issue" button format_1
    Then I see a message "Invoice Unit Price must be greater than 0" appears

    When I click to "OK" button format_1
    And I click to 'Item Delete' button in "Add Item" table at 'Create Invoice' page
    And I click to "Issue" button format_1
    Then I see a message "Please Add valid Item" appears

    # The supplier creates the invoice with valid input
    When I click to "Add Manual" button format_2
    Then I see 'Item Delete' button in "Add Item" table at 'Create Invoice' page

    When I input "auto code" to 'Item Code' textbox in 'Add Item' table at 'Create Invoice' page
    And I input "item test inv" to 'Item Name' textbox in "Add Item" table at 'Create Invoice' page
    And I input "auto model" to 'Model' textbox in 'Add Item' table at 'Create Invoice' page
    And I input "auto size" to 'Size' textbox in 'Add Item' table at 'Create Invoice' page
    And I input "auto brand" to 'Brand' textbox in 'Add Item' table at 'Create Invoice' page
    And I input "<invQty>" to 'Invoice Quantity' textbox in "Add Item" table at 'Create Invoice' page
    And I input "<unitPrice>" to 'Invoice Unit Price' textbox in "Add Item" table at 'Create Invoice' page
    And I select "Supplier34_TC" from 'Tax Code' dropdown in "Add Item" table at 'Create Invoice' page
    And I select "CEN" from 'UOM' dropdown in 'Add Item' table at 'Create Invoice' page
    Then I see 'Invoice Sub Total' is equal to "<invSubTotal>" at 'Create Invoice' page
    And I see 'Invoice Tax' is equal to "<tax>" at 'Create Invoice' page
    And I see 'Invoice Total' is equal to "<invTotal>" at 'Create Invoice' page

    When I check to 'Expected Amount' checkbox at 'Create Invoice' page
    And I input "<invTotal>" to 'Expected Amount' textbox at 'Create Invoice' page
    And I click to "Preview Invoice" button format_1
    Then I see pop-up appears to show preview of invoice

    When I click to "Close" button format_2
    And I click to "Issue" button format_1
    Then I see a message "Non project invoice created" appears

    When I click to "I Understand" button format_1
    Then I see 'Invoice List' page

    When Get INV number in list
    And "supplier" input INV No to filter INV in "INV" list
    Then I see Invoice status in list is "PENDING TWO WAY"

    Examples:
    # tax percentage = 1.0
    # invSubtotal = invQty * unitPrice
    # tax = invSubTotal * tax percentage 
    # invTotal = invSubTotal + tax
    |quantity|unitPrice|invQty|invSubTotal|tax|invTotal|
    |1000|5000|100|500,000.00|5,000.00|505,000.00|

Scenario: P2P-INV-S07-004 AP Specialist approve invoice
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And Call API uncheck all function in Approval Configuration
    And Call API opt out approval configuration for "Invoice" feature
    And I logout account
    Then I see 'Doxa Connect' image appears

    When I login with role "ap specialist"
    And I click to hamburger menu
    And I click to "Invoices" button format_2
    And Wait for "3" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Invoices" link on header menu
    And I click to "Invoices" link on the left menu
    And I click to "Invoice Pending Approval" link on the left sub menu
    Then I see 'Invoices Pending Approval List' page

    When "buyer" input INV No to filter INV in "INV Pending Approval" list
    Then I see Invoice status in list is "PENDING TWO WAY"
    And I see Invoice Type in list is "NON PO INVOICE"

    When I double click to INV No in 'Invoice Pending Approval' list
    And Wait for "6" seconds
    Then I see 'Invoice Pending Approval' page
    And I see INV No in 'Invoice No' textbox appears
    And I see 'Approval Route' dropdown at 'Invoice Details' page is disabled

    When I select "G/L auto 1" from 'GL Account' dropdown at 'Invoice Pending Approval' page
    And I click to "Approve" button format_1
    Then I see a message "Invoice has been issued to pending approval" appears

    When I click to "I Understand" button format_1
    Then I see 'Invoices Pending Approval List' page

    When I click to "Invoices List" link on the left sub menu
    Then I see 'Invoice List' page

    When "buyer" input INV No to filter INV in "INV" list
    Then I see Invoice status in list is "APPROVED TWO WAY"

Scenario Outline: P2P-INV-S03-002 Supplier creates the first invoice for a PO that tag any GR with the correct input
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

    When I click to "Receipts" link on header menu
    And I click to "Create Receipt From PO" link on the left menu
    Then I see 'List Create GR From PO' page

    When "buyer" input PO No to filter PO in "Create GR From PO" list
    And I check to PO No checkbox at 'Create GR' page
    And I click to "Create Goods Receipt" button format_2
    And Wait for "6" seconds
    Then I see 'Create GR From PO' page

    When I input random DO No to DO textbox at 'Create GR' page
    And I select "auto approval Goods Receipt" from 'Approval Route' dropdown at 'Create GR' page
    And I input delivery date as next "2" days to 'Delivery Date' textbox at 'Create GR' page
    And I input "1000" to 'Quantity Receiving' textbox in 'Items Ordered' table at 'Create GR' page
    And I click to "Create" button format_1
    Then I see a message "Goods receipt successfully submitted for" appears

    When I click to "I Understand" button format_1
    Then I see 'GR List' page

    When I input DO No to filter DO in GR list
    Then I see GR status in GR list is "PENDING APPROVAL"
    And I see approval route in GR list is "auto approval Goods Receipt"

    When Get GR number in list
    And I logout account
    And I login with role "approver 1"
    And Call API approval GR

    # Supplier Create PO Invoice
    When I logout account
    And I login with role "supplier 34"
    And I click to hamburger menu
    And I click to "Invoices" button format_2
    And Wait for "3" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And Wait for "2" seconds
    And I click to "Invoices" link on header menu
    And I click to "Invoices" link on the left menu
    And I click to "Create Invoice" link on the left sub menu
    Then I see 'Create Invoice' page

    When I select "PO Invoice" from 'Invoice Type' dropdown at 'Create Invoice' page
    And I select "AUTO_BUYER" from 'Buyer Code' dropdown at 'Create Invoice' page
    Then "supplier" see company name "AUTO BUYER" and "Added PO" table at 'Create Invoice' page

    When I input PO No to filter PO in 'Select PO' table at 'Create Invoice' page
    And I check to PO No just created checkbox at 'Create Invoice' page
    Then I see PO No in 'Added PO' table at 'Create Invoice' page

    When I input "<invQty>" to 'Invoice Quantity' textbox in "Added PO" table at 'Create Invoice' page
    Then I see 'Invoice Sub Total' is equal to "<invSubTotal>" at 'Create Invoice' page
    And I see 'Invoice Tax' is equal to "<tax>" at 'Create Invoice' page
    And I see 'Invoice Total' is equal to "<invTotal>" at 'Create Invoice' page

    When I check to 'Expected Amount' checkbox at 'Create Invoice' page
    And I input "<invTotal>" to 'Expected Amount' textbox at 'Create Invoice' page
    And I click to "Preview Invoice" button format_1
    Then I see pop-up appears to show preview of invoice

    When I click to "Close" button format_2
    And I click to "Issue" button format_1
    Then I see a message "Project invoice created" appears

    When I click to "I Understand" button format_1
    Then I see 'Invoice List' page

    When Get INV number in list
    And "supplier" input INV No to filter INV in "INV" list
    Then I see Invoice status in list is "PENDING THREE WAY"

    Examples:
    # tax percentage = 0.5
    # invSubtotal = invQty * unitPrice
    # tax = invSubTotal * tax percentage 
    # invTotal = invSubTotal + tax
    |quantity|unitPrice|invQty|invSubTotal|tax|invTotal|
    |1000|5000|100|500,000.00|5,000.00|505,000.00|

Scenario: Entity admin uncheck all function in Approval Configuration
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And Call API uncheck all function in Approval Configuration