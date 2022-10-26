Feature: 0003 Get data after role ap specialist login

Scenario: 01 Get data after role ap specialist login
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "ap specialist"
    And Call Api get data after "ENTITY_USER" login
    And Write data to 'dataApSpecialist.json' file