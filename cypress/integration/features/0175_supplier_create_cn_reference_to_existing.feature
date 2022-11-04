@cn @inv_cn
Feature: 0175 Supplier create Credit Note reference to Existing Invoice

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

Scenario: P2P-CN-S02-001 Supplier create Credit Note reference to Existing Invoice without adjusting tax amount
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "supplier 34"
    And I click to hamburger menu
    And I click to "Invoices" button format_2
    And Wait for "3" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Invoices" link on header menu
    And I click to "Credit Notes" link on the left menu
    And I click to "Create Credit Note" link on the left sub menu
    Then I see 'Create Credit Note' page

    When I select "AUTO_BUYER" from 'Buyer Code' dropdown at 'Create Credit Note' page
    Then I see company name "AUTO BUYER" at 'Create Credit Note' page

    When I check "Yes" radio button to choose 'Reference to Existing Invoice' option at 'Create Credit Note' page
    And I select INV No from 'Reference Invoice' dropdown at 'Create Credit Note' page
    And I input credit note date as next "2" days to 'Creadit Note Date' textbox at 'Create Credit Note' page
    And I input "50" to 'Item Quantity' textbox at 'Create Credit Note' page
    And I click to "Preview Credit Note" button format_1
    Then I see pop-up appears to show preview of credit note

    When I click to "Close" button format_2
    And I click to "Issue" button format_1
    Then I see a message "Credit note has been created successfull" appears

    When I click to "I Understand" button format_1
    Then I see 'Credit Note List' page

    When "supplier" input INV No to filter INV in 'Credit Notes' list
    Then I see credit note status in list is "PENDING APPROVAL"

    When I get CN number in list
    And I double click to CN No in 'Credit Notes' list
    And Wait for "6" seconds
    Then I see 'Credit Note Details' page
    And I see CN No in 'Credit Note No' textbox appears

Scenario Outline: P2P-CN-S02-003 Supplier create Credit Note reference to Existing Invoice with adjusting tax amount
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "supplier 34"
    And I click to hamburger menu
    And I click to "Invoices" button format_2
    And Wait for "3" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Invoices" link on header menu
    And I click to "Credit Notes" link on the left menu
    And I click to "Create Credit Note" link on the left sub menu
    Then I see 'Create Credit Note' page

    When I select "AUTO_BUYER" from 'Buyer Code' dropdown at 'Create Credit Note' page
    Then I see company name "AUTO BUYER" at 'Create Credit Note' page

    When I check "Yes" radio button to choose 'Reference to Existing Invoice' option at 'Create Credit Note' page
    And I select INV No from 'Reference Invoice' dropdown at 'Create Credit Note' page
    And I input credit note date as next "2" days to 'Creadit Note Date' textbox at 'Create Credit Note' page
    And I input "<cnQty>" to 'Item Quantity' textbox at 'Create Credit Note' page
    And I input "<exchangeRate>" to 'Exchange Rate' textbox at 'Create Credit Note' page
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

    When "supplier" input INV No to filter INV in 'Credit Notes' list
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