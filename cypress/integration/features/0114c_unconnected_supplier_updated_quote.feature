@rfq
#@p2p
Feature: 0114c Unconnected Supplier updated quote

Scenario: Unconnected supplier submit quote to Buyer with valid value
    Given Navigate to 'RFQ Detail' from link in email
    When I input "tax code 01" to 'Tax Code' textbox in 'Request Terms' at 'RFQ Detail' page
    And I input "200" to 'Quoted Unit Price' textbox at 'RFQ Detail' page
    And I input "3" to 'Tax Percentage' textbox at 'RFQ Detail' page
    And I click to "Submit Quote" button format_1
    Then I see a message "Quotation Successfully Submitted" appears

Scenario: P2P-RFQ-S09-002 P2P-RFQ-S07-004 Unconnected Supplier updated quote and Buyer close RFQ
    # P2P-RFQ-S09-002 Unconnected Supplier updated quote to Buyer with valid value
    When Navigate to 'RFQ Detail' from link in email
    And I get RFQ No 'Initial Settings' table at 'RFQ Detail' page
    And I get random number of RFQ title in 'General Information' table at 'RFQ Detail' page
    And I input "tax code 02" to 'Tax Code' textbox in 'Request Terms' at 'RFQ Detail' page
    And I input "5000" to 'Quoted Unit Price' textbox at 'RFQ Detail' page
    And I input "5" to 'Tax Percentage' textbox at 'RFQ Detail' page
    And I click to "Update Quote" button format_1
    Then I see a message "Quotation Successfully Submitted" appears
    And I see 'Doxa Connect' image appears
    
    # P2P-RFQ-S07-004 Close RFQ that had already been issued to vendors
    When I login with role "creator"
    And I click to "Request for Quotations" link on header menu
    And I click to "Request for Quotations" link on the left menu
    And I click to "RFQ List" link on the left sub menu
    Then I see 'RFQ List' page title

    When I input RFQ title from "rfq_v4" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v4" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "QUOTATION IN PROGRESS"

    When I double click to RFQ title in RFQ list from "rfq_v4" json file
    And Wait for "3" seconds
    Then I see 'RFQ Detail' page title
    And I see RFQ title at RFQ detail page from "rfq_v4" json file

    When I click to "Close RFQ" button format_1
    Then I see a notification appears "want to close this RFQ"

    When I click to "Close" button format_1
    Then I see a message "RFQ was closed successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'RFQ List' page title

    When I input RFQ title from "rfq_v4" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v4" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "RFQ CLOSED"