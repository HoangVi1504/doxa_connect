@inv @inv_cn
Feature: 0162 Create first invoice from po then create subsequent invoice for a po

Scenario Outline: P2P-INV-S01-001 P2P-INV-S09-002 Buyer create PO invoice that doesn't tag any GR and manage list of invoice and list of invoice pending approval
    # Raise PR then Convert to PO and issue PO to supplier
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And "buyer" call API set "Invoice" 'Document Prefix' as "Default"
    And I logout account
    And I login with role "creator"
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
    Then "buyer" see company name "TEST SUPPLIER 34" and "Added PO" table at 'Create Invoice' page

    When I input PO No to filter PO in 'Select PO' table at 'Create Invoice' page
    And I check to PO No just created checkbox at 'Create Invoice' page
    Then I see PO No in 'Added PO' table at 'Create Invoice' page

    When I input "<invQty>" to 'Invoice Quantity' textbox in "Added PO" table at 'Create Invoice' page
    And I select "11052022" from 'Tax Code' dropdown in "Added PO" table at 'Create Invoice' page
    Then I see 'Invoice Sub Total' is equal to "<invSubTotal>" at 'Create Invoice' page
    And I see 'Invoice Tax' is equal to "<tax>" at 'Create Invoice' page
    And I see 'Invoice Total' is equal to "<invTotal>" at 'Create Invoice' page

    When I click to "Preview Invoice" button format_1
    Then I see pop-up appears to show preview of invoice

    When I click to "Close" button format_2
    And I click to "Issue" button format_1
    Then I see a message "Project invoice created" appears

    # Manage list of invoice pending approval
    When I click to "I Understand" button format_1
    Then I see 'Invoice List' page
    And I click to "Invoice Pending Approval" link on the left sub menu
    Then I see 'Invoices Pending Approval List' page

    When I input PO No to filter PO in 'Invoice Pending Approval' list
    Then I see Invoice status in list is "PENDING TWO WAY"
    And I see Invoice Type in list is "PO INVOICE"

    When Get INV number in list
    And I double click to INV No in 'Invoice Pending Approval' list
    And Wait for "6" seconds
    Then I see 'Invoice Pending Approval' page
    And I see INV No in 'Invoice No' textbox appears

    # Manage list of invoice
    When I click to "Invoices List" link on the left sub menu
    Then I see 'Invoice List' page

    When "buyer" input INV No to filter INV in "INV" list
    Then I see Invoice status in list is "PENDING TWO WAY"
    And I see Matching in list is "TWO WAY"

    When I double click to INV No in 'Purchase Invoice' list
    And Wait for "6" seconds
    Then I see 'Invoice Detail' page
    And I see INV No in 'Invoice No' textbox appears

    Examples:
    # tax percentage = 0.5
    # invSubtotal = invQty * unitPrice
    # tax = invSubTotal * tax percentage 
    # invTotal = invSubTotal + tax
    |quantity|unitPrice|invQty|invSubTotal|tax|invTotal|
    |1000|5000|100|500,000.00|2,500.00|502,500.00|

Scenario: AP Specialist and approver approve invoice
    # AP Specialist approve invoice
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

Scenario Outline: P2P-INV-S01-003 Creates the subsequent invoice for a PO
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to hamburger menu
    And I click to "Invoices" button format_2
    And Wait for "3" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Invoices" link on header menu
    And I click to "Invoices" link on the left menu
    And I click to "Create Invoice" link on the left sub menu
    Then I see 'Create Invoice' page

    When I select "PO Invoice" from 'Invoice Type' dropdown at 'Create Invoice' page
    And I select "TEST_SUPPLIER_34" from 'Supplier Code' dropdown at 'Create Invoice' page
    Then "buyer" see company name "TEST SUPPLIER 34" and "Added PO" table at 'Create Invoice' page

    When I input PO No to filter PO in 'Select PO' table at 'Create Invoice' page
    And I check to PO No just created checkbox at 'Create Invoice' page
    Then I see PO No in 'Added PO' table at 'Create Invoice' page

    When I input "<invQty>" to 'Invoice Quantity' textbox in "Added PO" table at 'Create Invoice' page
    And I select "11052022" from 'Tax Code' dropdown in "Added PO" table at 'Create Invoice' page
    Then I see 'Invoice Sub Total' is equal to "<invSubTotal>" at 'Create Invoice' page
    And I see 'Invoice Tax' is equal to "<tax>" at 'Create Invoice' page
    And I see 'Invoice Total' is equal to "<invTotal>" at 'Create Invoice' page

    When I click to "Preview Invoice" button format_1
    Then I see pop-up appears to show preview of invoice

    When I click to "Close" button format_2
    And I click to "Issue" button format_1
    Then I see a message "Project invoice created" appears

    Examples:
    # tax percentage = 0.5
    # invSubtotal = invQty * unitPrice
    # tax = invSubTotal * tax percentage 
    # invTotal = invSubTotal + tax
    |quantity|unitPrice|invQty|invSubTotal|tax|invTotal|
    |1000|5000|100|500,000.00|2,500.00|502,500.00|