@manage_currency @entity_admin
Feature: 0262 Entity admin can update and activate or deactivate a existing currency

Scenario: MCUR-001-002-003 Entity admin can update and activate or deactivate a existing currency
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "General Setting" link on the left menu
    And I click to "Manage Currency" link on the left sub menu
    Then I see 'List of Currency' page
    
    When I input "AED" to 'Filter Currency Code' in 'Currency' list
    Then I see currency code in 'Currency' list is "AED"
    And I see currency name in 'Currency' list is "UAE Dirham"
    And I see currency default status in 'Currency' list is "No"
    And I see currency active status in 'Currency' list is "Yes"
    And I see currency action in 'Currency' list is "Deactivate"

    When I double click to currency code "AED" in 'Currency' list
    And Wait for "3" seconds
    Then I see 'Currency Details' page
    And I see value in 'Currency Code' textbox at 'Currency Details' page is "AED"
    And I see value in 'Currency Name' textbox at 'Currency Details' page is "UAE Dirham"

    When I click to "Edit" button format_1
    And I input "3,7951" to 'Exchange Rate' textbox at 'Currency Details' page
    And I click to "Save" button format_1
    Then I see a message "Currency updated successfully" appears

    When I click to "I Understand" button format_1
    And I click to "Back" button format_1
    Then I see 'List of Currency' page

    When I input "UAE Dirham" to 'Filter Currency Name' in 'Currency' list
    Then I see currency code in 'Currency' list is "AED"
    And I see exchange rate in 'Currency' list is "37,951.000000"
    And I see currency active status in 'Currency' list is "Yes"
    And I see currency action in 'Currency' list is "Deactivate"

    When I check to "AED" currency code checkbox in 'Currency' list
    And I click to "Deactivate" button format_1
    Then I see a notification appears "Are you sure you want to Deactivate"

    When I click to 'Deactivate' button in notification at 'Currency' list
    Then I see a message "Currency/currencies deactivated" appears

    When I click to "I Understand" button format_1
    And I input "AED" to 'Filter Currency Code' in 'Currency' list
    Then I see currency code in 'Currency' list is "AED"
    And I see currency active status in 'Currency' list is "No"
    And I see currency action in 'Currency' list is "Reactivate"

    When I click to currency action "Reactivate" in 'Currency' list
    Then I see a notification appears "Are you sure you want to Activate"

    When I click to 'Activate' button in notification at 'Currency' list
    Then I see a message "Currency/currencies activated" appears

    When I click to "I Understand" button format_1
    And I input "UAE Dirham" to 'Filter Currency Name' in 'Currency' list
    Then I see currency code in 'Currency' list is "AED"
    And I see currency active status in 'Currency' list is "Yes"
    And I see currency action in 'Currency' list is "Deactivate"