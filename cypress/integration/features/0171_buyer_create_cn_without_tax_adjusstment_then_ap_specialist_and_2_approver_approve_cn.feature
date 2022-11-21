@cn @inv_cn
Feature: 0171 Buyer create Credit Note without adjusting tax amount then AP Specialist and 2 Approver approve Credit Note

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
    Then "buyer" see company name "TEST SUPPLIER 34" and "Added PO" table at 'Create Invoice' page

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

Scenario: P2P-CN-S01-001 P2P-CN-S05-001 Buyer create Credit Note without adjusting tax amount and manage list of Credit Note
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
    Then "buyer" see company name "TEST SUPPLIER 34" at 'Create Credit Note' page

    When I select INV No from 'Reference Invoice' dropdown at 'Create Credit Note' page
    And I input credit note date as next "2" days to 'Creadit Note Date' textbox at 'Create Credit Note' page
    And I input "50" to 'Item Quantity' textbox at 'Create Credit Note' page
    And I select "G/L auto 1" from 'GL Account' dropdown at 'Create Credit Note' page
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

Scenario: P2P-CN-S03-001 P2P-CN-S04-001-003 AP Specialist and 2 Approver approve Credit Note
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

    When I select "AUTO CN APPROVER 2" from 'Approval Route' dropdown at 'Credit Note Details' page
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

    When I click to "Approve" button format_1
    Then I see a message "Credit Note Approved" appears

    When I click to "I Understand" button format_1
    Then I see 'Credit Note List' page

    When I input CN No to filter CN in 'Credit Notes' list
    Then I see credit note status in list is "PENDING CN APPROVAL"

    When I logout account
    And I login with role "approver 2"
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

    When I click to "Reject" button format_1
    And I input "auto reject credit note" to 'Reason' textbox at 'Credit Note Details' page
    And I click to 'Reject' button in 'Reason Dialog Box' at 'Credit Note Details' page
    Then I see a message "Credit Note Rejected" appears

    When I click to "I Understand" button format_1
    Then I see 'Credit Note List' page

    When I input CN No to filter CN in 'Credit Notes' list
    Then I see credit note status in list is "REJECTED"