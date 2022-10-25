@manage_approval_configuration @entity_admin
Feature: 0265 Entity admin setup more Approval Configuration with PPR, PR, PO

Scenario: MFM-S002-001 Entity admin able to opt-out approval routing for Pre Purchase Requisition feature
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And Call API uncheck all function in Approval Configuration
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Entity Management" link on header menu
    And I click to "Approval Setting" link on the left menu
    And I click to "Manage Approval Configuration" link on the left sub menu
    Then I see 'Approval Configuration' page
    
    When I check to "Pre Purchase Requisition" checkbox at 'Approval Configuration' page
    And I click to "Save" button format_1
    Then I see a message "Update is successful" appears

    When I click to "I Understand" button format_1
    Then I see "Pre Purchase Requisition" checkbox at 'Approval Configuration' page is checked

    # Creator verify Approval Route dropdown is disabled
    When I logout account
    And I login with role "creator"
    And I click to hamburger menu
    And I click to "Purchase" button format_1
    And Wait for "3" seconds
    And I click to "Requisitions" link on header menu
    And I click to "Pre Purchase Requisition" link on the left menu
    And I click to "Raise Pre-Requisition" link on the left sub menu
    Then I see 'Raise Pre Requisition' page title

    When I expand layout sidebar menu if it open
    Then I see 'Approval Route' dropdown at 'PPR' page is disabled

    When I fill data in Raise Requisition tab from "ppr_v2" json file at Raise PPR page
    And I input PPR random to 'PPR Title' textbox at 'PPR' page
    And I select "Goods" from 'Procurement Type' dropdown at 'PPR' page
    And I fill data in Request Terms tab from "ppr_v2" json file at Raise PPR page
    And I add catalogue item from "ppr_v2" json file at Raise PPR page
    And I click to "Submit" button format_2
    Then I see a message "PPR created successfully" appears

    When I click to "I Understand" button format_1
    And I input PPR random to 'Search PPR' textbox
    Then I see PPR status in PPR list is "PENDING PURCHASER REVIEW"

Scenario: MFM-S002-002 Entity admin able to opt-out approval routing for Purchase Requisition feature
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And Call API uncheck all function in Approval Configuration
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Entity Management" link on header menu
    And I click to "Approval Setting" link on the left menu
    And I click to "Manage Approval Configuration" link on the left sub menu
    Then I see 'Approval Configuration' page

    When I check to "Purchase Requisition" checkbox at 'Approval Configuration' page
    And I click to "Save" button format_1
    Then I see a message "Update is successful" appears

    When I click to "I Understand" button format_1
    Then I see "Purchase Requisition" checkbox at 'Approval Configuration' page is checked

    # Creator verify Approval Route dropdown is disabled
    When I logout account
    And I login with role "creator"
    And I click to hamburger menu
    And I click to "Purchase" button format_1
    And Wait for "3" seconds
    And I click to "Requisitions" link on header menu
    And I click to "Requisitions" link on the left menu
    And I click to "Raise Requisition" link on the left sub menu
    Then I see 'Raise Requisition' page title

    When I expand layout sidebar menu if it open
    Then I see 'Approval Route' dropdown at 'PR' page is disabled

    When I fill data in Raise Requisition tab from "pr_v2" json file at Raise PR page
    And I input PR random to 'PR Title' textbox at 'PR' page
    And I select "Goods" from 'Procurement Type' dropdown at 'PR' page
    And I fill data in Request Terms tab from "pr_v2" json file at Raise PR page
    And I add catalogue item from "pr_v2" json file at Raise PR page
    And I click to "Submit" button format_2
    Then I see a message "Purchase requisition successfully submitted" appears

    When I click to "I Understand" button format_1
    And I input PR title random to 'Search PR' textbox
    And I see PR status in PR list is "PENDING CONVERSION TO PO"

Scenario: MFM-S002-003 Entity admin able to opt-out approval routing for Purchase Order feature
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And Call API uncheck all function in Approval Configuration
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Entity Management" link on header menu
    And I click to "Approval Setting" link on the left menu
    And I click to "Manage Approval Configuration" link on the left sub menu
    Then I see 'Approval Configuration' page
    
    When I check to "Purchase Order" checkbox at 'Approval Configuration' page
    And I click to "Save" button format_1
    Then I see a message "Update is successful" appears

    When I click to "I Understand" button format_1
    Then I see "Purchase Order" checkbox at 'Approval Configuration' page is checked

    # Creator verify Approval Route dropdown is disabled
    When I logout account
    And I login with role "creator"
    And I click to hamburger menu
    And I click to "Purchase" button format_1
    And Wait for "3" seconds
    And Call API Raise PR random
    And I logout account
    And I login with role "approver 1"
    And Call API approver PR random
    And I logout account
    And I login with role "creator"
    And Call API convert PR just created random to PO
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Requisitions" link on the left menu
    And I click to "PRs List" link on the left sub menu
    And I input PR title random to 'Search PR' textbox
    And Get PR number in PR list
    And I click to "Orders" link on header menu
    And I click to "Orders List" link on the left menu
    And I click to "POs List" link on the left sub menu
    And I input PR No to filter PR in "PO" list
    Then I see PO status in list is "PENDING ISSUE"

    When Get PO number in list
    And I double click to PO No in PO list
    And Wait for "6" seconds
    Then I see 'PO Detail' page
    And I see PO No in 'PO No' textbox at 'PO Detail' page
    And I see 'Approval Route' dropdown at 'PO' page is disabled

    When I click to "Issue" button format_1
    Then I see a message "PO has been issued to supplier" appears

    When I click to "I Understand" button format_1
    And "buyer" input PO No to filter PO in "PO" list
    Then I see PO status in list is "ISSUED"