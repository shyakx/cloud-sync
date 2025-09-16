# Quick EmailJS Setup for Cloud Sync Contact Form

## 🚀 Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 📧 Step 2: Add Gmail Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail"
4. Connect your Gmail account (use cloudsync.rw@gmail.com)
5. Save and note the **Service ID** (looks like: service_xxxxxxx)

## 📝 Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** Cloud Sync Contact Form: {{subject}}

**Body:**
```
Hello Steven,

You have received a new contact form submission from the Cloud Sync website.

Contact Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the Cloud Sync website contact form.
Reply directly to this email to respond to the customer.
```

4. Save and note the **Template ID** (looks like: template_xxxxxxx)

## 🔑 Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (looks like: xxxxxxxxxxxxxxxxx)

## ⚙️ Step 5: Update the Code
Replace these values in `src/App.js`:

**Line 55:** Replace `YOUR_PUBLIC_KEY` with your actual public key
```javascript
emailjs.init("your_actual_public_key_here");
```

**Line 91:** Replace `YOUR_SERVICE_ID` with your service ID
```javascript
'your_actual_service_id_here'
```

**Line 92:** Replace `YOUR_TEMPLATE_ID` with your template ID
```javascript
'your_actual_template_id_here'
```

## 🎯 Step 6: Test
1. Save the file
2. The form will now send emails directly to cloudsync.rw@gmail.com
3. Test by filling out the contact form

## ✅ That's it!
Your contact form will now send emails directly to Cloud Sync's email without opening the user's email client!

---
**Free Plan Limits:** 200 emails/month - perfect for most businesses
