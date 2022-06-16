@gr
Feature: 0051 Creator create GR from PO with full PO quantity then approver approval GR

Scenario: 01 Creator create GR from PO with full PO quantity
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And Call API Raise PR random
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Requisitions" link on the left menu
    And I click to "PRs List" link on the left sub menu
    And I input PR random to 'Search PR' textbox
    Then I see PR status in PR list is "PENDING APPROVAL"

    When Get PR number in PR list
    And I logout account
    And I login with role "approver 1"
    And Call API approver PR random
    And I logout account
    And I login with role "creator"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Orders" link on header menu
    And I click to "Requests Pending Conversion" link on the left menu
    And I click to "PRs To Be Converted" link on the left sub menu
    And I input PR number to filter 'PR No' in list
    Then I see PR status in PR list is "PENDING CONVERSION TO PO"

    When I double click to PR No in list
    Then I see PR to convert detail page 
    
    When I click to "Convert to PO" button format_1
    Then I see a message "Converted to PO successfully" appears

    When I click to "I Understand" button format_1
    And I click to "Back" button format_1
    And I click to "Orders List" link on the left menu
    And I click to "POs List" link on the left sub menu
    And I input PR number to filter 'PR No' in list
    Then I see PO status in list is "PENDING ISSUE"
    And I see Supplier Ack status is "NOT VIEWED"

    When Get PO number in list
    And I double click to PO No in list
    Then I see PO detail page

    When I click to "Issue" button format_1
    Then I see a message "PO has been issued to supplier" appears

    When I click to "Receipts" link on header menu
    And I click to "Create Receipt from PO" link on the left menu
    And I input PO No in to filter 'PO No' in list
    And I click to PO No checkbox
    And I click to "Create Goods Receipt" button format_2
    Then I see Create GR from PO page

    # Create GR from PO without input
    When I click to "Create" button format_1
    Then I see a message "Validation error, please check your input." appears

    When I click to "OK" button format_2
    Then I see a validation text of 'Delivery Order No' at Creator GR page "Please enter valid Delivery Order No." appears
    And I see a validation text of 'Delivery Date' at Creator GR page "Please select valid Delivery Date" appears
    And I see a validation text of 'Approval Route' at Creator GR page "Please select valid approval route" appears

    # Create GR from PO with receiving quantity more than remaining quantity
    When I input DO No to DO textbox at Create GR page
    And I input delivery date as next "2" days to 'Delivery Date' textbox at Create GR page
    And I select approval route "auto approval Goods Receipt" from Approval Route dropdown at Create GR page
    And I input "1200" to 'Quantity Receiving' textbox at table
    And I click to "Create" button format_1
    Then I see a message "Quantity receiving is more than remaining quantity to be received" appears
    
    When I click to "OK" button format_2
    And I input "1000" to 'Quantity Receiving' textbox at table
    And I click to "Create" button format_1
    Then I see a message "Goods receipt successfully submitted for" appears

    When I click to "I Understand" button format_1
    And I input DO No to filter DO in list
    Then I see GR status in GR list is "PENDING APPROVAL"
    And I sess approval route "auto approval Goods Receipt" in list

    When Get GR number in list

Scenario: 02 Approver approval GR
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "approver 1"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Receipts" link on header menu
    And I click to "Receipts List" link on the left menu
    And I input GR No to filter GR in list
    Then I see GR status in GR list is "PENDING APPROVAL"

    When I double click to GR No in list
    Then I see GR detail page
    And I see GR No at GR detail page

    When I click to "Approve" button format_2
    Then I see a message "Goods receipt successfully approved" appears

    When I click to "I Understand" button format_1
    And I input GR No to filter GR in list
    Then I see GR status in GR list is "COMPLETED"