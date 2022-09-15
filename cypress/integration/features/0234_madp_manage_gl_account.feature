@manage_gl_account @entity_admin
Feature: 0234 Entity admin can create and update GL Account

Scenario: MADP-001 004 Entity admin can create GL Account
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "General Setting" link on the left menu
    And I click to "Manage G/L Account" link on the left sub menu
    And I click to "Create New" button format_2
    Then I see 'Create GL Account' page

    When I click to "Create" button format_2
    Then I see a message "Validation error, please check your input" appears

    When I click to "OK" button format_1
    Then I see a validation text of 'GL Account' at 'Create GL Account' page appears "Please enter valid G/L Account."

    When I input random gl account to 'GL Account' textbox at 'Create GL Account' page
    And I input "auto create this GL account" to 'Description' textbox at 'Create GL Account' page
    And I click to 'Add Code' button in 'Cost and Department Code' list
    And I click to "Add" button format_1
    Then I see a validation text of 'Code' at 'Create GL Account' page appears "Please enter valid Code"

    When I input random code to 'Code' textbox for 'Cost Code' at 'Create GL Account' page
    And I input "auto remark for this Cost Code" to 'Remarks' textbox at 'Create GL Account' page
    And I click to "Add" button format_1
    Then I see cost code just created in 'Cost Code' list
    And I see remarks cost code in 'Cost Code' list is "auto remark for this Cost Code"

    When I click to "Department Code" tab at 'Create GL Account' page
    And I click to 'Add Code' button in 'Cost and Department Code' list
    And I click to "Add" button format_1
    Then I see a validation text of 'Code' at 'Create GL Account' page appears "Please enter valid Code"

    When I input random code to 'Code' textbox for 'Department Code' at 'Create GL Account' page
    And I input "auto remark for this Department Code" to 'Remarks' textbox at 'Create GL Account' page
    And I click to "Add" button format_1
    Then I see department code just created in 'Department Code' list
    And I see remark department code in 'Department Code' list is "auto remark for this Department Code"

    When I click to "Create" button format_2
    Then I see a message "G/L created successfully." appears

    When I click to "I Understand" button format_1
    Then I see 'List of GL Account' title

    When I input GL account just created to 'Filter GL Account' in GL list
    Then I see random GL account in GL list
    And I see description GL in GL list is "auto create this GL account"
    And I see cost code just created in GL list
    And I see department code just created in GL list
    And I see GL active status in GL list is "Yes"
    And I see GL action in GL list is "Deactivate"

    When I click to GL action "Deactivate" in GL list
    Then I see a notification of gl account appears "Are you sure you want to deactivate"

    When I click to 'Deactivate' button in notification at GL list
    Then I see a message "G/L Deactivated" appears

    When I click to "I Understand" button format_1
    Then I see GL active status in GL list is "No"
    And I see GL action in GL list is "Reactivate"

Scenario: MADP-002 004 Entity admin can update an existing GL Account
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "General Setting" link on the left menu
    And I click to "Manage G/L Account" link on the left sub menu
    Then I see 'List of GL Account' title

    When I input GL account just created to 'Filter GL Account' in GL list
    Then I see random GL account in GL list
    Then I see GL active status in GL list is "No"
    And I see GL action in GL list is "Reactivate"

    When I double click to GL account just created in GL list
    And Wait for "3" seconds
    Then I see 'GL Account Details' page
    And I see gl account just created in 'GL Account' textbox at 'GL Account Details' page

    When I click to "Edit" button format_3
    And I input "auto update this GL account" to 'Description' textbox at 'Create GL Account' page
    And I check to 'Set Active Status' checkbox at 'GL Account Details' page
    And I click to "Save" button format_2
    Then I see a message "G/L updated successfully." appears

    When I click to "I Understand" button format_1
    And I click to "Back" button format_1
    Then I see 'List of GL Account' title

    When I input GL account just created to 'Filter GL Account' in GL list
    Then I see random GL account in GL list
    And I see description GL in GL list is "auto update this GL account"
    Then I see GL active status in GL list is "Yes"
    And I see GL action in GL list is "Deactivate"

    When I check to gl account checkbox just created in GL list
    And I click to "Deactivate" button format_1
    Then I see a notification of gl account appears "Are you sure you want to deactivate"

    When I click to 'Deactivate' button in notification at GL list
    Then I see a message "G/L Deactivated" appears

    When I click to "I Understand" button format_1
    Then I see GL active status in GL list is "No"
    And I see GL action in GL list is "Reactivate"

    When I check to gl account checkbox just created in GL list
    And I click to "Activate" button format_1
    Then I see a notification of gl account appears "Are you sure you want to activate"

    When I click to 'Activate' button in notification at GL list
    Then I see a message "G/L Activated" appears

    When I click to "I Understand" button format_1
    Then I see GL active status in GL list is "Yes"
    And I see GL action in GL list is "Deactivate"