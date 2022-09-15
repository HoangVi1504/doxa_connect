@manage_entity @entity_admin
Feature: 0212 Doxa admin updates new password then deactivated and reactivated an existing entity

# Scenario: 01 Doxa Admin update new password
#     Given Navigate to Doxa Connect 2.0 site
#     When I input email of entity just created to 'Email' textbox
#     And I input temporary password of entity just created to 'Password' textbox
#     And I click to Login button at 'Login' page
#     Then I go to 'Reset Password' page

#     When I input "12345678" to 'New Password' textbox
#     And I input "12345678" to 'Repeat Password' textbox
#     And I click to 'Submit' button at 'Reset Password' page
#     Then I see a message reset password appears "Password has been successfully reset."

#     When I click to 'Login Now' link at 'Reset Password' page
#     Then I see 'Doxa Connect' image appears

#     When I input email of entity just created to 'Email' textbox
#     And I input "12345678" to 'Password' textbox
#     And I click to "Login" button format_1
#     And Wait for "5" seconds
#     Then I see 'Dashboard' title

Scenario: MAEN-002 Doxa Admin can update existing entity
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "doxa admin stag"
    And I click to "List of Entities" link on the left menu
    Then I see 'List of Entities' page

    When I input entity name just created to 'Filter Entity Name' in list
    Then I see entity name just created in list of entities
    And I see entity status in list of entities is "APPROVED"
    And I see country of entity in list of entities is "Singapore"
    And I see random company reg number in list of entities
    And I see entity active status in list of entities is "Yes"

    When I double click to company name just created in list of entities
    And Wait for "3" seconds
    Then I see 'Entity Details' page
    And I see company name just created in 'Company Name' textbox at 'Entity Details' page
    And I see company reg number in 'Company Reg No' textbox at 'Entity Details' page
    And I see entity type in 'Entity Type' dropdown at 'Entity Details' page is "GENERAL PARTNERSHIP"
    And I see industry type in 'Industry Type' dropdown at 'Entity Details' page is "CONSTRUCTION"
    And I see random entity name in 'Name' textbox at 'Entity Representative'
    And I see random email in 'Email' textbox at 'Entity Representative'

    When I click to "Edit" button format_3
    And I clear value in 'Name' textbox at 'Entity Representative'
    And I click to "Save" button format_1
    Then I see a message "Validation error, please check your input" appears

    When I click to "OK" button format_1
    Then I see a validation text of 'Name' in 'Entity Representative' appears "Enter entity representative name"

    When I input random value to 'Name' textbox at 'Entity Representative'
    And I click to "Save" button format_1
    Then I see a message "Entity updated successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'Entity Details' page
    And I see random value in 'Name' textbox at 'Entity Representative'

    When I click to "Back" button format_1
    Then I see 'List of Entities' page

Scenario: MAEN-003 Doxa admin can deactivate an existing entity under active status
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "doxa admin stag"
    And I click to "List of Entities" link on the left menu
    Then I see 'List of Entities' page

    When I input company reg number of entity just created to 'Filter Company Reg' in list
    Then I see entity name just created in list of entities
    And I see entity status in list of entities is "APPROVED"
    And I see entity active status in list of entities is "Yes"

    When I double click to company name just created in list of entities
    And Wait for "3" seconds
    Then I see 'Entity Details' page
    And I see company name just created in 'Company Name' textbox at 'Entity Details' page
    And I see company reg number in 'Company Reg No' textbox at 'Entity Details' page

    When I click to "Deactivate Account" button format_1
    Then I see a notification appears "Are you sure you want to deactivate the account?"

    When I click to "Deactivate" button format_2
    Then I see a message "Entity Deactivation Successful" appears

    When I click to "I Understand" button format_1
    Then I see "Reactivate Account" button format_1 is displayed
    And I see "Reset 2FA" button format_1 is disabled
    And I see "Reset Password" button format_1 is disabled

    When I click to "Back" button format_1
    Then I see 'List of Entities' page

    When I input entity name just created to 'Filter Entity Name' in list
    Then I see entity name just created in list of entities
    And I see entity active status in list of entities is "No"

Scenario: MAEN-004 Doxa adamin can Reactivate an existing entity under deactive status
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "doxa admin stag"
    And I click to "List of Entities" link on the left menu
    Then I see 'List of Entities' page

    When I input company reg number of entity just created to 'Filter Company Reg' in list
    Then I see entity name just created in list of entities
    And I see entity status in list of entities is "APPROVED"
    And I see entity active status in list of entities is "No"

    When I double click to company name just created in list of entities
    And Wait for "3" seconds
    Then I see 'Entity Details' page
    And I see company name just created in 'Company Name' textbox at 'Entity Details' page
    And I see company reg number in 'Company Reg No' textbox at 'Entity Details' page

    When I click to "Reactivate Account" button format_1
    Then I see a notification appears "Are you sure you want to reactivate the account?"

    When I click to "Reactivate" button format_2
    Then I see a message "Entity Reactivation Successful" appears

    When I click to "I Understand" button format_1
    Then I see "Reset 2FA" button format_1 is displayed
    And I see "Reset Password" button format_1 is displayed

    When I click to "Back" button format_1
    Then I see 'List of Entities' page

    When I input entity name just created to 'Filter Entity Name' in list
    Then I see entity name just created in list of entities
    And I see entity active status in list of entities is "Yes"

Scenario: MAEN-005-006 Doxa admin can reset 2FA and reset password of an existing entity
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "doxa admin stag"
    And I click to "List of Entities" link on the left menu
    Then I see 'List of Entities' page

    When I input entity name just created to 'Filter Entity Name' in list
    Then I see entity name just created in list of entities
    And I see entity status in list of entities is "APPROVED"
    And  I see entity active status in list of entities is "Yes"

    When I double click to company name just created in list of entities
    And Wait for "3" seconds
    Then I see 'Entity Details' page
    And I see company name just created in 'Company Name' textbox at 'Entity Details' page
    And I see company reg number in 'Company Reg No' textbox at 'Entity Details' page

    When I click to "Reset 2FA" button format_1
    Then I see a notification appears "Are you sure you want to reset user"

    When I click to "Reset" button format_2
    Then I see a message "Two FA Reset Successful" appears

    When I click to "I Understand" button format_1
    And I click to "Reset Password" button format_1
    Then I see a message "Password Reset Successful" appears