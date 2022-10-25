@manage_user @entity_admin
Feature: 0221 Entity Admin Create Organization User

Scenario: NEUS-001-002 Entity admin create organization user
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin stag"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "3" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Entity Management" link on header menu
    And I click to "Manage Organization Users" link on the left menu
    And I click to "Create New" button format_2
    Then I see 'Create New Organization User' page title

    When I click to "Create" button format_2
    Then I see a message "Validation error, please check your input" appears

    When I click to "OK" button format_1 
    Then I see a validation text of 'User Name' at 'Organization User' page appears "Please enter valid User Name" 
    And I see a validation text of 'Email' at 'Organization User' page appears "Please enter valid Email"
    And I see a validation text of 'Work Phone' at 'Organization User' page appears "Please enter valid Work Number"

    When I input random name to 'User Name' textbox at 'Organization User' page
    And I input random email to 'Email' textbox at 'Organization User' page
    And I input random phone to 'Work Phone' textbox at 'Organization User' page
    And I select dial code "Singapore" from 'Dial Code' dropdown at 'Organization User' page
    And I input designation "test designation" to 'Designation' textbox at 'Organization User' page
    And I input role name "RFQ CREATOR" to 'Search Role' textbox at 'Organization User' page
    And I check to role "RFQ CREATOR" from 'Assigned Roles' list
    And I click to "Add" button format_1
    And I input company "AUTO ENTITY ADMIN" to 'Search Company' textbox at 'Organization User' page
    And I click company "AUTO ENTITY ADMIN" in Company list at 'Organization User' page
    And I click to 'Add' button in Company list at 'Organization User' page
    Then I see entity admin "AUTO ENTITY ADMIN" in 'Companies List' tab
 
    When I check to company admin checkbox at 'Company List'
    And I click to 'Custom Password' radio button at 'Organization User' page
    And I input password "12345678" to 'Custom Password' textbox at 'Organization User' page
    And I click to "Create" button format_2
    Then I see a message "User Created" appears

    When I click to "I Understand" button format_1
    Then I see 'Organization Users List' page title

    When I input random company name to 'Filter Company Name' textbox in 'Organization Users List'
    Then I see random full name in 'Organization Users List' 
    And I see random email in 'Organization Users List'
    And I see random work phone in 'Organization Users List'
    And I see designation in 'Organization Users List' is "test designation"
    And I see user status in 'Organization Users List' is "Yes"

Scenario: NEUS-003 Entity admin update organization user
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin stag"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "3" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Entity Management" link on header menu
    And I click to "Manage Organization Users" link on the left menu
    Then I see 'Organization Users List' page title
    
    When I input random company name to 'Filter Company Name' textbox in 'Organization Users List'
    Then I see random full name in 'Organization Users List'

    When I double click to random full name in 'Organization Users List'
    Then I see 'Organization User Details' page title
    And I see user name just created in 'Organization User Details' page

    When I click to "Edit" button format_1
    And I input random name to 'User Name' textbox at 'Organization User' page
    And I input random phone to 'Work Phone' textbox at 'Organization User' page 
    And I input designation "test update designation" to 'Designation' textbox at 'Organization User' page
    And I input role name "RFQ APPROVER" to 'Search Role' textbox at 'Organization User' page
    And I check to role "RFQ APPROVER" from 'Assigned Roles' list
    And I click to "Save" button format_2
    Then I see a message "Update Successfully" appears

    When I click to "I Understand" button format_1
    And I click to "Manage Organization Users" link on the left menu
    Then I see 'Organization Users List' page title

    When I input random company name to 'Filter Company Name' textbox in 'Organization Users List'
    Then I see random full name in 'Organization Users List'
    And I see random email in 'Organization Users List'
    And I see random work phone in 'Organization Users List'
    And I see designation in 'Organization Users List' is "test update designation"
    And I see user status in 'Organization Users List' is "Yes"

Scenario: NEUS-004-005 Entity admin deactivate and reactivate an existing user
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin stag"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Entity Management" link on header menu
    And I click to "Manage Organization Users" link on the left menu
    Then I see 'Organization Users List' page title

    When I input random company name to 'Filter Company Name' textbox in 'Organization Users List'
    Then I see random full name in 'Organization Users List'

    # Deactivate Account
    When I double click to random full name in 'Organization Users List'
    Then I see 'Organization User Details' page title
    And I see user name just created in 'Organization User Details' page

    When I click to "Deactivate Account" button format_1
    Then I see a notification appears "Are you sure you want to deactivate the user?"

    When I click to "Deactivate" button format_1
    Then I see a message "User Deactivated" appears

    When I click to "I Understand" button format_1
    And I click to "Manage Organization Users" link on the left menu
    Then I see 'Organization Users List' page title

    When I input random company name to 'Filter Company Name' textbox in 'Organization Users List'
    Then I see random full name in 'Organization Users List'
    And I see random email in 'Organization Users List'
    And I see random work phone in 'Organization Users List'
    And I see designation in 'Organization Users List' is "test update designation"
    And I see user status in 'Organization Users List' is "No"

    # Reactivate Account
    When I double click to random full name in 'Organization Users List'
    Then I see 'Organization User Details' page title
    And I see user name just created in 'Organization User Details' page

    When I click to "Activate Account" button format_1
    Then I see a notification appears "Are you sure you want to activate the user?"

    When I click to "Activate" button format_1
    Then I see a message "User Activated" appears

    When I click to "I Understand" button format_1
    And I click to "Manage Organization Users" link on the left menu
    Then I see 'Organization Users List' page title

    When I input random company name to 'Filter Company Name' textbox in 'Organization Users List'
    Then I see random full name in 'Organization Users List'
    And I see random email in 'Organization Users List'
    And I see random work phone in 'Organization Users List'
    And I see designation in 'Organization Users List' is "test update designation"
    And I see user status in 'Organization Users List' is "Yes"

    # Reset Password
    When I double click to random full name in 'Organization Users List'
    Then I see 'Organization User Details' page title
    And I see user name just created in 'Organization User Details' page

    When I click to "Edit" button format_1
    And I click to 'Reset Password' button at 'Organization User' page
    Then I see 'Reset Password User' page title

    When I click to 'Custom Password' radio button at 'Organization User' page
    And I input password "quynhle123" to 'Custom Password' textbox at 'Organization User' page
    And I click to "Reset Password" button format_2
    Then I see a message "Password Changed Successfully" appears

    When I click to "I Understand" button format_1
    And I click to "Back" button format_1
    Then I see 'Organization User Details' page title
    And I see user name just created in 'Organization User Details' page

    When I click to "Edit" button format_1
    And I click to 'Reset Two Factor' button at 'Organization User' page
    Then I see a notification appears "Are you sure you want to reset"

    When I click to 'Reset Notification Pass' button at 'Organization User' page
    Then I see a message "Two FA Reset Successful" appears