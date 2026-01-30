#!/bin/bash

# Portfolio Deployment Script for Google Cloud Run
# DEV.to New Year, New You Portfolio Challenge

set -e

echo "🚀 Portfolio Deployment Script"
echo "================================"
echo ""

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo "❌ Error: gcloud CLI is not installed"
    echo "Please install it from: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Check if user is logged in
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" &> /dev/null; then
    echo "🔐 Please login to Google Cloud..."
    gcloud auth login
fi

# Get project ID
echo "📋 Current Google Cloud Projects:"
gcloud projects list --format="table(projectId,name)"
echo ""
read -p "Enter your Google Cloud Project ID: " PROJECT_ID

if [ -z "$PROJECT_ID" ]; then
    echo "❌ Error: Project ID cannot be empty"
    exit 1
fi

# Set project
echo "🔧 Setting project to: $PROJECT_ID"
gcloud config set project "$PROJECT_ID"

# Enable required APIs
echo "🔌 Enabling required APIs..."
gcloud services enable cloudbuild.googleapis.com run.googleapis.com

# Build and submit
echo "🏗️  Building container image..."
gcloud builds submit --tag gcr.io/$PROJECT_ID/portfolio

# Deploy to Cloud Run
echo "🚢 Deploying to Cloud Run..."
gcloud run deploy portfolio \
  --image gcr.io/$PROJECT_ID/portfolio \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --labels dev-tutorial=devnewyear2026 \
  --port 8080

# Get deployment URL
echo ""
echo "✅ Deployment successful!"
echo ""
echo "📍 Your portfolio URL:"
PORTFOLIO_URL=$(gcloud run services describe portfolio \
  --platform managed \
  --region us-central1 \
  --format 'value(status.url)')

echo "$PORTFOLIO_URL"
echo ""
echo "📝 Next Steps:"
echo "1. Visit your portfolio: $PORTFOLIO_URL"
echo "2. Test all functionality"
echo "3. Create DEV.to submission using DEV_SUBMISSION.md"
echo "4. Embed Cloud Run deployment with: {% cloudrun $PORTFOLIO_URL %}"
echo "5. Upload cover-image.png"
echo "6. Submit to the challenge!"
echo ""
echo "🎉 Good luck with the challenge!"
