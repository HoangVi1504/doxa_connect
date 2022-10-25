@manage_category @entity_admin
Feature: 0237 Entity admin can create, update and delete category

Scenario: MACT-S001-001-002 MACT-S006- 001 MACT-S003- 001 Entity admin can create category then deactivate that category
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "General Setting" link on the left menu
    And I click to "Manage Category" link on the left sub menu
    Then I see 'List of Category' page

    When Delete all category are created by automation
    And I click to "Create New" button format_1
    Then I see 'Create New Category' page

    When I click to "Create" button format_2
    Then I see a message "Validation error, please check your input" appears

    When I click to "OK" button format_1
    Then I see validation text of 'Category Name' at 'Create New Category' page appears "Please enter valid Category Name"

    When I input "AUTO EQUIPMENT" to 'Category Name' textbox at 'Create New Category' page
    And I input "auto create this category" to 'Category Description' textbox at 'Create New Category' page
    And I click to "Create" button format_2
    Then I see a message "Unable to add category" appears

    When I click to "OK" button format_2
    And I input random category name to 'Category Name' textbox at 'Create New Category' page
    And I click to "Create" button format_2
    Then I see a message "Category created successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'List of Category' page

    When I input category name of category just created to 'Filter Category Name' in 'Category' list
    Then I see random category name of category just created in 'Category' list
    And I see category description of category just searched in 'Category' list is "auto create this category"
    And I see active category status of category just searched in 'Category' list is "Yes"
    And I see action of category just searched in 'Category' list is "Deactivate"

    When I check to category name of category just created in 'Category' list
    And I click to "Deactivate" button format_1
    Then I see a notification appears "Are you sure you want to deactivate"

    When I click to 'Deactivate' button in notification at 'Category' list
    Then I see a message "Category Deactivated" appears

    When I click to "I Understand" button format_1
    # Bug ID: 
    # And I input category name of category just created to 'Filter Category Name' in 'Category' list
    # Then I see random category name of category just created in 'Category' list
    # And I see active category status of category just searched in 'Category' list is "No"
    # And I see action of category just searched in 'Category' list is "Activate"
    # work around
    And I click to "Manage Tax" link on the left sub menu
    And I click to "Manage Category" link on the left sub menu
    Then I see 'List of Category' page

    When I input category name of category just created to 'Filter Category Name' in 'Category' list
    Then I see random category name of category just created in 'Category' list
    And I see active category status of category just searched in 'Category' list is "No"
    And I see action of category just searched in 'Category' list is "Reactivate"
    # end work around

Scenario: MACT-S002-002 MACT-S006-002-003 MACT-S003-001 Entity admin can update, active and delete an existing category
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "General Setting" link on the left menu
    And I click to "Manage Category" link on the left sub menu
    Then I see 'List of Category' page

    When I input category name of category just created to 'Filter Category Name' in 'Category' list
    Then I see random category name of category just created in 'Category' list

    When I double click to category name of category just created in 'Category' list
    And Wait for "3" seconds
    Then I see 'Category Details' page
    And I see category name of category just created in 'Category Name' textbox at 'Category Details' page
    And I see value in 'Category Description' textbox at 'Category Details' page is "auto create this category"

    When I click to "Edit" button format_3
    And I input "auto update this category" to 'Category Description' textbox at 'Create New Category' page
    And I click to "Save" button format_2
    Then I see a message "Category updated successfully" appears

    When I click to "I Understand" button format_1
    And I click to "Back" button format_1
    Then I see 'List of Category' page

    When I input category name of category just created to 'Filter Category Name' in 'Category' list
    Then I see random category name of category just created in 'Category' list
    And I see category description of category just searched in 'Category' list is "auto update this category"
    And I see active category status of category just searched in 'Category' list is "No"
    And I see action of category just searched in 'Category' list is "Reactivate"

    When I click to action "Reactivate" of category just created in 'Category' list
    Then I see a notification appears "Are you sure you want to activate"

    When I click to 'Activate' button in notification at 'Category' list
    Then I see a message "Category Activated" appears

    When I click to "I Understand" button format_1
    And I input category name of category just created to 'Filter Category Name' in 'Category' list
    Then I see random category name of category just created in 'Category' list
    And I see active category status of category just searched in 'Category' list is "Yes"
    And I see action of category just searched in 'Category' list is "Deactivate"

    When I check to category name of category just created in 'Category' list
    And I click to "Delete" button format_1
    Then I see a notification appears "Are you sure you want to delete"

    When I click to 'Delete' button in notification at 'Category' list
    Then I see a message "Category Deleted" appears

    When I click to "I Understand" button format_1

    # Delete category has been used in other processes
    When I input "AUTO EQUIPMENT" to 'Filter Category Name' in 'Category' list
    Then I see category name of category just searched 'Category' list is "AUTO EQUIPMENT"
    And I see category description of category just searched in 'Category' list is "auto equipment"
    And I see active category status of category just searched in 'Category' list is "Yes"
    And I see action of category just searched in 'Category' list is "Deactivate"
    And I check to category name "AUTO EQUIPMENT" checkbox in 'Category' list

    When I click to "Delete" button format_1
    Then I see a notification appears "Are you sure you want to delete"

    When I click to 'Delete' button in notification at 'Category' list
    Then I see a message "This record has been used. Cannot be deleted" appears