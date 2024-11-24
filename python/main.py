# Python fun stuff

# unittest practice and fun python OOP!

# I am too tired to do any meaningful change. Here is a comment.

import unittest
from calculations import Calculator
from calculations.area import Area

calc = Calculator(2, 8)

class TestCalcs(unittest.TestCase):
    def test_calc(self):
        calculation = Calculator(2, 1)
        self.assertEqual(calculation.divide(), 2, 'Calculation is wrong')

class TestArea(unittest.TestCase):
    def test_area(self):
        # Test passes
        triangle_area = Area(10, 2)
        self.assertEqual(triangle_area.triangle(), 10, 'Wrong calc')
        
        # TODO - how to loop tests.
            


if __name__ == '__main__':
    unittest.main()