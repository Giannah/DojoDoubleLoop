Feature: Price calculator

    Scenario: Selling a particular item in Texas
        Given this order
            | price | numberOfItems | state |
            | 1000  | 1             | TX    |
        When the total price is calculated
        Then the total price is 1062.5 

     Scenario: Selling 2 items in Texas
        Given this order
            | price | numberOfItems | state |
            | 1000  | 2             | TX    |
        When the total price is calculated
        Then the total price is 2125.0 

