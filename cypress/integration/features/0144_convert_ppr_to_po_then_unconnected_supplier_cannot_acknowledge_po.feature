@po @p2p
Feature: 0144 Convert PPR to PO then Unconnected supplier cannot acknowledge PO

Scenario: P2P-PO-S01-002 Convert PPR to PO
    # Entity admin uncheck all function in Approval Configuration
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And Call API uncheck all function in Approval Configuration
    # Convert PPR to PO
    And I logout account
    And I login with role "creator"
    And Call API Raise PPR random with contract item and unconnected supplier
    And I logout account
    And I login with role "approver 1"
    And Call API approver PPR random
    And I logout account
    And I login with role "creator"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Pre Purchase Requisition" link on the left menu
    And I click to "Purchase Pre-Requisitions List" link on the left sub menu
    Then I see 'PPR List' page title

    When I input PPR random to 'Search PPR' textbox
    Then I see PPR status in PPR list is "PENDING CONVERSION TO PO" 

    When Get PPR number in 'PPR' list
    And I click to "Orders" link on header menu
    And I click to "Requests Pending Conversion" link on the left menu
    And I click to "PPRs To Be Converted" link on the left sub menu
    Then I see 'PPR Convert List' page

    When I input PPR number just created to 'Filter PPR No' in "PPRs To Be Converted" list
    And I double click to PPR number just created in 'PPR' list
    And Wait for "3" seconds
    Then I see 'PPR Convert Detail' page

    When I click to "Convert to PO" button format_1
    Then I see a message "Converted to PO successfully" appears

    When I click to "I Understand" button format_1
    And I click to "Orders List" link on the left menu
    And I click to "POs List" link on the left sub menu
    Then I see 'PO List' page

    When I input PPR number just created to 'Filter PPR No' in "PO" list
    Then I see PO status in list is "PENDING ISSUE"

    When Get PO number in list
    And I double click to PO No in PO list
    And Wait for "3" seconds
    Then I see 'PO Detail' page
    And "buyer" see PO No in 'PO No' textbox at 'PO Detail' page

    When I select "auto approval PO" from 'Approval Route' dropdown at 'PO Detail' page
    And I input "1500" to 'Item Quantity' textbox at 'PO Detail' page
    And I click to "Issue" button format_1
    Then I see a message "PO has been submitted for approval" appears

    When I click to "I Understand" button format_1
    Then I see 'PO List' page

    When "buyer" input PO No to filter PO in "PO" list
    Then I see PO status in list is "PENDING APPROVAL"

Scenario: P2P-PO-S03-003 P2P-PO-S09-001 Approver approve PO
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "approver 1"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Orders" link on header menu
    And I click to "Orders List" link on the left menu
    And I click to "POs List" link on the left sub menu
    Then I see 'PO List' page

    When "buyer" input PO No to filter PO in "PO" list
    Then I see PO status in list is "PENDING APPROVAL"

    When I double click to PO No in PO list
    And Wait for "3" seconds
    Then I see 'PO Detail' page
    And "buyer" see PO No in 'PO No' textbox at 'PO Detail' page

    When I click to "Approve" button format_1
    Then I see a message "Approval is successful" appears

    When I click to "I Understand" button format_1
    Then I see 'PO List' page

    When "buyer" input PO No to filter PO in "PO" list
    Then I see PO status in list is "PENDING ISSUE"

    When I logout account
    And I login with role "creator"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Orders" link on header menu
    And I click to "Orders List" link on the left menu
    And I click to "POs List" link on the left sub menu
    Then I see 'PO List' page

    When "buyer" input PO No to filter PO in "PO" list
    Then I see PO status in list is "PENDING ISSUE"

    When I double click to PO No in PO list
    And Wait for "3" seconds
    Then I see 'PO Detail' page
    And "buyer" see PO No in 'PO No' textbox at 'PO Detail' page

    When I click to "Issue" button format_1
    Then I see a message "The purchase order has successfully been issued" appears

    When I click to "I Understand" button format_1
    Then I see 'PO List' page

    When "buyer" input PO No to filter PO in "PO" list
    Then I see PO status in list is "ISSUED"

Scenario: P2P-PO-S09-002 P2P-PO-S04-002 Unconnected supplier cannot acknowledge PO
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "supplier 36"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Orders" link on header menu
    And I click to "Orders List" link on the left menu
    And I click to "POs List" link on the left sub menu
    Then I see 'PO List' page

    When "Unconnected Supplier" input PO No to filter PO in "PO" list
    Then I see PO status in list is "ISSUED"

    When I double click to PO No in PO list
    And Wait for "3" seconds
    Then I see 'PO Detail' page
    And "unconnected supplier" see PO No in 'PO No' textbox at 'PO Detail' page

    When I click to "Acknowledge" button format_1
    Then I see a message "You have not connected to this buyer" appears

    When I click to "OK" button format_1