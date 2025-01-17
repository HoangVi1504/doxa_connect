@po @p2p
Feature: 0145 Convert RFQ to PO, Preview PO, Approval Configuration set as true, cancel PO

Scenario: P2P-PO-S01-003 P2P-PO-S02-001 P2P-PO-S03-001 P2P-PO-S07-002 Convert RFQ to PO, Preview PO, Approval Configuration set as true, cancel PO
    Given Navigate to Doxa Connect 2.0 site
    # Config opt out approval configuration for Purchase Order feature
    When I login with role "buyer"
    And Call API uncheck all function in Approval Configuration
    And Call API opt out approval configuration for "Purchase Order" feature
    And I logout account
    And I login with role "creator"
    And Call API raise RFQ
    And I click to "Request for Quotations" link on header menu
    And I click to "Request for Quotations" link on the left menu
    And I click to "RFQ List" link on the left sub menu
    Then I see 'RFQ List' page title

    When I input random RFQ title to 'Search RFQ' textbox in 'RFQ' list
    And I get RFQ number in list
    And I logout account
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
    And I see RFQ number just created in 'RFQ No' textbox at 'RFQ Detail' page

    When I click to "Convert to Order" button format_1
    And I click to "I Understand" button format_1
    Then I see 'RFQ List' page title

    When "buyer" input RFQ number just created to 'Filter RFQ No' in 'RFQ' list
    Then I see RFQ status in RFQ list is "COMPLETED"

    When I click to "Orders" link on header menu
    And I click to "Orders List" link on the left menu
    And I click to "POs List" link on the left sub menu
    Then I see 'PO List' page 

    When I input RFQ No to filter RFQ in 'PO' list
    And Get PO number in list
    And I double click to PO No in PO list
    And Wait for "3" seconds
    Then I see 'PO Detail' page
    And "buyer" see PO No in 'PO No' textbox at 'PO Detail' page
    And I see 'Approval Route' dropdown at 'PO' page is disabled

    When I click to "Preview PO" button format_1
    Then I see PO number in Preview PO at 'PO Detail' page

    When I click to close preview PO button at 'PO Detail' page
    And I click to "Issue" button format_1
    Then I see a message "PO has been issued to supplier" appears

    When I click to "I Understand" button format_1
    Then I see 'PO List' page

    When "buyer" input PO No to filter PO in "PO" list
    Then I see PO status in list is "ISSUED"
    And I see Supplier Ack status is "NOT VIEWED"

    When I double click to PO No in PO list
    And Wait for "3" seconds
    Then I see 'PO Detail' page
    And "buyer" see PO No in 'PO No' textbox at 'PO Detail' page

    When I click to "Cancel" button format_1
    Then I see a notification appears "Do you wish to cancel this order?"

    When I click to "Yes" button format_1
    Then I see a message "The purchase order has successfully been cancelled" appears

    When I click to "I Understand" button format_1
    Then I see 'PO List' page

    When "buyer" input PO No to filter PO in "PO" list
    Then I see PO status in list is "CANCELLED"
    And I see Supplier Ack status is "NOT VIEWED"

    # Entity admin uncheck all function in Approval Configuration
    When I logout account
    And I login with role "buyer"
    And Call API uncheck all function in Approval Configuration