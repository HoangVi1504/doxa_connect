@po
Feature: 0043 creator cancel PO in Pending Issue status and connected supplier reject PO

Scenario: 01 Creator cancel PO in Pending Issue status
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And Call API Raise PR random
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Requisitions" link on the left menu
    And I click to "PRs List" link on the left sub menu
    And I input PR title random to 'Search PR' textbox
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
    And I input PR No to filter PR in list
    Then I see PR status in PR list is "PENDING CONVERSION TO PO"

    When I double click to PR No in 'PR To Be Converted' list
    And Wait for "6" seconds
    Then I see 'PR Convert Detail' page
    And I see PR No in 'PR No' textbox at 'PR Convert Detail' page
    
    When I click to "Convert to PO" button format_1
    Then I see a message "Converted to PO successfully" appears

    When I click to "I Understand" button format_1
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Orders" link on header menu
    And I click to "Orders List" link on the left menu
    And I click to "POs List" link on the left sub menu
    And I input PR No to filter PR in list
    Then I see PO status in list is "PENDING ISSUE"
    And I see Supplier Ack status is "NOT VIEWED"

    When Get PO number in list
    And I double click to PO No in PO list
    And Wait for "6" seconds
    Then I see 'PO Detail' page
    And I see PO No in 'PO No' textbox at 'PO Detail' page

    When I click to "Cancel" button format_1
    Then I see notification PO "Do you wish to cancel this order?" display at 'PO Detail' page

    When I click to "Yes" button format_1
    Then I see a message "The purchase order has successfully been cancelled" appears

    When I click to "I Understand" button format_1
    And I input PO No to filter PO in list
    Then I see PO status in list is "CANCELLED"

Scenario: 02 Connected supplier reject PO
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "creator"
    And Call API Raise PR random
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Requisitions" link on header menu
    And I click to "Requisitions" link on the left menu
    And I click to "PRs List" link on the left sub menu
    And I input PR title random to 'Search PR' textbox
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
    And I input PR No to filter PR in list
    Then I see PR status in PR list is "PENDING CONVERSION TO PO"

    When I double click to PR No in 'PR To Be Converted' list
    And Wait for "6" seconds
    Then I see 'PR Convert Detail' page
    And I see PR No in 'PR No' textbox at 'PR Convert Detail' page
    
    When I click to "Convert to PO" button format_1
    Then I see a message "Converted to PO successfully" appears

    When I click to "I Understand" button format_1
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Orders" link on header menu
    And I click to "Orders List" link on the left menu
    And I click to "POs List" link on the left sub menu
    And I input PR No to filter PR in list
    Then I see PO status in list is "PENDING ISSUE"
    And I see Supplier Ack status is "NOT VIEWED"

    When Get PO number in list
    And I double click to PO No in PO list
    And Wait for "6" seconds
    Then I see 'PO Detail' page
    And I see PO No in 'PO No' textbox at 'PO Detail' page

    When I select approval route "auto approval PO" at 'PO detail' page
    And I click to "Issue" button format_1
    Then I see a message "PO has been issued to supplier" appears

    When I click to "I Understand" button format_1
    And I input PO No to filter PO in list
    Then I see PO status in list is "ISSUED"
    And I see Supplier Ack status is "NOT VIEWED"

    When I logout account
    And I login with role "supplier 1"
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Orders" link on header menu
    And I click to "Orders List" link on the left menu
    And I click to "POs List" link on the left sub menu
    And I input PO No to filter PO in list
    Then I see PO status in list is "ISSUED"
    And I see Supplier Ack status is "NOT VIEWED"

    When I double click to PO No in PO list
    And Wait for "6" seconds
    Then I see 'PO Detail' page
    And I see PO No in 'PO No' textbox at 'PO Detail' page

    When I click to "Reject" button format_2
    And I input reason reject PO at 'PO Detail' page is "auto reject this PO"
    And I click to Reject button at 'PO Detail' page
    Then I see a message "The purchase order has successfully been rejected" appears

    When I click to "I Understand" button format_1
    And I input PO No to filter PO in list
    Then I see PO status in list is "REJECTED"