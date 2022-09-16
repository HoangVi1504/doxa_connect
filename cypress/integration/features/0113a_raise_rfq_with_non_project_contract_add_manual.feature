@rfq
#@p2p
Feature: 0113a Raise Request for Quotations with non-project, Contract and add manual items

Scenario: P2P-RFQ-S02-001 Raise Request for Quotations with non-project, Contract and add manual items
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to "Request for Quotations" link on header menu
    And I click to "Request for Quotations" link on the left menu
    And I click to "Raise RFQ" link on the left sub menu
    Then I see 'Raise RFQ' page title

    When I expand layout sidebar menu if it open
    And I fill data in Raise Requisition tab from "rfq_v3" json file at Raise RFQ page
    And I fill data in General Information tab from "rfq_v3" json file at Raise RFQ page
    And I fill data in Request Terms tab from "rfq_v3" json file at Raise RFQ page
    And I add manual item from "rfq_v3" json file at Raise RFQ page
    And I click to "Send to Vendors" button format_1
    Then I see a message "RFQ successfully submitted" appears

    When I click to "I Understand" button format_1
    And I input RFQ title from "rfq_v3" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v3" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "PENDING QUOTATION"

Scenario: P2P-RFQ-S07-001 Update RFQ that had already been issued to vendors
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to "Request for Quotations" link on header menu
    And I click to "Request for Quotations" link on the left menu
    And I click to "RFQ List" link on the left sub menu
    Then I see 'RFQ List' page title

    When I input RFQ title from "rfq_v3" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v3" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "PENDING QUOTATION"

    When I double click to RFQ title in RFQ list from "rfq_v3" json file
    And Wait for "3" seconds
    Then I see 'RFQ Detail' page title
    And I see RFQ title at RFQ detail page from "rfq_v3" json file

    When I select "AUTO SUPPLIER 2 (SUPPLIER 2)" from 'Vendor' dropdown at 'RFQ Detail' page
    And I select "New City" from 'Delivery Address' dropdown at 'RFQ Detail' page
    And I input due date as next "15" days to 'Due Date' textbox at 'RFQ Detail' page
    And I input delivery date as next "25" days to 'Delivery Date' textbox at 'RFQ Detail' page
    And I input "300" to 'Quantity' textbox in 'Items List' table at 'RFQ Detail' page
    And I click to "Update RFQ" button format_1
    Then I see a message "RFQ has been successfully edited" appears

    When I click to "I Understand" button format_1
    Then I see 'RFQ List' page title

    When I input RFQ title from "rfq_v3" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v3" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "PENDING QUOTATION"

    When I get FRQ number in list
