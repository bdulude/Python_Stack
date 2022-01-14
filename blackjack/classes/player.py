import random
# define a dictionary contains deck and their value
deck={"A":11,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,"J":10,"Q":10,"K":10}

# print((random.choice(list(deck.values()))))
# print((random.choice(list(deck.items()))))


# create a class for player
class Player:
    def __init__(self, name = "Player"):
        self.name = name
        self.cards=[]
        self.value=0
        self.ace = False
        self.bust = False
        self.stop = False
        self.draw().draw()

    # create fuction to draw cards 
    def draw(self):
        card = random.choice(list(deck.items()))
        print(self.name + " Drew " + card[0])
        if (card[0] == "A"):
            pass
            # todo
        self.cards.append(card)
        
        self.value += card[1]
        if self.value > 21:
            self.bust = True
        print(self.name + " has " + str(self.value))
        print("")
        return self


# test = Player()
# print(test.cards)
# print(test.value)
# test.draw
# print(len(test.cards))
