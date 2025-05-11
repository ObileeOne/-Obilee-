from flask import Flask, jsonify
import sqlite3

app = Flask(__name__)

@app.route("/api/banned-users")
def banned_users():
    conn = sqlite3.connect("site.db")
    cursor = conn.cursor()
    cursor.execute("""
        SELECT users.username, users.email, offenses.content, offenses.reason, offenses.timestamp 
        FROM users 
        JOIN offenses ON users.id = offenses.user_id 
        WHERE users.banned = 1
    """)
    data = cursor.fetchall()
    conn.close()

    banned_list = [
        {
            "username": row[0],
            "email": row[1],
            "content": row[2],
            "reason": row[3],
            "timestamp": row[4]
        }
        for row in data
    ]
    return jsonify(banned_list)

if __name__ == "__main__":
    app.run(debug=True)