@rfq
#@p2p
Feature: 0113c Unconnected Supplier Submit RFQ

Scenario: P2P-RFQ-S09-001 Unconnected supplier submits quote to Buyer with valid value
    Given Navigate to 'RFQ Detail' from link in email
    When I input "tax code 01" to 'Tax Code' textbox in 'Request Terms' at 'RFQ Detail' page
    And I input "200" to 'Quoted Unit Price' textbox at 'RFQ Detail' page
    And I input "3" to 'Tax Percentage' textbox at 'RFQ Detail' page
    And I click to "Submit Quote" button format_1
    Then I see a message "Quotation Successfully Submitted" appears