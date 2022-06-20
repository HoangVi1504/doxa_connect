@gr
Feature: 0052 Creator create GR from PO save as draft then approver approval GR

Scenario: 01 Creator create GR from PO with partial PO quantity
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And Call API Raise PR random
    And I logout account
    And I login with role "approver 1"
    And Call API approver PR random
    And I logout account
    And I login with role "creator"
    And Call API convert PR to PO
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Orders" link on header menu
    And I click to "Orders List" link on the left menu
    And I click to "POs List" link on the left sub menu
    And I input PO No to filter PO in list
    Then I see see PO status in list is "PENDING ISSUE"
    And I see Supplier Ack status is "NOT VIEWED"

    When Get PO number in list
    And I double click to PO No in list
    Then I see 'PO Detail' page

    When I click to "Issue" button format_1
    Then I see a message "PO has been issued to supplier" appears 

    When I click to "I Understand" button format_1
    And I click to "Receipts" link on header menu
    And I click to "Create Receipt from PO" link on the left menu
    And I input PO No in to filter 'PO No' in list
    And I click to PO No checkbox
    And I click to "Create Goods Receipt" button format_2
    Then I see Create GR from PO page

    When I input DO No to DO textbox at Create GR page
    And I input delivery date as next "2" days to 'Delivery Date' textbox at Create GR page
    And I select approval route "auto approval Goods Receipt" from Approval Route dropdown at Create GR page
    And I input "500" to 'Quantity Receiving' textbox at table
    And I click to "Create" button format_1
    Then I see a message "Goods receipt successfully submitted for" appears

    When I click to "I Understand" button format_1
    And I input DO No to filter DO in list
    Then I see GR status in GR list is "PENDING APPROVAL"
    And I sess approval route "auto approval Goods Receipt" in list

    When Get GR number in list

Scenario: 02 Approver approval GR after creator create GR from PO with partial PO quantity
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

Scenario: 03 Creator save as draft GR from PO then submit GR in Pending Submission status
    Given Navigate to Doxa Connect 2.0 site
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Receipts" link on header menu
    And I click to "Create Receipt from PO" link on the left menu
    And I input PO No in to filter 'PO No' in list
    Then I see PO status in list is "PARTIALLY DELIVERED"
    
    When I click to PO No checkbox
    And I click to "Create Goods Receipt" button format_2
    Then I see Create GR from PO page

    When I input DO No to DO textbox at Create GR page
    And I input delivery date as next "2" days to 'Delivery Date' textbox at Create GR page
    And I select approval route "auto approval Goods Receipt" from Approval Route dropdown at Create GR page
    And I input "250" to 'Quantity Receiving' textbox at table
    And I click to "Save As Draft" button format_1
    Then I see a message "Goods receipt successfully saved" appears
    
    When I click to "I Understand" button format_1
    And I input DO No to filter DO in list
    Then I see GR status in GR list is "PENDING SUBMISSION"
    And I sess approval route "auto approval Goods Receipt" in list

    When Get GR number in list
    And I double click to GR No in list
    Then I see GR detail page
    And I see GR No at GR detail page

    When I click to "Submit" button format_1
    Then I see a message "Goods receipt successfully submitted" appears

    When I input GR No to filter GR in list
    Then I see GR status in GR list is "PENDING APPROVAL"

Scenario: 04 Approver approval GR then creator close PO
    # Approver approval GR
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

    # Creator close PO in PARTIALLY DELIVERED status
    When I logout account
    And I login with role "creator"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Orders" link on header menu
    And I click to "Orders List" link on the left menu
    And I click to "POs List" link on the left sub menu
    And I input PO No to filter PO in list
    Then I see PO status in PO list is "PARTIALLY DELIVERED"

    When I double click to PO No in list
    Then I see 'PO Detail' page

    When I click to "Mark Completed" button format_1
    And I input reason close PO at PO detail page
    And I click to mark completed button at PO detail page
    Then I see a message "PO was closed successfully" appears

    When I click to "I Understand" button format_1
    And I input PO No to filter PO in list
    Then I see PO status in PO list is "CLOSED"