from flask import Flask

app = Flask(__name__)
DEV = debug=True

tasks = [
    {
        'id': 1,
        'title': u'String1'
    },
    {
        'id': 2,
        'title': u'String2'
    }
]


@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/test')
def test():
    return jsonify({'tasks': tasks})

if __name__ == '__main__':
    app.run(DEV)
