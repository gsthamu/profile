# Thamotharan Gopal - Cloud & DevOps Architect Portfolio

> A modern, responsive portfolio website showcasing 14+ years of cloud & DevOps expertise in multi-cloud architecture, DevOps, and enterprise modernization. Built for the [DEV.to New Year, New You Portfolio Challenge](https://dev.to/challenges/new-year-new-you-google-ai-2025-12-31).

## 🚀 Live Demo

Deployed on Google Cloud Run: [Coming Soon]

## 💻 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: Custom CSS with glassmorphism effects, gradient accents, and smooth animations
- **Deployment**: Docker + Nginx + Google Cloud Run
- **Design**: Modern dark theme with responsive layout

## ✨ Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern Aesthetics**: Glassmorphism effects, gradient backgrounds, smooth animations
- **Interactive Elements**: Typing animation, counter animations, parallax effects
- **Performance Optimized**: Lazy loading, gzip compression, optimized assets
- **SEO Optimized**: Semantic HTML, meta tags, structured data
- **Accessibility**: ARIA labels, keyboard navigation, screen reader friendly

## 🎨 Sections

1. **Hero** - Dynamic introduction with typing animation
2. **About** - Professional background and impact highlights
3. **Skills** - Multi-cloud expertise across AWS, Azure, and GCP
4. **Experience** - Career timeline with detailed achievements
5. **Projects** - Featured work showcasing technical capabilities
6. **Contact** - Get in touch form and social links

## 🛠️ Local Development

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari)
- Docker (for containerized deployment)

### Running Locally

1. **Simple HTTP Server** (for development):
   ```bash
   # Using Python
   python3 -m http.server 8080
   
   # Using Node.js
   npx http-server -p 8080
   ```

2. **With Docker**:
   ```bash
   # Build the image
   docker build -t portfolio .
   
   # Run the container
   docker run -p 8080:8080 portfolio
   ```

3. Open your browser and navigate to `http://localhost:8080`

## 🚢 Deployment to Google Cloud Run

### Prerequisites

- Google Cloud account
- Google Cloud CLI (`gcloud`) installed
- Docker installed

### Deployment Steps

1. **Set up Google Cloud project**:
   ```bash
   # Login to Google Cloud
   gcloud auth login
   
   # Set your project ID
   gcloud config set project YOUR_PROJECT_ID
   
   # Enable required APIs
   gcloud services enable cloudbuild.googleapis.com run.googleapis.com
   ```

2. **Build and push to Container Registry**:
   ```bash
   # Build and submit to Cloud Build
   gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/portfolio
   ```

3. **Deploy to Cloud Run**:
   ```bash
   # Deploy with required label for DEV.to challenge
   gcloud run deploy portfolio \
     --image gcr.io/YOUR_PROJECT_ID/portfolio \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated \
     --labels dev-tutorial=devnewyear2026 \
     --port 8080
   ```

4. **Get your deployment URL**:
   ```bash
   gcloud run services describe portfolio \
     --platform managed \
     --region us-central1 \
     --format 'value(status.url)'
   ```

### Important Notes

- The `--labels dev-tutorial=devnewyear2026` flag is **required** for the DEV.to challenge
- The free tier should cover all costs for this portfolio
- Make sure to allow unauthenticated access for public viewing

## 📝 DEV.to Submission

After deploying to Cloud Run, create a DEV.to post using the [submission template](https://dev.to/new?prefill=---%0Atitle%3A%20%0Apublished%3A%20%0Atags%3A%20devchallenge%2C%20googleaichallenge%2C%20portfolio%2C%20gemini%0A---%0A%0A*This%20is%20a%20submission%20for%20the%20%5BNew%20Year%2C%20New%20You%20Portfolio%20Challenge%20Presented%20by%20Google%20AI%5D(https%3A%2F%2Fdev.to%2Fchallenges%2Fnew-year-new-you-google-ai-2025-12-31)*).

Embed your Cloud Run deployment using the instructions from [this guide](https://dev.to/devteam/you-can-now-embed-cloud-run-deployments-directly-in-your-dev-posts-1jk8).

## 🎯 Performance

- **Lighthouse Score**: 90+ in all categories
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Fully Responsive**: Mobile-first design

## 📧 Contact

- **Email**: gsthamu@gmail.com
- **LinkedIn**: [linkedin.com/in/gsthamu](https://www.linkedin.com/in/gsthamu/)
- **GitHub**: [github.com/gsthamu](https://github.com/gsthamu)

## 📄 License

This portfolio is created for the DEV.to Portfolio Challenge. Feel free to use it as inspiration for your own portfolio!

## 🙏 Acknowledgments

- Built with passion for the [DEV.to New Year, New You Portfolio Challenge](https://dev.to/challenges/new-year-new-you-google-ai-2025-12-31)
- Powered by Google Cloud Run
- Designed with modern web technologies and best practices

---

**Built by Thamotharan** | Senior Cloud & DevOps Architect | 14+ Years Experience
