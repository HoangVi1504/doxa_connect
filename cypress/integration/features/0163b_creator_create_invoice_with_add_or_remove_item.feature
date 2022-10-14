@inv @p2p
Feature: 0163b Creator create invoice with add or remove item

Scenario Outline: P2P-INV-S01-005 The buyer creates the invoice - add/remove item
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
    Then I see 'PO List' page

    When "buyer" input PO No to filter PO in "PO" list
    Then I see PO status in list is "ISSUED"

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
    And I input Invoice No random to 'Invoice No' textbox at 'Create Invoice' page
    And I select "TEST_SUPPLIER_34" from 'Supplier Code' dropdown at 'Create Invoice' page
    Then I see company name "TEST SUPPLIER 34" at 'Create Invoice' page

    When I input PO No to filter PO in 'Select PO' table at 'Create Invoice' page
    And I check to PO No just created checkbox at 'Create Invoice' page
    Then I see PO No in 'Added PO' table at 'Create Invoice' page

    When I input "<invQty>" to 'Invoice Quantity' textbox in "Added PO" table at 'Create Invoice' page
    And I select "11052022" from 'Tax Code' dropdown in "Added PO" table at 'Create Invoice' page
    And I click to "Add Manual" button format_2
    Then I see 'Item Delete' button in "Added PO" table at 'Create Invoice' page
    
    When I input "item test inv" to 'Item Name' textbox in "Added PO" table at 'Create Invoice' page
    And I input "item test inv" to filter 'Item Name' in 'Added PO' table at 'Create Invoice' page
    And I input "20" to 'Invoice Quantity' textbox in "Added PO" table at 'Create Invoice' page
    And I input "item test inv" to filter 'Item Name' in 'Added PO' table at 'Create Invoice' page
    And I input "1000" to 'Invoice Unit Price' textbox in "Added PO" table at 'Create Invoice' page
    And I input "item test inv" to filter 'Item Name' in 'Added PO' table at 'Create Invoice' page
    And I select "11052022" from 'Tax Code' dropdown in "Added PO" table at 'Create Invoice' page
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
    And I click to "Invoice Pending Approval" link on the left sub menu
    Then I see 'Invoices Pending Approval List' page

    When I input PO No to filter PO in 'Invoice Pending Approval' list
    Then I see Invoice status in list is "PENDING TWO WAY"
    And I see Invoice Type in list is "PO INVOICE"

    When Get INV number in list
    And I click to "Invoices List" link on the left sub menu
    Then I see 'Invoice List' page

    When I input INV No to filter INV in "INV" list
    Then I see Invoice status in list is "PENDING TWO WAY"
    And I see Matching in list is "TWO WAY"

    Examples:
    # tax percentage = 0.5
    # invSubtotal = invQty * unitPrice
    # tax = invSubTotal * tax percentage 
    # invTotal = invSubTotal + tax
    |quantity|unitPrice|invQty|invSubTotal|tax|invTotal|
    |1000|5000|100|500,000.00|2,500.00|502,500.00|

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