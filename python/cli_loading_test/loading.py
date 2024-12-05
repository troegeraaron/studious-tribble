import time

# simulates a load screen
def load_item(seconds):
    print('Loading', end='', flush=True)
    for i in range(seconds):
        print('.', end="", flush=True)
        time.sleep(1)
        
load_item(5)