Feature: 0002 Get data after role supplier login

Scenario: 01 Get data after role supplier login
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "supplier 1"
    And Call Api get data after "ENTITY_ADMIN" login
    And Write data to 'dataSupplier.json' file

    When I logout account
    And I login with role "supplier 34"
    And Call Api get data after "ENTITY_ADMIN" login
    And Write data to 'dataSupplier.json' file

    When I logout account
    And I login with role "supplier 36"
    And Call Api get data after "ENTITY_ADMIN" login
    And Write data to 'dataUnConnectSupplier.json' file