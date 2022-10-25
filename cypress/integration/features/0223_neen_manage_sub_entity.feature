@sub_entity @entity_admin
Feature: 0223 Entity admin can create, update, deactivate and reactivate an sub-entity

Scenario: NEEN-001-005 Entity admin can create a new sub-entity
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin stag"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "3" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Entity Management" link on header menu
    And I click to "Manage Sub-Entities" link on the left menu
    And I click to "Create Company" link on the left sub menu
    Then I see 'Create New Company' page

    When I click to "Create" button format_1
    Then I see a message "Validation error, please check your input" appears

    When I click to "OK" button format_1
    Then I see a validation text of 'Company Name' at 'Create New Company' page appears "Enter Company Name"
    And I see a validation text of 'Company Registration No.' at 'Create New Company' page appears "Enter Company Registration No."
    # And I see a validation text of 'Country' at 'Create New Company' page appears "Please select valid Country"
    # And I see a validation text of 'Entity Type' at 'Create New Company' page appears "Please select valid Entity Type"
    # And I see a validation text of 'Industry Type' at 'Create New Company' page appears "Please select valid Industry Type"

    ## work around
    When I select Singapore from 'Country' dropdown at 'Create New Company' page
    And I input random company name to 'Company Name' textbox at 'Create New Company' page
    And I select GENERAL PARTNERSHIP from 'Entity Type' dropdown at 'Create New Company' page
    And I input random company REG No to 'Company Registration No' textbox at 'Create New Company' page
    And I select CONSTRUCTION from 'Industry Type' dropdown at 'Create New Company' page

    # And I select "Singapore" from 'Country' dropdown at 'Create New Company' page
    # And I select "GENERAL PARTNERSHIP" from 'Entity Type' dropdown at 'Create New Company' page
    # And I select "CONSTRUCTION" from 'Industry Type' dropdown at 'Create New Company' page
    And I click to "Module Subscription" link at 'Create New Company' page
    And I check 'Settings' checkbox at 'Create New Company' page
    And I check 'Payment & Financing' checkbox at 'Create New Company' page
    And I check 'Purchase' checkbox at 'Create New Company' page
    And I click to "Company Logo" link at 'Create New Company' page
    And I upload "logo_company.jpg" to 'Company Logo' table at 'Create New Company' page
    And I click to "Crop" button format_1
    And I click to "Remarks" link at 'Create New Company' page
    And I input "entity admin create this company" to 'Remark' textbox at 'Create New Company' page
    And I click to "Create" button format_1
    Then I see a message "Company Creation Successful" appears

    When I click to "I Understand" button format_1
    Then I see 'List of Companies' page

    When I input company name just created to filter 'Company Name' in list 
    Then I see company name just created in list
    And I see company status in list is "APPROVED"
    And I see country of origin in list is "Singapore"
    And I see company REG No in list
    And I see company active status in list is "Yes"
    And I see main company status in list is "No"

Scenario: NEEN-002 Entity admin can update an existing sub-entity
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin stag"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "3" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Entity Management" link on header menu
    And I click to "Manage Sub-Entities" link on the left menu
    And I click to "List of Companies" link on the left sub menu
    Then I see 'List of Companies' page

    When I input company name just created to filter 'Company Name' in list
    Then I see company name just created in list

    When I double click to company name just created in list of Companies
    And Wait for "2" seconds
    Then I see 'Company Details' page
    And I see company name just created at 'Company Details' page
    And I see random company REG No at 'Company Details' page
    And I see country of origin at 'Company Details' page is "Singapore"
    And I see entity type at 'Company Details' page is "GENERAL PARTNERSHIP"
    And I see industry type at 'Company Details' page is "CONSTRUCTION"

    When I click to "Edit" button format_3
    And I click to "Module Subscription" link at 'Create New Company' page
    And I check to 'Contract' checkbox at 'Create New Company' page
    And I click to "Company Logo" link at 'Create New Company' page
    And I upload "logo_company_2.jpg" to 'Company Logo' table at 'Create New Company' page
    And I click to "Crop" button format_1
    And I click to "Remarks" link at 'Create New Company' page
    And I input "entity admin update this company" to 'Remark' textbox at 'Create New Company' page
    And I click to "Save" button format_1
    Then I see a message "Update Successfully" appears

    When I click to "I Understand" button format_1

Scenario: NEEN-003-004 Entity admin can deactivate and reactivate an existing sub-entity
    # Entity admin can deactivate an existing sub-entity
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin stag"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "3" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Entity Management" link on header menu
    And I click to "Manage Sub-Entities" link on the left menu
    And I click to "List of Companies" link on the left sub menu
    Then I see 'List of Companies' page

    When I input company name just created to filter 'Company Name' in list
    Then I see company name just created in list

    When I double click to company name just created in list of Companies
    And Wait for "2" seconds
    Then I see 'Company Details' page
    And I see company name just created at 'Company Details' page

    When I click to "Deactivate Company" button format_1
    Then I see a notification appears "Are you sure you want to deactivate this company?"

    When I click to "Deactivate" button format_2
    Then I see a message "Company Deactivation Successful" appears

    When I click to "I Understand" button format_1
    Then I see "Reactivate Company" button format_1 is displayed

    When I click to "List of Companies" link on the left sub menu
    Then I see 'List of Companies' page

    When I input company name just created to filter 'Company Name' in list
    Then I see company name just created in list
    And I see company active status in list is "No"

    # Entity admin can reactivate an existing sub-entity
    When I double click to company name just created in list of Companies
    And Wait for "2" seconds
    Then I see 'Company Details' page
    And I see company name just created at 'Company Details' page

    When I click to "Reactivate Company" button format_1
    Then I see a notification appears "Are you sure you want to reactivate this company?"

    When I click to "Reactivate" button format_2
    Then I see a message "Company Reactivation Successful" appears

    When I click to "I Understand" button format_1
    Then I see "Deactivate Company" button format_1 is displayed

    When I click to "List of Companies" link on the left sub menu
    Then I see 'List of Companies' page

    When I input company name just created to filter 'Company Name' in list
    Then I see company name just created in list
    And I see company active status in list is "Yes"