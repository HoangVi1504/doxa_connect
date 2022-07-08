Feature: Create account

Scenario: Create account
    Given Navigate to Doxa Connect 2.0 site
    When I login with role "doxa admin stag"
    And Call Api create buyer on with entity name, "AUTO BUYER", entity reg "REG NO 987", tax reg "Tax Reg No 01", email "auto.buyer@getnada.com", work number "987987987"
    And Call Api create supplier with entity name "AUTO SUPPLIER 1", entity reg "SUPPLIER 1", email "auto.supplier1@getnada.com", name "auto supplier 1", work number "454566556"
    And Call Api create supplier with entity name "AUTO SUPPLIER 2", entity reg "AUTO REG 1", email "auto.supplier2@getnada.com", name "auto supplier 2", work number "676786765"
    ##
    # Vô mail lấy password và change lại password
    ##
    