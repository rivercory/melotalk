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


@app.route('/test', methods=['GET'])
def test_get():
    fruit_list = list(db.users.find({}))
    for i in fruit_list:
        i['_id'] = str(i['_id'])

    return jsonify({'result': 'success', 'articles': fruit_list})

if __name__ == '__main__':
    app.run()