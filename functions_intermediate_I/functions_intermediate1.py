def updateValues():
    x = [ [5,2,3], [10,8,9] ] 
    students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'}
    ]
    sports_directory = {
        'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
        'soccer' : ['Messi', 'Ronaldo', 'Rooney']
    }
    z = [ {'x': 10, 'y': 20} ]

# Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
    x[1][0] = 15
    print(x)
# Change the last_name of the first student from 'Jordan' to 'Bryant'
    students[0]['last_name'] = 'Bryant'
    print(students)
# In the sports_directory, change 'Messi' to 'Andres'
    sports_directory['soccer'][0] = 'Andres'
    print(sports_directory)
# Change the value 20 in z to 30
    z[0]['y'] = 30
    print(z)


# The function loops through each dictionary in the list and prints each key and the associated value. For example, given the following list:
def iterateDictionary(some_list):
    for entry in range(len(some_list)):
        for key, val in some_list[entry].items():
            print(key + " - " + val)

# Given a list of dictionaries and a key name, the function prints the value stored in that key for each dictionary.
def iterateDictionary2(key_name, some_list):
    for entry in range(len(some_list)):
        print(some_list[entry][key_name])


# Given a dictionary whose values are all lists, prints the name of each key along with the size of its list, and then prints the associated values within each key's list.
def printInfo(some_dict):
    for key, val in some_dict.items():
        print(str(len(val)) + " " + key)
        for item in range(len(val)):
            print(val[item])


# FUNCTION CALLS
updateValues()
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'},
    {'first_name' : 'Mark', 'last_name' : 'Guillen'},
    {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
iterateDictionary(students)
iterateDictionary2('first_name', students)
iterateDictionary2('last_name', students)
dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
printInfo(dojo)