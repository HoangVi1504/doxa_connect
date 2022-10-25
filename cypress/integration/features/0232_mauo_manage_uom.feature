@manage_uom @entity_admin
Feature: 0232 Entity Admin can create and update manage uom

Scenario: MAUO-001-002 Entity admin can create manage uom
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin stag"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "General Setting" link on the left menu
    And I click to "Manage UOM" link on the left sub menu
    And I click to "Create New" button format_2
    Then I see 'Create New UOM' page

    When I click to "Create" button format_2
    Then I see a message "Validation error, please check your input" appears

    When I click to "OK" button format_1
    Then I see a validation text of 'uom code' at 'Create Uom' page appears "Please input a UOM Code"
    And I see a validation text of 'uom name' at 'Create Uom' page appears "Please input a UOM Name"

    When I input random uom code to 'Uom Code' textbox at 'Create Uom' page
    And I input random uom name to 'Uom Name' textbox at 'Create Uom' page
    And I input "auto test create uom" to 'Uom Description' textbox at 'Create Uom' page
    And I click to "Create" button format_2
    Then I see a message "UOM created successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'List of UOM' title

    When I input uom code just created to 'Filter Uom Code' in UOM list
    Then I see random uom code in UOM list
    And I see random uom name in UOM list
    And I see description in UOM list is "auto test create uom"
    And I see uom status in UOM list is "Yes"
    And I see uom action in UOM list is "Deactivate"

    When I click to uom action "Deactivate" in UOM list
    Then I see a notification appears "Are you sure you want to deactivate ?"

    When I click to 'Deactivate' button in notification
    Then I see a message "Deactivated" appears

    When I click to "I Understand" button format_1
    Then I see uom status in UOM list is "No"
    And I see uom action in UOM list is "Reactivate" 

Scenario: MAUO-004 Entity admin can update the existing UOM
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin stag"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "General Setting" link on the left menu
    And I click to "Manage UOM" link on the left sub menu
    Then I see 'List of UOM' title

    When I input uom name just created to 'Filter Uom Name' in UOM list
    Then I see random uom code in UOM list
    And I see random uom name in UOM list
    And I see description in UOM list is "auto test create uom"
    And I see uom status in UOM list is "No"
    And I see uom action in UOM list is "Reactivate"

    When I double click to uom code just created in UOM list
    And Wait for "3" seconds
    Then I see 'UOM Detail' page
    And I see uom code just created in 'UOM Code' textbox at 'UOM Detail' page

    When I click to "Edit" button format_3
    And I clear value in 'UOM Name' textbox at 'UOM detail' page
    And I click to "Save" button format_2
    Then I see a message "Validation error, please check your input" appears

    When I click to "OK" button format_1
    Then I see a validation text of 'uom name' at 'Create Uom' page appears "Please input a UOM Name"

    When I input random uom name to 'Uom Name' textbox at 'Create Uom' page
    And I click to "Save" button format_2
    Then I see a message "UOM updated successfully" appears

    When I click to "I Understand" button format_1
    And I click to "Manage UOM" link on the left sub menu
    Then I see 'List of UOM' title

    When I input uom name just created to 'Filter Uom Name' in UOM list
    Then I see random uom code in UOM list
    And I see random uom name in UOM list
    And I see uom status in UOM list is "No"
    And I see uom action in UOM list is "Reactivate"

    When I click to uom action "Reactivate" in UOM list
    Then I see a notification appears "Are you sure you want to activate ?"

    When I click to 'Activate' button in notification
    Then I see a message "Activated" appears

    When I click to "I Understand" button format_1
    Then I see uom status in UOM list is "Yes"
    And I see uom action in UOM list is "Deactivate"

    When I check to uom code just created in UOM list
    And I click to "Deactivate" button format_1
    Then I see a notification appears "Are you sure you want to deactivate ?"

    When I click to 'Deactivate' button in notification
    Then I see a message "Deactivated" appears

    When I click to "I Understand" button format_1
    Then I see uom status in UOM list is "No"
    And I see uom action in UOM list is "Reactivate"

    When I check to uom code just created in UOM list
    And I click to "Activate" button format_1
    Then I see a notification appears "Are you sure you want to activate ?"

    When I click to 'Activate' button in notification
    Then I see a message "Activated" appears

    When I click to "I Understand" button format_1
    Then I see uom status in UOM list is "Yes"
    And I see uom action in UOM list is "Deactivate"