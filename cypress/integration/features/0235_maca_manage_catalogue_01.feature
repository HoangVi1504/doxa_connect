@manage_catalogue @entity_admin
Feature: 0235 Entity admin can create, update and delete non contracted catalogue item

Scenario: MACA-001-006 Entity admin can create non contracted catalogue item
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "General Setting" link on the left menu
    And Wait for "1" seconds
    And I click to "Manage Catalogue" link on the left sub menu
    And I click to "List of Catalogue" link on the left sub menu
    And I click to "Create New" button format_3
    Then I see 'Create Catalogue Item' page

    When I click to "Create" button format_2
    Then I see a message "Validation error, please check your input" appears

    When I click to "OK" button format_1
    Then I see a validation text of 'Item Code' at 'Create Catalogue Item' page appears "Please enter valid Item Code"
    And I see a validation text of 'Item Name' at 'Create Catalogue Item' page appears "Please enter valid Item Name"
    And I see a validation text of 'Category' at 'Create Catalogue Item' page appears "Please enter valid category"
    And I see a validation text of 'UOM' at 'Create Catalogue Item' page appears "Please enter valid UOM"
    And I see a validation text of 'Latest Price' at 'Create Catalogue Item' page appears "Please enter valid Latest Price"

    When I input "auto item code 1" to 'Item Code' textbox at 'Create Catalogue Item' page
    And I click to text "Item Code"
    And Wait for "1" seconds
    And I select "1105 (AUTO SUPPLIER 1)" from 'Supplier Code' dropdown at 'Create Catalogue Item' page
    And I select "United States Dollar (+USD)" from 'Currency' dropdown at 'Create Catalogue Item' page
    And I input "5000" to 'Latest Price' textbox at 'Create Catalogue Item' page
    And I input valid from date as next "1" days to 'Valid From' textbox at 'Create Catalogue Item' page
    And I input valid to date as next "15" days to 'Valid To' textbox at 'Create Catalogue Item' page
    And I click to "Create" button format_2
    Then I see a message "Catalogue already exists" appears

    When I click to "OK" button format_2
    And I click to "Back" button format_1
    Then I see 'List of Catalogue' page

    When I click to "Create New" button format_3
    Then I see 'Create Catalogue Item' page

    When I input random item code to 'Item Code' textbox at 'Create Catalogue Item' page
    And I input random item name to 'Item Name' textbox at 'Create Catalogue Item' page
    And I select "AUTO EQUIPMENT" from 'Category' dropdown at 'Create Catalogue Item' page
    And I select "IN" from 'UOM' dropdown at 'Create Catalogue Item' page
    And I select "TEST_SUPPLIER_34 (TEST SUPPLIER 34)" from 'Supplier Code' dropdown at 'Create Catalogue Item' page
    And I select "auto tax default" from 'Tax Code' dropdown at 'Create Catalogue Item' page
    And I select "United States Dollar (+USD)" from 'Currency' dropdown at 'Create Catalogue Item' page
    And I input "5000" to 'Latest Price' textbox at 'Create Catalogue Item' page
    And I input valid from date as next "1" days to 'Valid From' textbox at 'Create Catalogue Item' page
    And I input valid to date as next "15" days to 'Valid To' textbox at 'Create Catalogue Item' page
    And I input "auto create this catalogue" to 'Description' textbox at 'Create Catalogue Item' page
    And I input random model to 'Model' textbox at 'Create Catalogue Item' page
    And I input "100" to 'Size' textbox at 'Create Catalogue Item' page
    And I input "Panasonic" to 'Brand' textbox at 'Create Catalogue Item' page
    And I select "G/L auto 1" from 'GL Account' dropdown at 'Create Catalogue Item' page
    And I click to "Create" button format_2
    Then I see a message "Catalogue added" appears

    When I click to "I Understand" button format_1
    Then I see 'List of Catalogue' page

    When I input item code of catalogue just created to 'Filter Item Code' in 'Catalogue' list
    Then I see random item code of catalogue just created in 'Catalogue' list
    And I see random item name of catalogue just created in 'Catalogue' list

    When I check to 'Item Code' checkbox of of catalogue just created in 'Catalogue' list
    Then I see item description of catalogue just created in 'Catalogue' list is "auto create this catalogue"
    And I see supplier code of catalogue just created in 'Catalogue' list is "TEST_SUPPLIER_34"
    And I see supplier name of catalogue just created in 'Catalogue' list is "TEST SUPPLIER 34"
    And I see uom of catalogue just created in 'Catalogue' list is "IN"
    And I see category of catalogue just created in 'Catalogue' list is "AUTO EQUIPMENT"
    And I see random item model of catalogue just created in 'Catalogue' list
    And I see item size of catalogue just created in 'Catalogue' list is "100"
    And I see item brand of catalogue just created in 'Catalogue' list is "Panasonic"
    And I see contracted status of catalogue just created in 'Catalogue' list is "No"
    And I see unit price of catalogue just created in 'Catalogue' list is "5000"
    And I see active status of catalogue just created in 'Catalogue' list is "Yes"
    And I see action of catalogue just created in 'Catalogue' list is "Deactivate"
    And I see tax code of catalogue just created in 'Catalogue' list is "auto tax default"

    When I click to "Deactivate" button format_1
    Then I see a notification appears "Are you sure you want to deactivate these catalogue items?"

    When I click to 'Deactivate' button in notification at 'Catalogue' list
    And Wait for "2" seconds
    Then I see a message "Catalogue Deactivated" appears

    When I click to "I Understand" button format_1
    And I input item code of catalogue just created to 'Filter Item Code' in 'Catalogue' list
    Then I see random item code of catalogue just created in 'Catalogue' list
    And I see active status of catalogue just created in 'Catalogue' list is "No"
    And I see action of catalogue just created in 'Catalogue' list is "Activate"

Scenario: MACA-003 Entity admin can update and delete non contracted catalogue
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "General Setting" link on the left menu
    And Wait for "1" seconds
    And I click to "Manage Catalogue" link on the left sub menu
    And I click to "List of Catalogue" link on the left sub menu
    Then I see 'List of Catalogue' page

    When I input item name of catalogue just created to 'Filter Item Name' in 'Catalogue' list
    Then I see random item code of catalogue just created in 'Catalogue' list
    And I see random item name of catalogue just created in 'Catalogue' list

    When I double click to item code of catalogue just created in 'Catalogue' list
    And Wait for "3" seconds
    Then I see item code of catalogue just created in 'Item Code' textbox at 'Catalogue Details' page
    And I see item name of catalogue just created in 'Item Name' textbox at 'Catalogue Details' page
    And I see latest price in 'Latest Price' textbox at 'Catalogue Details' page is "5000"

    When I click to "Edit" button format_3
    And I check to 'Contracted Item' checkbox at 'Create Catalogue' page
    And I input random contract reference to 'Contract Reference No' textbox at 'Create Catalogue' page
    And I input "10000" to 'Latest Price' textbox at 'Create Catalogue Item' page
    And I input "2" to 'Contracted Quantity' textbox at 'Create Catalogue' page
    And I input "1000000" to 'Contracted Price' textbox at 'Create Catalogue' page
    And I select 'auto Prj 1' from 'Project' dropdown at 'Create Catalogue' page
    And I click to "Update" button format_2
    Then I see a message "Catalogue updated" appears

    When I click to "I Understand" button format_1
    Then I see random contract reference number in 'Contract Reference No' textbox at 'Catalogue Details' page
    And I see latest price in 'Latest Price' textbox at 'Catalogue Details' page is "10000"
    And I see contracted quantity in 'Contracted Quantity' textbox at 'Catalogue Details' page is "2"
    And I see contracted price in 'Contracted Price' textbox at 'Catalogue Details' page is "1000000"

    When I click to "Back" button format_1
    Then I see 'List of Catalogue' page

    When I input item name of catalogue just created to 'Filter Item Name' in 'Catalogue' list
    Then I see random item code of catalogue just created in 'Catalogue' list
    And I see random item name of catalogue just created in 'Catalogue' list

    When I check to 'Item Code' checkbox of of catalogue just created in 'Catalogue' list
    Then I see contracted status of catalogue just created in 'Catalogue' list is "Yes"
    And I see random contracted reference number of catalogue just created in 'Catalogue' list
    And I see contracted quantity of catalogue just created in 'Catalogue' list is "2"
    And I see project of catalogue just created in 'Catalogue' list is "auto Prj 1"
    And I see unit price of catalogue just created in 'Catalogue' list is "10000"
    And I see contracted price of catalogue just created in 'Catalogue' list is "1000000"
    And I see active status of catalogue just created in 'Catalogue' list is "No"
    And I see action of catalogue just created in 'Catalogue' list is "Activate"

    When I click to "Activate" button format_1
    Then I see a notification appears "Are you sure you want to activate these catalogue items?"

    When I click to 'Activate' button in notification at 'Catalogue' list
    Then I see a message "Catalogue Activated" appears

    When I click to "I Understand" button format_1
    And I input item code of catalogue just created to 'Filter Item Code' in 'Catalogue' list
    And I check to 'Item Code' checkbox of of catalogue just created in 'Catalogue' list
    Then I see random item code of catalogue just created in 'Catalogue' list
    And I see active status of catalogue just created in 'Catalogue' list is "Yes"
    And I see action of catalogue just created in 'Catalogue' list is "Deactivate"
    
    When I click to "Deactivate" button format_1
    Then I see a notification appears "Are you sure you want to deactivate these catalogue items?"

    When I click to 'Deactivate' button in notification at 'Catalogue' list
    Then I see a message "Catalogue Deactivated" appears

    When I click to "I Understand" button format_1
    And I input item name of catalogue just created to 'Filter Item Name' in 'Catalogue' list
    And I check to 'Item Code' checkbox of of catalogue just created in 'Catalogue' list
    Then I see random item code of catalogue just created in 'Catalogue' list
    And I see active status of catalogue just created in 'Catalogue' list is "No"
    And I see action of catalogue just created in 'Catalogue' list is "Activate"

    When I click to "Delete" button format_1
    Then I see a notification appears "Are you sure you want to delete these catalogue items?"

    When I click to 'Delete' button in notification at 'Catalogue' list
    Then I see a message "Catalogue Deleted" appears

    When I click to "I Understand" button format_1