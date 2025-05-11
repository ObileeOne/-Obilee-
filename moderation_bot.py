import json
import re
from datetime import datetime

# File paths
USERS_FILE = "users.json"
BANNED_USERS_FILE = "banned_users.json"
BANNED_WORDS = ["hate", "racist", "nazi", "kill", "explicit"]  # Add more as needed

# Fake function to send email (you'll replace this with actual email logic)
def send_ban_email(user_email, reason, content):
    print(f"Sending email to {user_email}...")
    print(f"Subject: You have been banned\nReason: {reason}\nContent: \"{content}\"\nIf you believe this is a mistake, please click the appeal button in your email.")

# Load users
try:
    with open(USERS_FILE, "r") as f:
        users = json.load(f)
except FileNotFoundError:
    users = []

# Load banned users
try:
    with open(BANNED_USERS_FILE, "r") as f:
        banned_users = json.load(f)
except FileNotFoundError:
    banned_users = []

def scan_and_ban():
    global banned_users
    for user in users:
        username = user.get("username")
        email = user.get("email")
        posts = user.get("posts", [])
        comments = user.get("comments", [])

        for content in posts + comments:
            for word in BANNED_WORDS:
                if re.search(rf"\\b{re.escape(word)}\\b", content, re.IGNORECASE):
                    reason = f"Use of banned word: '{word}'"
                    timestamp = datetime.utcnow().isoformat()
                    ban_record = {
                        "username": username,
                        "email": email,
                        "reason": reason,
                        "content": content,
                        "timestamp": timestamp
                    }
                    if username not in [u['username'] for u in banned_users]:
                        banned_users.append(ban_record)
                        send_ban_email(email, reason, content)
                        print(f"User {username} has been banned.")

    # Save updated banned users
    with open(BANNED_USERS_FILE, "w") as f:
        json.dump(banned_users, f, indent=2)

if __name__ == "__main__":
    scan_and_ban()
