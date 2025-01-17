@ppr @p2p
Feature: 0121 Raise PPR with Non-project, add manual item and 1 approver

Scenario: P2P-PPR-S01-001 P2P-PPR-S11-001 Raise PPR with Non-project, add manual item and 1 approver
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to "Requisitions" link on header menu
    And I click to "Pre Purchase Requisition" link on the left menu
    And I click to "Raise Pre-Requisition" link on the left sub menu
    Then I see 'Raise Pre Requisition' page title

    When I expand layout sidebar menu if it open
    And I fill data in Raise Requisition tab from "ppr_v1" json file at Raise PPR page
    And I fill data in General Information tab from "ppr_v1" json file at Raise PPR page
    And I fill data in Request Terms tab from "ppr_v1" json file at Raise PPR page
    And I select 'auto buyer' from 'Delivery Contact Person' dropdown at Raise PPR page
    Then I see email address of contact person at Raise PPR page is "auto.buyer@getnada.com"
    And I see contact number of contact person at Raise PPR page is "987987987"

    When I add manual item from "ppr_v1" json file at Raise PPR page
    And I click to "Submit" button format_2
    Then I see a message "PPR created successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'PPR List' page title

    When I input PPR title from "ppr_v1" json file to 'Search PPR' textbox
    Then I see PPR status in PPR list is "PENDING APPROVAL"
    And I see Requester name in PPR list from "ppr_v1" json file
    And I see Procurement type in PPR list from "ppr_v1" json file
    And I see Approval Route in PPR list from "ppr_v1" json file

Scenario: P2P-PPR-S07-001 Approver approval PPR
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "approver 1"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Pre Purchase Requisition" link on the left menu
    And I click to "Purchase Pre-Requisitions List" link on the left sub menu
    Then I see 'PPR List' page title

    When I input PPR title from "ppr_v1" json file to 'Search PPR' textbox
    And I see PPR status in PPR list is "PENDING APPROVAL"
    And I double click to PPR title in PPR list from "ppr_v1" json file
    And Wait for "3" seconds
    Then I see 'PPR detail' page title
    And I see PPR title at PPR detail page from "ppr_v1" json file

    When I click to "Approve" button format_2
    Then I see a message "PPR approved successfully" appears

    When I click to "I Understand" button format_1
    Then I see 'PPR List' page title

    When I input PPR title from "ppr_v1" json file to 'Search PPR' textbox
    Then I see PPR status in PPR list is "PENDING PURCHASER REVIEW"