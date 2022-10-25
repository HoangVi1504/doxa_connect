@manage_tax @entity_admin
Feature: 0233 Entity admin can create and update manage tax

Scenario: MATA-001-002 Entity admin can create manage tax
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin stag"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "General Setting" link on the left menu
    And I click to "Manage Tax" link on the left sub menu
    And I click to "Create New" button format_2
    Then I see 'Create Tax Record' page

    When I click to "Create" button format_2
    Then I see a message "Validation error, please check your input" appears

    When I click to "OK" button format_1
    Then I see a validation text of 'Tax Code' at 'Create Tax Record' page appears "Please enter valid Tax Code"
    And I see a validation text of 'Tax Rate' at 'Create Tax Record' page appears "Tax Rate is required"

    When I input random tax code to 'Tax Code' textbox at 'Create Tax Record' page
    And I input "0.7" to 'Tax Rate' textbox at 'Create Tax Record' page
    And I input "auto test create tax" to 'Description tax' textbox at 'Create Tax Record' page
    And I click to "Create" button format_2
    Then I see a message "Tax has been created successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'List of Tax Record' title

    When I input tax code just created to 'Filter Tax Code' in Tax list
    Then I see random tax code in Tax list
    And I see tax rate in Tax list is "0.70"
    And I see description tax in Tax list is "auto test create tax"
    And I see tax default status in Tax list is "No"
    And I see tax active status in Tax list is "Yes"
    And I see tax action in Tax list is "Deactivate"

    When I click to tax action "Deactivate" in Tax list
    Then I see a notification appears "Are you sure you want to deactivate?"

    When I click to 'Deactivate' button in notification at 'List Tax' 
    Then I see a message "Deactivated" appears

    When I click to "I Understand" button format_1
    Then I see tax active status in Tax list is "No"
    And I see tax action in Tax list is "Reactivate"

Scenario: MATA-004 Entity admin can update the existing Tax
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin stag"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "General Setting" link on the left menu
    And I click to "Manage Tax" link on the left sub menu
    Then I see 'List of Tax Record' title

    When I input tax code just created to 'Filter Tax Code' in Tax list
    Then I see random tax code in Tax list
    And I see tax rate in Tax list is "0.70"
    And I see description tax in Tax list is "auto test create tax"
    And I see tax default status in Tax list is "No"
    Then I see tax active status in Tax list is "No"
    And I see tax action in Tax list is "Reactivate"

    When I double click to tax code just created in Tax list
    And Wait for "3" seconds
    Then I see 'Tax Record Details' page
    And I see tax code just created in 'Tax Code' textbox at 'Tax Detail' page

    When I click to "Edit" button format_3
    And I clear value in 'Tax Rate' textbox at 'Tax Detail' page
    And I click to "Save" button format_2
    Then I see a message "Validation error, please check your input" appears

    When I click to "OK" button format_1
    Then I see a validation text of 'Tax Rate' at 'Create Tax Record' page appears "Tax Rate is required"

    When I input "0.5" to 'Tax Rate' textbox at 'Create Tax Record' page
    And I input "auto test update tax" to 'Description tax' textbox at 'Create Tax Record' page
    And I check to 'Set Active Status' checkbox at 'Tax Detail' page
    And I click to "Save" button format_2
    Then I see a message "Update Successfully" appears

    When I click to "I Understand" button format_1
    And I click to "Manage Tax" link on the left sub menu
    Then I see 'List of Tax Record' title

    When I input tax code just created to 'Filter Tax Code' in Tax list
    Then I see random tax code in Tax list
    And I see tax rate in Tax list is "0.50"
    And I see tax default status in Tax list is "No"
    And I see tax active status in Tax list is "Yes"
    And I see tax action in Tax list is "Deactivate"

    When I check to tax code just created in Tax list
    And I click to "Deactivate" button format_1
    Then I see a notification appears "Are you sure you want to deactivate?"

    When I click to 'Deactivate' button in notification at 'List Tax'
    Then I see a message "Deactivated" appears

    When I click to "I Understand" button format_1
    Then I see tax active status in Tax list is "No"
    And I see tax action in Tax list is "Reactivate"

    When I check to tax code just created in Tax list
    And I click to "Activate" button format_1
    Then I see a notification appears "Are you sure you want to activate?" 

    When I click to 'Activate' button in notification at 'List Tax'
    Then I see a message "Activated" appears

    When I click to "I Understand" button format_1
    Then I see tax active status in Tax list is "Yes"
    And I see tax action in Tax list is "Deactivate"