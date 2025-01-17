@po @p2p
Feature: 0142 Connected supplier acknowledge PO then creator close PO in issued status

Scenario: P2P-PO-S01-001 P2P-PO-S03-001 Creator convert PR to PO and issue PO
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And Call API Raise PR random
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Requisitions" link on the left menu
    And I click to "PRs List" link on the left sub menu
    Then I see 'PR List' page title

    When I input PR title random to 'Search PR' textbox
    Then I see PR status in PR list is "PENDING APPROVAL"

    When Get PR number in PR list
    And I logout account
    And I login with role "approver 1"
    And Call API approver PR random
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Requisitions" link on the left menu
    And I click to "PRs List" link on the left sub menu
    Then I see 'PR List' page title

    When I input PR title random to 'Search PR' textbox
    Then I see PR status in PR list is "PENDING CONVERSION TO PO"

    When I logout account
    And I login with role "creator"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Orders" link on header menu
    And I click to "Requests Pending Conversion" link on the left menu
    And I click to "PRs To Be Converted List" link on the left sub menu
    Then I see 'PR To Be Converted List' title

    When I input PR No to filter PR in "PRs To Be Converted" list
    Then I see PR status in PR list is "PENDING CONVERSION TO PO"

    When Call API navigate to Convert PR to PO page
    And Wait for "8" seconds
    Then I see 'PR Convert Detail' page
    And I see PR No in 'PR No' textbox at 'PR Convert Detail' page 
    
    When I click to "Convert to PO" button format_1
    Then I see a message "Converted to PO successfully" appears

    When I click to "I Understand" button format_1
    And I click to "Back" button format_1
    Then I see 'PR To Be Converted List' title

    When I click to "Orders List" link on the left menu
    And I click to "POs List" link on the left sub menu
    Then I see 'PO List' page

    When I input PR No to filter PR in "PO" list
    Then I see PO status in list is "PENDING ISSUE"
    And I see Supplier Ack status is "NOT VIEWED"

    When Get PO number in list
    And I double click to PO No in PO list
    And Wait for "3" seconds
    Then I see 'PO Detail' page
    And "buyer" see PO No in 'PO No' textbox at 'PO Detail' page

    When I select "auto approval PO" from 'Approval Route' dropdown at 'PO Detail' page
    And I click to "Issue" button format_1
    Then I see a message "PO has been issued to supplier" appears

    When I click to "I Understand" button format_1
    Then I see 'PO List' page

    When "buyer" input PO No to filter PO in "PO" list
    Then I see PO status in list is "ISSUED"
    And I see Supplier Ack status is "NOT VIEWED"

Scenario: P2P-PO-S04-001 Pending connection supplier cannot Acknowledge PO and connected supplier acknowledge PO
    # Pending connection supplier only able to view PO without acknoledge PO

    # Connected supplier able to view PO and acknowledge PO
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "supplier 34"
    And "supplier" call API view PO
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Orders" link on header menu
    And I click to "Orders List" link on the left menu
    And I click to "POs List" link on the left sub menu
    Then I see 'PO List' page

    When "supplier" input PO No to filter PO in "PO" list
    Then I see PO status in list is "ISSUED"
    And I see Supplier Ack status is "NOT VIEWED"

    When I double click to PO No in PO list
    And Wait for "3" seconds
    Then I see 'PO Detail' page
    And "supplier" see PO No in 'PO No' textbox at 'PO Detail' page

    When I click to "Acknowledge" button format_1
    Then I see a message "Supplier has successfully acknowledge the purchase order" appears

    When I click to "I Understand" button format_1
    Then I see 'PO List' page

    When "supplier" input PO No to filter PO in "PO" list
    Then I see PO status in list is "ISSUED"
    And I see Supplier Ack status is "ACKNOWLEDGED"

Scenario: P2P-PO-S06-001 Creator close PO in Issued status
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Orders" link on header menu
    And I click to "Orders List" link on the left menu
    And I click to "POs List" link on the left sub menu
    Then I see 'PO List' page

    When "buyer" input PO No to filter PO in "PO" list
    Then I see PO status in list is "ISSUED"
    And I see Supplier Ack status is "ACKNOWLEDGED"

    When I double click to PO No in PO list
    And Wait for "3" seconds
    Then I see 'PO Detail' page
    And "buyer" see PO No in 'PO No' textbox at 'PO Detail' page

    When I click to "Mark Completed" button format_1
    And I input reason close PO at 'PO Detail' page is "auto cancel this PO"
    And I click to Mark Complete button at 'PO Detail' page
    Then I see a message "PO was closed successfully" appears

    When I click to "I Understand" button format_1
    And "buyer" input PO No to filter PO in "PO" list
    Then I see PO status in list is "CLOSED"
    And I see Supplier Ack status is "ACKNOWLEDGED"