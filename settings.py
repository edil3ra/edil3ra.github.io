import random
import json

"""return a dict of author quote"""
def quote_random():
    l = json.loads(open('data/quotes.json').read())
    d = random.choice(l)
    return d
