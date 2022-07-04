Feature: 0003 Create data when switch new environment

Scenario: Create data when switch new environment
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "buyer"
    And Call Api create UOM with uom code "IN", uom name "INCHES"
    And Call Api create UOM with uom code "CEN", uom name "CENTIMETER"
    And Call Api create Category with category name "AUTO EQUIPMENT", category description "auto equipment"
    And Call Api create company address with address label "address auto"