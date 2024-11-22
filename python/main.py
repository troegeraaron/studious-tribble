# Python fun stuff

# unittest practice and fun python OOP!
import unittest
from calculations import Calculator

calc = Calculator()

class TestCalcs(unittest.TestCase):
    def test_sum(self):
        calculation = Calculator()
        self.assertEqual(calculation.add(8, 2), 10, 'The sum is wrong')
    def test_dived(self):
        divide = Calculator()
        self.assertEqual(divide.divide(1, 2), 1, 'Bad division')

if __name__ == '__main__':
    unittest.main()