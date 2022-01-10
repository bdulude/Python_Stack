num1 = 42 # Number Declaration
num2 = 2.3 # Number Declaration
boolean = True# Boolean Declaration
string = 'Hello World' # String Declaration
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] # List Initialize
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} # Dictionary Initialize
fruit = ('blueberry', 'strawberry', 'banana') # Tuple Declaration
print(type(fruit)) # Function Call, Function Call
print(pizza_toppings[1]) # Function Call, List Access Value
pizza_toppings.append('Mushrooms') # List add value
print(person['name']) # Function call, Dictionary Access Value
person['name'] = 'George' # Dictionary change value
person['eye_color'] = 'blue' # Dictionary change value
print(fruit[2]) # Function Call, Access Tuple Value

if num1 > 45: # Conditional If
    print("It's greater") # Function Call
else: # Conditional Else
    print("It's lower") # Function Call

if len(string) < 5: # Conditional If
    print("It's a short word!") # Function Call
elif len(string) > 15: # Conditional Else if
    print("It's a long word!") # Function Call
else: # Conditional Else
    print("Just right!") # Function Call

for x in range(5): # For Loop
    print(x) # Function Call
for x in range(2,5): # For Loop
    print(x) # Function Call
for x in range(2,10,3): # For Loop
    print(x) # Function Call
x = 0 # Number Declaration
while(x < 5): # While Loop
    print(x) # Function Call
    x += 1 # Number/While increment

pizza_toppings.pop() # Function Call, Delete Value
pizza_toppings.pop(1) # Function Call, Delete Value

print(person) # Function Call
person.pop('eye_color') # Function Call
print(person) # Function Call

for topping in pizza_toppings:
    if topping == 'Pepperoni': # Conditional If
        continue # For Loop Continue
    print('After 1st if statement') # Function Call
    if topping == 'Olives': # Conditional If
        break # For Loop Break

def print_hello_ten_times(): # Function Delcaration 
    for num in range(10): # For Loop
        print('Hello') # Function Call

print_hello_ten_times() # Function Call

def print_hello_x_times(x): # Function Delcaration 
    for num in range(x): # For Loop
        print('Hello') # Function Call

print_hello_x_times(4) # Function Call

def print_hello_x_or_ten_times(x = 10): # Function Delcaration 
    for num in range(x): # For Loop
        print('Hello') # Function Call

print_hello_x_or_ten_times() # Function Call
print_hello_x_or_ten_times(4) # Function Call


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)