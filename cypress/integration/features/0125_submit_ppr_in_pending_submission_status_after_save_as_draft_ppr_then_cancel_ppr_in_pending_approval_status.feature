@ppr @p2p
Feature: 0125 Submit PPR in Pending submission status after save as draft PPR then cancel PPR in Pending Approval status

Scenario: P2P-PPR-S03-001-002-003 Save as draft PPR
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to "Requisitions" link on header menu
    And I click to "Pre Purchase Requisition" link on the left menu
    And I click to "Raise Pre-Requisition" link on the left sub menu
    Then I see 'Raise Pre Requisition' page title

    When I expand layout sidebar menu if it open
    And I click to "Submit" button format_2
    Then I see a message "Validation error, please check your input." appears

    # Raise PPR with no input => check validation text
    When I click to "OK" button format_2
    And I click to PPR title textbox at Raise PPR page
    Then I see a validation text of 'Requisition Type' at 'Raise PPR' page "Please select valid Type of Requisition" appears
    And I see a validation text of 'PPR title' at 'Raise PPR' page "Please enter valid PPR Title" appears
    And I see a validation text of 'Procurement Type' at 'Raise PPR' page "Please select valid Procurement Type" appears
    And I see a validation text of 'Approval Route' at 'Raise PPR' page "Please select valid approval route" appears
    And I see a validation text of 'Currency Code' at 'Raise PPR' page "Please select valid Currency" appears
    And I see a validation text of 'Delivery Date' at 'Raise PPR' page "Please select valid Delivery Date" appears
    And I see a validation text of 'Delivery Contact Person' at 'Raise PPR' page "Please Select Valid Delivery Contact Person" appears
    And I see a validation text of 'Contact Number' at 'Raise PPR' page "Please enter valid Contact Number" appears
    # And I see a validation text of 'Delivery Address' at 'Raise PPR' page "Please select valid Delivery Address" appears

    When I fill data in Raise Requisition tab from "ppr_v5" json file at Raise PPR page
    And I fill data in General Information tab from "ppr_v5" json file at Raise PPR page
    And I fill data in Request Terms tab from "ppr_v5" json file at Raise PPR page
    # Raise PPR with no input when adding manual items => check error message
    And I select 'auto buyer' from 'Delivery Contact Person' dropdown at Raise PPR page
    Then I see email address of contact person at Raise PPR page is "auto.buyer@getnada.com"
    And I see contact number of contact person at Raise PPR page is "987987987"

    When I click to "Add Manual" button format_2
    Then I see Item delete button at Raise PPR page

    When I click to "Submit" button format_2
    Then I see a message "Quantity must be greater than 0." appears

    When I click to "OK" button format_2
    And I click to Item delete button at Raise PPR page
    And I add catalogue item from "ppr_v5" json file at Raise PPR page
    # Save as draft PPR => PENDING SUBMISSION status
    And I click to "Save As Draft" button format_2
    Then I see a message "PPR saved draft successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'PPR List' page title

    When I input PPR title from "ppr_v5" json file to 'Search PPR' textbox
    Then I see PPR status in PPR list is "PENDING SUBMISSION"
    And I see Requester name in PPR list from "ppr_v5" json file
    And I see Procurement type in PPR list from "ppr_v5" json file
    And I see Approval Route in PPR list from "ppr_v5" json file

Scenario: P2P-PPR-S06-001 Submit PPR in Pending Submission status after save as draft PPR
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Pre Purchase Requisition" link on the left menu
    And I click to "Purchase Pre-Requisitions List" link on the left sub menu
    Then I see 'PPR List' page title

    When I input PPR title from "ppr_v5" json file to 'Search PPR' textbox
    Then I see PPR status in PPR list is "PENDING SUBMISSION"

    When I double click to PPR title in PPR list from "ppr_v5" json file
    And Wait for "3" seconds
    Then I see 'PPR detail' page title
    And I see PPR title at PPR detail page from "ppr_v5" json file
    And I see Project code with status "PENDING SUBMISSION" at PPR detail page from "ppr_v5" json file
    
    When I click to "Submit" button format_2
    Then I see a message "PPR created successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'PPR List' page title

    When I input PPR title from "ppr_v5" json file to 'Search PPR' textbox
    Then I see PPR status in PPR list is "PENDING APPROVAL"

Scenario: P2P-PPR-S04-001 Cancel PPR in Pending Approval status after Submit PPR in Pending Submission status
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Pre Purchase Requisition" link on the left menu
    And I click to "Purchase Pre-Requisitions List" link on the left sub menu
    Then I see 'PPR List' page title

    When I input PPR title from "ppr_v5" json file to 'Search PPR' textbox
    Then I see PPR status in PPR list is "PENDING APPROVAL"

    When I double click to PPR title in PPR list from "ppr_v5" json file
    And Wait for "3" seconds
    Then I see 'PPR detail' page title
    And I see PPR title at PPR detail page from "ppr_v5" json file
    And I see Project code with status "PENDING APPROVAL" at PPR detail page from "ppr_v5" json file

    When I click to "Cancel" button format_2
    And I input reason cancel PPR "auto cancel this PPR" at Raise PPR page
    And I click to "Cancel" button format_1
    Then I see a message "PPR cancelled successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'PPR List' page title

    When I input PPR title from "ppr_v5" json file to 'Search PPR' textbox
    Then I see PPR status in PPR list is "CANCELLED"