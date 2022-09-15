@manage_approval_group @entity_admin
Feature: 0256 Entity admin can create and update approval group

Scenario: MAG-S001-001-002, MAG-S003-001, MAG-S006- 001 Entity admin can create approval group then deactivate it
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Entity Management" link on header menu
    And I click to "Approval Setting" link on the left menu
    And I click to "Manage Approval Group" link on the left sub menu
    Then I see 'List Approval Group' page

    When I click to "Create New" button format_3
    Then I see 'Create Approval Group' page

    When I click to "Create" button format_2
    Then I see a message "Validation error, please check your input" appears

    When I click to "OK" button format_1
    Then I see validation text of 'Approval Group Name' at 'Crete Approval Group' page appears "Approval group name is required"

    When I input "auto approval default" to 'Approval Group Name' textbox at 'Create Approval Group' page
    And I select "auto ap_specialist" from 'Approver' dropdown at 'Create Approval Group' page
    And I click to "Create" button format_1
    Then I see a message "Group name is not unique" appears

    When I click to "OK" button format_1
    And I input random approval group name to 'Approval Group Name' textbox at 'Create Approval Group' page
    And I input "auto create this approval group" to 'Remark' textbox at 'Create Approval Group' page
    And I click to "Create" button format_1
    Then I see a message "Create is successful" appears

    When I click to "I Understand" button format_1
    Then I see 'List Approval Group' page

    When I input random name of approval group just created to 'Filter Approval Group Name' in 'Approval Group' list
    Then I see name of approval group just created in 'Approval Group' list
    And I see approver of approval group just created in 'Approval Group' list is "auto ap_specialist"
    And I see remark of approval group just created in 'Approval Group' list is "auto create this approval group"
    And I see creator approval group just created in 'Approval Group' list is "AUTO BUYER"
    And I see active status of approval group just created in 'Approval Group' list is "Yes"
    And I see action of approval group just created in 'Approval Group' list is "Deactivate"

    When I check to approval group just created in 'Approval Group' list
    And I click to "Deactivate" button format_1
    Then I see a notification appears "Are you sure you want to deactivate these approval groups"

    When I click to 'Deactivate' button in notification at 'Approval Group' list
    Then I see a message "Deactivation is successful" appears

    When I click to "I Understand" button format_1
    And I input random name of approval group just created to 'Filter Approval Group Name' in 'Approval Group' list
    Then I see name of approval group just created in 'Approval Group' list
    And I see active status of approval group just created in 'Approval Group' list is "No"
    And I see action of approval group just created in 'Approval Group' list is "Activate"

Scenario: MAG-S002-001, MAG-S003-001, MAG-S006-002 Entity admin can update an existing approval group then activate it
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Entity Management" link on header menu
    And I click to "Approval Setting" link on the left menu
    And I click to "Manage Approval Group" link on the left sub menu
    Then I see 'List Approval Group' page

    When I input random name of approval group just created to 'Filter Approval Group Name' in 'Approval Group' list
    Then I see name of approval group just created in 'Approval Group' list
    And I see active status of approval group just created in 'Approval Group' list is "No"
    And I see action of approval group just created in 'Approval Group' list is "Activate"

    When I double click to name of approval group just created in 'Approval Group' list
    And Wait for "3" seconds
    Then I see 'Approval Group Details' page
    And I see name of approval group just created in 'Approval Group Name' textbox at 'Approval Group Details' page

    When I click to "Edit" button format_3
    And I input random value to 'Approval Group Name' textbox at 'Approval Group Details' page
    And I click to close button of approver "auto ap_specialist" at 'Approval Group Details' page
    And I select "auto approver 2" from 'Approver' dropdown at 'Create Approval Group' page
    And I click to "Save" button format_1
    Then I see a message "Update is successful" appears

    When I click to "I Understand" button format_1
    And I click to "Back" button format_1
    Then I see 'List Approval Group' page

    When I input name of approval group just updated to 'Filter Approval Group Name' in 'Approval Group' list
    Then I see name of approval group just updated in 'Approval Group' list
    And I see approver of approval group just created in 'Approval Group' list is "auto approver 2"
    And I see active status of approval group just created in 'Approval Group' list is "No"
    And I see action of approval group just created in 'Approval Group' list is "Activate"

    When I click to action "Activate" of approval group just updated
    Then I see a notification appears "Are you sure you want to activate these approval groups"

    When I click to 'Activate' button in notification at 'Approval Group' list
    Then I see a message "Activation is successful" appears

    When I click to "I Understand" button format_1
    And I input name of approval group just updated to 'Filter Approval Group Name' in 'Approval Group' list
    Then I see name of approval group just updated in 'Approval Group' list
    And I see active status of approval group just created in 'Approval Group' list is "Yes"
    And I see action of approval group just created in 'Approval Group' list is "Deactivate"