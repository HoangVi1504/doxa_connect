Feature: 0001 Get data after role buyer login

Scenario: 01 Get data after role buyer login
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And Call Api get data after "ENTITY_ADMIN" login
    And Write data to 'dataBuyer.json' file

    When I logout account
    And I login with role "entity admin stag"
    And Call Api get data after "ENTITY_ADMIN" login
    And Write data to 'dataEntityAdmin.json' file