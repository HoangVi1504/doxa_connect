@manage_supplier_bank @entity_admin
Feature: 0246 Creator add new supplier bank account then approver approve supplier bank account

Scenario: EC-MSBA-S001-001-002, EC-MSBA-S005-001 Creator add new supplier bank account
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Bank Connection" link on header menu
    And I click to "Manage Supplier Bank Account" link on the left menu
    And I click to "Add New" button format_2
    Then I see 'Add New Supplier Bank Account' page

    When I click to "Create" button format_1
    Then I see a message "Validation error, please check your input" appears

    When I click to "OK" button format_1
    Then I see a validation text of 'Company Code' at 'Add New Supplier Bank Account' page appears "Please select valid Company"
    And I see a validation text of 'Bank Label' at 'Add New Supplier Bank Account' page appears "Please enter valid Bank Label"
    And I see a validation text of 'Country' at 'Add New Supplier Bank Account' page appears "Please select valid Country"
    And I see a validation text of 'Bank Name' at 'Add New Supplier Bank Account' page appears "Please select valid Bank Name"
    And I see a validation text of 'Swift Code' at 'Add New Supplier Bank Account' page appears "Please enter valid Swift Code"
    And I see a validation text of 'Bank Account No' at 'Add New Supplier Bank Account' page appears "Please enter valid Bank Account No"
    And I see a validation text of 'Account Holder Name' at 'Add New Supplier Bank Account' page appears "Please enter valid Account Holder Name"
    And I see a validation text of 'Currency' at 'Add New Supplier Bank Account' page appears "Please select valid currency"
    And I see a validation text of 'Branch' at 'Add New Supplier Bank Account' page appears "Please enter valid Branch"
    And I see a validation text of 'Branch Address Line 1' at 'Add New Supplier Bank Account' page appears "Please enter valid Branch Address Line 1"
    And I see a validation text of 'Branch Address Line 2' at 'Add New Supplier Bank Account' page appears "Please enter valid Branch Address Line 2"

    When I select "TEST SUPPLIER 34" from 'Company Code' dropdown at 'Add New Supplier Bank Account' page
    And I input random bank label to 'Bank Label' textbox at 'Add New Supplier Bank Account' page
    And I select "Singapore" from 'Country' dropdown at 'Add New Supplier Bank Account' page
    And I select "ABN AMRO BANK N.V. SINGAPORE BRANCH" from 'Bank Name' dropdown at 'Add New Supplier Bank Account' page
    And I select "ABNASG2AXXX" from 'Swift Code' dropdown at 'Add New Supplier Bank Account' page
    And I select "Singapore Dollar (SGD)" from 'Currency' dropdown at 'Add New Supplier Bank Account' page
    And I input random bank account number to 'Bank Account No' textbox at 'Add New Supplier Bank Account' page
    And I input random account holder name to 'Account Holder Name' textbox at 'Add New Supplier Bank Account' page
    And I input random branch to 'Branch' textbox at 'Add New Supplier Bank Account' page
    And I input random branch code to 'Branch Code' textbox at 'Add New Supplier Bank Account' page
    And I input "Singapore" to 'Branch City' textbox at 'Add New Supplier Bank Account' page
    And I input random address 1 to 'Branch Address Line 1' textbox at 'Add New Supplier Bank Account' page
    And I input random address 2 to 'Branch Address Line 2' textbox at 'Add New Supplier Bank Account' page
    And I input random postal code to 'Postal Code' textbox at 'Add New Supplier Bank Account' page
    And I input "Singapore" to 'State' textbox at 'Add New Supplier Bank Account' page
    And I check to 'Default bank account' checkbox at 'Add New Supplier Bank Account' page
    And I input "auto add this supplier bank account" to 'Comment Conversations' textbox at 'Add New Supplier Bank Account' page
    And I click to "Send" button format_1
    Then I see comment in 'Conversations' list at 'Add New Supplier Bank Account' page is "auto add this supplier bank account"

    When I click to "Create" button format_1
    Then I see a message "Bank account successfully created" appears

    When I click to "I Understand" button format_1
    Then I see 'List of Supplier Bank Account' title

    When I expand layout sidebar menu if it open
    And I input bank label just created to 'Filter Bank Label' in 'Supplier Bank Account' list
    Then I see random bank label in 'Supplier Bank Account' list
    And I see company code in 'Supplier Bank Account' list is "TEST_SUPPLIER_34"
    And I see company name in 'Supplier Bank Account' list is "TEST SUPPLIER 34"
    And I see bank account status in 'Supplier Bank Account' list is "PENDING APPROVAL"
    And I see bank name in 'Supplier Bank Account' list is "ABN AMRO BANK N.V. SINGAPORE BRANCH"
    And I see random bank account number in 'Supplier Bank Account' list
    And I see random account holder name in 'Supplier Bank Account' list

Scenario: EC-MSBA-S002-001, EC-MSBA-S005-001 Approver approve supplier bank account just created
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
    And I see company code in 'Supplier Bank Account' list is "TEST_SUPPLIER_34"
    And I see company name in 'Supplier Bank Account' list is "TEST SUPPLIER 34"
    And I see bank account status in 'Supplier Bank Account' list is "PENDING APPROVAL"
    And I see bank name in 'Supplier Bank Account' list is "ABN AMRO BANK N.V. SINGAPORE BRANCH"
    And I see random bank account number in 'Supplier Bank Account' list
    And I see random account holder name in 'Supplier Bank Account' list

    When I double click to bank label just created in 'Supplier Bank Account' list
    And Wait for "3" seconds
    Then I see 'Supplier Bank Account Details' page
    And I see company code in 'Company Code' textbox at 'Supplier Bank Account Details' page is "TEST_SUPPLIER_34"
    And I see random bank label in 'Bank Label' textbox at 'Supplier Bank Account Details' page
    And I see country in 'Country' textbox at 'Supplier Bank Account Details' page is "Singapore"
    And I see bank name in 'Bank Name' textbox at 'Supplier Bank Account Details' page is "ABN AMRO BANK N.V. SINGAPORE BRANCH"
    And I see swift code in 'Swift Code' textbox at 'Supplier Bank Account Details' page is "ABNASG2AXXX"
    And I see random bank account in 'Bank Account No' textbox at 'Supplier Bank Account Details' page
    And I see random account holder name in 'Account Holder Name' textbox at 'Supplier Bank Account Details' page
    And I see currency in 'Currency' textbox at 'Supplier Bank Account Details' page is "SGD"
    And I see random branch in 'Branch' textbox at 'Supplier Bank Account Details' page
    And I see random branch code in 'Branch Code' textbox at 'Supplier Bank Account Details' page
    And I see branch city in 'Branch City' textbox at 'Supplier Bank Account Details' page is "Singapore"
    And I see random address 1 in 'Branch Address Line 1' textbox at 'Supplier Bank Account Details' page
    And I see random address 2 in 'Branch Address Line 2' textbox at 'Supplier Bank Account Details' page
    And I see random postal code in 'Postal Code' textbox at 'Supplier Bank Account Details' page
    And I see state in 'State' textbox at 'Supplier Bank Account Details' page is "Singapore"
    And I see action of bank account in 'Audit Trail' list is "New Account Added"

    When I click to "Approve" button format_1
    Then I see a message "Bank account successfully approved" appears

    When I click to "I Understand" button format_1
    Then I see 'List of Supplier Bank Account' title

    When I input bank label just created to 'Filter Bank Label' in 'Supplier Bank Account' list
    Then I see random bank label in 'Supplier Bank Account' list
    And I see bank account status in 'Supplier Bank Account' list is "APPROVED"

    When I double click to bank label just created in 'Supplier Bank Account' list
    And Wait for "3" seconds
    Then I see 'Supplier Bank Account Details' page
    And I see action of bank account in 'Audit Trail' list is "APPROVED"