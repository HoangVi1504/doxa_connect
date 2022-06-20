@inv
Feature: 0061 Creator create PO Invoice

Scenario: 01 Creator create PO Invoice with correct input
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Invoices" link on header menu
    And I click to "Invoices" link on the left menu
    And I click to "Create Invoice" link on the left sub menu
    Then I see Create Invoice page

    When Select supplier code "1105 (AUTO SUPPLIER 1)" from dropdown at Create Invoice page
    Then I see supplier code "1105" in dropdown at Create Invoice page appears

    When I input DO No to filter DO in list
    And I click to PO checkbox at the first line in the Select PO table
    And I input "300" to Invoice quantity textbox in the Added PO table
    And I click to "Issue" button format_1
    Then I see a message "Project invoice created" appears

    When I click to "I Understand" button format_1

Scenario: Creator create PO invoice with input that do not match PO
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Invoices" link on header menu
    And I click to "Invoices" link on the left menu
    And I click to "Create Invoice" link on the left sub menu
    Then I see Create Invoice page

    When Select supplier code "1105 (AUTO SUPPLIER 1)" from dropdown at Create Invoice page
    Then I see supplier code "1105" in dropdown at Create Invoice page appears

    When I input DO No to filter DO in list
    And I click to PO checkbox at the first line in the Select PO table
    And I input "2500" to Invoice quantity textbox in the Added PO table
    And I click to "Issue" button format_1
    Then I see a message "Validation Failed" appears

    When I click to "OK" button format_1