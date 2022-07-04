Feature: Test create data

Scenario: Test create data
    Given Navigate to Doxa Connect 2.0 site
    ### Test 1
    # When I login with role "doxa admin stag"
    # And Call Api create random supplier
    # And Call Api create random buyer

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
    # When I login with role "creator"
    # And Call Api get data in catalogue list have catalogue item code is "auto item code 1"
    # And Call Api get data in manage address list with environmetn "dev" and have address label "address auto"
    # And Call API Save draft PR random
    # And Call API Raise PPR random
    # And Call API Raise PR random

    # #### Test 3
    # When I login with role "buyer"
    # And Call Api get data after login
    # And Write data to 'dataBuyer.json' file

    #### Test 4
    When I login with role "supplier 1"
    And Call Api get data after login
    And Write data to 'dataSupplier.json' file

    #### Test 5
    # When I login with role "buyer"
    # And Call Api create random UOM
    # And Call Api create random Category
    # And Call Api create random company address