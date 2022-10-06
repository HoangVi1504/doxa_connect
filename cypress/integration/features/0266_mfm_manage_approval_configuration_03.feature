@manage_approval_configuration @entity_admin
Feature: 0266 Entity admin setup more Approval Configuration with RFQ, GR

Scenario: MFM-S002-004 Entity admin able to opt-out approval routing for RFQ Pricing feature
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

    When I click to "Manage Approval Configuration" link on the left sub menu
    Then I see 'Approval Configuration' page

    When I uncheck the checkbox 'Approval Configuration' page if it is checked
    And I click to "Manage Approval Group" link on the left sub menu
    Then I see 'List Approval Group' page

    When I click to "Manage Approval Configuration" link on the left sub menu
    Then I see 'Approval Configuration' page

    When I check to "RFQ Pricing" checkbox at 'Approval Configuration' page
    And I click to "Save" button format_1
    Then I see a message "Update is successful" appears

    When I click to "I Understand" button format_1
    Then I see "RFQ Pricing" checkbox at 'Approval Configuration' page is checked

    # Creator verify Approval Route dropdown is disabled
    When I logout account
    And I login with role "creator"
    And I click to hamburger menu
    And I click to "Purchase" button format_1
    And Wait for "3" seconds
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
    And I click to "Request for Quotations" link on header menu
    And I click to "Request for Quotations" link on the left menu
    And I click to "RFQ List" link on the left sub menu
    Then I see 'RFQ List' page title

    When "buyer" input RFQ number just created to 'Filter RFQ No' in 'RFQ' list
    Then I see RFQ status in RFQ list is "RFQ CLOSED"

    When I double click to RFQ number just created in 'RFQ' list
    And Wait for "3" seconds
    Then I see 'RFQ Detail' page title
    And I see 'Approval Route' dropdown at 'RFQ' page is disabled

Scenario: MFM-S002-005 Entity admin able to opt-out approval routing for Good Receipts feature
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

    When I click to "Manage Approval Configuration" link on the left sub menu
    Then I see 'Approval Configuration' page

    When I uncheck the checkbox 'Approval Configuration' page if it is checked
    And I click to "Manage Approval Group" link on the left sub menu
    Then I see 'List Approval Group' page

    When I click to "Manage Approval Configuration" link on the left sub menu
    Then I see 'Approval Configuration' page

    When I check to "Good Receipts" checkbox at 'Approval Configuration' page
    And I click to "Save" button format_1
    Then I see a message "Update is successful" appears

    When I click to "I Understand" button format_1
    Then I see "Good Receipts" checkbox at 'Approval Configuration' page is checked

    # Creator verify Approval Route dropdown is disabled
    When I logout account
    And I login with role "creator"
    And I click to hamburger menu
    And I click to "Purchase" button format_1
    And Wait for "3" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Receipts" link on header menu
    And I click to "Create Receipt From DO" link on the left menu
    Then I see 'Create GR From DO' page

    When I input "PENDING RECEIPT" to 'Filter Status' in 'Create GR from DO' list
    And I check to DO No checkbox at 'Create GR' page
    And I click to "Create Goods Receipt" button format_2
    And Wait for "5" seconds
    Then I see 'Create GR From DO' page
    And I see 'Approval Route' dropdown at 'Create GR' page is disabled

    When I click to "Create" button format_1
    Then I see a message "Goods receipt successfully submitted" appears

    When I click to "I Understand" button format_1
    Then I see 'GR List' page

Scenario: Entity admin uncheck all function in Manage Approval Configuration
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