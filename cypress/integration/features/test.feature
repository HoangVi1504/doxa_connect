Feature: Test create data

Scenario: Test create data
    Given Navigate to Doxa Connect 2.0 site
    ### Test 1
    # When I login with role "doxa admin stag"
    # And Call Api create random supplier on environment "stag"
    # And Call Api create random buyer on environment "stag"

    # And I login with role "supplier 1"
    # And Call Api get data after login
    # And I logout account
    # And I login with role "creator"
    # And Call API create GR from DO number "DO100000017"
    # And I click to 'Dashboard' link on Header menu if it not be selected
    # And I click to "Receipts" link on header menu
    # And I click to "Receipts List" link on the left menu

    # When Get GR number in list
    # And I logout account
    # And I login with role "approver 1"
    # And Call API approval GR

    #### Test 2
    When I login with role "creator"
    # And Call Api get data in catalogue list "auto item code 1"
    # And Call Api get data in manage address list "address auto"
    And Call API Raise PPR random