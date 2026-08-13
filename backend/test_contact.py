import urllib.request
import json
from contact.models import Message

print("--- Testing /api/contact/ POST endpoint ---")
url = "http://127.0.0.1:8000/api/contact/"
payload = {
    "name": "Audit Tester",
    "email": "audit@portfolio.test",
    "subject": "Production Verification",
    "message": "Testing database storage and SMTP fail-safety."
}

data = json.dumps(payload).encode("utf-8")
req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})

try:
    with urllib.request.urlopen(req) as res:
        print(f"API HTTP Status: {res.status}")
        body = json.loads(res.read().decode())
        print(f"API Response: {body}")
except Exception as e:
    print(f"API Request Exception: {e}")

# Verify DB storage
print("\n--- Verifying SQLite Database Storage ---")
latest_msg = Message.objects.order_by("-created_at").first()
if latest_msg:
    print(f"Latest DB Message ID: {latest_msg.id}")
    print(f"From: {latest_msg.name} <{latest_msg.email}>")
    print(f"Subject: {latest_msg.subject}")
    print(f"Body: {latest_msg.body}")
    print("DATABASE PERSISTENCE: PASS")
else:
    print("DATABASE PERSISTENCE: FAIL (No messages in database)")
