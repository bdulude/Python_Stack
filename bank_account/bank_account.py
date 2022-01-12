class BankAccount:
    def __init__(self, int_rate = .004, balance = 0): 
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount = 0):
        self.balance = self.balance + amount
        return self

    def withdraw(self, amount):
        self.balance = self.balance - amount
        return self

    def display_account_info(self):
        print("Balance: " + str(self.balance))
        return self

    def yield_interest(self):
        if self.balance > 0:
            self.balance = self.balance + self.balance * self.int_rate
        return self


account1 = BankAccount(.0005, 4000)
account2 = BankAccount(.0007, 6000)

account1.deposit(300).deposit(400).deposit(500).withdraw(200).display_account_info()
account2.deposit(700).deposit(800).withdraw(200).withdraw(400).withdraw(100).withdraw(500).yield_interest().display_account_info()