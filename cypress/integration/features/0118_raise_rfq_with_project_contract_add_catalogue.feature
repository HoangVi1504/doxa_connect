@rfq @p2p
Feature: 0118 Raise Request for Quotations with Project, Contrat and add catalogue item

Scenario: P2P-RFQ-S04-002 Raise Request for Quotations with Project, Contrat and add catalogue item
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to "Request for Quotations" link on header menu
    And I click to "Request for Quotations" link on the left menu
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
    Then I see 'RFQ List' page title

    When I input RFQ title from "rfq_v8" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v8" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "PENDING QUOTATION"

    When I get RFQ number in list

Scenario: P2P-RFQ-S012-001 P2P-RFQ-S015-001 Buyer recall RFQ then resubmit RFQ
    # Buyer recall RFQ
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "supplier 1"
    And Call API submit RFQ
    And I logout account
    And I login with role "creator"
    And Call API close RFQ
    And Call API shortlist RFQ with approval route "auto approval RFQ"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Request for Quotations" link on header menu
    And I click to "Request for Quotations" link on the left menu
    And I click to "RFQ List" link on the left sub menu
    Then I see 'RFQ List' page title

    When "buyer" input RFQ number just created to 'Filter RFQ No' in 'RFQ' list
    Then I see RFQ title from "rfq_v8" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "PENDING APPROVAL"

    When I double click to RFQ title in RFQ list from "rfq_v8" json file
    And Wait for "3" seconds
    Then I see 'RFQ Detail' page title
    And I see RFQ title at RFQ detail page from "rfq_v8" json file

    #bugID: https://doxa-connex.atlassian.net/browse/D0R-5437
    # When I input "comment internal auto" to 'Comment' textbox in "Internal Conversations" table at 'RFQ Detail' page
    # And I click to "Send" button format_1
    # Then I see comment "comment internal auto" in 'Internal Conversations' table at 'RFQ Detail' page

    # When I input "comment internal auto" to 'Comment' textbox in "External Conversations" table at 'RFQ Detail' page
    # And I click to "Send" button format_1
    # Then I see comment "comment external auto" in 'External Conversations' table at 'RFQ Detail' page
       
    When I click to "Recall" button format_1
    And I input "auto recall RFQ" to 'Reason' textbox at 'RFQ Detail' page
    And I click to "Recall" button in 'Reason Dialog Box' at 'RFQ Detail' page
    Then I see a message "RFQ has been successfully recalled" appears

    When I click to "I Understand" button format_1
    Then I see 'RFQ List' page title

    When "buyer" input RFQ number just created to 'Filter RFQ No' in 'RFQ' list
    Then I see RFQ title from "rfq_v8" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "RECALLED"

    When I double click to RFQ title in RFQ list from "rfq_v8" json file
    And Wait for "3" seconds
    Then I see 'RFQ Detail' page title
    And I see reason recall RFQ "auto recall RFQ" in 'Internal Conversation' table at 'RFQ Detail' page

    When I select "auto approval RFQ 2" from 'Approval Route' dropdown at 'RFQ Detail' page
    And I input a value is smaller than the required quantity from "rfq_v8" json file to 'Awarded Quantity' textbox
    And I click to "Submit for Approval" button format_1
    Then I see a message "RFQ has been successfully shortlisted" appears

    When I click to "I Understand" button format_1
    Then I see 'RFQ List' page title

    When "buyer" input RFQ number just created to 'Filter RFQ No' in 'RFQ' list
    Then I see RFQ title from "rfq_v8" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "PENDING APPROVAL"