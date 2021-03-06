from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.user import User


@app.route("/")
def index():
    users = User.get_all()
    print(users)
    return render_template("index.html", all_users = users)

@app.route("/user/create")
def create():
    return render_template("create.html")

@app.route("/user/add", methods=["POST"])
def add():
    # First we make a data dictionary from our request.form coming from our template.
    # The keys in data need to line up exactly with the variables in our query string.
    data = {
        "fname": request.form["fname"],
        "lname" : request.form["lname"],
        "eml" : request.form["eml"]
    }
    # We pass the data dictionary into the save method from the User class.
    # User.save(data) returns the row id (user id)
    id = User.save(data)
    # Don't forget to redirect after saving to the database.
    return redirect('/user/show/' + str(id))

@app.route("/user/show/<int:id>")
def show(id):
    user = User.get_one({'id' : id})
    return render_template("show.html", user = user)

@app.route("/user/edit/<int:id>")
def edit(id):
    user = User.get_one({'id' : id})
    return render_template("edit.html", user = user)

@app.route("/user/update/<int:id>", methods=["POST"])
def update(id):
    data = {
        **request.form,
        'id' : id
    }
    User.update(data)
    return redirect("/user/show/" + str(id))

@app.route("/user/delete/<int:id>")
def delete(id):
    User.delete({'id' : id})
    return redirect("/")