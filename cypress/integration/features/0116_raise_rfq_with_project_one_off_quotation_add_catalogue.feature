@rfq @p2p
Feature: 0116 Raise Request for Quotations with Project, One-off-Quotation and add catalogue item

Scenario: P2P-RFQ-S03-002 Raise Request for Quotations with Project, One-off-Quotation and add catalogue item
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to "Request for Quotations" link on header menu
    And I click to "Request for Quotations" link on the left menu
    And I click to "Raise RFQ" link on the left sub menu
    Then I see 'Raise RFQ' page title

    When I expand layout sidebar menu if it open
    And I fill data in Raise Requisition tab from "rfq_v6" json file at Raise RFQ page
    And I fill data in General Information tab from "rfq_v6" json file at Raise RFQ page
    And I fill data in Request Terms tab from "rfq_v6" json file at Raise RFQ page
    And I add catalogue item without scroll bar from "rfq_v6" json file at Raise RFQ page
    And I click to "Send to Vendors" button format_1
    Then I see a message "RFQ successfully submitted" appears

    When I click to "I Understand" button format_1
    And I input RFQ title from "rfq_v6" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v6" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "PENDING QUOTATION"

    When I get RFQ number in list

Scenario: P2P-RFQ-S013-001-002 P2P-RFQ-S017-001 Approve RFQ by 2 approver then convert one-off RFQ to order
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "supplier 1"
    And Call API submit RFQ
    And I logout account
    And I login with role "creator"
    And Call API close RFQ
    And Call API shortlist RFQ with approval route "auto approval RFQ 2"
    And I logout account

    # Non-last approver approve RFQ
    When I login with role "approver 1"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Request for Quotations" link on header menu
    And I click to "Request for Quotations" link on the left menu
    And I click to "RFQ List" link on the left sub menu
    Then I see 'RFQ List' page title

    When I input RFQ title from "rfq_v6" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v6" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "PENDING APPROVAL"

    When I double click to RFQ title in RFQ list from "rfq_v6" json file
    And Wait for "3" seconds
    Then I see 'RFQ Detail' page title
    And I see RFQ title at RFQ detail page from "rfq_v6" json file

    When I click to "Approve" button format_1
    Then I see a message "Approval is successful" appears

    When I click to "I Understand" button format_1
    Then I see 'RFQ List' page title

    When I input RFQ title from "rfq_v6" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v6" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "PENDING APPROVAL"

    # Last approver approve RFQ
    When I logout account
    And I login with role "approver 2"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Request for Quotations" link on header menu
    And I click to "Request for Quotations" link on the left menu
    And I click to "RFQ List" link on the left sub menu
    Then I see 'RFQ List' page title

    When I input RFQ title from "rfq_v6" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v6" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "PENDING APPROVAL"

    When I double click to RFQ title in RFQ list from "rfq_v6" json file
    And Wait for "3" seconds
    Then I see 'RFQ Detail' page title
    And I see RFQ title at RFQ detail page from "rfq_v6" json file

    When I click to "Approve" button format_1
    Then I see a message "Approval is successful" appears

    When I click to "I Understand" button format_1
    Then I see 'RFQ List' page title

    When I input RFQ title from "rfq_v6" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v6" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "SHORTLISTED"

    # Convert RFQ to PO
    When I logout account
    And I login with role "creator"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Request for Quotations" link on header menu
    And I click to "Request for Quotations" link on the left menu
    And I click to "RFQ List" link on the left sub menu
    Then I see 'RFQ List' page title

    When I input RFQ title from "rfq_v6" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v6" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "SHORTLISTED"

    When I double click to RFQ title in RFQ list from "rfq_v6" json file
    And Wait for "3" seconds
    Then I see 'RFQ Detail' page title
    And I see RFQ title at RFQ detail page from "rfq_v6" json file

    When I click to "Convert to Order" button format_1
    And I click to "I Understand" button format_1
    Then I see 'RFQ List' page title

    When I input RFQ title from "rfq_v6" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v6" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "COMPLETED"

    When I get PO number in RFQ list
    And I visit 'PO Detail' page by hyperlink in PO No after convert RFQ type 'One-off-quotation'
    And Wait for "10" seconds
    Then I see 'PO Detail' page
    And "buyer" see PO No in 'PO No' textbox at 'PO Detail' page