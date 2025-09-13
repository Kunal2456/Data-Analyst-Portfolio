# Data Analyst Portfolio - Kunal Kushwaha

A modern, professional portfolio website showcasing data analysis and computer vision expertise. Built with HTML5, CSS3, and JavaScript, featuring a sleek dark theme design.

## 🚀 Features

### Core Sections
- **Hero Section**: Eye-catching introduction with animated data visualization
- **About**: Professional background and expertise overview
- **Skills**: Technical skills with animated progress bars
- **Projects**: Featured portfolio projects with GitHub links
- **Experience**: Professional timeline and work history
- **Contact**: Interactive contact form

### Interactive Elements
- Smooth scrolling navigation
- Animated skill bars and counters
- Hover effects and micro-interactions
- Responsive design for all devices
- Professional notification system
- Form validation and submission handling

### Dark Theme Design
- Modern dark color scheme
- Professional typography
- Smooth animations and transitions
- Clean, minimalist layout
- Accessibility compliant
- SEO optimized structure

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript**: Interactive functionality and dynamic content
- **Font Awesome**: Professional icons
- **Google Fonts**: Inter font family for modern typography

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Design Features

- Dark theme with blue accent colors
- Professional typography
- Smooth animations and transitions
- Clean, minimalist layout
- Accessibility compliant
- SEO optimized structure

## 🚀 Deployment on Vercel

### Prerequisites
- GitHub account
- Vercel account (free tier available)

### Steps to Deploy

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/data-analyst-portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a static site
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - In your Vercel dashboard, go to project settings
   - Navigate to "Domains"
   - Add your custom domain
   - Update DNS settings as instructed

### Environment Variables
No environment variables required for this static site.

## 📧 Contact Form Setup (Formspree)

Your contact form is now integrated with Formspree for real email functionality:

### Setup Steps:
1. **Go to [Formspree.io](https://formspree.io)** and create a free account
2. **Create a new form** and get your unique form ID
3. **Replace `YOUR_FORM_ID`** in `index.html` line ~450:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. **Test the form** - all submissions will be sent to your email

### Features:
- ✅ **Real email delivery** to your inbox
- ✅ **Spam protection** included
- ✅ **Mobile responsive** form
- ✅ **Free tier**: 50 submissions/month
- ✅ **No server setup** required

## 📁 Project Structure

```
data-analyst-portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── .gitignore          # Git ignore file
```

## 🎯 Key Features

### Professional Portfolio Design
- Clean dark theme with blue accents
- Modern typography and spacing
- Interactive elements and animations
- Professional project showcase
- Contact form with validation

### Enhanced User Experience
- Smooth scrolling navigation
- Animated skill bars and counters
- Hover effects and micro-interactions
- Professional notification system
- Form validation and submission handling

### Performance Optimized
- Optimized images and assets
- Efficient CSS and JavaScript
- Fast loading times
- SEO friendly structure

## 🔧 Customization

### Colors
Update the CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #3b82f6;
    --secondary-color: #f59e0b;
    --accent-color: #10b981;
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    /* ... other colors */
}
```

### Content
- Update personal information in `index.html`
- Add/remove projects as needed
- Update contact information
- Modify skills and experience

### Styling
- Modify CSS variables for theme changes
- Adjust animations and transitions
- Update responsive breakpoints

## 📊 Analytics Integration

To add Google Analytics:
1. Get your tracking ID from Google Analytics
2. Add the tracking code to the `<head>` section of `index.html`
3. Update the tracking ID in the script

## 🔒 Security

- Form validation on both client and server side
- XSS protection through proper input sanitization
- HTTPS enforced on Vercel deployment
- No sensitive data stored in client-side code

## 📈 SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Open Graph tags
- Structured data markup
- Fast loading times
- Mobile-friendly design

## 🎨 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📞 Contact

**Kunal Kushwaha**
- Email: kunalkushwaha.2k3@gmail.com
- Phone: +91 9997419203
- Location: Delhi, India

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Dark theme design inspiration
- Icons from Font Awesome
- Fonts from Google Fonts
- Hosting by Vercel

---

**Ready for deployment!** 🚀

Your portfolio website is now polished with a sleek dark theme and ready to be hosted on Vercel. The design showcases your unique skills and expertise as a data analyst in a modern, professional way. 