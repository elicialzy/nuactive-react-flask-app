from flask import Flask
app = Flask(__name__)

@app.route('/')
def home_page():
    return 'Home!'

@app.route('/about')
def about_page():
    return 'About!'

@app.route('/activities')
def activities_page():
    return 'Activities!'

@app.route('/rewards')
def rewards_page():
    return 'Rewards!'

if __name__ == '__main__':
    app.run(debug=True)