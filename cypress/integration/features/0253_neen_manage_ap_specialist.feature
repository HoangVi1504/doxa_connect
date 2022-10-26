@manage_ap_specialist @entity_admin
Feature: 0253 Entity admin can create and update an Ap Specialist

Scenario: NEEN-001-003 Entity admin can create new an ap specialist
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "Vendor Management" link on the left menu
    And I click to "Manage AP Specialist" link on the left sub menu
    And I click to "Create New" button format_2
    Then I see 'Create New AP Specialist Grouping' page

    When I click to "Create" button format_1
    Then I see a message "Please add valid vendors from the list" appears

    When I click to "OK" button format_1
    Then I see a validation text of 'Group Code' at 'Create New AP Specialist Grouping' page appears "Please enter valid Group Code"

    When I input "Auto AP.Specialist" to 'Group Code' textbox at 'Create New AP Specialist Grouping' page
    And I select "auto creator" from 'Ap Specialist' dropdown at 'Create New AP Specialist Grouping' page
    And I input "auto create this Ap Specialist" to 'Remarks' textbox at 'Create New AP Specialist Grouping' page
    And I click to "Create" button format_1
    Then I see a message "Please add valid vendors from the list" appears

    When I click to "OK" button format_1
    And I click to "Add Vendor" button format_2
    And I input "AUTO_EXTERNAL_VENDOR_DEFAULT" to 'Search Key Word' textbox at 'Create New AP Specialist Grouping' page
    And I check to "AUTO_EXTERNAL_VENDOR_DEFAULT" checkbox at 'Create New AP Specialist Grouping' page
    And I click to "Add" button format_1
    Then I see company code in 'External Vendor Tagging' list at 'Create New AP Specialist Grouping' page is "AUTO_EXTERNAL_VENDOR_DEFAULT"
    And I see company name in 'External Vendor Tagging' list at 'Create New AP Specialist Grouping' page is "AUTO_COMAPNY_DEFAULT"
    And I see company reg number in 'External Vendor Tagging' list at 'Create New AP Specialist Grouping' page is "AUO_EXTERNAL_REG_DEFAULT"
    And I click to "Create" button format_1
    Then I see a message "AP Specialist group already exists" appears

    When I click to "OK" button format_1
    And I input random group code to 'Group Code' textbox at 'Create New AP Specialist Grouping' page
    And I click to "Create" button format_1
    Then I see a message "AP Specialist successfully created" appears

    When I click to "I Understand" button format_1
    Then I see 'Manage AP Specialist' page title

    When I input group code just created to 'Filter Group Code' in 'Manage AP Specialist' list
    Then I see random group code in 'Manage AP Specialist' list
    And I see number of entities in 'Manage AP Specialist' list is "1"
    And I see creator ap specialist in 'Manage AP Specialist' list is "AUTO BUYER"

Scenario: NEEN-002-003 Entity admin can update already existing ap specialist
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "Vendor Management" link on the left menu
    And I click to "Manage AP Specialist" link on the left sub menu
    Then I see 'Manage AP Specialist' page title

    When I input group code just created to 'Filter Group Code' in 'Manage AP Specialist' list
    Then I see random group code in 'Manage AP Specialist' list
    And I see number of entities in 'Manage AP Specialist' list is "1"
    And I see creator ap specialist in 'Manage AP Specialist' list is "AUTO BUYER"

    When I double click to group code just created in 'Manage AP Specialist' list
    And Wait for "2" seconds
    Then I see 'AP Specialist Details' page
    And I see group code just created in 'Group Code' textbox at 'AP Specialist Details' page
    And I see ap specialist group item at 'AP Specialist Details' page is "auto creator"

    When I click to "Edit" button format_3
    And I select "auto approver 2" from 'Ap Specialist' dropdown at 'Create New AP Specialist Grouping' page
    Then I see ap specialist group item at 'AP Specialist Details' page is "auto approver 2"

    When I click to delete icon external vendor at 'AP Specialist Details' page
    And I click to "Save" button format_1
    Then I see a message "Please add valid vendors from the list" appears

    When I click to "OK" button format_1
    And I click to "Add Vendor" button format_2
    And I input "AUTO_EXTERNAL_VENDOR_DEFAULT" to 'Search Key Word' textbox at 'Create New AP Specialist Grouping' page
    And I check to "AUTO_EXTERNAL_VENDOR_DEFAULT" checkbox at 'Create New AP Specialist Grouping' page
    And I click to "Add" button format_1
    Then I see company code in 'External Vendor Tagging' list at 'Create New AP Specialist Grouping' page is "AUTO_EXTERNAL_VENDOR_DEFAULT"

    When I click to "Add Vendor" button format_2
    And I input "TEST_SUPPLIER_37" to 'Search Key Word' textbox at 'Create New AP Specialist Grouping' page
    And I check to "TEST_SUPPLIER_37" checkbox at 'Create New AP Specialist Grouping' page
    And I click to "Add" button format_1
    And Wait for "2" seconds
    And I input "TEST_SUPPLIER_37" to 'Filter Company Code' in 'External Vendor Tagging' list
    Then I see company code in 'External Vendor Tagging' list at 'Create New AP Specialist Grouping' page is "TEST_SUPPLIER_37"

    When I click to "Save" button format_1
    Then I see a message "AP Specialist successfully updated" appears

    When I click to "I Understand" button format_1
    And I click to "Back" button format_1
    Then I see 'Manage AP Specialist' page title

    When I input group code just created to 'Filter Group Code' in 'Manage AP Specialist' list
    Then I see random group code in 'Manage AP Specialist' list
    And I see number of entities in 'Manage AP Specialist' list is "2"
    And I see creator ap specialist in 'Manage AP Specialist' list is "AUTO BUYER"