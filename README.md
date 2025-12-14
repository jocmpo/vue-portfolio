# Vue.js Portfolio Dashboard

A modern, responsive portfolio web application built with Vue.js featuring a dashboard-style layout with authentication, profile management, project showcase, contact form, and an interactive timeline.

## 🚀 Features

- **Login System**: Secure authentication with form validation
- **Profile Page**: Display personal information, bio, and social media links
- **Portfolio Showcase**: Filterable project gallery with categories
- **Contact Form**: Functional contact form with validation
- **Interactive Timeline**: Creative page showcasing professional journey with skills and statistics
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Vue Router**: Seamless navigation between pages

## 📋 Project Structure

\`\`\`
src/
├── views/
│   ├── LoginView.vue         # Authentication page
│   ├── DashboardLayout.vue   # Main dashboard layout with sidebar
│   ├── ProfileView.vue       # Personal profile page
│   ├── ShowcaseView.vue      # Portfolio projects gallery
│   ├── ContactView.vue       # Contact form page
│   └── CreativeView.vue      # Interactive timeline and skills
├── App.vue                   # Root component
├── main.js                   # App entry point with router
└── style.css                 # Global styles and theme

## 🛠️ Technologies Used

- **Vue.js 3**: Progressive JavaScript framework
- **Vue Router**: Official routing library
- **Vite**: Next-generation frontend tooling
- **CSS3**: Modern styling with custom properties
- **JavaScript ES6+**: Modern JavaScript features

## 📦 Installation & Setup

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd vue-portfolio-dashboard
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Build for production**
   \`\`\`bash
   npm run build
   \`\`\`

5. **Preview production build**
   \`\`\`bash
   npm run preview
   \`\`\`

## 🔐 Login Credentials

- **Username**: `admin`
- **Password**: `portfolio123`

## 🎨 Features Breakdown

### Login Page (`/login`)
- Custom login form with validation
- Error handling for invalid credentials
- Hardcoded authentication (username: admin, password: portfolio123)
- Automatic redirect to dashboard after successful login

### Profile Page (`/portfolio/profile`)
- Personal photo placeholder
- Bio and role information
- Contact details (email, phone, location)
- Professional information (experience, education, specialization)
- Social media links

### Portfolio Showcase (`/portfolio/showcase`)
- Filterable project grid (All, Web, Mobile, Design)
- Project cards with images and descriptions
- Hover effects with overlay
- Technology tags for each project
- Responsive grid layout

### Contact Page (`/portfolio/contact`)
- Contact information display
- Functional contact form with validation
- Fields: Name, Email, Subject, Message
- Success message after submission
- Responsive two-column layout

### Creative Page (`/portfolio/creative`)
- Interactive timeline of professional journey
- Career statistics cards
- Technical skills with animated progress bars
- Click-to-activate timeline items
- Comprehensive view of experience and achievements

## 🎯 Key Highlights

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Aesthetics**: Clean, professional design with smooth animations
- **User Experience**: Intuitive navigation with visual feedback
- **Performance**: Optimized with Vite for fast loading and hot module replacement
- **Maintainable Code**: Well-structured components with clear separation of concerns

## 🔄 Routing Structure

\`\`\`
/                          → Redirects to /login
/login                     → Login page
/portfolio                 → Dashboard layout (requires authentication)
  ├── /portfolio/profile   → Profile page
  ├── /portfolio/showcase  → Portfolio showcase
  ├── /portfolio/contact   → Contact form
  └── /portfolio/creative  → Interactive timeline
\`\`\`

## 🎨 Customization

### Color Theme
The app uses CSS custom properties for theming. Modify the variables in `src/style.css`:

\`\`\`css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-primary: #2563eb;
  /* ... more variables */
}
\`\`\`

### Content
Update the content in each Vue component's `data()` function to reflect your personal information and projects.

## 📱 Responsive Breakpoints

- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: < 480px

## 🚀 Deployment

The app can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

Simply run `npm run build` and deploy the `dist` folder.

## 📝 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Built with ❤️ using Vue.js

---

**Note**: This is a portfolio template. Replace placeholder content with your actual information before deployment.
