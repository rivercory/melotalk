from flask import Flask, jsonify, request
from bson.json_util import dumps
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient('mongodb://localhost:27017')
db = client['melotalk']

@app.route('/data')
def user():
    return {
        "members": [
            {"id": 1, "name": "yerin"}
        ]
    }


@app.route('/api/users', methods=['GET'])
def get_users():
    users = list(db.users.find({}))
    for i in users:
        i['_id'] = str(i['_id'])

    return jsonify({'users': users})

if __name__ == '__main__':
    app.run()