@inv @inv_cn
Feature: 0164 Creator create non-po invoice, AP Specialist approve invoice, Approver reject invoice

Scenario Outline: P2P-INV-S02-001-002 Buyer create Non-PO invoice
    # The buyer creates the invoice with invalid input
    Given Navigate to Invoice Module of Doxa Connect 2.0 site
    When I login with role "buyer"
    And "buyer" call API set "Invoice" 'Document Prefix' as "Default"
    And I logout account
    And I login with role "creator"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And Wait for "2" seconds
    And I click to "Invoices" link on header menu
    And I click to "Invoices" link on the left menu
    And I click to "Create Invoice" link on the left sub menu
    Then I see 'Create Invoice' page

    When I click to "Issue" button format_1
    Then I see a message "Validation error, please check your input." appears

    When I click to "OK" button format_1
    Then I see a validation text of 'Invoice Type' "Please select valid Invoice Type" appears
    And I see a validation text of 'Due Date' "Please select valid Invoice Due Date" appears
    And I see a validation text of 'Supplier' "Please select valid Supplier" appears

    When I select "Non-PO Invoice" from 'Invoice Type' dropdown at 'Create Invoice' page
    And I select "TEST_SUPPLIER_34" from 'Supplier Code' dropdown at 'Create Invoice' page
    Then "buyer" see company name "TEST SUPPLIER 34" and "Add Item" table at 'Create Invoice' page

    When I click to "Add Manual" button format_2
    Then I see 'Item Delete' button in "Add Item" table at 'Create Invoice' page
    
    When I input "auto code" to 'Item Code' textbox in 'Add Item' table at 'Create Invoice' page
    And I input "item test inv" to 'Item Name' textbox in "Add Item" table at 'Create Invoice' page
    And I input "auto model" to 'Model' textbox in 'Add Item' table at 'Create Invoice' page
    And I input "auto size" to 'Size' textbox in 'Add Item' table at 'Create Invoice' page
    And I input "auto brand" to 'Brand' textbox in 'Add Item' table at 'Create Invoice' page
    And I input "-100" to 'Invoice Quantity' textbox in "Add Item" table at 'Create Invoice' page
    And I input "5000" to 'Invoice Unit Price' textbox in "Add Item" table at 'Create Invoice' page
    And I select "11052022" from 'Tax Code' dropdown in "Add Item" table at 'Create Invoice' page
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

    # The buyer creates the invoice with valid input
    When I click to "Add Manual" button format_2
    Then I see 'Item Delete' button in "Add Item" table at 'Create Invoice' page

    When I input "auto code" to 'Item Code' textbox in 'Add Item' table at 'Create Invoice' page
    And I input "item test inv" to 'Item Name' textbox in "Add Item" table at 'Create Invoice' page
    And I input "auto model" to 'Model' textbox in 'Add Item' table at 'Create Invoice' page
    And I input "auto size" to 'Size' textbox in 'Add Item' table at 'Create Invoice' page
    And I input "auto brand" to 'Brand' textbox in 'Add Item' table at 'Create Invoice' page
    And I input "<invQty>" to 'Invoice Quantity' textbox in "Add Item" table at 'Create Invoice' page
    And I input "<unitPrice>" to 'Invoice Unit Price' textbox in "Add Item" table at 'Create Invoice' page
    And I select "11052022" from 'Tax Code' dropdown in "Add Item" table at 'Create Invoice' page
    And I select "CEN" from 'UOM' dropdown in 'Add Item' table at 'Create Invoice' page
    Then I see 'Invoice Sub Total' is equal to "<invSubTotal>" at 'Create Invoice' page
    And I see 'Invoice Tax' is equal to "<tax>" at 'Create Invoice' page
    And I see 'Invoice Total' is equal to "<invTotal>" at 'Create Invoice' page

    When I click to "Plus Tax" button "5" times at 'Create Invoice' page
    Then I see 'Invoice Sub Total' is equal to "<invSubTotal>" at 'Create Invoice' page
    And I see 'Invoice Tax' is equal to "<taxPlus5>" at 'Create Invoice' page
    And I see 'Invoice Total' is equal to "<invTotalPlus5>" at 'Create Invoice' page
    And I see "Plus Tax" button disappear at 'Create Invoice' page

    When I click to "Minus Tax" button "10" times at 'Create Invoice' page
    Then I see 'Invoice Sub Total' is equal to "<invSubTotal>" at 'Create Invoice' page
    And I see 'Invoice Tax' is equal to "<taxMinus5>" at 'Create Invoice' page
    And I see 'Invoice Total' is equal to "<invTotalMinus5>" at 'Create Invoice' page
    And I see "Minus Tax" button disappear at 'Create Invoice' page

    When I check to 'Expected Amount' checkbox at 'Create Invoice' page
    And I input "<invTotalMinus5>" to 'Expected Amount' textbox at 'Create Invoice' page
    And I click to "Preview Invoice" button format_1
    Then I see pop-up appears to show preview of invoice

    When I click to "Close" button format_2
    And I click to "Issue" button format_1
    Then I see a message "Non project invoice created" appears

    When I click to "I Understand" button format_1
    Then I see 'Invoice List' page
    
    When I click to "Invoice Pending Approval" link on the left sub menu
    Then I see 'Invoices Pending Approval List' page

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
    |quantity|unitPrice|invQty|invSubTotal|tax|invTotal|taxPlus5|invTotalPlus5|taxMinus5|invTotalMinus5|
    |1000|5000|100|500,000.00|2,500.00|502,500.00|2,500.05|502,500.05|2,499.95|502,499.95|

Scenario: P2P-INV-S07-003 P2P-INV-S08-003 AP Specialist approve invoice then Approver reject invoice
    # AP Specialist approve invoice
    Given Navigate to Invoice Module of Doxa Connect 2.0 site
    When I login with role "ap specialist"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And Wait for "2" seconds
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

    When I select "auto approval Invoices" from 'Approval Route' dropdown at 'Invoice Pending Approval' page
    And I select "G/L auto 1" from 'GL Account' dropdown at 'Invoice Pending Approval' page
    And I click to "Approve" button format_1
    Then I see a message "Invoice has been issued to pending approval" appears

    When I click to "I Understand" button format_1
    Then I see 'Invoices Pending Approval List' page

    When "buyer" input INV No to filter INV in "INV Pending Approval" list
    Then I see Invoice status in list is "PENDING APPROVAL"

    # Approver reject invoice
    When I logout account
    And I login with role "approver 1"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And Wait for "2" seconds
    And I click to "Invoices" link on header menu
    And I click to "Invoices" link on the left menu
    And I click to "Invoice Pending Approval" link on the left sub menu
    Then I see 'Invoices Pending Approval List' page

    When "buyer" input INV No to filter INV in "INV Pending Approval" list
    Then I see Invoice status in list is "PENDING APPROVAL"

    When I double click to INV No in 'Invoice Pending Approval' list
    And Wait for "6" seconds
    Then I see 'Invoice Pending Approval' page
    And I see INV No in 'Invoice No' textbox appears

    When I click to "Reject" button format_1
    And I input "auto reject invoice" to 'Reason' textbox at 'Invoice Pending Approval' page
    And I click to 'Reject' button in 'Reason Dialog Box' at 'Invoice Pending Approval' page
    Then I see a message "Invoice has been rejected" appears

    When I click to "I Understand" button format_1
    Then I see 'Invoices Pending Approval List' page

    When I click to "Invoices List" link on the left sub menu
    Then I see 'Invoice List' page

    When "buyer" input INV No to filter INV in "INV" list
    Then I see Invoice status in list is "REJECTED TWO WAY"