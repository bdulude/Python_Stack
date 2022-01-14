from classes.player import Player
from classes.dealer import Dealer


def play():
    player1 = Player()
    dealer = Dealer()

    while (dealer.bust == False and player1.bust == False and player1.stop == False):
        if player1.value < 17:
            player1.draw()
            if player1.value >= 17:
                player1.stop = True
        elif player1.value <= 21:
            player1.stop = True
        if player1.bust == True:
            print("Dealer Wins")
            # player1.stop = True
            break
        if player1.stop == True and dealer.value > player1.value:
            print("Dealer Wins")
            break
        while (dealer.value <= player1.value and dealer.bust == False):
            dealer.draw()
            if dealer.value == 21 and player1.value == 21:
                print("Tie")
                break
            if dealer.value == 21 and player1.stop == True:
                print("Dealer Wins")
                break
            if dealer.value > player1.value and dealer.bust == False and player1.stop == True:
                print("Dealer Wins")
                break
            if dealer.bust == True:
                print(player1.name + " Wins!")
                break
            if player1.stop == True and dealer.bust == False and player1.value < dealer.value:
                print("Dealer Wins")
                break
    
play()