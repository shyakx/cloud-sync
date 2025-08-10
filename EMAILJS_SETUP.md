# EmailJS Setup Guide for Cloud Sync Contact Form

This guide will help you set up EmailJS to enable direct email sending from the contact form to Steven's email address.

## 🚀 Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 📧 Step 2: Add Email Service

1. **Login to EmailJS Dashboard**
2. **Go to "Email Services"**
3. **Click "Add New Service"**
4. **Choose "Gmail"** (since Steven uses Gmail)
5. **Connect your Gmail account** (you can use Steven's account or create a service account)
6. **Save the service** and note the **Service ID**

## 📝 Step 3: Create Email Template

1. **Go to "Email Templates"**
2. **Click "Create New Template"**
3. **Use this template:**

```html
Subject: Cloud Sync Contact Form: {{subject}}

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

4. **Save the template** and note the **Template ID**

## 🔑 Step 4: Get Your Public Key

1. **Go to "Account" → "API Keys"**
2. **Copy your Public Key**

## ⚙️ Step 5: Update the Code

Replace the placeholder values in `src/App.js`:

```javascript
// Line 47: Replace YOUR_PUBLIC_KEY
emailjs.init("YOUR_ACTUAL_PUBLIC_KEY");

// Line 89: Replace YOUR_SERVICE_ID
'YOUR_ACTUAL_SERVICE_ID'

// Line 90: Replace YOUR_TEMPLATE_ID  
'YOUR_ACTUAL_TEMPLATE_ID'
```

## 🎯 Step 6: Test the Form

1. **Start your development server**: `npm start`
2. **Fill out the contact form**
3. **Submit the form**
4. **Check Steven's email** (shyakasteven2023@gmail.com)
5. **Verify the email was received**

## 🔧 Alternative Setup Options

### Option A: Use Steven's Gmail Account
- Connect Steven's Gmail account directly to EmailJS
- All emails will be sent from his account

### Option B: Create a Service Account
- Create a dedicated Gmail account for the website
- Forward emails to Steven's account
- More secure and professional

### Option C: Use EmailJS's Built-in Email Service
- Use EmailJS's own email service
- No need to connect Gmail
- Limited to 200 emails/month on free plan

## 📊 EmailJS Free Plan Limits

- **200 emails per month**
- **2 email templates**
- **1 email service**
- **Basic support**

## 🚀 Production Deployment

When deploying to production:

1. **Update environment variables** for security
2. **Test thoroughly** before going live
3. **Monitor email delivery** in EmailJS dashboard
4. **Set up email notifications** for failed deliveries

## 🔒 Security Best Practices

1. **Never expose private keys** in client-side code
2. **Use environment variables** for sensitive data
3. **Implement rate limiting** to prevent spam
4. **Validate form inputs** server-side
5. **Monitor for abuse** and implement CAPTCHA if needed

## 📞 Support

If you need help with EmailJS setup:
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Community](https://community.emailjs.com/)
- [EmailJS Support](https://www.emailjs.com/support/)

## 🎉 Success!

Once configured, the contact form will:
- ✅ Send emails directly to Steven's inbox
- ✅ Include all form data in a professional format
- ✅ Provide instant feedback to users
- ✅ Work seamlessly without opening email clients
- ✅ Track email delivery status

---

**Note**: The free plan should be sufficient for most small businesses. Consider upgrading to a paid plan if you expect more than 200 emails per month. 