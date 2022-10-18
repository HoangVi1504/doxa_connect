@inv @p2p
Feature: 0161 Creator create PO invoice with correct input

Scenario: Buyer set 'Invoice' Document Prefix as System Default
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "General Setting" link on the left menu
    And I click to "Manage Document Prefix" link on the left sub menu
    Then I see 'List of Document Prefix' page

    When I click to text "Function"
    And I input "Invoice" to 'Filter Function' in 'Document Prefix' list
    Then I see function just searched in 'Document Prefix' list is "Invoice"

    When I double click to function "Invoice" in 'Document Prefix' list
    And Wait for "2" seconds
    Then I see 'Document Prefix Details' page
    And I see function in 'Function' textbox at 'Document Prefix Details' page is "Invoice"
    
    When I click to "Edit" button format_3
    Then I see "Save" button format_1 is displayed

    When I select "System Default" from 'Pre-fix Status' dropdown at 'Document Prefix Details' page
    And I click to "Save" button format_1
    Then I see a message "Update is successful" appears

    When I click to "I Understand" button format_1
    And I click to "Back" button format_1
    Then I see 'List of Document Prefix' page

    When I click to text "Function"
    And I input "Invoice" to 'Filter Function' in 'Document Prefix' list
    Then I see function just searched in 'Document Prefix' list is "Invoice"
    And I see type of function just searched in 'Document Prefix' list is "Default"
    And I see creator of function just searched in 'Document Prefix' list is "AUTO BUYER"

Scenario: P2P-INV-S01-002 Creator create PO invoice with correct input
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
    Then I see 'PR List' page title

    When I input PR title random to 'Search PR' textbox
    And Get PR number in PR list
    And I click to "Orders" link on header menu
    And I click to "Orders List" link on the left menu
    And I click to "POs List" link on the left sub menu
    Then I see 'PO List' page

    When I input PR No to filter PR in "PO" list
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
    And I logout account
    And I login with role "supplier 34"
    And Call Api get data after login
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Orders" link on header menu
    And I click to "Orders List" link on the left menu
    And I click to "POs List" link on the left sub menu
    Then I see 'PO List' page

    When "supplier" input PO No to filter PO in "PO" list
    And I double click to PO No in PO list
    And Wait for "6" seconds
    Then I see 'PO Detail' page
    And I see PO No in 'PO No' textbox at 'PO Detail' page

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
    And I logout account
    And I login with role "creator"
    And I click to hamburger menu
    And I click to "Invoices" button format_2
    And Wait for "3" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Invoices" link on header menu
    And I click to "Invoices" link on the left menu
    And I click to "Create Invoice" link on the left sub menu
    Then I see 'Create Invoice' page

    When I select "PO Invoice" from 'Invoice Type' dropdown at 'Create Invoice' page
    And I input invoice date as next "2" days to 'Invoice Date' textbox at 'Create Invoice' page
    And I input invoice due date as next "4" days to 'Invoice Due Date' textbox at 'Create Invoice' page
    And I select "TEST_SUPPLIER_34" from 'Supplier Code' dropdown at 'Create Invoice' page
    Then I see company name "TEST SUPPLIER 34" at 'Create Invoice' page

    When I input PO No to filter PO in 'Select PO' table at 'Create Invoice' page
    And I check to PO No just created checkbox at 'Create Invoice' page
    Then I see PO No in 'Added PO' table at 'Create Invoice' page

    When I input "100" to 'Invoice Quantity' textbox in "Added PO" table at 'Create Invoice' page
    And I select "11052022" from 'Tax Code' dropdown in "Added PO" table at 'Create Invoice' page
    And I click to "Issue" button format_1
    Then I see a message "Project invoice created" appears
    And I see 'Invoice List' page

    When I click to "Invoice Pending Approval" link on the left sub menu
    Then I see 'Invoices Pending Approval List' page

    When I input PO No to filter PO in 'Invoice Pending Approval' list
    And I see Invoice status in list is "PENDING THREE WAY"
    And I see Invoice Type in list is "PO INVOICE"

    When Get INV number in list
    And I click to "Invoices List" link on the left sub menu
    Then I see 'Invoice List' page

    When "buyer" input INV No to filter INV in "INV" list
    Then I see Invoice status in list is "PENDING THREE WAY"
    And I see Matching in list is "THREE WAY"

Scenario: 02 AP Speciallist approval Invoice
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
    Then I see Invoice status in list is "APPROVED THREE WAY"