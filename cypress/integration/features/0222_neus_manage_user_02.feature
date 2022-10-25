@manage_user @entity_admin
Feature: 0222 Entity Admin Create Company User

Scenario: NEUS-006-007 Entity admin create company user
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin stag"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "3" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Entity Management" link on header menu
    And I click to "Manage Company User" link on the left menu
    And I click to "Create New" button format_2
    Then I see 'Create New Company User' page title

    When I click to "Create" button format_2
    Then I see a message "Validation error, please check your input" appears

    When I click to "OK" button format_1
    Then I see a validation text of 'User Name' at 'Company User' page appears "Please enter valid User Name"
    And I see a validation text of 'Email' at 'Company User' page appears "Please enter valid Email"
    And I see a validation text of 'Work Phone' at 'Company User' page appears "Please enter valid Work Number"

    When I input random name to 'User Name' textbox at 'Company User' page
    And I input random email to 'Email' textbox at 'Company User' page
    And I input random phone to 'Work Phone' textbox at 'Company User' page
    And I select dial code "Singapore" from 'Dial Code' dropdown at 'Company User' page
    And I input designation "test designation" to 'Designation' textbox at 'Company User' page
    And I input role name "PR CREATOR" to 'Search Role' textbox at 'Company User' page
    And I check to role "PR CREATOR" from 'Assigned Roles' list at 'Company User' page
    And I click to "Security & Login" tab at 'Company User' page
    And I click to 'Custom Password' radio button at 'Company User' page
    And I input password "12345678" to 'Custom Password' textbox at 'Company User' page
    And I click to "Remarks" tab at 'Company User' page
    And I input remark "test remarks" to 'Remarks' textbox at 'Company User' page
    And I click to "Create" button format_2
    Then I see a message "User Created" appears

    When I click to "I Understand" button format_1
    And I click to "Manage Company User" link on the left menu
    Then I see 'Company Users List' page title

    When I input random name to 'Search Company Name' textbox in 'Company Users List'
    Then I see random full name in 'Company Users List'
    And I see random email in 'Company Users List'
    And I see random work phone in 'Company Users List'
    And I see designation in 'Company Users List' is "test designation"
    And I see user status in 'Company Users List' is "Yes"

Scenario: NEUS-008 Entity admin update company user
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin stag"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "4" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Entity Management" link on header menu
    And I click to "Manage Company User" link on the left menu
    Then I see 'Company Users List' page title

    When I input random name to 'Search Company Name' textbox in 'Company Users List'
    Then I see random full name in 'Company Users List'

    When I double click to random name in 'Company Users List'
    Then I see 'Company User Details' page title
    And I see user name just created in 'Company User Details' page

    When I click to "Edit" button format_1
    And I input random name to 'User Name' textbox at 'Company User' page
    And I input random phone to 'Work Phone' textbox at 'Company User' page
    And I input designation "test update designation" to 'Designation' textbox at 'Company User' page
    And I input role name "PPR APPROVER" to 'Search Role' textbox at 'Company User' page
    And I check to role "PPR APPROVER" from 'Assigned Roles' list at 'Company User' page
    And I input feature "Purchase Order" to 'Search Feature' textbox
    And I check to 'Read' "Purchase Order" checkbox in 'Assign Task' tab
    And I check to 'Write' "Purchase Order" checkbox in 'Assign Task' tab
    And I check to 'Approve' "Purchase Order" checkbox in 'Assign Task' tab
    And I click to "Save" button format_2
    Then I see a message "Update Successfully" appears

    When I click to "I Understand" button format_1
    And I click to "Manage Company User" link on the left menu
    Then I see 'Company Users List' page title

    When I input random name to 'Search Company Name' textbox in 'Company Users List'
    Then I see random full name in 'Company Users List'
    And I see random email in 'Company Users List'
    And I see random work phone in 'Company Users List'
    And I see designation in 'Company Users List' is "test update designation"
    And I see user status in 'Company Users List' is "Yes"

Scenario: NEUS-009-010 Entity admin deactivate and reactivate an existing company user
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin stag"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "4" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Entity Management" link on header menu
    And I click to "Manage Company User" link on the left menu
    Then I see 'Company Users List' page title

    When I input random name to 'Search Company Name' textbox in 'Company Users List'
    Then I see random full name in 'Company Users List'

    # Deactivate Account
    When I double click to random name in 'Company Users List'
    Then I see 'Company User Details' page title
    And I see user name just created in 'Company User Details' page

    When I click to "Deactivate Account" button format_1
    Then I see a notification appears "Are you sure you want to deactivate the user?"

    When I click to "Deactivate" button format_1
    Then I see a message "User Deactivated" appears

    When I click to "I Understand" button format_1
    And I click to "Manage Company User" link on the left menu
    Then I see 'Company Users List' page title

    When I input random name to 'Search Company Name' textbox in 'Company Users List'
    Then I see random full name in 'Company Users List'
    And I see random email in 'Company Users List'
    And I see random work phone in 'Company Users List'
    And I see designation in 'Company Users List' is "test update designation"
    And I see user status in 'Company Users List' is "No"

    # Reactivate Account
    When I double click to random name in 'Company Users List'
    Then I see 'Company User Details' page title
    And I see user name just created in 'Company User Details' page

    When I click to "Activate Account" button format_1
    Then I see a notification appears "Are you sure you want to activate the user?"
    
    When I click to "Activate" button format_1
    Then I see a message "User Activated" appears

    When I click to "I Understand" button format_1
    And I click to "Manage Company User" link on the left menu
    Then I see 'Company Users List' page title

    When I input random name to 'Search Company Name' textbox in 'Company Users List'
    Then I see random full name in 'Company Users List'
    And I see random email in 'Company Users List'
    And I see random work phone in 'Company Users List'
    And I see designation in 'Company Users List' is "test update designation"
    And I see user status in 'Company Users List' is "Yes"

    # Reset Password
    When I double click to random name in 'Company Users List'
    Then I see 'Company User Details' page title
    And I see user name just created in 'Company User Details' page

    When I click to "Edit" button format_1
    And I click to "Security & Login" tab at 'Company User' page
    And I click to 'Reset Password' button at 'Company User' page
    Then I see 'Reset Password User' page title

    When I click to 'Custom Password' radio button at 'Company User' page
    And I input password "quynhle123" to 'Custom Reset Password' textbox at 'Company User' page
    And I click to "Reset Password" button format_2
    Then I see a message "Password Changed Successfully" appears

    When I click to "I Understand" button format_1
    And I click to "Back" button format_1
    Then I see 'Company User Details' page title
    And I see user name just created in 'Company User Details' page

    When I click to "Edit" button format_1
    And I click to "Security & Login" tab at 'Company User' page
    And I click to 'Reset Two Factor' button at 'Company User' page
    Then I see a notification appears "Are you sure you want to reset"

    When I click to 'Reset Notification Pass' button at 'Company User' page
    Then I see a message "Two FA Reset Successful" appears