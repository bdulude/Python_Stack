# import the function that will return an instance of a connection
from flask_app.config.mysqlconnection import connectToMySQL
# model the class after the user table from our database
DATABASE = "mydb"

class User:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    # C *********************************
    @classmethod
    def save(cls, data):
        query = "INSERT INTO users (first_name , last_name, email, created_at, updated_at) VALUES ( %(fname)s , %(lname)s , %(eml)s , NOW() , NOW() );"
        # data is a dictionary that will be passed into the save method from server.py
        return connectToMySQL(DATABASE).query_db(query, data)
    # Now we use class methods to query our database


    # R *********************************
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL(DATABASE).query_db(query)
        # Create an empty list to append our instances of users
        users = []
        # Iterate over the db results and create instances of users with cls.
        for user in results:
            users.append( cls(user) )
        return users
    @classmethod
    def get_one(cls, data:dict):
        query = "SELECT * FROM users WHERE id=%(id)s;"
        result = connectToMySQL(DATABASE).query_db(query, data)
        if result:
            return cls(result[0])
        return []


    # U *********************************
    @classmethod
    def update(cls, data:dict):
        query = 'UPDATE users SET first_name=%(fname)s, last_name=%(lname)s, email=%(eml)s, updated_at=NOW() WHERE (id=%(id)s);'
        return connectToMySQL(DATABASE).query_db(query, data)

    # D *********************************
    @classmethod
    def delete(cls, data):
        query = 'DELETE FROM users WHERE (id=%(id)s);'
        return connectToMySQL(DATABASE).query_db(query, data)
