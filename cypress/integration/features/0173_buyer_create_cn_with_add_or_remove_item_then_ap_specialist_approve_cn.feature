@cn @inv_cn
Feature: 0173 Buyer create Credit Note with add or remove item then AP Specialist approve Credit Note

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

Scenario: P2P-CN-S01-004 Buyer create Credit Note with add or remove item
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

    When I select "TEST_SUPPLIER_34" from 'Supplier Code' dropdown at 'Create Credit Note' page
    Then I see company name "TEST SUPPLIER 34" at 'Create Credit Note' page

    When I select INV No from 'Reference Invoice' dropdown at 'Create Credit Note' page
    And I input credit note date as next "2" days to 'Creadit Note Date' textbox at 'Create Credit Note' page
    And I input "50" to 'Item Quantity' textbox at 'Create Credit Note' page
    And I select "G/L auto 1" from 'GL Account' dropdown at 'Create Credit Note' page
    And I click to 'Item Delete' button in 'Add Item' table at 'Create Credit Note' page
    Then I see the item in 'Add Item' table at 'Create Credit Note' page is deleted

    When I click to "Add Manual" button format_2
    Then I see 'Item Delete' button in 'Add Item' table at 'Create Invoice' page

    When I input "auto add manual" to 'CN Description' textbox at 'Create Credit Note' page
    And I input "10" to 'Item Quantity' textbox at 'Create Credit Note' page
    And I select "USD" from 'Currency' dropdown at 'Create Credit Note' page
    And I input "5000" to 'Unit Price' textbox at 'Create Credit Note' page
    And I select "CEN" from 'UOM' dropdown at 'Create Credit Note' page
    And I select "11052022" from 'Tax Code' dropdown at 'Create Credit Note' page
    And I input "1" to 'Exchange Rate' textbox at 'Create Credit Note' page
    And I select "G/L auto 1" from 'GL Account' dropdown at 'Create Credit Note' page
    And I input "auto item code" to 'Item Code' textbox at 'Create Credit Note' page
    And I input "auto item description" to 'Item Description' textbox at 'Create Credit Note' page
    And I input "auto item model" to 'Model' textbox at 'Create Credit Note' page
    And I input "auto item size" to 'Size' textbox at 'Create Credit Note' page
    And I input "auto item brand" to 'Brand' textbox at 'Create Credit Note' page
    And I click to "Preview Credit Note" button format_1
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

Scenario: P2P-CN-S03-003 AP Specialist approve Credit Note with otp out Credit Note Approval Configuration
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And Call API opt out approval configuration for "Credit Note" feature
    And I logout account
    Then I see 'Doxa Connect' image appears

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
    And I see 'Approval Route' dropdown at 'Credit Note Details' page is disabled
    
    When I click to "Approve" button format_1
    Then I see a message "Credit note has been approved" appears

    When I click to "I Understand" button format_1
    Then I see 'Credit Note List' page

    When "buyer" input INV No to filter INV in 'Credit Notes' list
    Then I see credit note status in list is "APPROVED"

Scenario: Entity admin uncheck all function in Approval Configuration
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And Call API uncheck all function in Approval Configuration