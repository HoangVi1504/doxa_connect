@manage_project 
#@entity_admin
Feature: 0242 Entity admin forecast and close peoject

Scenario: PRFO-S001-001 PRFO-S002-001 Entity admin forecast project
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "Project Management" link on the left menu
    And I click to "Manage Project Forecast" link on the left sub menu
    Then I see 'List of Project Forecast' title

    When I expand layout sidebar menu if it open
    And I input project code just created to 'Filter Project Code' in 'Project' list
    Then I see random project code in 'Project' list
    And I see random project title in 'Project' list
    And I see project status in 'Project' list is "PENDING FORECAST"
    And I see project description in 'Project' list is "auto update project description"
    And I see project admin in 'Project' list is "AUTO ENTITY DX"
    And I see start date in 'Project' list as next "2" days
    And I see end date in 'Project' list as next "4" days

    When I double click to project code just created in 'Project' list
    And Wait for "2" seconds
    Then I see 'Project Details' page
    And I see project code just created in 'Project Code' textbox at 'Project Forecast Details' page
    And I see project title just created in 'Project Title' textbox at 'Project Forecast Details' page
    And I see random erp project code in 'ERP Project Code' textbox at 'Project Forecast Details' page
    And I see value in 'Start Date' textbox as next "2" days
    And I see value in 'End Date' textbox as next "4" days
    And I see value in 'Project Currency' textbox at 'Project Forecast Details' page is "SGD"
    And I see value in 'Approved PR Budget' textbox at 'Project Forecast Details' page is "SGD 0.00"
    And I see value in 'Overall Budget' textbox at 'Project Forecast Details' page is "SGD 1,000,000.00"
    And I see value in 'Issued PO Budget' textbox at 'Project Forecast Details' page is "SGD 0.00"
    And I see value in 'Project Address' textbox at 'Project Forecast Details' page is "address default"
    And I see value in 'Address Line 1' textbox at 'Project Forecast Details' page is "07 Cong Hoa"
    And I see value in 'Address Line 2' textbox at 'Project Forecast Details' page is "4 Ward, Tan Binh District"
    And I see value in 'Postal Code' textbox at 'Project Forecast Details' page is "7000"
    And I see value in 'Country' textbox at 'Project Forecast Details' page is "Viet Nam"
    And I see value in 'State' textbox at 'Project Forecast Details' page is "Ho Chi Minh"
    And I see value in 'City' textbox at 'Project Forecast Details' page is "Ho Chi Minh"

    When I click to "Forecast" button format_1
    Then I see 'Forecast Trade' page

    When Wait for "3" seconds
    And I click to "Add Trade" button format_3
    And I input "TRADE CODE DEFAULT" to 'Filter Trade Code' in 'Project Trade' list
    And I check "TRADE CODE DEFAULT" checkbox in 'Project Trade' list
    And I click to "Add" button format_1
    Then I see code in 'Project Forecast Detailed Breakdown' list is "TRADE CODE DEFAULT" 

    When I click to book icon add item in 'Project Forecast Detailed Breakdown' list
    And I input "item code default" to 'Filter Item Code' in 'Catalogue Items' list
    And I check "item code default" checkbox in 'Catalogue Items' list
    And I click to "Add" button format_1
    Then I see code in 'Project Forecast Detailed Breakdown' list is "item code default"

    When I click to "Save" button format_1
    Then I see a message "Project has been updated for project" appears

    When I click to "I Understand" button format_1 
    And I click to Expand Collapse icon
    And I click to "Manage Project Forecast" link on the left sub menu
    Then I see 'List of Project Forecast' title

    When I input project code just created to 'Filter Project Code' in 'Project' list
    Then I see random project code in 'Project' list
    And I see project status in 'Project' list is "FORECASTED"

Scenario: PRFO-S005-001 Entity admin can close an existing project
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "Project Management" link on the left menu
    And I click to "Manage Project Forecast" link on the left sub menu
    Then I see 'List of Project Forecast' title

    When I input project code just created to 'Filter Project Code' in 'Project' list
    Then I see random project code in 'Project' list
    And I see project status in 'Project' list is "FORECASTED"

    When I double click to project code just created in 'Project' list
    And Wait for "2" seconds
    Then I see 'Project Details' page

    When I click to "Forecast" button format_1
    Then I see 'Forecast Trade' page

    When I click to "Close Project" button format_1
    Then I see a notification appears "Do you wish to close this Project?"

    When I click to "Yes" button format_1
    Then I see a message "Project closed" appears
    
    When I click to "I Understand" button format_1
    And I click to "Manage Project Forecast" link on the left sub menu
    Then I see 'List of Project Forecast' title

    When I input project code just created to 'Filter Project Code' in 'Project' list
    Then I see random project code in 'Project' list
    And I see project status in 'Project' list is "CLOSED"