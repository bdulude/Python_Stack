from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.dojo import Dojo

@app.route('/')
def index():
    return redirect('/dojos')

@app.route('/dojos')
def dojos():
    dojos = Dojo.get_all()
    print(dojos)
    return render_template('dojos.html', dojos = dojos)

@app.route('/dojo/new', methods=["POST"])
def new_dojo():
    dojo_id = Dojo.create({"dname" : request.form['dname']})
    return redirect("/dojos")

@app.route('/dojo/<int:id>')
def show(id):
    dojo = Dojo.get_dojo_with_ninjas({"id" : id})
    return render_template('show_dojo.html', dojo = dojo)