@manage_role @entity_admin
Feature: 0213 Doxa admin can create new role and clone role

Scenario: MAR-001-002 Doxa admin can create new role
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "doxa admin stag"
    And I click to "Manage Role" link on the left menu
    And I click to "Create New" button format_2
    Then I see 'Create New Role' page

    When I input random role name to 'Role' textbox at 'Create New Role' page
    And I input "Manage Address" to filter 'Feature Name' at 'Assign default features'
    And I check to read checkbox of feature "Manage Address"
    And I check to write checkbox of feature "Manage Address"
    And I check to approver checkbox of feature "Manage Address"
    And I clear value in filter 'Feature Name' at 'Assign default features'
    And I input "Manage UOM" to filter 'Feature Name' at 'Assign default features'
    And I check to read checkbox of feature "Manage UOM"
    And I check to write checkbox of feature "Manage UOM"
    And I check to approver checkbox of feature "Manage UOM"
    And I click to "Create" button format_1
    Then I see a message "Created successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'List of Role' page

    When I input role name just created to filer 'Role name' in list
    Then I see role name just created at first row in list
    And I see role status in list is "RESERVED"
    And I see role creator in list is "Doxa Admin"

    When I double click to role name just created in list
    And Wait for "5" seconds
    Then I see 'Role Details' page
    And I see role name just created in 'Role' textbox at 'Role Details' page

    When I input "Manage Address" to filter 'Feature Name' at 'Assign default features'
    Then I see read checkbox of feature "Manage Address" is checked
    And I see write checkbox of feature "Manage Address" is checked
    And I see approver checkbox of feature "Manage Address" is checked

    When I clear value in filter 'Feature Name' at 'Assign default features'
    And I input "Manage UOM" to filter 'Feature Name' at 'Assign default features'
    Then I see read checkbox of feature "Manage UOM" is checked
    And I see write checkbox of feature "Manage UOM" is checked
    And I see approver checkbox of feature "Manage UOM" is checked

Scenario: MAR-003 Doxa admin can CREATE a new role by clicking on the Clone icon
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "doxa admin stag"
    And I click to "Manage Role" link on the left menu
    Then I see 'List of Role' page

    When I input role name just created to filer 'Role name' in list
    Then I see role name just created at first row in list
    And I see role status in list is "RESERVED"
    And I see role creator in list is "Doxa Admin"

    When I click to clone role just created
    Then I see 'Create New Role' page

    When I clear value in 'Role' textbox at 'Create New Role' page
    And I input random role name to 'Role' textbox at 'Create New Role' page
    And I input "Manage Currency" to filter 'Feature Name' at 'Assign default features'
    And I check to read checkbox of feature "Manage Currency"
    And I check to write checkbox of feature "Manage Currency"
    And I check to approver checkbox of feature "Manage Currency"
    And I click to "Create" button format_1
    Then I see a message "Created successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'List of Role' page

    When I input role name just created to filer 'Role name' in list
    Then I see role name just created at first row in list
    And I see role status in list is "RESERVED"
    And I see role creator in list is "Doxa Admin"