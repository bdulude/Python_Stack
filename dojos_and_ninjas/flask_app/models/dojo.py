from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import ninja

DATABASE = "dojos_and_ninjas"

class Dojo:
    def __init__(self, data:dict):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.ninjas = []


    # CREATE ***********************
    @classmethod
    def create(cls, data:dict):
        query = "INSERT INTO dojos (name, created_at, updated_at) VALUES (%(dname)s, NOW(), NOW());"
        return connectToMySQL(DATABASE).query_db(query, data)


    # READ *************************
    @classmethod
    def get_one(cls, data:dict):
        query = "SELECT * FROM dojos WHERE id=%(id)s;"
        result = connectToMySQL(DATABASE).query_db(query, data)
        if result:
            return cls(result[0])
        return []


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL(DATABASE).query_db(query)
        if results:
            dojos = []
            for dojo in results:
                dojos.append( cls(dojo) )
            return dojos
        return []


    @classmethod
    def get_dojo_with_ninjas(cls, data:dict):
        query = "SELECT * FROM dojos LEFT JOIN ninjas ON ninjas.dojo_id = dojos.id WHERE dojos.id = %(id)s;"
        results = connectToMySQL(DATABASE).query_db(query, data)
        if results:
            dojo = cls(results[0])
            for row_from_db in results:
                ninja_data = {
                    "id" : row_from_db["ninjas.id"],
                    "first_name" : row_from_db["first_name"],
                    "last_name" : row_from_db["last_name"],
                    "age" : row_from_db["age"],
                    "created_at" : row_from_db["ninjas.created_at"],
                    "updated_at" : row_from_db["ninjas.updated_at"],
                    "dojo_id" : row_from_db["dojo_id"]
                }
                dojo.ninjas.append(ninja.Ninja(ninja_data))
            return dojo
        return []