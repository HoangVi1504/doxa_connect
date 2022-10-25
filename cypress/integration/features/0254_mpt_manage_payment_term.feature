@manage_payment_term @entity_admin
Feature: 0254 Entity admin can create and update payment term

Scenario: MPT-S002-001-002, MPT-S004-001 Entity admin can create a new payment term
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin stag"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "Payment Management" link on the left menu
    And I click to "Manage Payment Term" link on the left sub menu
    Then I see 'List of Payment Term' page

    When I click to "Create New" button format_3
    Then I see 'Create New Payment Term' page

    When I click to "Create" button format_2
    Then I see a message "Validation error, please check your input" appears

    When I click to "OK" button format_1
    Then I see validation text of 'Name' at 'Create New Payment Term' page appears "Name is required"
    And I see validation text of 'Pay In' at 'Create New Payment Term' page appears "Pay in is required"

    When I input "Pay in 7 days" to 'Name' textbox at 'Create New Payment Term' page
    And I input "7" to 'Pay in' textbox at 'Create New Payment Term' page
    And I input "auto create this payment term" to 'Remarks' textbox at 'Create New Payment Term' page
    And I click to "Create" button format_2
    Then I see a message "Payment term name is not unique" appears

    When I click to "OK" button format_1
    And I input random payment term name to 'Name' textbox at 'Create New Payment Term' page
    And I input random pay in to 'Pay in' textbox at 'Create New Payment Term' page
    And I click to "Create" button format_2
    Then I see a message "Create Successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'List of Payment Term' page

    When I input random name of payment term just created to 'Filter Payment Term' in 'Payment Term' list
    Then I see random name of payment term just created in 'Payment Term' list
    And I see random pay in of payment term just created in 'Payment Term' list
    And I see remarks of payment term just created in 'Payment Term' list is "auto create this payment term"
    And I see updater of payment term just created in 'Payment Term' list is "AUTO ENTITY ADMIN"

Scenario: MPT-S003-001, MPT-S004-001 Entity admin can update an existing payment term
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin stag"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "Payment Management" link on the left menu
    And I click to "Manage Payment Term" link on the left sub menu
    Then I see 'List of Payment Term' page

    When I input random pay in of payment term just created to 'Filter Pay In' in 'Payment Term' list
    Then I see random name of payment term just created in 'Payment Term' list
    And I see random pay in of payment term just created in 'Payment Term' list
    And I see remarks of payment term just created in 'Payment Term' list is "auto create this payment term"
    And I see updater of payment term just created in 'Payment Term' list is "AUTO ENTITY ADMIN"

    When I double click to random payment term of payment term just created in 'Payment Term' list
    And Wait for "3" seconds
    Then I see 'Payment Term Details' page
    And I see name of payment term just created in 'Payment Term' textbox at 'Payment Term Details' page
    And I see pay in of payment term just created in 'Payment In' textbox at 'Payment Term Details' page
    And I see remark of of payment term just created in 'Remarks' textbox at 'Payment Term Details' page is "auto create this payment term"

    When I click to "Edit" button format_3
    And I input random value to 'Name' textbox at 'Payment Term Details' page
    And I input "auto update this payment term" to 'Remarks' textbox at 'Create New Payment Term' page
    And I click to "Save" button format_2
    Then I see a message "Update Successfully" appears

    When I click to "I Understand" button format_1
    And I click to "Back" button format_1
    Then I see 'List of Payment Term' page

    When I input random pay in of payment term just created to 'Filter Pay In' in 'Payment Term' list
    Then I see random value name of payment term just created in 'Payment Term' list
    And I see random pay in of payment term just created in 'Payment Term' list
    And I see remarks of payment term just created in 'Payment Term' list is "auto update this payment term"
    And I see updater of payment term just created in 'Payment Term' list is "AUTO ENTITY ADMIN"