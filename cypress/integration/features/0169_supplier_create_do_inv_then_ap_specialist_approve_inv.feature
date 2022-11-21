@inv @inv_cn
Feature: 0169 Supplier create DO invoice then AP Specialist approve invoice

Scenario Outline: P2P-INV-S06-003 The Supplier creates the DO invoice with tax adjustment
    # Raise PR then Convert to PO and submit PO to supplier
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

    # Supplier issue DO
    When I logout account
    And I login with role "supplier 34"
    And Call Api get data after "ENTITY_ADMIN" login
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

    When Call API create DO from PO No just created
    And I click to "Receipts" link on header menu
    And I click to "Delivery Orders List" link on the left menu
    Then I see 'DO List' page

    When "supplier" input PO No to filter PO in "DO" list
    Then I see DO status in list is "PENDING ISSUE"

    When Get DO number in list
    And Call API Issue DO just created

    # Supplier Create DO Invoice
    When I click to hamburger menu
    And I click to "Invoices" button format_2
    And Wait for "3" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And Wait for "2" seconds
    And I click to "Invoices" link on header menu
    And I click to "Invoices" link on the left menu
    And I click to "Create Invoice" link on the left sub menu
    Then I see 'Create Invoice' page

    When I select "DO Invoice" from 'Invoice Type' dropdown at 'Create Invoice' page
    And I select "AUTO_BUYER" from 'Buyer Code' dropdown at 'Create Invoice' page
    Then "supplier" see company name "AUTO BUYER" and "Added DO" table at 'Create Invoice' page

    When I input DO No to filter DO in 'Select DO' table at 'Create Invoice' page
    And I check to DO No just created checkbox at 'Create Invoice' page
    Then I see DO No in 'Added DO' table at 'Create Invoice' page

    When I input "<invQty>" to 'Invoice Quantity' textbox in "Added DO" table at 'Create Invoice' page
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
    Then I see a message "Delivery order invoice created" appears

    When I click to "I Understand" button format_1
    Then I see 'Invoice List' page

    When Get INV number in list
    And "supplier" input INV No to filter INV in "INV" list
    Then I see Invoice status in list is "PENDING TWO WAY"

    When I double click to INV No in 'Purchase Invoice' list
    And Wait for "6" seconds
    Then I see 'Invoice Detail' page
    And I see INV No in 'Invoice No' textbox appears

    Examples:
    # tax percentage = 1.0
    # invSubtotal = invQty * unitPrice
    # tax = invSubTotal * tax percentage 
    # invTotal = invSubTotal + tax
    |quantity|unitPrice|invQty|invSubTotal|tax|invTotal|taxPlus5|invTotalPlus5|taxMinus5|invTotalMinus5|
    |1000|5000|100|500,000.00|5,000.00|505,000.00|5,000.05|505,000.05|4,999.95|504,999.95|

Scenario: Create a DO that tag GR
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

    When I logout account
    And I login with role "supplier 34"
    And Call Api get data after "ENTITY_ADMIN" login
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

    When Call API create DO from PO No just created
    And I click to "Receipts" link on header menu
    And I click to "Delivery Orders List" link on the left menu
    Then I see 'DO List' page

    When "supplier" input PO No to filter PO in "DO" list
    Then I see DO status in list is "PENDING ISSUE"

    When Get DO number in list
    And Call API Issue DO just created
    And I logout account
    And I login with role "creator"
    And Call API create GR from DO
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Receipts" link on header menu
    And I click to "Receipts List" link on the left menu
    Then I see 'GR List' page

    When I input DO No created from PO to filter DO in GR list
    Then I see GR status in GR list is "PENDING APPROVAL"

    When Get GR number in list
    And I logout account
    And I login with role "approver 1"
    And Call API approval GR

Scenario: P2P-INV-S06-002 The Supplier creates the invoice for a DO tagged to a GR with the correct input
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "supplier 34"
    And I click to hamburger menu
    And I click to "Invoices" button format_2
    And Wait for "3" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Invoices" link on header menu
    And I click to "Invoices" link on the left menu
    And I click to "Create Invoice" link on the left sub menu
    Then I see 'Create Invoice' page

   When I select "DO Invoice" from 'Invoice Type' dropdown at 'Create Invoice' page
    And I select "AUTO_BUYER" from 'Buyer Code' dropdown at 'Create Invoice' page
    Then "supplier" see company name "AUTO BUYER" and "Added DO" table at 'Create Invoice' page

    When I input DO No to filter DO in 'Select DO' table at 'Create Invoice' page
    And I check to DO No just created checkbox at 'Create Invoice' page
    Then I see DO No in 'Added DO' table at 'Create Invoice' page

    When I input "100" to 'Invoice Quantity' textbox in "Added PO" table at 'Create Invoice' page
    And I select "Supplier34_TC" from 'Tax Code' dropdown in "Added PO" table at 'Create Invoice' page
    And I click to "Issue" button format_1
    Then I see a message "Delivery order invoice created" appears
    And I see 'Invoice List' page

    When I click to "I Understand" button format_1
    Then I see 'Invoice List' page

    When Get INV number in list
    And "supplier" input INV No to filter INV in "INV" list
    Then I see Invoice status in list is "PENDING THREE WAY"

    When I double click to INV No in 'Purchase Invoice' list
    And Wait for "6" seconds
    Then I see 'Invoice Detail' page
    And I see INV No in 'Invoice No' textbox appears

Scenario: P2P-INV-S07-001 AP Specialist approve DO without tax adjustment
    Given Navigate to Doxa Connect 2.0 site
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
    Then I see Invoice status in list is "PENDING THREE WAY"
    And I see Invoice Type in list is "DO INVOICE"

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