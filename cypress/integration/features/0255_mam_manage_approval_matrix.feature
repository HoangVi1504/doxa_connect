@manage_approval_matrix @entity_admin
Feature: 0255 Entity admin can create approval matrix

Scenario: MAM-S001-003, MAM-S001-001, MAM-S003-001-002 Entity admin can create new approval matrix then deactivate that approval
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Entity Management" link on header menu
    And I click to "Approval Setting" link on the left menu
    And I click to "Manage Approval Matrix" link on the left sub menu
    Then I see 'List of Approval' page

    When I click to "Create New" button format_3
    Then I see 'Create New Approval' page

    When I click to "Create" button format_2
    Then I see a message "Validation error, please check your input" appears

    When I click to "OK" button format_1
    Then I see validation text of 'Approval Code' at 'Create New Approval' page appears "Enter Approval Code"
    And I see validation text of 'Approval Name' at 'Create New Approval' page appears "Enter Approval Name"
    And I see validation text of 'Number of Approval Level' at 'Create New Approval' page appears "Please Select Approval Levels"

    When I input "appr code default" to 'Approval Code' textbox at 'Create New Approval' page
    And I input "approval name default" to 'Approval Name' textbox at 'Create New Approval' page
    And I select "Pre Purchase Requisition" from 'Approval Matrix' dropdown at 'Create New Approval' page
    And I select "1" from 'Number of Approval Level' dropdown at 'Create New Approval' page
    And I select "auto approver [auto.approver@getnada.com]" from 'Assigned Approvers' dropdown at position "1" at 'Create New Approval' page
    And I click to "Create" button format_1
    Then I see a message "Approval code is not unique" appears

    When I click to "OK" button format_1
    And I input random approval code to 'Approval Code' textbox at 'Create New Approval' page
    And I input random approval name to 'Approval Name' textbox at 'Create New Approval' page
    And I click to "Create" button format_2
    Then I see a message "Create is successful" appears

    When I click to "I Understand" button format_1
    Then I see 'List of Approval' page

    When I input random approval code of approval just created to 'Filter Approval Code' in 'Approval' list
    Then I see random approval code of approval just created in 'Approval' list
    And I see random approval name of approval just created in 'Approval' list
    And I see number of approval level of approval just created in 'Approval' list is "1"
    And I see approval matrix of approval just created in 'Approval' list is "Pre Purchase Requisition"
    And I see creator approval in 'Approval' list is "AUTO BUYER"
    And I see active approval status of approval just created in 'Approval' list is "Yes"
    And I see action of approval just created in 'Approval' list is "Deactivate"

    When I check to random approval code of approval just created in 'Approval' list
    And I click to "Deactivate" button format_1
    Then I see a notification appears "Are you sure you want to deactivate these approval matrix"

    When I click to 'Deactivate' button in notification at 'Approval' list
    Then I see a message "Approval matrix deactivated" appears

    When I click to "I Understand" button format_1
    And I input random approval name of approval just created to 'Filter Approval Name' in 'Approval' list
    Then I see random approval code of approval just created in 'Approval' list
    And I see random approval name of approval just created in 'Approval' list
    And I see active approval status of approval just created in 'Approval' list is "No"
    And I see action of approval just created in 'Approval' list is "Activate"

Scenario: MAM-S002-001, MAM-S003-001, MAM-S003-004 Entity admin can update an existing approval then activate that approval
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Entity Management" link on header menu
    And I click to "Approval Setting" link on the left menu
    And I click to "Manage Approval Matrix" link on the left sub menu
    Then I see 'List of Approval' page

    When I input random approval code of approval just created to 'Filter Approval Code' in 'Approval' list
    Then I see random approval code of approval just created in 'Approval' list
    And I see random approval name of approval just created in 'Approval' list

    When I double click to random approval code of approval just created in 'Approval' list
    And Wait for "3" seconds
    Then I see 'Approval Details' page
    And I see approval code of approval just created in 'Approval Code' textbox at 'Approval Details' page
    And I see approval name of approval just created in 'Approval Name' textbox at 'Approval Details' page                                            

    When I click to "Edit" button format_3
    And I input random value approval name to 'Approval Name' textbox at 'Approval Details' page
    And I select "2" from 'Number of Approval Level' dropdown at 'Create New Approval' page
    And I select "auto approver 2 [auto.approver2@getnada.com]" from 'Assigned Approvers' dropdown at position "2" at 'Create New Approval' page
    And I check to value criteria checkbox at position "0" at 'Create New Approval' page
    And I input "5000" to 'Approval Range From' textbox at position "0" at 'Create New Approval' page
    And I input "10000" to 'Approval Range To' textbox at position "0" at 'Create New Approval' page
    And I input "20000" to 'Approval Range To' textbox at position "1" at 'Create New Approval' page
    And I click to "Save" button format_1
    Then I see a message "Update is successful" appears

    When I click to "I Understand" button format_1
    And I click to "Back" button format_1
    Then I see 'List of Approval' page

    When I input random approval code of approval just created to 'Filter Approval Code' in 'Approval' list
    Then I see random approval code of approval just created in 'Approval' list
    And I see random value approval name of approval just created in 'Approval' list
    And I see number of approval level of approval just created in 'Approval' list is "2"

    When I click to action "Activate" of approval just created in 'Approval' list
    Then I see a notification appears "Are you sure you want to activate these approval matrix"

    When I click to 'Activate' button in notification at 'Approval' list
    Then I see a message "Approval matrix activated" appears

    When I click to "I Understand" button format_1
    And I input random approval code of approval just created to 'Filter Approval Code' in 'Approval' list
    Then I see random approval code of approval just created in 'Approval' list
    And I see random value approval name of approval just created in 'Approval' list
    And I see active approval status of approval just created in 'Approval' list is "Yes"
    And I see action of approval just created in 'Approval' list is "Deactivate"

Scenario: MAM-S002-001, MAM-S003-003 Entity admin can not update and deactivate approval matrix that is in use other processses
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Entity Management" link on header menu
    And I click to "Approval Setting" link on the left menu
    And I click to "Manage Approval Matrix" link on the left sub menu
    Then I see 'List of Approval' page

    When I input approval code "auto approval PPR 2" to 'Filter Approval Code' in 'Approval' list
    And I click to action "Deactivate" of approval code "auto approval PPR 2" in 'Approval' list
    Then I see a notification appears "Are you sure you want to deactivate these approval matrix"

    When I click to 'Deactivate' button in notification at 'Approval' list
    Then I see a message "Approval matrix is in use, cannot deactivate" appears
    
    When I click to "OK" button format_1
    And I double click to approval code "auto approval PPR 2" in 'Approval' list
    And Wait for "3" seconds
    Then I see 'Approval Details' page

    When I click to "Edit" button format_3
    And I input random value approval name to 'Approval Name' textbox at 'Approval Details' page
    And I click to "Save" button format_1
    Then I see a message "Approval matrix is in use, cannot edit" appears

    When I click to "OK" button format_1