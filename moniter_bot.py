import sqlite3
import smtplib
from email.mime.text import MIMEText

# List of flagged words
FLAGGED_WORDS = ['hate', 'racist', 'nazi', 'sexist', 'kill', 'n-word', 'slur']

# Connect to database
conn = sqlite3.connect('site.db')
cursor = conn.cursor()

# Scan posts and comments
def scan_and_ban():
    cursor.execute("SELECT id, user_id, content, type FROM content WHERE scanned = 0")
    new_entries = cursor.fetchall()

    for entry in new_entries:
        cid, user_id, content, ctype = entry
        if any(word in content.lower() for word in FLAGGED_WORDS):
            reason = "Use of hate speech or explicit content"
            ban_user(user_id, content, reason)
        cursor.execute("UPDATE content SET scanned = 1 WHERE id = ?", (cid,))
    
    conn.commit()

# Ban user, log offense, and send email
def ban_user(user_id, evidence, reason):
    cursor.execute("UPDATE users SET banned = 1 WHERE id = ?", (user_id,))
    cursor.execute("INSERT INTO offenses (user_id, content, reason) VALUES (?, ?, ?)", (user_id, evidence, reason))
    cursor.execute("SELECT email FROM users WHERE id = ?", (user_id,))
    email = cursor.fetchone()[0]
    send_ban_email(email, evidence, reason)
    print(f"Banned user {user_id} for: {reason}")

# Send ban email
def send_ban_email(to_email, evidence, reason):
    subject = "Account Banned - Policy Violation"
    body = f"""\
Dear User,

Your account has been banned due to the following violation:
Reason: {reason}

Example of content flagged:
"{evidence}"

If you believe this was a mistake, you may appeal using the Manage Users panel on the website.

Sincerely,
Site Moderation Team
"""
    msg = MIMEText(body)
    msg["Subject"] = subject
    msg["From"] = "admin@yourdomain.com"
    msg["To"] = to_email

    try:
        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()
            server.login('admin@yourdomain.com', 'YOUR_EMAIL_PASSWORD')
            server.send_message(msg)
            print(f"Email sent to {to_email}")
    except Exception as e:
        print(f"Email sending failed: {e}")

# Run scan
scan_and_ban()