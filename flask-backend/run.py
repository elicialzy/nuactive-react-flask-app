from flask import Flask, session
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True)

@app.route('/')
def home_page():
    return 'Home!'

@app.route('/about')
def about_page():
    return 'This web app has a flask backend!'

#if want to connect to backend on these pages

# @app.route('/activities')
# def activities_page():
#     return 'Activities!'

# @app.route('/rewards')
# def rewards_page():
#     return 'Rewards!'

if __name__ == '__main__':
    app.run(debug=True)