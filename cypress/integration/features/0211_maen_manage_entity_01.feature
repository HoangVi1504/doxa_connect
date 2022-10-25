# @manage_entity @entity_admin
Feature: 0211 Doxa admin can create and update entity

Scenario: MAEN-001-007 Create a new entity then entity reset password and login
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "doxa admin stag"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Onboard Entity" link on the left menu
    Then I see 'Onboard New Entity' page

    When Wait for "2" seconds
    And I click to "Create" button format_1
    Then I see a message "Validation error, please check your input" appears

    When I click to "OK" button format_1
    Then I see a validation text of 'Company Name' appears "Enter Company Name"
    And I see a validation text of 'Company Registration No.' appears "Enter Company Registration No."
    And I see a validation text of 'Country' appears "Please select a country"
    And I see a validation text of 'Entity Type' appears "Please select an entity type"
    And I see a validation text of 'Industry Type' appears "Please select an industry type"
    And I see a validation text of 'Name' in 'Entity Representative' appears "Enter entity representative name"
    And I see a validation text of 'Email' in 'Entity Representative' appears "Please enter a valid email address"
    And I see a validation text of 'Dial Code' in 'Entity Representative' appears "Dial Code Required"
    And I see a validation text of 'Work Number' in 'Entity Representative' appears "Please enter a valid work number"
    And I see a validation text of 'Email' in 'Authorized Signatory' appears "Please enter a valid email address"
    And I see a validation text of 'Dial Code' in 'Authorized Signatory' appears "Dial Code Required"
    And I see a validation text of 'Work Number' in 'Authorized Signatory' appears "Please enter a valid work number"
    And I see a validation text of 'Email' in 'Entity Administrator' appears "Please enter a valid email address"
    And I see a validation text of 'Dial Code' in 'Entity Administrator' appears "Dial Code Required"
    And I see a validation text of 'Work Number' in 'Entity Administrator' appears "Please enter valid Work Number"

    When I input random company name to 'Company Name' textbox at 'Onboard New Entity' page
    And I input "REG NO 987" to 'Company Registration No' textbox at 'Onboard New Entity' page
    And I select "Singapore" from 'Country' dropdown at 'Onboard New Entity' page
    And I select "GENERAL PARTNERSHIP" from 'Entity Type' dropdown at 'Onboard New Entity' page
    And I select "CONSTRUCTION" from 'Industry Type' dropdown at 'Onboard New Entity' page
    And I input random name to 'Name' textbox at 'Entity Representative'
    And I input random email to 'Email' textbox at 'Entity Representative'
    And I select "84" from 'Dia Code' dropdown at 'Entity Representative'
    And I input random phone to 'Work Phone' textbox at 'Entity Representative'
    And I input random name to 'Name' textbox at 'Authorized Signatory'
    And I input random email to 'Email' textbox at 'Authorized Signatory'
    And I select "84" from 'Dia Code' dropdown at 'Authorized Signatory'
    And I input random phone to 'Work Phone' textbox at 'Authorized Signatory'
    And I input random name to 'Name' textbox at 'Entity Administrator'
    And I input random email to 'Email' textbox at 'Entity Administrator'
    And I select "84" from 'Dia Code' dropdown at 'Entity Administrator'
    And I input random phone to 'Work Phone' textbox at 'Entity Administrator'
    And I click to "Module Subscription" link at 'Onboard New Entity' page
    And I check 'Settings' checkbox at 'Onboard New Entity' page
    And I check 'Purchase' checkbox at 'Onboard New Entity' page
    And I check 'Invoices' checkbox at 'Onboard New Entity' page
    And I click to "Remarks" link at 'Onboard New Entity' page
    And I input "this account is created by automation" to 'Remark' textbox at 'Onboard New Entity' page
    And I click to "Create" button format_1
    Then I see a message "Entity Already Exists" appears

    When I click to "OK" button format_1
    And I clear value in 'Company Registration No' textbox at 'Onboard New Entity' page
    And I input random REG No to 'Company Registration No' textbox at 'Onboard New Entity' page
    And I click to "Create" button format_1
    Then I see a message "Entity Creation Successful" appears

    When I click to "I Understand" button format_1
    And I input entity name just created to 'Filter Entity Name' in list
    Then I see entity status in list of entities is "APPROVED"
    And I see random company reg number in list of entities
    And I see entity active status in list of entities is "Yes"

# Scenario: 02 New entity check email and get temporary password
#     Given Navigate to Getnada site
#     And I click to 'ADD INBOX' button
#     And I input entity name just created to 'User' textbox
#     And I select domain "getnada.com" from Domain dropdown
#     And I click to 'Add Now' button
#     And I click to "Doxa Account Setup Completed Success" link at 'Getnada' page
#     And Get password in email