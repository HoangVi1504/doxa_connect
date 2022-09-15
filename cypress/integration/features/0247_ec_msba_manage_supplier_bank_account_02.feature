@manage_supplier_bank @entity_admin
Feature: 0247 Creator update an existing supplier bank account then approver reject that supplier bank account

Scenario: EC-MSBA-S004-001 Creator update an existing supplier bank account
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Bank Connection" link on header menu
    And I click to "Manage Supplier Bank Account" link on the left menu
    Then I see 'List of Supplier Bank Account' title

    When I input bank account number just created to 'Filter Bank Account No' in 'Supplier Bank Account' list
    Then I see random bank label in 'Supplier Bank Account' list
    And I see bank account status in 'Supplier Bank Account' list is "APPROVED"

    When I double click to bank label just created in 'Supplier Bank Account' list
    And Wait for "3" seconds
    Then I see 'Supplier Bank Account Details' page

    When I click to "Edit" button format_1
    And I input random value to 'Bank Account No' textbox at 'Add New Supplier Bank Account' page
    And I input random value to 'Account Holder Name' textbox at 'Add New Supplier Bank Account' page
    And I click to "Save" button format_1
    Then I see a message "Bank account edit request successfully created" appears

    When I click to "I Understand" button format_1
    Then I see 'List of Supplier Bank Account' title

    When I expand layout sidebar menu if it open
    And I input bank label just created to 'Filter Bank Label' in 'Supplier Bank Account' list
    Then I see random bank label in 'Supplier Bank Account' list
    And I see bank account status in 'Supplier Bank Account' list is "PENDING APPROVAL"
    And I see random value bank account number in 'Supplier Bank Account' list
    And I see random value account holder name in 'Supplier Bank Account' list
    
Scenario: EC-MSBA-S003-001 Approver reject supplier bank account which just updated
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "approver 1"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Bank Connection" link on header menu
    And I click to "Manage Supplier Bank Account" link on the left menu
    Then I see 'List of Supplier Bank Account' title

    When I expand layout sidebar menu if it open
    And I input bank label just created to 'Filter Bank Label' in 'Supplier Bank Account' list
    Then I see random bank label in 'Supplier Bank Account' list
    And I see bank account status in 'Supplier Bank Account' list is "PENDING APPROVAL"
    And I see random value bank account number in 'Supplier Bank Account' list
    And I see random value account holder name in 'Supplier Bank Account' list

    When I double click to bank label just created in 'Supplier Bank Account' list
    And Wait for "3" seconds
    Then I see 'Supplier Bank Account Details' page
    And I see action of bank account in 'Audit Trail' list is "Account Editing"

    When I click to "Reject" button format_1
    And I input "auto reject this supplier bank account" to 'Reject Reason' textbox at 'Supplier Bank Account Details' page
    And I click to 'Reject' button in notification at 'Supplier Bank Account Details' page
    Then I see a message "Bank account successfully rejected" appears

    When I click to "I Understand" button format_1
    Then I see 'List of Supplier Bank Account' title

    When I input bank label just created to 'Filter Bank Label' in 'Supplier Bank Account' list
    Then I see random bank label in 'Supplier Bank Account' list
    # And I see bank account status in 'Supplier Bank Account' list is "APPROVED"

    When I double click to bank label just created in 'Supplier Bank Account' list
    And Wait for "3" seconds
    Then I see 'Supplier Bank Account Details' page
    And I see comment in 'Conversations' list at 'Add New Supplier Bank Account' page is "auto reject this supplier bank account"
    And I see action of bank account in 'Audit Trail' list is "Account Edit rejected"