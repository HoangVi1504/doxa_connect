@rfq
#@p2p
Feature: 0114b Get link to RFQ from Getnada site

Scenario: Navigate to Getnada site to get link RFQ
    Given Navigate to Getnada site
    And I click to 'ADD INBOX' button
    And I input "auto.supplier2" to 'User' textbox at 'Getnada' page
    And I select domain "getnada.com" from Domain dropdown
    And I click to 'Add Now' button
    And I click to mail subject RFQ is pending for quotation at 'Getnada' page
    And I get link to RFQ from 'Getnada' page