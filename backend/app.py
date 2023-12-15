from flask import Flask

app = Flask(__name__)


@app.route('/data')
def user():
    return {
        "members": [
            {"id": 1, "name": "yerin"}
        ]
    }


if __name__ == '__main__':
    app.run()
