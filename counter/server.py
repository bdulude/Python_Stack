from flask import Flask, render_template, redirect, session
app = Flask(__name__)
app.secret_key = 'super secret key'

@app.route('/')
def index():
    if 'count' in session:
        print(session)
        session['count'] += 1
        return render_template('index.html')
    create_count()
    return render_template('index.html')

def create_count():
    session['count'] = 1
    print('************ Count Created ************')

@app.route('/destroy_session')
def destroy():
    session.clear()
    return redirect('/')

@app.route('/plus_two')
def two():
    session['count'] += 1
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)