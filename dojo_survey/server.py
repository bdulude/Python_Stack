from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'super secret key'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    session['form'] = {
        **request.form
    }
    print('******** Submitted ********')
    print(session['form'])
    return redirect('/result')

@app.route('/result')
def show():
    return render_template('result.html')

if __name__ == "__main__":
    app.run(debug=True)