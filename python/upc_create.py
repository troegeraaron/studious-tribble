from random import randint

def get_upc():
    upc = ''
    for x in range(0,12):
        rand_num = randint(0,9)
        upc = upc + str(rand_num)
    return upc

print(get_upc())
