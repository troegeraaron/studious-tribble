# create my own calculator!

class Calculator():
    # initialize with 2 variables
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def add(self):
        return self.x + self.y
    
    def subtract(self):
        return self.x - self.y
    
    def multiply(self):
        return self.x * self.y
    
    def divide(self):
        if self.y == 0:
            return "Divide by 0 error"
        return self.x / self.y
    