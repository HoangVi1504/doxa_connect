@manage_external_vendor @entity_admin
Feature: 0252 Entity admin can create and update external vendror with role supplier

Scenario: MAEV-002-003 Entity admin can create external vendor
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "Vendor Management" link on the left menu
    And I click to "Manage External Vendor" link on the left sub menu
    Then I see 'Manage External Vendor' title

    When I click to "Create New" button format_2
    Then I see 'Create External Vendor' page

    When I check to business role "My Supplier" checkbox at 'Create External Vendor' page
    And I uncheck to business role "My Buyer" checkbox at 'Create External Vendor' page
    Then I see business role "My Buyer" checkbox at 'Create External Vendor' page is uncheck

    When I check to 'Tax-Registered Business' checkbox at 'Create External Vendor' page
    And I click to "Save" button format_1
    Then I see a message "Validation error, please check your input" appears

    When I click to "OK" button format_1
    Then I see a validation text of 'Company Code' at 'Create External Vendor' page appears "Please enter valid Company Code"
    And I see a validation text of 'Company Reg No' at 'Create External Vendor' page appears "Please enter valid Company Reg. No."
    And I see a validation text of 'Company Name' at 'Create External Vendor' page appears "Please enter valid Company Name"
    And I see a validation text of 'Tax Reg.No' at 'Create External Vendor' page appears "Please enter valid Tax Reg. No."
    And I see a validation text of 'Tax Percentage' at 'Create External Vendor' page appears "Please select valid Tax Code"
    # bugId: https://doxa-connex.atlassian.net/browse/D0R-5168
    # And I see a validation text of 'Full Name' at 'Create External Vendor' page appears "Please enter valid Full Name"
    # And I see a validation text of 'Email' at 'Create External Vendor' page appears "Please enter valid Email"
    And I see a validation text of 'Phone Number' at 'Create External Vendor' page appears "Please enter valid Phone Number"
    And I see a validation text of 'Address Label' at 'Create External Vendor' page appears "Please enter valid Address Label"
    And I see a validation text of 'Address Line 1' at 'Create External Vendor' page appears "Please enter valid Address Line 1"
    And I see a validation text of 'State' at 'Create External Vendor' page appears "Please enter valid State/Province"
    And I see a validation text of 'Postal Code' at 'Create External Vendor' page appears "Please enter valid Postal Code"

    When I input random company code of role "Supplier" to 'Company Code' textbox at 'Create External Vendor' page
    And I input random company reg number to 'Company Reg No' textbox at 'Create External Vendor' page
    And I input random company name to 'Company Name' textbox at 'Create External Vendor' page
    And I select "Singapore" from 'Country Origin' dropdown at 'Create External Vendor' page
    And I select "Pay in 7 days" from 'Payment Term' dropdown at 'Create External Vendor' page
    And I select "auto tax default" from 'Tax Code' dropdown at 'Create External Vendor' page
    And I input random tax reg no to 'Tax Reg No' textbox 'Create External Vendor' page
    And I input random full name to 'Full Name' textbox at 'Create External Vendor' page
    And I input random email to 'Email Contact' textbox at 'Create External Vendor' page
    And I input random phone number to 'Phone Number' textbox at 'Create External Vendor' page
    And I input random address label to 'Address Label' textbox at 'Create External Vendor' page
    And I input random address 1 to 'Address Line 1' textbox at 'Create External Vendor' page
    And I input random address 2 to 'Address Line 2' textbox at 'Create External Vendor' page
    And I input "Singapore" to 'Address City' textbox at 'Create External Vendor' page
    And I input "Singapore" to 'State' textbox at 'Create External Vendor' page
    And I input random postal code to 'Postal Code' textbox at 'Create External Vendor' page
    And I select "Singapore" from 'Country' dropdown at 'Create External Vendor' page
    And I click to "Save" button format_1
    Then I see a message "Create is successful" appears

    When I click to "I Understand" button format_1
    Then I see 'Manage External Vendor' title

    When I expand layout sidebar menu if it open
    And I input random company code to 'Filter Company Code' in 'Manage External Vendor' list
    Then I see connection in 'Manage External Vendor' list is "NOT CONNECTED"
    And I see random company code in 'Manage External Vendor' list
    And I see random company name in 'Manage External Vendor' list
    And I see random company reg number in 'Manage External Vendor' list
    And I see tax registered company status in 'Manage External Vendor' list is "Yes"
    And I see random contact person in 'Manage External Vendor' list
    And I see random email in 'Manage External Vendor' list
    And I see system status in 'Manage External Vendor' list is "Active"

Scenario: MAEV-006-003 Entity admin can update the existing supplier
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "Vendor Management" link on the left menu
    And I click to "Manage External Vendor" link on the left sub menu
    Then I see 'Manage External Vendor' title

    When I input random company name to 'Filter Company Name' in 'Manage External Vendor' list
    Then I see connection in 'Manage External Vendor' list is "NOT CONNECTED"
    And I see random company name in 'Manage External Vendor' list
    And I see random company reg number in 'Manage External Vendor' list

    When I double click to random company code in 'Manage External Vendor' list
    And Wait for "4" seconds
    Then I see 'Vendor Details' page
    And I see random company code in 'Company Code' textbox at 'Vendor Details' page
    And I see random company reg in 'Company Reg Number' textbox at 'Vendor Details' page
    And I see random company name in 'Company Name' textbox at 'Vendor Details' page
    And I see random full name in 'Full Name' textbox at 'Vendor Details' page
    And I see random email in 'Email' textbox at 'Vendor Details' page
    And I see random phone number in 'Phone Number' textbox at 'Vendor Details' page
    And I see random address label in 'Address Label' textbox at 'Vendor Details' page
    And I see random address line 1 in 'Address Line 1' textbox at 'Vendor Details' page
    And I see random address line 2 in 'Address Line 2' textbox at 'Vendor Details' page
    And I see address city in 'Address City' textbox at 'Vendor Details' page is "Singapore"
    And I see state in 'State' textbox at 'Vendor Details' page is "Singapore"

    When I click to "Edit" button format_1 
    And I input random value to 'Company Name' textbox at 'Vendor Details' page
    And I input random value to 'Company Reg No' textbox at 'Vendor Details' page
    And I click to "Reconnect" button format_1
    Then I see a message "A connection request is sent to vendor successfully." appears

    When I click to "I Understand" button format_1
    And I click to "Back" button format_1
    Then I see 'Manage External Vendor' title

    When I input random company code to 'Filter Company Code' in 'Manage External Vendor' list
    Then I see connection in 'Manage External Vendor' list is "AWAITING APPROVAL"
    And I see random company code in 'Manage External Vendor' list
    And I see random value company name in 'Manage External Vendor' list
    And I see random value company reg no in 'Manage External Vendor' list