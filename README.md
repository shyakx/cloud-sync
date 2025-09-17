# Cloud Sync - Technology Solutions Website

A modern, responsive website for Cloud Sync, a technology company based in Kigali, Rwanda. The website showcases the company's services in software development, AI integration, data analysis, and electronic device distribution.

## 🚀 Features

- **Modern Design**: Inspired by the Restaurantly theme with a professional tech-focused aesthetic
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: AOS (Animate On Scroll) library for engaging animations
- **Bootstrap 5**: Modern CSS framework for consistent styling
- **React Icons**: Beautiful iconography throughout the site
- **Contact Form**: Interactive contact form for customer inquiries
- **Professional Sections**: Hero, Services, About, Contact, and Footer sections

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Bootstrap 5**: CSS framework for responsive design
- **React Bootstrap**: Bootstrap components for React
- **React Icons**: Icon library for React
- **AOS**: Animate On Scroll library
- **CSS3**: Custom styling with CSS variables

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## 🚀 Installation & Setup

1. **Clone or download the project files**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

## 📁 Project Structure

```
cloud-sync-website/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Main application component
│   ├── index.js        # React entry point
│   └── index.css       # Global styles
├── package.json        # Dependencies and scripts
└── README.md          # Project documentation
```

## 🎨 Customization

### Colors
The website uses CSS variables for easy color customization. Edit the `:root` section in `src/index.css`:

```css
:root {
  --primary-color: #cda45e;      /* Main brand color */
  --secondary-color: #1a1814;    /* Dark text color */
  --text-color: #6c757d;         /* Body text color */
  --light-bg: #f8f9fa;          /* Light background */
  --dark-bg: #1a1814;           /* Dark background */
  --white: #ffffff;             /* White color */
}
```

### Content
- Update company information in `src/App.js`
- Modify services, contact details, and other content as needed
- Replace images with your own assets

### Styling
- Customize styles in `src/index.css`
- Modify Bootstrap classes or add custom CSS
- Update fonts by changing the Google Fonts import in `public/index.html`

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first design approach
- Tablet and desktop optimizations
- Flexible grid system using Bootstrap
- Touch-friendly navigation

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **Traditional Hosting**: Upload the `build` folder to your web server

## 📞 Contact Information

The website includes placeholder contact information for Cloud Sync:
- **Location**: Kigali, Rwanda
- **Phone**: +250 788 123 456
- **Email**: cloudsync.rw@gmail.com

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## 📄 License

This project is created for Cloud Sync. Feel free to modify and use for your own business needs.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For support or questions about this website template, please contact the development team.

---

**Cloud Sync** - Empowering businesses with innovative technology solutions in Rwanda and beyond. 