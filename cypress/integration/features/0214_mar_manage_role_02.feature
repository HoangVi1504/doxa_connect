#@manage_role @entity_admin
Feature: 0214 Entity admin can create new role and clone role

Scenario: MAR-004-005 Entity admin can created new role
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin stag"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "3" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Entity Management" link on header menu
    And I click to "Manage Role" link on the left menu
    And I click to "Create New" button format_2
    Then I see 'Create New Role' page

    When Wait for "2" seconds 
    And I input random role name to 'Role' textbox at 'Create New Role' page
    And I input "Manage Company Users" to filter 'Feature Name' at 'Assign default features'
    And I check to read checkbox of feature "Manage Company Users"
    And I check to write checkbox of feature "Manage Company Users"
    And I check to approver checkbox of feature "Manage Company Users"
    And I click to "Create" button format_1
    Then I see a message "Created successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'List of Role' page
    And "entity admin" input role name just created to filer 'Role name' in list
    Then I see role name just created at first row in list
    And I see role status in list is "CREATED"
    And I see role creator in list is "AUTO ENTITY ADMIN"

    When I double click to role name just created in list
    And Wait for "2" seconds
    Then I see 'Role Details' page
    And I see role name just created in 'Role' textbox at 'Role Details' page

    When I input "Manage Company Users" to filter 'Feature Name' at 'Assign default features'
    Then I see read checkbox of feature "Manage Company Users" is checked
    And I see write checkbox of feature "Manage Company Users" is checked
    And I see approver checkbox of feature "Manage Company Users" is checked

Scenario: MAR-006 Entity admin can create a new role by clicking on the clone icon
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin stag"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "3" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Entity Management" link on header menu
    And I click to "Manage Role" link on the left menu
    Then I see 'List of Role' page

    When "entity admin" input role name just created to filer 'Role name' in list
    Then I see role name just created at first row in list
    And I see role status in list is "CREATED"
    And I see role creator in list is "AUTO ENTITY ADMIN"

    When I click to clone role just created
    Then I see 'Create New Role' page

    When Wait for "2" seconds
    And I clear value in 'Role' textbox at 'Create New Role' page
    And I input random role name to 'Role' textbox at 'Create New Role' page
    And I input "Manage Roles" to filter 'Feature Name' at 'Assign default features'
    And I check to read checkbox of feature "Manage Roles"
    And I check to write checkbox of feature "Manage Roles"
    And I check to approver checkbox of feature "Manage Roles"
    And I click to "Create" button format_1
    Then I see a message "Created successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'List of Role' page

    When "entity admin" input role name just created to filer 'Role name' in list
    Then I see role name just created at first row in list
    And I see role status in list is "CREATED"
    And I see role creator in list is "AUTO ENTITY ADMIN"

    When Delete all role created by entity admin