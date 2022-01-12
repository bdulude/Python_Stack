# make_withdrawal(self, amount) - have this method decrease the user's balance by the amount specified
# display_user_balance(self) - have this method print the user's name and account balance to the terminal
# eg. "User: Guido van Rossum, Balance: $150
# BONUS: transfer_money(self, other_user, amount) - have this method decrease the user's balance by the amount and add that amount to other other_user's balance

class User:
    def __init__(self, name, balance):
        self.name = name
        self.balance = balance
    
    def make_deposit(self, amount):
        self.balance = self.balance + amount
        return self
    
    def make_withdrawal(self, amount):
        self.balance = self.balance - amount
        return self

    def display_user_balance(self):
        print(self.name + ": " + str(self.balance))
        return self

    def transfer_money(self, other_user, amount):
        self.make_withdrawal(amount)
        other_user.make_deposit(amount)
        return self


charles = User("Charles Von Ham", 1234)
dillon = User("Dillon Smith", 2000)
cobie = User("Cobie Colbert", 44444)

charles.make_deposit(1000).make_deposit(500).make_deposit(2000).make_withdrawal(300).display_user_balance()

dillon.make_deposit(400).make_deposit(2000).make_withdrawal(2500).display_user_balance()

cobie.make_deposit(15000).make_withdrawal(5000).make_withdrawal(200).make_withdrawal(1000).display_user_balance()

charles.transfer_money(cobie, 300)
charles.display_user_balance()
cobie.display_user_balance()
