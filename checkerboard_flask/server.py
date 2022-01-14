from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
@app.route('/<x>')
@app.route('/<x>/<y>')
@app.route('/<x>/<y>/<color0>')
@app.route('/<x>/<y>/<color0>/<color1>')
def index(x = 8, y = 8, color0 = "black", color1 = "red"):
    return render_template('index.html', x = int(x), y = int(y), color0 = color0, color1 = color1)

if __name__ == "__main__":
    app.run(debug=True)