@manage_trade_code @entity_admin
Feature: 0243 Entity admin can create and updata manage trade code

Scenario: MAPT-001-003 Entity admin can create manage trade code
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "Project Management" link on the left menu
    And I click to "Manage Trade Code" link on the left sub menu
    And I click to "Create New" button format_2
    Then I see 'Create New Trade Code' page

    When I click to "Create" button format_2
    Then I see a message "Validation error, please check your input" appears

    When I click to "OK" button format_1
    Then I see a validation text of 'Trade Code' at 'Create Trade Code' page appears "Trade Code is required"
    And I see a validation text of 'Trade Title' at 'Create Trade Code' page appears "Trade Title is required"

    When I input random trade code to 'Trade Code' textbox at 'Create Trade Code' page
    And I input random trade title to 'Trade Title' textbox at 'Create Trade Code' page
    And I input "auto create this trade code" to 'Description' textbox at 'Create Trade Code' page
    And I click to "Create" button format_2
    Then I see a message "Trade code has been created successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'List of Trade Code' title

    When I input trade code just created to 'Filter Trade Code' in 'Trade Code' list
    Then I see random trade code in 'Trade Code' list
    And I see random trade title in 'Trade Code' list
    And I see description trade code in 'Trade Code' list is "auto create this trade code"
    And I see creator trade code in 'Trade Code' list is "AUTO ENTITY DX"
    And I see trade code status in 'Trade Code' list is "Yes"
    And I see trade code action in 'Trade Code' list is "Deactivate"

    When I click to trade code action "Deactivate" in 'Trade Code' list
    Then I see a notification appears "Are you sure you want to deactivate?"

    When I click to 'Deactivate' button in notification at 'Trade Code' list
    Then I see a message "Trade code deactivated" appears

    When I click to "I Understand" button format_1
    Then I see trade code status in 'Trade Code' list is "No"
    And I see trade code action in 'Trade Code' list is "Reactivate"

Scenario: MAPT-002-003 Entity admin can update the existing Trade Code
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "Project Management" link on the left menu
    And I click to "Manage Trade Code" link on the left sub menu
    Then I see 'List of Trade Code' title

    When I input trade title just created to 'Filter Trade Title' in 'Trade Code' list
    Then I see random trade code in 'Trade Code' list
    And I see random trade title in 'Trade Code' list

    When I double click to trade code just created in 'Trade Code' list
    And Wait for "3" seconds
    Then I see 'Trade Code Details' page
    And I see trade code just created in 'Trade Code' textbox at 'Trade Code Details' page
    And I see trade title just created in 'Trade Title' textbox at 'Trade Code Details' page

    When I click to "Edit" button format_3
    And I clear value in 'Trade Title' textbox at 'Trade Code Details' page
    And I click to "Save" button format_2
    Then I see a message "Validation error, please check your input" appears

    When I click to "OK" button format_1
    Then I see a validation text of 'Trade Title' at 'Create Trade Code' page appears "Trade Title is required"

    When I input random trade title to 'Trade Title' textbox at 'Create Trade Code' page
    And I click to "Save" button format_2
    Then I see a message "Trade code has been updated successfully" appears

    When I click to "I Understand" button format_1
    And I click to "Back" button format_1
    Then I see 'List of Trade Code' title

    When I input trade code just created to 'Filter Trade Code' in 'Trade Code' list
    Then I see random trade code in 'Trade Code' list
    And I see random trade title in 'Trade Code' list

    When I check to trade code just created in 'Trade Code' list
    And I click to "Activate" button format_1
    Then I see a notification appears "Are you sure you want to Activate?"

    When I click to 'Activate' button in notification at 'Trade Code' list
    Then I see a message "Trade codes activated" appears

    When I click to "I Understand" button format_1
    And I input trade title just created to 'Filter Trade Title' in 'Trade Code' list
    Then I see random trade code in 'Trade Code' list
    And I see random trade title in 'Trade Code' list
    And I see trade code status in 'Trade Code' list is "Yes"
    And I see trade code action in 'Trade Code' list is "Deactivate"

    When I check to trade code just created in 'Trade Code' list
    And I click to "Deactivate" button format_1
    Then I see a notification appears "Are you sure you want to deactivate?"

    When I click to 'Deactivate' button in notification at 'Trade Code' list
    Then I see a message "Trade codes deactivated" appears

    When I click to "I Understand" button format_1
    And I see trade code status in 'Trade Code' list is "No"
    And I see trade code action in 'Trade Code' list is "Reactivate"