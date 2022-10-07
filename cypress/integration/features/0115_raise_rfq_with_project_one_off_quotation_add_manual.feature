@rfq
#@p2p
Feature: 0115 Raise Request for Quotations with Project, One-off-Quotation and add manual items

Scenario: Uncheck checkbox if it is checked at Approval Configuration page
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Entity Management" link on header menu
    And I click to "Approval Setting" link on the left menu
    And I click to "Manage Approval Configuration" link on the left sub menu
    Then I see 'Approval Configuration' page

    When I uncheck the checkbox 'Approval Configuration' page if it is checked
    And Wait for "3" seconds

Scenario: P2P-RFQ-S03-001 P2P-RFQ-S07-002 P2P-RFQ-S016-001 Raise RFQ then close RFQ and Reopen RFQ
    # P2P-RFQ-S03-001 Raise Request for Quotations with Project, One-off quotation, add manual item
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to "Request for Quotations" link on header menu
    And I click to "Request for Quotations" link on the left menu
    And I click to "Raise RFQ" link on the left sub menu
    Then I see 'Raise RFQ' page title

    When I expand layout sidebar menu if it open
    And I fill data in Raise Requisition tab from "rfq_v5" json file at Raise RFQ page
    And I fill data in General Information tab from "rfq_v5" json file at Raise RFQ page
    And I fill data in Request Terms tab from "rfq_v5" json file at Raise RFQ page
    And I add manual item from "rfq_v5" json file at Raise RFQ page
    And I click to "Send to Vendors" button format_1
    Then I see a message "RFQ successfully submitted" appears

    When I click to "I Understand" button format_1
    And I input RFQ title from "rfq_v5" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v5" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "PENDING QUOTATION"

    # P2P-RFQ-S07-002 Close RFQ that had already been issued to vendors
    When I get RFQ number in list
    And I double click to RFQ title in RFQ list from "rfq_v5" json file
    And Wait for "3" seconds
    Then I see 'RFQ Detail' page title
    And I see RFQ title at RFQ detail page from "rfq_v5" json file

    When I click to "Close RFQ" button format_1
    Then I see a notification appears "There are still suppliers that have yet to revert their quotes. Do you still want to close this RFQ?"

    When I click to "Yes" button format_1
    Then I see a message "RFQ was closed successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'RFQ List' page title

    When I input RFQ title from "rfq_v5" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v5" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "RFQ CLOSED"

    # P2P-RFQ-S016-001 Reopen a Closed RFQ
    When I double click to RFQ title in RFQ list from "rfq_v5" json file
    And Wait for "3" seconds
    Then I see 'RFQ Detail' page title
    And I see RFQ title at RFQ detail page from "rfq_v5" json file

    When I click to "Reopen RFQ" button format_1
    Then I see a message "RFQ was reopened successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'RFQ List' page title

    When I input RFQ title from "rfq_v5" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v5" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "QUOTATION IN PROGRESS"

Scenario: P2P-RFQ-S018-002 Supplier manage RFQ list then submit quote
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "supplier 1"
    And I click to "Request for Quotations" link on header menu
    And I click to "Request for Quotations" link on the left menu
    And I click to "RFQ List" link on the left sub menu
    Then I see 'RFQ List' page title

    When "supplier" input RFQ number just created to 'Filter RFQ No' in 'RFQ' list
    Then I see RFQ title from "rfq_v5" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "PENDING QUOTATION"

    When I double click to RFQ title in RFQ list from "rfq_v5" json file
    And Wait for "3" seconds
    Then I see 'RFQ Detail' page title
    And I see RFQ title at RFQ detail page from "rfq_v5" json file

    When I select "United States Dollar (+USD)" from 'Currency' dropdown at 'RFQ Detail' page
    And I select "GST7" from 'Tax Code' dropdown at 'Request Terms' table on 'RFQ Detail' page
    And I input "5000" to 'Quoted Unit Price' textbox at 'RFQ Detail' page
    And I click to "Submit Quote" button format_1
    Then I see a message "Quotation Successfully Submitted" appears

    When I click to "I Understand" button format_1
    Then I see 'RFQ List' page title

    When "supplier" input RFQ number just created to 'Filter RFQ No' in 'RFQ' list
    Then I see RFQ title from "rfq_v5" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "QUOTATION IN PROGRESS"

Scenario: P2P-RFQ-S011-001-002 Buyer shortlist RFQ
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to "Request for Quotations" link on header menu
    And I click to "Request for Quotations" link on the left menu
    And I click to "RFQ List" link on the left sub menu
    Then I see 'RFQ List' page title

    When I input RFQ title from "rfq_v5" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v5" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "QUOTATION IN PROGRESS"
   
    # Close RFQ
    When I double click to RFQ title in RFQ list from "rfq_v5" json file
    And Wait for "3" seconds
    Then I see 'RFQ Detail' page title
    And I see RFQ title at RFQ detail page from "rfq_v5" json file

    When I click to "Close RFQ" button format_1
    Then I see a notification appears "Are you sure you want to close this RFQ?"

    When I click to "Close" button format_1
    Then I see a message "RFQ was closed successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'RFQ List' page title

    When I input RFQ title from "rfq_v5" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v5" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "RFQ CLOSED"

    # P2P-RFQ-S011-002 Shortlist to Vender with invalid value
    When I double click to RFQ title in RFQ list from "rfq_v5" json file
    And Wait for "3" seconds
    Then I see 'RFQ Detail' page title
    And I see RFQ title at RFQ detail page from "rfq_v5" json file

    When I expand layout sidebar menu if it open
    And I click to "Shortlist Vendor" button format_3
    Then I see a message "Validation error, please check your input." appears

    # P2P-RFQ-S011-001 Shortlist to Vender with valid value
    When I click to "OK" button format_1
    Then I see a validation text of 'Approval Route' at 'RFQ Detail' page "Please select valid approval route" appears

    When I select "auto approval RFQ" from 'Approval Route' dropdown at 'RFQ Detail' page
    And I check to supplier checkbox at 'RFQ Detail' page
    And I input a value is bigger than the required quantity from "rfq_v5" json file to 'Awarded Quantity' textbox
    And I click to "Shortlist Vendor" button format_3
    Then I see a message "Sum of Awarded Qty of each item cannot be greater than Requested Quantity" appears

    When I click to "OK" button format_1
    And I input a value is smaller than the required quantity from "rfq_v5" json file to 'Awarded Quantity' textbox
    And I click to "Shortlist Vendor" button format_3
    Then I see a message "RFQ has been successfully shortlisted" appears

    When I click to "I Understand" button format_1
    Then I see 'RFQ List' page title

    When I input RFQ title from "rfq_v5" json file to 'Search RFQ' textbox
    Then I see RFQ title from "rfq_v5" json file at the first row in RFQ list
    And I see RFQ status in RFQ list is "PENDING APPROVAL"