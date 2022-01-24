from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.ninja import Ninja
from flask_app.models.dojo import Dojo

@app.route('/ninja')
def add():
    dojos = Dojo.get_all()
    return render_template('ninja.html', dojos = dojos)

@app.route('/ninja/new', methods=['POST'])
def create():
    dojo_id = request.form['did']
    data = {
        **request.form
    }
    Ninja.create(data)
    return redirect('/dojo/' + dojo_id)