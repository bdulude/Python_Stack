from flask_app import app
from flask import render_template, redirect, request, session, flash

@app.route("/")
def index():
    if 'uuid' in session:
        return redirect('/success')
    return render_template("index.html")

@app.route("/success")
def success():
    if 'uuid' not in session:
        return redirect('/')
    return render_template("success.html")