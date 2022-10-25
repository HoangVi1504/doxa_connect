@manage_address @entity_admin
Feature: 0231 Entity admin can create and update company address

Scenario: MAAD-001-002 Entity admin can create company address
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin stag"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "General Setting" link on the left menu
    And I click to "Manage Address" link on the left sub menu
    And I click to "Create New" button format_2
    Then I see 'Create Company Address' page

    When I click to "Create" button format_2
    Then I see a message "Validation error, please check your input" appears

    When I click to "OK" button format_1
    Then I see a validation text of 'Address Label' at 'Create Address' page appears "Enter Address Label"
    And I see a validation text of 'Address 1' at 'Create Address' page appears "Please enter address"
    And I see a validation text of 'State' at 'Create Address' page appears "Please enter state/province"
    And I see a validation text of 'Postal Code' at 'Create Address' page appears "Please enter postal code"
    # And I see a validation text of 'Country' at 'Create Address' page appears "Please select valid Country"

    When I input random address label to 'Address Label' textbox at 'Create Address' page
    And I input random address 1 to 'Address Line 1' textbox at 'Create Address' page
    And I input random address 2 to 'Address Line 2' textbox at 'Create Address' page
    And I input random state to 'State' textbox at at 'Create Address' page
    And I input random postal code to 'Postal Code' textbox at 'Create Address' page
    And I input random city to 'City' textbox at 'Create Address' page
    And I select 'Singapore' from 'Country' dropdown at 'Create Address' page
    And I check 'Set Default Address' checkbox at 'Create Address' page
    And I click to "Create" button format_2
    Then I see a message "Address Create Successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'Company Address List' page

    When I expand layout sidebar menu if it open
    And I input address label just created to filter 'Address Label' in list
    Then I see random address label at first line in list
    And I see detail address at first line in list
    And I see random city at first line in list
    And I see random state at first line in list
    And I see country at first line in list is "Singapore"
    And I see random postal code at first line in list
    And I see default address status at first line in list is "Yes"
    And I see active address status at first line in list is "Yes"

Scenario: MAAD-004 Entity admin can update the existing address
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin stag"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "General Setting" link on the left menu
    And I click to "Manage Address" link on the left sub menu
    Then I see 'Company Address List' page

    When I expand layout sidebar menu if it open
    And I input address label just created to filter 'Address Label' in list
    Then I see random address label at first line in list

    When I double click to address label just created in list
    And Wait for "2" seconds
    Then I see 'Company Address Details' page
    And I see address label just created in 'Address Label' textbox at 'Company Address Details' page
    
    When I click to "Edit" button format_2
    And I clear value in 'Address Line 1' textbox at 'Company Address Details' page
    And I click to "Save" button format_2
    Then I see a message "Validation error, please check your input" appears

    When I click to "OK" button format_1 
    Then I see a validation text of 'Address 1' at 'Create Address' page appears "Please enter address"

    When I input random address 1 to 'Address Line 1' textbox at 'Create Address' page
    And I clear value in 'Postal Code' textbox at 'Company Address Details' page
    And I click to "Save" button format_2
    Then I see a message "Validation error, please check your input" appears

    When I click to "OK" button format_1
    Then I see a validation text of 'Postal Code' at 'Create Address' page appears "Please enter postal code"

    When I input random postal code to 'Postal Code' textbox at 'Create Address' page
    And I click to "Save" button format_2
    Then I see a message "Update Successfully" appears

    When I click to "I Understand" button format_1
    And I click to "Back" button format_1
    Then I see 'Company Address List' page
    
    When I input address label just created to filter 'Address Label' in list
    Then I see random address label at first line in list
    And I see detail address at first line in list
    And I see random postal code at first line in list