@manage_document_prefix @entity_admin
Feature: 0263 Update prefixes for an entity

Scenario: MADP-002 Update prefixes for an entity (Contract, RFQ Pricing, Purchase Order)
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin stag"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "General Setting" link on the left menu
    And I click to "Manage Document Prefix" link on the left sub menu
    Then I see 'List of Document Prefix' page

    # 'Contract' Document Prefix
    When I click to text "Function"
    And I input "Contract" to 'Filter Function' in 'Document Prefix' list
    Then I see function just searched in 'Document Prefix' list is "Contract" 
    
    When I double click to function "Contract" in 'Document Prefix' list
    And Wait for "2" seconds
    Then I see 'Document Prefix Details' page
    And I see function in 'Function' textbox at 'Document Prefix Details' page is "Contract"
    And I see 'Pre-fix Status' dropdown is disabled at 'Document Prefix Details' page
    And I see 'Default Document Number' dropdown is disabled at 'Document Prefix Details' page

    When I click to "Edit" button format_3
    Then I see "Save" button format_1 is displayed

    When I select "Configure" from 'Pre-fix Status' dropdown at 'Document Prefix Details' page
    And I clear value in 'Prefix' textbox at 'Document Prefix Details' page 
    And I click to "Save" button format_1
    Then I see a message "Validation error, please check your input." appears

    When I click to "OK" button format_2
    Then I see a validation text of 'Prefix' at 'Document Prefix Details' page appears "Please Fill In Prefix" 

    When I input "123" to 'Prefix' textbox at 'Document Prefix Details' page
    And I force click Setup "1" is "Vendor Code" from 'Dynamic Prefix' at 'Document Prefix Details' page
    And I force click Setup "2" is "YYYY" from 'Dynamic Prefix' at 'Document Prefix Details' page
    And I select "2" from 'Digits' dropdown at 'Document Prefix Details' page
    And I input "456" to 'Start Number Format' textbox at 'Document Prefix Details' page
    And I click to "Save" button format_1
    Then I see a message "Update is successful" appears

    When I click to "I Understand" button format_1
    And I click to "Back" button format_1
    Then I see 'List of Document Prefix' page

    When I click to text "Function"
    And I input "Contract" to 'Filter Function' in 'Document Prefix' list
    Then I see function just searched in 'Document Prefix' list is "Contract" 
    And I see type of function just searched in 'Document Prefix' list is "Configure"
    And I see prefix random of function just searched with 'Dynamic Prefix' Vendor Code format YYYY in 'Document Prefix' list
    And I see creator of function just searched in 'Document Prefix' list is "AUTO ENTITY ADMIN"

    # 'RFQ Pricing' Document Prefix
    When I click to text "Function"
    And I input "RFQ Pricing" to 'Filter Function' in 'Document Prefix' list
    Then I see function just searched in 'Document Prefix' list is "RFQ Pricing" 

    When I double click to function "RFQ Pricing" in 'Document Prefix' list
    And Wait for "3" seconds
    Then I see 'Document Prefix Details' page
    And I see function in 'Function' textbox at 'Document Prefix Details' page is "RFQ Pricing"
    Then I see 'Pre-fix Status' dropdown is disabled at 'Document Prefix Details' page
    And I see 'Default Document Number' dropdown is disabled at 'Document Prefix Details' page

    When I click to "Edit" button format_3
    Then I see "Save" button format_1 is displayed

    When I select "Configure" from 'Pre-fix Status' dropdown at 'Document Prefix Details' page
    And I clear value in 'Prefix' textbox at 'Document Prefix Details' page 
    And I click to "Save" button format_1
    Then I see a message "Validation error, please check your input." appears

    When I click to "OK" button format_2
    Then I see a validation text of 'Prefix' at 'Document Prefix Details' page appears "Please Fill In Prefix" 

    When I input "123" to 'Prefix' textbox at 'Document Prefix Details' page
    And I force click Setup "1" is "Project Code" from 'Dynamic Prefix' at 'Document Prefix Details' page
    And I force click Setup "2" is "YY" from 'Dynamic Prefix' at 'Document Prefix Details' page
    And I select "2" from 'Digits' dropdown at 'Document Prefix Details' page
    And I input "456" to 'Start Number Format' textbox at 'Document Prefix Details' page
    And I click to "Save" button format_1
    Then I see a message "Update is successful" appears

    When I click to "I Understand" button format_1
    And I click to "Back" button format_1
    Then I see 'List of Document Prefix' page

    When I click to text "Function"
    And I input "RFQ Pricing" to 'Filter Function' in 'Document Prefix' list
    Then I see function just searched in 'Document Prefix' list is "RFQ Pricing"
    And I see type of function just searched in 'Document Prefix' list is "Configure"
    And I see prefix random of function just searched with 'Dynamic Prefix' Project Code format YY in 'Document Prefix' list
    And I see creator of function just searched in 'Document Prefix' list is "AUTO ENTITY ADMIN"
    
    # 'Purchase Order' Document Prefix
    When I click to text "Function"
    And I input "Purchase Order" to 'Filter Function' in 'Document Prefix' list
    Then I see function just searched in 'Document Prefix' list is "Purchase Order" 
    
    When I double click to function "Purchase Order" in 'Document Prefix' list
    And Wait for "2" seconds
    Then I see 'Document Prefix Details' page
    And I see function in 'Function' textbox at 'Document Prefix Details' page is "Purchase Order"
    And I see 'Pre-fix Status' dropdown is disabled at 'Document Prefix Details' page
    And I see 'Default Document Number' dropdown is disabled at 'Document Prefix Details' page
    
    When I click to "Edit" button format_3
    Then I see "Save" button format_1 is displayed

    When I select "Configure" from 'Pre-fix Status' dropdown at 'Document Prefix Details' page
    And I clear value in 'Prefix' textbox at 'Document Prefix Details' page 
    And I click to "Save" button format_1
    Then I see a message "Validation error, please check your input." appears

    When I click to "OK" button format_2
    Then I see a validation text of 'Prefix' at 'Document Prefix Details' page appears "Please Fill In Prefix" 

    When I input "123" to 'Prefix' textbox at 'Document Prefix Details' page
    And I force click Setup "1" is "Project Code" from 'Dynamic Prefix' at 'Document Prefix Details' page
    And I force click Setup "2" is "YYMM" from 'Dynamic Prefix' at 'Document Prefix Details' page
    And I select "2" from 'Digits' dropdown at 'Document Prefix Details' page
    And I input "456" to 'Start Number Format' textbox at 'Document Prefix Details' page
    And I click to "Save" button format_1
    Then I see a message "Update is successful" appears

    When I click to "I Understand" button format_1
    And I click to "Back" button format_1
    Then I see 'List of Document Prefix' page

    When I click to text "Function"
    And I input "Purchase Order" to 'Filter Function' in 'Document Prefix' list
    Then I see function just searched in 'Document Prefix' list is "Purchase Order" 
    And I see type of function just searched in 'Document Prefix' list is "Configure"
    And I see prefix random of function just searched with 'Dynamic Prefix' Project Code format YYMM in 'Document Prefix' list
    And I see creator of function just searched in 'Document Prefix' list is "AUTO ENTITY ADMIN"

Scenario: Update 'Credit Note' and 'Invoice' Document Prefix
    # 'Credit Note' Document Prefix
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin stag"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "System Configuration" link on header menu
    And I click to "General Setting" link on the left menu
    And I click to "Manage Document Prefix" link on the left sub menu
    Then I see 'List of Document Prefix' page

    When I click to text "Function"
    And I input "Credit Note" to 'Filter Function' in 'Document Prefix' list
    Then I see function just searched in 'Document Prefix' list is "Credit Note" 

    When I double click to function "Credit Note" in 'Document Prefix' list
    And Wait for "2" seconds
    Then I see 'Document Prefix Details' page
    And I see function in 'Function' textbox at 'Document Prefix Details' page is "Credit Note"
    And I see 'Pre-fix Status' dropdown is disabled at 'Document Prefix Details' page
    And I see 'Default Document Number' dropdown is disabled at 'Document Prefix Details' page
    
    When I click to "Edit" button format_3
    Then I see "Save" button format_1 is displayed

    When I select "Configure" from 'Pre-fix Status' dropdown at 'Document Prefix Details' page
    And I clear value in 'Prefix' textbox at 'Document Prefix Details' page 
    And I click to "Save" button format_1
    Then I see a message "Validation error, please check your input." appears

    When I click to "OK" button format_2
    Then I see a validation text of 'Prefix' at 'Document Prefix Details' page appears "Please Fill In Prefix" 

    When I input "123" to 'Prefix' textbox at 'Document Prefix Details' page
    And I force click Setup "1" is "Vendor Code" from 'Dynamic Prefix' at 'Document Prefix Details' page
    And I force click Setup "2" is "MMYY" from 'Dynamic Prefix' at 'Document Prefix Details' page
    And I select "2" from 'Digits' dropdown at 'Document Prefix Details' page
    And I input "456" to 'Start Number Format' textbox at 'Document Prefix Details' page
    And I click to "Save" button format_1
    Then I see a message "Update is successful" appears

    When I click to "I Understand" button format_1
    And I click to "Back" button format_1
    Then I see 'List of Document Prefix' page

    When I click to text "Function"
    And I input "Credit Note" to 'Filter Function' in 'Document Prefix' list
    Then I see function just searched in 'Document Prefix' list is "Credit Note"
    And I see type of function just searched in 'Document Prefix' list is "Configure"
    And I see prefix random of function just searched with 'Dynamic Prefix' Vendor Code format MMYY in 'Document Prefix' list
    And I see creator of function just searched in 'Document Prefix' list is "AUTO ENTITY ADMIN"

    # 'Invoice' Document Prefix
    When I click to text "Function"
    And I input "Invoice" to 'Filter Function' in 'Document Prefix' list
    Then I see function just searched in 'Document Prefix' list is "Invoice"

    When I double click to function "Invoice" in 'Document Prefix' list
    And Wait for "2" seconds
    Then I see 'Document Prefix Details' page
    And I see function in 'Function' textbox at 'Document Prefix Details' page is "Invoice"
    And I see 'Pre-fix Status' dropdown is disabled at 'Document Prefix Details' page
    And I see 'Default Document Number' dropdown is disabled at 'Document Prefix Details' page
    
    When I click to "Edit" button format_3
    Then I see "Save" button format_1 is displayed

    When I select "Configure" from 'Pre-fix Status' dropdown at 'Document Prefix Details' page
    And I clear value in 'Prefix' textbox at 'Document Prefix Details' page 
    And I click to "Save" button format_1
    Then I see a message "Validation error, please check your input." appears

    When I click to "OK" button format_2
    Then I see a validation text of 'Prefix' at 'Document Prefix Details' page appears "Please Fill In Prefix" 

    When I input "123" to 'Prefix' textbox at 'Document Prefix Details' page
    And I force click Setup "1" is "Project Code" from 'Dynamic Prefix' at 'Document Prefix Details' page
    And I force click Setup "2" is "None" from 'Dynamic Prefix' at 'Document Prefix Details' page
    And I select "2" from 'Digits' dropdown at 'Document Prefix Details' page
    And I input "456" to 'Start Number Format' textbox at 'Document Prefix Details' page
    And I click to "Save" button format_1
    Then I see a message "Update is successful" appears

    When I click to "I Understand" button format_1
    And I click to "Back" button format_1
    Then I see 'List of Document Prefix' page

    When I click to text "Function"
    And I input "Invoice" to 'Filter Function' in 'Document Prefix' list
    Then I see function just searched in 'Document Prefix' list is "Invoice"
    And I see type of function just searched in 'Document Prefix' list is "Configure"
    And I see prefix random of function just searched with 'Dynamic Prefix' Project Code format None in 'Document Prefix' list
    And I see creator of function just searched in 'Document Prefix' list is "AUTO ENTITY ADMIN"