@manage_approval_configuration @entity_admin
Feature: 0264 Entity admin setup Approval Configuration

Scenario: MFM-S001-001 Entity admin able to opt-out approval routing for a particular feature
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "entity admin"
    And I click to 'User Profile' button
    And I click to "Admin" button format_1
    Then I see 'Dashboard' title

    When Wait for "2" seconds
    And I click to 'Dashboard' link on Header menu if it not be selected
    And I click to "Entity Management" link on header menu
    And I click to "Approval Setting" link on the left menu
    # Uncheck checkbox if it is checked
    And I click to "Manage Approval Configuration" link on the left sub menu
    Then I see 'Approval Configuration' page

    When I uncheck the checkbox 'Approval Configuration' page if it is checked
    And Wait for "3" seconds

    # Entity admin uncheck option approval
    When I click to "Manage Approval Matrix" link on the left sub menu
    Then I see 'List of Approval' page

    When I click to "Create New" button format_3
    Then I see 'Create New Approval' page

    When Wait for "2" seconds
    And I click to 'Approval Matrix' dropdown at 'Create New Approval' page
    And I input "Maincon Variation Request" to 'Search Approval Matrix' textbox at 'Create New Approval' page
    Then I see "Maincon Variation Request" in dropdown visible

    # Entity admin check option approval
    When I click to "Manage Approval Configuration" link on the left sub menu
    Then I see 'Approval Configuration' page

    When I check to "Maincon Variation Request" checkbox at 'Approval Configuration' page
    And I click to "Save" button format_1
    Then I see a message "Update is successful" appears

    When I click to "I Understand" button format_1
    Then I see "Maincon Variation Request" checkbox at 'Approval Configuration' page is checked

    When I click to "Manage Approval Matrix" link on the left sub menu
    Then I see 'List of Approval' page

    When I click to "Create New" button format_3
    Then I see 'Create New Approval' page

    When Wait for "2" seconds
    And I click to 'Approval Matrix' dropdown at 'Create New Approval' page
    And I input "Maincon Variation Request" to 'Search Approval Matrix' textbox at 'Create New Approval' page
    Then I do not see "Maincon Variation Request" in dropdown visible