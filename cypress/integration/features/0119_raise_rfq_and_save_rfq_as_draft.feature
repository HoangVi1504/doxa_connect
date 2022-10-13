@rfq
#@p2p
Feature: 0119 Raise RFQ and save RFQ as draft

Scenario: P2P-RFQ-S05-001-002-003-004 Raise RFQ and save RFQ as draft
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to "Request for Quotations" link on header menu
    And I click to "Request for Quotations" link on the left menu
    And I click to "Raise RFQ" link on the left sub menu
    Then I see 'Raise RFQ' page title

    # Raise RFQ with no input => check validation text
    When I expand layout sidebar menu if it open
    And I click to "Save As Draft" button format_1
    Then I see a message "Validation error, please check your input." appears

    When I click to "OK" button format_2
    And I click to RFQ title textbox
    Then I see a validation text of 'RFQ title' "Please enter valid RFQ Title" appears
    And I see a validation text of 'Procurement Type' "Please select valid Procurement Type" appears
    And I see a validation text of 'Vendor' "Please select valid a Vendor" appears
    And I see a validation text of 'RFQ Type' "Please enter valid RFQ Type" appears
    And I see a validation text of 'Due Date' "Please select valid Due Date" appears
    And I see a validation text of 'Delivery Address' "Please select valid Delivery Address" appears
    And I see a validation text of 'Delivery Date' "Please select valid Delivery Date" appears

    When I fill data in Raise Requisition tab from "rfq_v9" json file at Raise RFQ page
    And I fill data in General Information tab from "rfq_v9" json file at Raise RFQ page
    And I select RFQ type from "rfq_v9" json file at Raise RFQ page
    And I input validity start date as next "2" days to 'Validity Start Date' textbox at 'Raise RFQ' page
    And I input validity end date as next "20" days to 'Validity End Date' textbox at 'Raise RFQ' page
    And I select delivery address from "rfq_v9" json file at Raise RFQ page
    # Save RFQ as draft with Due date and Delivery Address in the past => check validation text
    And I input delivery date as previous "4" days to 'Delivery Date' textbox at Raise RFQ page
    And I input due date as previous "5" days to 'Due Date' textbox at Raise RFQ page
    And I input note to from "rfq_v9" json file at Raise RFQ page
    And I add manual item from "rfq_v9" json file at Raise RFQ page
    And I click to "Save As Draft" button format_1
    Then I see a message "Validation error, please check your input." appears

    When I click to "OK" button format_2
    And I click to RFQ title textbox
    Then I see a validation text of 'Due Date' "Due Date cannot be in the past" appears

    When I clear value in 'Due date' textbox at Raise RFQ page
    And I input due date as next "2" days to 'Due Date' textbox at Raise RFQ page
    And I click to "Save As Draft" button format_1
    Then I see a message "Validation error, please check your input." appears

    When I click to "OK" button format_2
    And I click to 'Note' textbox at Raise RFQ page
    And I see a validation text of 'Delivery Date' "Delivery Date cannot be in the past" appears
    And I clear value in 'Delivery date' textbox at Raise RFQ page
    And I input delivery date as next "3" days to 'Delivery Date' textbox at Raise RFQ page
    And I click to "Save As Draft" button format_1
    Then I see a message "RFQ successfully saved" appears

    When I click to "I Understand" button format_1
    And I input RFQ title from "rfq_v9" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v9" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "PENDING ISSUE"

    When I get RFQ number in list

Scenario: P2P-RFQ-S05-004 P2P-RFQ-S017-002 Submit the Saved as draft RFQ then convert contract RFQ to order
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to "Request for Quotations" link on header menu
    And I click to "Request for Quotations" link on the left menu
    And I click to "RFQ List" link on the left sub menu
    Then I see 'RFQ List' page title

    When I input RFQ title from "rfq_v9" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v9" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "PENDING ISSUE"

    When I double click to RFQ title in RFQ list from "rfq_v9" json file
    And Wait for "3" seconds
    Then I see 'RFQ Detail' page title
    And I see RFQ title at RFQ detail page from "rfq_v9" json file

    When I click to "Send to Vendors" button format_1
    Then I see a message "RFQ successfully submitted" appears

    When I click to "I Understand" button format_1
    Then I see 'RFQ List' page title

    When I input RFQ title from "rfq_v9" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v9" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "PENDING QUOTATION"

    When I logout account
    And I login with role "supplier 1"
    And Call API submit RFQ
    And I logout account
    And I login with role "creator"
    And Call API close RFQ
    And Call API shortlist RFQ with approval route "auto approval RFQ"
    And I logout account
    And I login with role "approver 1"
    And Call API approval RFQ
    And I logout account
    And I login with role "creator"
    And I click to "Request for Quotations" link on header menu
    And I click to "Request for Quotations" link on the left menu
    And I click to "RFQ List" link on the left sub menu
    Then I see 'RFQ List' page title

    When "buyer" input RFQ number just created to 'Filter RFQ No' in 'RFQ' list
    Then I see RFQ status in RFQ list is "SHORTLISTED"

    When I double click to RFQ number just created in 'RFQ' list
    And Wait for "3" seconds
    Then I see 'RFQ Detail' page title
    And I see RFQ number just created in 'RFQ No' textbox at 'RFQ Details' page

    When I click to "Convert To Contract" button format_1
    And I click to "I Understand" button format_1
    Then I see 'RFQ List' page title

    When "buyer" input RFQ number just created to 'Filter RFQ No' in 'RFQ' list
    Then I see RFQ status in RFQ list is "COMPLETED"

    When I get Contract number in RFQ list
    And I visit 'Contract Detail' page by hyperlink in Contract No after convert RFQ type 'Contract'
    And Wait for "10" seconds
    Then I see 'Contract Detail' page title
    And I see contract number in 'Contract No' textbox at 'Contract Detail' page