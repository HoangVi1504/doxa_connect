@rfq @p2p
Feature: 0120 Route a request to go through RFQ

Scenario: P2P-RFQ-S06-001 Route a PPR that had been converted to a PR to go through RFQ
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And Call API Raise PPR random
    And I logout account
    And I login with role "approver 1"
    And Call API approver PPR random
    And I logout account
    And I login with role "creator"
    And Call API convert PPR to PR

    When I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Requisitions" link on the left menu
    And I click to "PRs List" link on the left sub menu
    Then I see 'PR List' page title

    When I input PPR title random to 'Search PR' textbox
    Then I see PR status in PR list is "PENDING SUBMISSION"

    When Get PR number in PR list
    And Get PPR number in 'PR' list
    And I double click to PR title just created in PR list
    And Wait for "6" seconds
    Then I see 'PR detail' page title

    When I check "Yes" radio button to choose 'Do you want to go for RFQ Process' option at 'PR Detail' page
    And Wait for "3" seconds
    Then I see 'Raise RFQ' page title
    And I see PPR No in 'Pre-Purchase Request No' textbox at 'RFQ' page

    When I input RFQ title random to 'RFQ Title' textbox at 'Raise RFQ' page
    And I select "TEST SUPPLIER 34 (TEST_SUPPLIER_34)" from 'Vendor' dropdown at 'Raise RFQ' page
    Then I see "TEST SUPPLIER 34" in 'Vendor Information' at 'Raise RFQ' page

    When I select "One-off quotation" from 'RFQ Type' dropdown at 'Raise RFQ' page
    And I input due date as next "2" days to 'Due Date' textbox at 'Raise RFQ' page
    And I select "address auto" from 'Delivery Address' dropdown at 'Raise RFQ' page
    And I input delivery date as next "5" days to 'Delivery Date' textbox at 'Raise RFQ' page
    #bugId: https://doxa-connex.atlassian.net/browse/D0R-6177
    # And I click to "Back" button format_1
    # Then I see a message "" appears

    # And I click to "Yes" button
    And I click to "Send to Vendors" button format_1
    Then I see a message "RFQ successfully submitted" appears

    When I click to "I Understand" button format_1
    Then I see 'RFQ List' page title

    When I input random RFQ title to 'Search RFQ' textbox in 'RFQ' list
    And I get RFQ number in list
    Then I see RFQ status in RFQ list is "PENDING QUOTATION"

    When I click to "PRs List" link on the left sub menu
    Then I see 'PR List' page title

    When I input PPR title random to 'Search PR' textbox
    Then I see PR status in PR list is "CONVERTED TO RFQ"
    And I see RFQ No just created at the first row in PR list

    When I visit 'RFQ Detail' page by hyperlink RFQ No in PR list
    And Wait for "5" seconds
    Then I see 'RFQ Detail' page title
    And I see RFQ number just created in 'RFQ No' textbox at 'RFQ Detail' page
    And I see PPR No in 'Pre-Purchase Request No' textbox at 'RFQ' page