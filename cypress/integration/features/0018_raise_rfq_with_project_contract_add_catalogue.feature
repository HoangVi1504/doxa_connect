Feature: 0018 Raise Request for Quotations with Project, Contrat and add catalogue item

Scenario: Raise Request for Quotations with Project, Contrat and add catalogue item
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to "Request for Quotations" link on header menu
    And I click to "Request for Quotation" link on the left menu
    And I click to "Raise RFQ" link on the left sub menu
    Then I see 'Raise RFQ' page title

    When I expand layout sidebar menu if it open
    And I fill data in Raise Requisition tab from "rfq_v8" json file at Raise RFQ page
    And I fill data in General Information tab from "rfq_v8" json file at Raise RFQ page
    And I fill data in Request Terms tab from "rfq_v8" json file at Raise RFQ page
    And I add catalogue item without scroll bar from "rfq_v8" json file at Raise RFQ page
    And I click to "Send to Vendors" button format_1
    Then I see a message "RFQ successfully submitted" appears

    When I click to "I Understand" button format_1
    And I input RFQ title from "rfq_v8" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v8" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "PENDING QUOTATION"