@rfq @p2p
Feature: 0117 Raise Request for Quotations with Project, Contract and add manual items

Scenario: P2P-RFQ-S04-001 Raise Request for Quotations with Project, Contract and add manual items
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to "Request for Quotations" link on header menu
    And I click to "Request for Quotations" link on the left menu
    And I click to "Raise RFQ" link on the left sub menu
    Then I see 'Raise RFQ' page title

    When I expand layout sidebar menu if it open
    And I fill data in Raise Requisition tab from "rfq_v7" json file at Raise RFQ page
    And I fill data in General Information tab from "rfq_v7" json file at Raise RFQ page
    And I fill data in Request Terms tab from "rfq_v7" json file at Raise RFQ page
    And I add manual item from "rfq_v7" json file at Raise RFQ page
    And I click to "Send to Vendors" button format_1
    Then I see a message "RFQ successfully submitted" appears

    When I click to "I Understand" button format_1
    Then I see 'RFQ List' page title

    When I input RFQ title from "rfq_v7" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v7" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "PENDING QUOTATION"

    When I get RFQ number in list

Scenario: P2P-RFQ-S014-001 P2P-RFQ-S015-002 P2P-RFQ-S018-001 Send back RFQ then resubmit RFQ and buyer manage RFQ list
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "supplier 1"
    And Call API submit RFQ
    And I logout account
    And I login with role "creator"
    And Call API close RFQ
    And Call API shortlist RFQ with approval route "auto approval RFQ"
    And I logout account

    # Approver send back RFQ
    When I login with role "approver 1"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Request for Quotations" link on header menu
    And I click to "Request for Quotations" link on the left menu
    And I click to "RFQ List" link on the left sub menu
    Then I see 'RFQ List' page title

    When "buyer" input RFQ number just created to 'Filter RFQ No' in 'RFQ' list
    Then I see RFQ title from "rfq_v7" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "PENDING APPROVAL"

    When I double click to RFQ title in RFQ list from "rfq_v7" json file
    And Wait for "3" seconds
    Then I see 'RFQ Detail' page title
    And I see RFQ title at RFQ detail page from "rfq_v7" json file

    When I click to "Send Back" button format_1
    And I input "auto send back RFQ" to 'Reason' textbox at 'RFQ Detail' page
    And I click to "Send Back" button in 'Reason Dialog Box' at 'RFQ Detail' page
    Then I see a message "Your RFQ has been successfully sent back" appears

    When I click to "I Understand" button format_1
    Then I see 'RFQ List' page title

    When "buyer" input RFQ number just created to 'Filter RFQ No' in 'RFQ' list
    Then I see RFQ title from "rfq_v7" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "SENT BACK"

    When I double click to RFQ title in RFQ list from "rfq_v7" json file
    And Wait for "3" seconds
    Then I see 'RFQ Detail' page title
    And I see reason send back RFQ "auto send back RFQ" in 'Internal Conversation' table at 'RFQ Detail' page

    # Buyer Manage RFQ list and Resubmit RFQ
    When I logout account
    And I login with role "creator"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Request for Quotations" link on header menu
    And I click to "Request for Quotations" link on the left menu
    And I click to "RFQ List" link on the left sub menu
    Then I see 'RFQ List' page title

    When "buyer" input RFQ number just created to 'Filter RFQ No' in 'RFQ' list
    Then I see RFQ title from "rfq_v7" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "SENT BACK"

    When I double click to RFQ title in RFQ list from "rfq_v7" json file
    And Wait for "3" seconds
    Then I see 'RFQ Detail' page title
    And I see RFQ title at RFQ detail page from "rfq_v7" json file

    When I select "auto approval RFQ 2" from 'Approval Route' dropdown at 'RFQ Detail' page
    And I input a value is smaller than the required quantity from "rfq_v7" json file to 'Awarded Quantity' textbox
    And I click to "Submit for Approval" button format_1
    Then I see a message "RFQ has been successfully shortlisted" appears

    When I click to "I Understand" button format_1
    Then I see 'RFQ List' page title

    When "buyer" input RFQ number just created to 'Filter RFQ No' in 'RFQ' list
    Then I see RFQ title from "rfq_v7" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "PENDING APPROVAL"