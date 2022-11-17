@inv @inv_cn
Feature: 0166 Supplier create po inv with add/remove item then create subsequent inv for a PO

Scenario Outline: P2P-INV-S03-005 The Supplier creates the invoice - add/remove item
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
    And I select "Supplier34_TC" from 'Tax Code' dropdown in "Added PO" table at 'Create Invoice' page
    And I click to "Add Manual" button format_2
    Then I see 'Item Delete' button in "Added PO" table at 'Create Invoice' page
    
    When I input "item test inv" to 'Item Name' textbox in "Added PO" table at 'Create Invoice' page
    And I input "item test inv" to filter 'Item Name' in 'Added PO' table at 'Create Invoice' page
    And I input "20" to 'Invoice Quantity' textbox in "Added PO" table at 'Create Invoice' page
    And I input "item test inv" to filter 'Item Name' in 'Added PO' table at 'Create Invoice' page
    And I input "1000" to 'Invoice Unit Price' textbox in "Added PO" table at 'Create Invoice' page
    And I input "item test inv" to filter 'Item Name' in 'Added PO' table at 'Create Invoice' page
    And I click to 'Item Delete' button in "Added PO" table at 'Create Invoice' page
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
    Then I see Invoice status in list is "PENDING TWO WAY"

    Examples:
    # tax percentage = 0.5
    # invSubtotal = invQty * unitPrice
    # tax = invSubTotal * tax percentage 
    # invTotal = invSubTotal + tax
    |quantity|unitPrice|invQty|invSubTotal|tax|invTotal|
    |1000|5000|100|500,000.00|5,000.00|505,000.00|

Scenario: AP Specialist and Approver approve invoice
    # AP Specialist approve invoice
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "ap specialist"
    And I click to hamburger menu
    And I click to "Invoices" button format_2
    And Wait for "3" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And Wait for "2" seconds
    And I click to "Invoices" link on header menu
    And I click to "Invoices" link on the left menu
    And I click to "Invoice Pending Approval" link on the left sub menu
    Then I see 'Invoices Pending Approval List' page

    When "buyer" input INV No to filter INV in "INV Pending Approval" list
    Then I see Invoice status in list is "PENDING TWO WAY"
    And I see Invoice Type in list is "PO INVOICE"

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

    # Approver approve invoice
    When I logout account
    And I login with role "approver 1"
    And I click to 'Dashboard' link on Header menu if it not be selected
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

    When I click to "Approve" button format_1
    Then I see a message "Invoice has been approved" appears

    When I click to "I Understand" button format_1
    Then I see 'Invoices Pending Approval List' page

    When I click to "Invoices List" link on the left sub menu
    Then I see 'Invoice List' page

    When "buyer" input INV No to filter INV in "INV" list
    Then I see Invoice status in list is "APPROVED TWO WAY"

Scenario Outline: P2P-INV-S03-003 The supplier creates the subsequent invoice for a PO
    # Raise PR then Convert to PO and issue PO to supplier
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "supplier 34"
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
    And I click to "Invoices List" link on the left sub menu
    Then I see 'Invoice List' page

    When "supplier" input INV No to filter INV in "INV" list
    Then I see Invoice status in list is "PENDING TWO WAY"

    Examples:
    # tax percentage = 0.5
    # invSubtotal = invQty * unitPrice
    # tax = invSubTotal * tax percentage 
    # invTotal = invSubTotal + tax
    |quantity|unitPrice|invQty|invSubTotal|tax|invTotal|
    |1000|5000|100|500,000.00|5,000.00|505,000.00|

Scenario: P2P-INV-S07-005 AP Specialist view the invoice of a supplier that is not assign to their
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "ap specialist 2"
    And I click to hamburger menu
    And I click to "Invoices" button format_2
    And Wait for "3" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And Wait for "2" seconds
    And I click to "Invoices" link on header menu
    And I click to "Invoices" link on the left menu
    And I click to "Invoice Pending Approval" link on the left sub menu
    Then I see 'Invoices Pending Approval List' page

    When "buyer" input INV No to filter INV in "INV Pending Approval" list
    Then I see Invoice status in list is "PENDING TWO WAY"
    And I see Invoice Type in list is "PO INVOICE"

    When I double click to INV No in 'Invoice Pending Approval' list
    And Wait for "6" seconds
    Then I see 'Invoice Pending Approval' page
    And I see INV No in 'Invoice No' textbox appears
    And I see "Approve" button format_1 disappear
    And I see "Reject" button format_1 disappear