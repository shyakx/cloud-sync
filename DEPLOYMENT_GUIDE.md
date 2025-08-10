# Cloud Sync Website Deployment Guide

This guide will help you deploy the Cloud Sync website to GitHub and Netlify.

## 🚀 Step 1: Push to GitHub

### Option A: Using GitHub Desktop (Recommended)
1. **Download GitHub Desktop** from [desktop.github.com](https://desktop.github.com/)
2. **Clone the repository**:
   - Open GitHub Desktop
   - Click "Clone a repository from the Internet"
   - Enter: `https://github.com/shyakx/cloud-sync.git`
   - Choose a local path
   - Click "Clone"

3. **Copy your files**:
   - Copy all files from your current project to the cloned folder
   - Replace any existing files

4. **Commit and Push**:
   - In GitHub Desktop, you'll see all your files
   - Add a commit message: "Initial commit: Cloud Sync website"
   - Click "Commit to main"
   - Click "Push origin"

### Option B: Using Command Line
```bash
# Navigate to your project folder
cd D:\portifolio

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Cloud Sync website with React, Bootstrap, and chatbot"

# Add remote repository
git remote add origin https://github.com/shyakx/cloud-sync.git

# Push to GitHub
git push -u origin main
```

## 🌐 Step 2: Deploy on Netlify

### Method 1: Deploy from GitHub (Recommended)
1. **Go to Netlify**: [netlify.com](https://netlify.com)
2. **Sign up/Login** with your GitHub account
3. **Click "New site from Git"**
4. **Choose GitHub** as your Git provider
5. **Select your repository**: `shyakx/cloud-sync`
6. **Configure build settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
   - **Node version**: 18 (or latest LTS)
7. **Click "Deploy site"**

### Method 2: Drag and Drop
1. **Build your project locally**:
   ```bash
   npm run build
   ```
2. **Go to Netlify**: [netlify.com](https://netlify.com)
3. **Drag the `build` folder** to the deploy area
4. **Your site will be live instantly**

## ⚙️ Step 3: Configure Environment Variables (Optional)

If you set up EmailJS later, add these environment variables in Netlify:

1. **Go to Site Settings** → **Environment Variables**
2. **Add variables**:
   - `REACT_APP_EMAILJS_PUBLIC_KEY`: Your EmailJS public key
   - `REACT_APP_EMAILJS_SERVICE_ID`: Your EmailJS service ID
   - `REACT_APP_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID

## 🎯 Step 4: Custom Domain (Optional)

1. **Go to Site Settings** → **Domain management**
2. **Add custom domain**: `cloudsync.rw` (if you own it)
3. **Configure DNS** as instructed by Netlify

## 📱 Step 5: Test Your Deployment

1. **Check your live site** at the Netlify URL
2. **Test all features**:
   - ✅ Navigation
   - ✅ Contact form
   - ✅ Chatbot
   - ✅ Responsive design
   - ✅ All sections

## 🔧 Troubleshooting

### Common Issues:

**Build Fails:**
- Check Node.js version (use 18+)
- Ensure all dependencies are in package.json
- Check for syntax errors

**Contact Form Not Working:**
- EmailJS needs to be configured
- Check browser console for errors
- Test mailto fallback

**Styling Issues:**
- Clear browser cache
- Check CSS file paths
- Verify Bootstrap imports

## 🎉 Success!

Once deployed, your Cloud Sync website will be:
- ✅ Live on the internet
- ✅ Accessible worldwide
- ✅ Professional and responsive
- ✅ Ready for customers

## 📞 Support

- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **GitHub Help**: [help.github.com](https://help.github.com)
- **React Deployment**: [reactjs.org/docs/deployment.html](https://reactjs.org/docs/deployment.html)

---

**Your website will be live at**: `https://your-site-name.netlify.app` 