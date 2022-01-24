from flask_app.config.mysqlconnection import connectToMySQL

DATABASE = "dojos_and_ninjas"

class Ninja:
    def __init__(self, data:dict):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.dojo_id = data['dojo_id']

    # CREATE ***********************
    @classmethod
    def create(cls, data:dict):
        query = "INSERT INTO ninjas (first_name, last_name, age, created_at, updated_at, dojo_id) VALUES (%(fname)s, %(lname)s, %(age)s, NOW(), NOW(), %(did)s);"
        return connectToMySQL(DATABASE).query_db(query, data)

