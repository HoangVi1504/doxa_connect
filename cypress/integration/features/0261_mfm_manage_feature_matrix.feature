@manage_feature_matrix @entity_admin
Feature: 0261 Entity admin can update the access permission for a user

Scenario: MFM-S001-001 Entity amdin can update the access permission for a user
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Entity Management" link on header menu
    And I click to "Manage Feature Matrix" link on the left menu
    Then I see 'Manage Feature Matrix' page

    When I select "auto ap_specialist" from 'Select User' dropdown at 'Manage Feature Matrix' page
    Then I see user name at 'Manage Feature Matrix' page is "auto ap_specialist"
    And I see email of user at 'Manage Feature Matrix' page is "auto.apspecialist@getnada.com"
    And I see designation of user at 'Manage Feature Matrix' page is "auto ap_specialist"

    When I click to text "User Name"
    And I select "Manage Vendor" from 'Select Module' dropdown at 'Manage Feature Matrix' page
    And I click to "Search" button format_1
    Then I see read checkbox of feature "Manage Supplier Bank Accounts" at 'Manage Feature Matrix' page is checked
    And I see write checkbox of feature "Manage Supplier Bank Accounts" at 'Manage Feature Matrix' page is checked
    And I see approve checkbox of feature "Manage Supplier Bank Accounts" at 'Manage Feature Matrix' page is checked
    And I see read checkbox of feature "Manage Bank Account" at 'Manage Feature Matrix' page is checked
    And I see write checkbox of feature "Manage Bank Account" at 'Manage Feature Matrix' page is checked
    And I see approve checkbox of feature "Manage Bank Account" at 'Manage Feature Matrix' page is checked

    When I uncheck to read checkbox of feature "Manage Supplier Bank Accounts" at 'Manage Feature Matrix' page
    And I uncheck to write checkbox of feature "Manage Supplier Bank Accounts" at 'Manage Feature Matrix' page
    And I uncheck to write checkbox of feature "Manage Bank Account" at 'Manage Feature Matrix' page
    Then I see read checkbox of feature "Manage Supplier Bank Accounts" at 'Manage Feature Matrix' page is unchecked
    And I see write checkbox of feature "Manage Supplier Bank Accounts" at 'Manage Feature Matrix' page is unchecked
    And I see write checkbox of feature "Manage Bank Account" at 'Manage Feature Matrix' page is unchecked

    When I click to "Save" button format_1
    Then I see a message "Assigned features have been updated successfully" appears

    When I click to "I Understand" button format_1
    And I click to "Manage Organization Users" link on the left menu
    And I click to "Manage Feature Matrix" link on the left menu
    Then I see 'Manage Feature Matrix' page

    When I select "auto ap_specialist" from 'Select User' dropdown at 'Manage Feature Matrix' page
    And I click to text "User Name"
    And I select "Manage Vendor" from 'Select Module' dropdown at 'Manage Feature Matrix' page
    And I click to "Search" button format_1
    Then I see read checkbox of feature "Manage Supplier Bank Accounts" at 'Manage Feature Matrix' page is unchecked
    And I see write checkbox of feature "Manage Supplier Bank Accounts" at 'Manage Feature Matrix' page is unchecked
    And I see write checkbox of feature "Manage Bank Account" at 'Manage Feature Matrix' page is unchecked

    When I logout account
    And I login with role "ap specialist"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Bank Connection" link on header menu
    Then I do not see "Manage Supplier Bank Account" link on the left menu

    When I click to "Manage Bank Account" link on the left menu
    Then I see 'List of Bank Account' title
    And I do not see "Add New" button format_1 visible
    
    When I logout account
    And I login with role "buyer"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Entity Management" link on header menu
    And I click to "Manage Feature Matrix" link on the left menu
    Then I see 'Manage Feature Matrix' page

    When I select "auto ap_specialist" from 'Select User' dropdown at 'Manage Feature Matrix' page
    And I click to text "User Name"
    And I select "Manage Vendor" from 'Select Module' dropdown at 'Manage Feature Matrix' page
    And I click to "Search" button format_1
    And I check to read checkbox of feature "Manage Supplier Bank Accounts" at 'Manage Feature Matrix' page
    And I check to write checkbox of feature "Manage Supplier Bank Accounts" at 'Manage Feature Matrix' page
    And I check to write checkbox of feature "Manage Bank Account" at 'Manage Feature Matrix' page
    Then I see read checkbox of feature "Manage Supplier Bank Accounts" at 'Manage Feature Matrix' page is checked
    And I see write checkbox of feature "Manage Supplier Bank Accounts" at 'Manage Feature Matrix' page is checked
    And I see write checkbox of feature "Manage Bank Account" at 'Manage Feature Matrix' page is checked

    When I click to "Save" button format_1
    Then I see a message "Assigned features have been updated successfully" appears

    When I click to "I Understand" button format_1
    When I logout account
    And I login with role "ap specialist"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Bank Connection" link on header menu
    Then I see "Manage Supplier Bank Account" link on the left menu is displayed
    And I see "Manage Bank Account" link on the left menu is displayed

    When I click to "Manage Supplier Bank Account" link on the left menu
    Then I see "Add New" button format_1 is displayed

    When I click to "Manage Bank Account" link on the left menu
    Then I see "Add New" button format_1 is displayed