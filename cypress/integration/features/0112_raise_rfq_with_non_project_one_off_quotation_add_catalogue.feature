@rfq @p2p
Feature: 0112 Raise Request for Quotations with non-project, One-off-Quotation and add catalogue item

Scenario: P2P-RFQ-S01-002 Raise Request for Quotations with non-project, One-off-Quotation and add catalogue item
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to "Request for Quotations" link on header menu
    And I click to "Request for Quotations" link on the left menu
    And I click to "Raise RFQ" link on the left sub menu
    Then I see 'Raise RFQ' page title

    When I expand layout sidebar menu if it open
    And I fill data in Raise Requisition tab from "rfq_v2" json file at Raise RFQ page
    And I fill data in General Information tab from "rfq_v2" json file at Raise RFQ page
    And I fill data in Request Terms tab from "rfq_v2" json file at Raise RFQ page
    And I select 'auto buyer' from 'Delivery Contact Person' dropdown at Raise RFQ page
    Then I see email address of contact person at Raise RFQ page is "auto.buyer@getnada.com"
    And I see contact number of contact person at Raise RFQ page is "987987987"

    When I add catalogue item without scroll bar from "rfq_v2" json file at Raise RFQ page
    And I click to "Send to Vendors" button format_1
    Then I see a message "RFQ successfully submitted" appears

    When I click to "I Understand" button format_1
    And I input RFQ title from "rfq_v2" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v2" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "PENDING QUOTATION"

    When I get RFQ number in list

Scenario: P2P-RFQ-S08-003 Connected supplier update Quote to buyer
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "supplier 1"
    And I click to "Request for Quotations" link on header menu
    And I click to "Request for Quotations" link on the left menu
    And I click to "RFQ List" link on the left sub menu
    Then I see 'RFQ List' page title

    When "supplier" input RFQ number just created to 'Filter RFQ No' in 'RFQ' list
    Then I see RFQ title from "rfq_v2" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "PENDING QUOTATION"

    When I double click to RFQ title in RFQ list from "rfq_v2" json file
    And Wait for "3" seconds
    Then I see 'RFQ Detail' page title
    And I see RFQ title at RFQ detail page from "rfq_v2" json file

    When I select "United States Dollar (+USD)" from 'Currency' dropdown at 'RFQ Detail' page
    And I select "GST7" from 'Tax Code' dropdown at 'Request Terms' table on 'RFQ Detail' page
    And I input "5000" to 'Quoted Unit Price' textbox at 'RFQ Detail' page
    And I click to "Submit Quote" button format_1
    Then I see a message "Quotation Successfully Submitted" appears

    When I click to "I Understand" button format_1
    Then I see 'RFQ List' page title

    When "supplier" input RFQ number just created to 'Filter RFQ No' in 'RFQ' list
    Then I see RFQ title from "rfq_v2" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "QUOTATION IN PROGRESS"

    When I double click to RFQ title in RFQ list from "rfq_v2" json file
    And Wait for "3" seconds
    Then I see 'RFQ Detail' page title
    And I see RFQ title at RFQ detail page from "rfq_v2" json file

    When I input "comment external auto" to 'Comment' textbox in "External Conversations" table at 'RFQ Detail' page
    And I click to "Send" button format_1
    Then I see comment "comment external auto" in 'External Conversations' table at 'RFQ Detail' page

    When I select "TC1" from 'Tax Code' dropdown at 'Request Terms' table on 'RFQ Detail' page
    And I input "15000" to 'Quoted Unit Price' textbox at 'RFQ Detail' page
    And I click to "Update Quote" button format_1
    Then I see a message "Quotation has been successfully edited" appears

    When I click to "I Understand" button format_1
    Then I see 'RFQ List' page title

    When "supplier" input RFQ number just created to 'Filter RFQ No' in 'RFQ' list
    Then I see RFQ title from "rfq_v2" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "QUOTATION IN PROGRESS"

Scenario: P2P-RFQ-S07-003 Update RFQ that had already been issued to vendors 
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to "Request for Quotations" link on header menu
    And I click to "Request for Quotations" link on the left menu
    And I click to "RFQ List" link on the left sub menu
    Then I see 'RFQ List' page title

    When I input RFQ title from "rfq_v2" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v2" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "QUOTATION IN PROGRESS"

    When I double click to RFQ title in RFQ list from "rfq_v2" json file
    And Wait for "3" seconds
    Then I see 'RFQ Detail' page title
    And I see RFQ title at RFQ detail page from "rfq_v2" json file

    When I select "AUTO COMPANY 1 (COMPANY CODE 1)" from 'Vendor' dropdown at 'RFQ Detail' page
    And I select "New City" from 'Delivery Address' dropdown at 'RFQ Detail' page
    And I input due date as next "15" days to 'Due Date' textbox at 'RFQ Detail' page
    And I input delivery date as next "25" days to 'Delivery Date' textbox at 'RFQ Detail' page
    And I input "150" to 'Quantity' textbox in 'Items List' table at 'RFQ Detail' page
    And I click to "AUTO SUPPLIER 1" link on the table menu at 'RFQ Detail' page
    When I input "update comment auto" to 'Negotiation Comment' textbox at 'RFQ Detail' page
    And I click to "Send Message" button format_1
    Then I see a message "Negotiation is sent successfully" appears

    When I click to "I Understand" button format_1
    And I click to "Update RFQ" button format_1
    Then I see a message "RFQ has been successfully edited" appears

    When I click to "I Understand" button format_1
    Then I see 'RFQ List' page title

    When I input RFQ title from "rfq_v2" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v2" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "QUOTATION IN PROGRESS"