# Print all integers from 0 to 150
def basic():
    for x in range(151):
        print(x)

# Print all the multiples of 5 from 5 to 1,000
def multiplesOf5():
    for y in range(5, 1001, 5):
        print(y)

# Print integers 1 to 100. If divisible by 5, print "Coding" instead. If divisible by 10, print "Coding Dojo".
def dojoWay():
    for z in range(1, 101):
        if z % 10 == 0:
            print("Coding Dojo")
        elif z % 5 == 0:
            print("Coding")
        else:
            print(z)

# Add odd integers from 0 to 500,000, and print the final sum.
def hugeSucker():
    sum = 0
    for i in range(1, 500000, 2):
        sum += i
    print(sum)

# Print positive numbers starting at 2018, counting down by fours.
def countDown4s():
    for j in range(2018, 0, -4):
        print(j)

# Set three variables: lowNum, highNum, mult. Starting at lowNum and going through highNum, 
# print only the integers that are a multiple of mult. For example, if lowNum=2, highNum=9, 
# and mult=3, the loop should print 3, 6, 9 (on successive lines)
def flexible(lowNum, highNum, mult):
    for k in range(lowNum, highNum+1):
        if k % mult == 0:
            print(k)



# basic()
# multiplesOf5()
# dojoWay()
# hugeSucker()
# countDown4s()
flexible(2, 9, 3)