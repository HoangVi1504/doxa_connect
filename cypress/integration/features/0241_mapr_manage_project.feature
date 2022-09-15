@manage_project 
# @entity_admin
Feature: 0241 Entity admin can create and update project

Scenario: MAPR-001-003 Entity admin can create project
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "Project Management" link on the left menu
    And I click to "List of Project" link on the left sub menu
    And I click to " Create New" button format_2
    Then I see 'Create New Project' page

    When I click to "Create" button format_2
    Then I see a message "Validation error, please check your input" appears

    When I click to "OK" button format_1
    Then I see a validation text of 'Project Code' at 'Create New Project' page appears "Please Enter Valid Project Code"
    And I see a validation text of 'Project Title' at 'Create New Project' page appears "Please enter valid Project Title"
    And I see a validation text of 'Start Date' at 'Create New Project' page appears "Please select valid Start Date"
    And I see a validation text of 'End Date' at 'Create New Project' page appears "Please select valid End Date"
    And I see a validation text of 'Overall Budget' at 'Create New Project' page appears "Please Enter Valid Overall Budget"
    And I see a validation text of 'Project Description' at 'Create New Project' page appears "Please Enter Valid Project Description"

    When I input random project code to 'Project Code' textbox at 'Create New Project' page
    And I input random erp project code to 'ERP Project Code' textbox at 'Create New Project' page
    And I input "auto create this project code" to 'Project Code Description' textbox at 'Create New Project' page
    And I input random project title to 'Project Title' textbox at 'Create New Project' page
    And I input start date as next "2" days to 'Start Date' textbox at 'Create New Project' page
    And I input end date as next "4" days to 'End Date' textbox at 'Create New Project' page
    And I select "Singapore Dollar (SGD)" from 'Project Currency' dropdown at 'Create New Project' page
    And I input "1000000" to 'Overall Budget' textbox at 'Create New Project' page
    And I select "address default" from 'Project Address' dropdown at 'Create New Project' page
    Then I see value in 'Address Line 1' textbox at 'Create New Project' page is "07 Cong Hoa"
    And I see value in 'Address Line 2' textbox at 'Create New Project' page is "4 Ward, Tan Binh District"
    And I see value in 'Postal Code' textbox at 'Create New Project' page is "7000"
    And I see value in 'Country' textbox at 'Create New Project' page is "Viet Nam"
    And I see value in 'State' textbox at 'Create New Project' page is "Ho Chi Minh"
    And I see value in 'City' textbox at 'Create New Project' page is "Ho Chi Minh"

    When I input "auto project description" to 'Project Description' textbox at 'Create New Project' page
    And I select "AUTO ENTITY DX" from 'Overall Project In-Charge' dropdown at 'Create New Project' page
    And I input "auto remark Overall Project In-Charge" to 'Remark Overall Project In-Charge' textbox at 'Create New Project' page
    And I select "AUTO ENTITY DX" from 'Project Admin' dropdown at 'Create New Project' page
    And I input "auto remark project admin" to 'Remark Project Admin' textbox at 'Create New Project' page
    And I select "AUTO ENTITY DX" from 'Project Team Members' dropdown at 'Create New Project' page
    And I input "auto remark project team members" to 'Remark Project Team Members' textbox at 'Create New Project' page
    And I click to "Create" button format_2
    Then I see a notification appears "Do you wish to create this project?"

    When I click to "Yes" button format_1
    Then I see a message "New project is created successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'List of Project' title

    When I expand layout sidebar menu if it open
    And I input project code just created to 'Filter Project Code' in 'Project' list
    Then I see random project code in 'Project' list
    And I see random project title in 'Project' list
    And I see project status in 'Project' list is "PENDING FORECAST"
    And I see project description in 'Project' list is "auto project description"
    And I see project admin in 'Project' list is "AUTO ENTITY DX"
    And I see start date in 'Project' list as next "2" days
    And I see end date in 'Project' list as next "4" days
    And I see project currency in 'Project' list is "SGD"
    And I see overall budget in 'Project' list is "1,000,000.00"

    When I click to Expand Collapse icon
    And I click to "Manage Project Forecast" link on the left sub menu
    Then I see 'List of Project Forecast' title

    When I input project code just created to 'Filter Project Code' in 'Project' list
    Then I see random project code in 'Project' list
    And I see project status in 'Project' list is "PENDING FORECAST"

Scenario: MAPR-002-003 Entity admin can update the existing Project
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "Project Management" link on the left menu
    And I click to "List of Project" link on the left sub menu
    Then I see 'List of Project' title

    When I input project title just created to 'Filter Project Title' in 'Project' list
    Then I see random project code in 'Project' list
    And I see random project title in 'Project' list
    And I see project status in 'Project' list is "PENDING FORECAST"
    And I see project description in 'Project' list is "auto project description"

    When I double click to project code just created in 'Project' list
    And Wait for "2" seconds
    Then I see 'Project Details' page
    And I see project code just created in 'Project Code' textbox at 'Project Details' page
    And I see project title just created in 'Project Title' textbox at 'Project Details' page
    And I see value in 'Project Currency' textbox at 'Project Details' page is "SGD"
    And I see value in 'Approved PR Budget' textbox at 'Project Details' page is "SGD 0.00"
    And I see value in 'Overall Budget' textbox at 'Project Details' page is "SGD 1,000,000.00"
    And I see value in 'Issued PO Budget' textbox at 'Project Details' page is "SGD 0.00"

    When I click to "Edit" button format_2
    And I clear value in 'Project Title' textbox at 'Project Details' page
    And I clear value in 'Project Description' textbox 'Project Details' page
    And I click to "Save" button format_2
    Then I see a message "Validation error, please check your input" appears

    When I click to "OK" button format_1
    Then I see a validation text of 'Project Title' at 'Create New Project' page appears "Please enter valid Project Title"
    And I see a validation text of 'Project Description' at 'Create New Project' page appears "Please Enter Valid Project Description"

    When I input random project title to 'Project Title' textbox at 'Create New Project' page
    And I input "auto update project description" to 'Project Description' textbox at 'Create New Project' page
    And I click to "Save" button format_2
    Then I see a notification appears "Do you wish to update this project?"

    When I click to "Yes" button format_1
    Then I see a message "Project details is updated successfully" appears

    When I click to "I Understand" button format_1
    And I click to "Back" button format_1
    Then I see 'List of Project' title

    When I input project title just created to 'Filter Project Title' in 'Project' list
    Then I see random project code in 'Project' list
    And I see random project title in 'Project' list
    And I see project description in 'Project' list is "auto update project description"