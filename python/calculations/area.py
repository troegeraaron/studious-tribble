class Area():
    def __init__(self, h, w):
        self.height = h
        self.width = w

    def rectangle(self):
        return self.height * self.width
    
    def triangle(self):
        return self.height * self.width * .5