@rfq @p2p
Feature: 0111 Raise Request for Quotations with non-project, One-off-Quotation and add manual items

Scenario: P2P-RFQ-S01-001 Raise Request for Quotations with non-project, One-off quotation, add manual item
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to "Request for Quotations" link on header menu
    And I click to "Request for Quotations" link on the left menu
    And I click to "Raise RFQ" link on the left sub menu
    Then I see 'Raise RFQ' page title

    When I expand layout sidebar menu if it open
    And I fill data in Raise Requisition tab from "rfq_v1" json file at Raise RFQ page
    And I fill data in General Information tab from "rfq_v1" json file at Raise RFQ page
    And I fill data in Request Terms tab from "rfq_v1" json file at Raise RFQ page
    And I select 'auto buyer' from 'Delivery Contact Person' dropdown at Raise RFQ page
    Then I see email address of contact person at Raise RFQ page is "auto.buyer@getnada.com"
    And I see contact number of contact person at Raise RFQ page is "987987987"

    When I add manual item from "rfq_v1" json file at Raise RFQ page
    And I click to "Send to Vendors" button format_1
    Then I see a message "RFQ successfully submitted" appears

    When I click to "I Understand" button format_1
    And I input RFQ title from "rfq_v1" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v1" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "PENDING QUOTATION"

    When I get RFQ number in list

Scenario: P2P-RFQ-S08-001-002 Connected supplier submits quote
    # with invalid input
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "supplier 1"
    And I click to "Request for Quotations" link on header menu
    And I click to "Request for Quotations" link on the left menu
    And I click to "RFQ List" link on the left sub menu
    Then I see 'RFQ List' page title

    When "supplier" input RFQ number just created to 'Filter RFQ No' in 'RFQ' list
    Then I see RFQ title from "rfq_v1" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "PENDING QUOTATION"

    When I double click to RFQ title in RFQ list from "rfq_v1" json file
    And Wait for "3" seconds
    Then I see 'RFQ Detail' page title
    And I see RFQ title at RFQ detail page from "rfq_v1" json file

    When I click to "Submit Quote" button format_1
    Then I see a message "Validation error, please check your input." appears

    When I click to "OK" button format_1
    Then I see a validation text of 'Currency Code' at 'Raise RFQ' page "Please select valid Currency" appears
    And I see a validation text of 'Tax Code' at 'Raise RFQ' page "Please select valid Tax Code" appears

    When I select "United States Dollar (+USD)" from 'Currency' dropdown at 'RFQ Detail' page
    And I select "GST7" from 'Tax Code' dropdown at 'Request Terms' table on 'RFQ Detail' page
    And I input "abc" to 'Quoted Unit Price' textbox at 'RFQ Detail' page
    Then I see a message "Quoted Unit Price must be greater or equal than 0" appears

    # with valid value
    When I click to "OK" button format_1
    And I input "25000" to 'Quoted Unit Price' textbox at 'RFQ Detail' page
    And I input "comment negotiation auto" to 'Negotiation Comment' textbox at 'RFQ Detail' page
    And I upload "TestImage.png" to 'Negotiation' table at 'RFQ Detail' page
    And Wait for "3" seconds
    And I click to "Send Message" button format_1
    Then I see a message "Negotiation is sent successfully" appears
    And I see comment "comment negotiation auto" in 'Negotiation' table at 'RFQ Detail' page

    When I click to "I Understand" button format_1
    Then I see comment "comment negotiation auto" in 'Negotiation' table at 'RFQ Detail' page

    When I input "comment external conversation auto" to 'Comment' textbox in "External Conversations" table at 'RFQ Detail' page
    And I click to "Send" button format_1
    Then I see comment "comment external conversation auto" in 'External Conversations' table at 'RFQ Detail' page

    When I click to "Submit Quote" button format_1
    Then I see a message "Quotation Successfully Submitted" appears

    When I click to "I Understand" button format_1
    Then I see 'RFQ List' page title 

    When "supplier" input RFQ number just created to 'Filter RFQ No' in 'RFQ' list
    Then I see RFQ title from "rfq_v1" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "QUOTATION IN PROGRESS"