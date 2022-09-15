Feature: 0003 Create data when switch new environment

# Scenario: Create data when switch new environment
   # Given Navigate to Doxa Connect 2.0 site
   # When I login with role "buyer"
   # And Call Api create "creator" company
   # And Call Api create "approver 1" company
   # And Call Api create "approver 2" company
   # And Call Api create "ap specialist" company
   # And Call Api create AP Specialist Grouping "Auto AP.Specialist"
   # And Call Api create UOM with uom code "IN", uom name "INCHES"
   # And Call Api create UOM with uom code "CEN", uom name "CENTIMETER"
   # And Call Api create Category with category name "AUTO EQUIPMENT", category description "auto equipment"
   # And Call Api create company address with address label "address auto"
   # And Call Api create tax with tax code "11052022"
   # And Call Api create GL account "G/L auto 1"
   # And Call Api create external vendor company name "AUTO SUPPLIER 1"
   # And Call Api create external vendor company name "AUTO COMPANY 1"
   # And Call Api create catalogue with catalogue code "auto item code 1", catalogue name "auto item name 1"
   # And Call Api create project with project code "auto Prj 1" and project title "auto project 1"

# Scenario Outline: Create approval matrix
#    Given Navigate to Doxa Connect 2.0 site
#    When I login with role "buyer"
#    And Call Api create approval matrix of feature "<featureCode>", approval level "<approvalLevel>"
  
# Examples:
#    | featureCode |         | approvalLevel |
#    | Pr |                  |1|
#    | Pr2|                  |2|   
#    | Po |                  |1|
#    | Gr |                  |1|
#    # | Cn |                  |1|
#    # | Rfq |                 |1|   
#    | Ppr |                 |1|
#    | Ppr2|                 |2|   
#    | Inv |                 |1|   
#    # | Mpaym |               |1|
#    # | Hpaym |               |1|