# DharmaDispatch Project Structure & Deployment Guide

## 📁 Project Directory Structure

```
DharmaDispatch/
├── 📁 frontend/                    # Frontend application files
│   ├── 📁 src/
│   │   ├── 📄 index.html          # Main HTML file
│   │   ├── 📄 style.css           # Main stylesheet with design system
│   │   ├── 📄 app.js              # Core JavaScript application
│   │   ├── 📁 components/         # Reusable UI components
│   │   │   ├── 📄 NewsCard.js
│   │   │   ├── 📄 GitaTeaching.js
│   │   │   ├── 📄 CommentSystem.js
│   │   │   └── 📄 ShareButtons.js
│   │   ├── 📁 services/           # API and service calls
│   │   │   ├── 📄 newsService.js
│   │   │   ├── 📄 gitaService.js
│   │   │   └── 📄 correlationEngine.js
│   │   ├── 📁 utils/              # Utility functions
│   │   │   ├── 📄 dateUtils.js
│   │   │   ├── 📄 stringUtils.js
│   │   │   └── 📄 socialShare.js
│   │   └── 📁 assets/             # Images, fonts, icons
│   │       ├── 📁 images/
│   │       ├── 📁 icons/
│   │       └── 📁 fonts/
│   ├── 📄 package.json            # Frontend dependencies
│   ├── 📄 webpack.config.js       # Build configuration
│   └── 📄 .env.example            # Environment variables template
│
├── 📁 backend/                     # Backend API server (Future)
│   ├── 📁 src/
│   │   ├── 📄 server.js           # Express server entry point
│   │   ├── 📁 routes/             # API route handlers
│   │   │   ├── 📄 news.js
│   │   │   ├── 📄 gita.js
│   │   │   ├── 📄 users.js
│   │   │   └── 📄 comments.js
│   │   ├── 📁 models/             # Database models
│   │   │   ├── 📄 News.js
│   │   │   ├── 📄 GitaTeaching.js
│   │   │   ├── 📄 User.js
│   │   │   └── 📄 Comment.js
│   │   ├── 📁 controllers/        # Business logic
│   │   │   ├── 📄 newsController.js
│   │   │   ├── 📄 gitaController.js
│   │   │   └── 📄 userController.js
│   │   ├── 📁 middleware/         # Custom middleware
│   │   │   ├── 📄 auth.js
│   │   │   ├── 📄 validation.js
│   │   │   └── 📄 rateLimit.js
│   │   ├── 📁 services/           # External API integrations
│   │   │   ├── 📄 newsAggregator.js
│   │   │   ├── 📄 correlationAI.js
│   │   │   └── 📄 notificationService.js
│   │   └── 📁 utils/              # Server utilities
│   │       ├── 📄 database.js
│   │       ├── 📄 logger.js
│   │       └── 📄 encryption.js
│   ├── 📄 package.json
│   ├── 📄 .env.example
│   └── 📁 tests/                  # Test files
│       ├── 📁 unit/
│       ├── 📁 integration/
│       └── 📄 setup.js
│
├── 📁 database/                    # Database schemas and migrations
│   ├── 📁 schemas/
│   │   ├── 📄 news.json
│   │   ├── 📄 gita-teachings.json
│   │   └── 📄 users.json
│   ├── 📁 migrations/
│   ├── 📁 seeds/
│   │   ├── 📄 gita-verses.json    # Complete Bhagavad Gita dataset
│   │   └── 📄 sample-news.json    # Sample news data
│   └── 📄 init.sql                # Database initialization
│
├── 📁 mobile/                      # Mobile app (Future development)
│   ├── 📁 react-native/
│   ├── 📁 flutter/
│   └── 📁 ionic/
│
├── 📁 scripts/                     # Automation scripts
│   ├── 📄 deploy.sh               # Deployment script
│   ├── 📄 setup.sh                # Initial setup script
│   ├── 📄 news-scraper.py         # News scraping utility
│   └── 📄 correlation-trainer.py  # ML model training
│
├── 📁 docker/                      # Docker configurations
│   ├── 📄 Dockerfile              # Production container
│   ├── 📄 Dockerfile.dev          # Development container
│   ├── 📄 docker-compose.yml      # Multi-service setup
│   ├── 📄 docker-compose.dev.yml  # Development environment
│   └── 📁 nginx/
│       └── 📄 nginx.conf          # Web server configuration
│
├── 📁 docs/                        # Documentation
│   ├── 📄 API.md                  # API documentation
│   ├── 📄 ARCHITECTURE.md         # System architecture
│   ├── 📄 DEPLOYMENT.md           # Deployment guides
│   ├── 📄 CONTRIBUTING.md         # Contribution guidelines
│   ├── 📄 GITA-CORRELATIONS.md    # Correlation methodology
│   └── 📁 images/                 # Documentation images
│
├── 📁 tests/                       # Comprehensive testing
│   ├── 📁 e2e/                    # End-to-end tests
│   │   ├── 📄 cypress.config.js
│   │   └── 📁 cypress/
│   ├── 📁 performance/            # Performance tests
│   └── 📁 security/               # Security tests
│
├── 📁 .github/                     # GitHub configurations
│   ├── 📁 workflows/              # CI/CD pipelines
│   │   ├── 📄 build.yml
│   │   ├── 📄 test.yml
│   │   ├── 📄 deploy.yml
│   │   └── 📄 security-scan.yml
│   ├── 📄 ISSUE_TEMPLATE.md
│   ├── 📄 PULL_REQUEST_TEMPLATE.md
│   └── 📄 CODEOWNERS
│
├── 📄 README.md                    # Main project documentation
├── 📄 TECHNICAL-GUIDE.md           # Technical implementation guide
├── 📄 LICENSE                      # MIT License
├── 📄 .gitignore                   # Git ignore rules
├── 📄 .env.example                 # Environment variables template
├── 📄 package.json                 # Root package configuration
├── 📄 lerna.json                   # Monorepo configuration (optional)
└── 📄 CHANGELOG.md                 # Version change log
```

## 🚀 Quick Deployment Options

### Option 1: Static Website Hosting (Easiest)

#### Netlify Deployment
```bash
# 1. Clone repository
git clone https://github.com/sudhu90/DharmaDispatch.git
cd DharmaDispatch

# 2. Install Netlify CLI
npm install -g netlify-cli

# 3. Build and deploy
npm run build
netlify deploy --prod --dir=dist

# 4. Configure custom domain (optional)
netlify domains:add dharmadispatch.com
```

#### Vercel Deployment
```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Deploy from repository root
vercel --prod

# 3. Configure environment variables in Vercel dashboard
# NEWS_API_KEY=your_news_api_key
# GITA_API_KEY=your_gita_api_key
```

#### GitHub Pages
```bash
# 1. Enable GitHub Pages in repository settings
# 2. Set source to 'gh-pages' branch
# 3. Run deployment action
npm run deploy:github
```

### Option 2: Cloud Platform Deployment

#### AWS S3 + CloudFront
```bash
# 1. Build the application
npm run build

# 2. Sync to S3 bucket
aws s3 sync dist/ s3://dharmadispatch-web --delete

# 3. Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

#### Google Cloud Platform
```bash
# 1. Initialize GCP project
gcloud init
gcloud app create

# 2. Deploy using app.yaml
gcloud app deploy

# app.yaml configuration:
runtime: nodejs18
handlers:
  - url: /.*
    static_files: dist/index.html
    upload: dist/index.html
  - url: /
    static_dir: dist
```

### Option 3: VPS/Server Deployment

#### Ubuntu Server Setup
```bash
#!/bin/bash
# setup.sh - Server initialization script

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Nginx
sudo apt install nginx -y

# Install PM2 for process management
npm install -g pm2

# Clone repository
git clone https://github.com/sudhu90/DharmaDispatch.git /var/www/dharmadispatch
cd /var/www/dharmadispatch

# Install dependencies and build
npm install
npm run build

# Start application with PM2
pm2 start ecosystem.config.js
pm2 startup
pm2 save

# Configure Nginx
sudo cp docker/nginx/nginx.conf /etc/nginx/sites-available/dharmadispatch
sudo ln -s /etc/nginx/sites-available/dharmadispatch /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl restart nginx

# Setup SSL with Let's Encrypt
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d dharmadispatch.com

echo "✅ DharmaDispatch deployed successfully!"
echo "🌐 Visit: https://dharmadispatch.com"
```

#### PM2 Ecosystem Configuration
```javascript
// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'dharmadispatch',
    script: './server.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'your-server.com',
      ref: 'origin/main',
      repo: 'https://github.com/sudhu90/DharmaDispatch.git',
      path: '/var/www/dharmadispatch',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production'
    }
  }
};
```

### Option 4: Docker Deployment

#### Single Container
```bash
# Build Docker image
docker build -t dharmadispatch:latest .

# Run container
docker run -d -p 80:80 --name dharmadispatch dharmadispatch:latest

# With environment variables
docker run -d -p 80:80 \
  -e NODE_ENV=production \
  -e NEWS_API_KEY=your_key \
  --name dharmadispatch \
  dharmadispatch:latest
```

#### Docker Compose (Full Stack)
```yaml
# docker-compose.prod.yml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "80:80"
      - "443:443"
    environment:
      - NODE_ENV=production
    depends_on:
      - database
      - cache
    volumes:
      - ./logs:/var/log/nginx
      - ./ssl:/etc/ssl/certs

  database:
    image: mongo:6.0
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: secure_password
      MONGO_INITDB_DATABASE: dharmadispatch
    volumes:
      - mongodb_data:/data/db
      - ./database/seeds:/docker-entrypoint-initdb.d
    ports:
      - "27017:27017"

  cache:
    image: redis:7-alpine
    command: redis-server --appendonly yes
    volumes:
      - redis_data:/data
    ports:
      - "6379:6379"

  nginx:
    image: nginx:alpine
    ports:
      - "8080:80"
    volumes:
      - ./docker/nginx/nginx.conf:/etc/nginx/nginx.conf
      - ./frontend/dist:/usr/share/nginx/html
    depends_on:
      - web

volumes:
  mongodb_data:
  redis_data:

networks:
  default:
    name: dharmadispatch-network
```

```bash
# Deploy with Docker Compose
docker-compose -f docker-compose.prod.yml up -d

# Scale services
docker-compose -f docker-compose.prod.yml up -d --scale web=3

# Monitor logs
docker-compose logs -f web
```

## 🔧 Environment Configuration

### Development Environment
```bash
# .env.development
NODE_ENV=development
PORT=3000
API_BASE_URL=http://localhost:3000/api

# News APIs
NEWS_API_KEY=your_development_news_api_key
GUARDIAN_API_KEY=your_guardian_api_key
BBC_API_KEY=your_bbc_api_key

# Database
MONGODB_URI=mongodb://localhost:27017/dharmadispatch_dev
REDIS_URI=redis://localhost:6379

# Authentication
JWT_SECRET=your_jwt_secret_key
JWT_REFRESH_SECRET=your_jwt_refresh_secret

# Social Media APIs (for sharing)
TWITTER_API_KEY=your_twitter_key
FACEBOOK_APP_ID=your_facebook_app_id
WHATSAPP_API_KEY=your_whatsapp_key

# Analytics
GOOGLE_ANALYTICS_ID=GA4-XXXXXXXXX
MIXPANEL_TOKEN=your_mixpanel_token

# Error Tracking
SENTRY_DSN=your_sentry_dsn

# Email Service (for notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

### Production Environment
```bash
# .env.production
NODE_ENV=production
PORT=3000
API_BASE_URL=https://api.dharmadispatch.com

# Production database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dharmadispatch
REDIS_URI=redis://redis-cluster:6379

# Strong production secrets
JWT_SECRET=super_secure_production_jwt_secret
JWT_REFRESH_SECRET=super_secure_refresh_secret

# Production API keys
NEWS_API_KEY=production_news_api_key
GUARDIAN_API_KEY=production_guardian_key

# CDN and Static Assets
CDN_URL=https://cdn.dharmadispatch.com
STATIC_ASSETS_URL=https://static.dharmadispatch.com

# SSL and Security
SSL_CERT_PATH=/etc/ssl/certs/dharmadispatch.crt
SSL_KEY_PATH=/etc/ssl/private/dharmadispatch.key

# Production analytics
GOOGLE_ANALYTICS_ID=GA4-PRODUCTION-ID
SENTRY_DSN=https://production-sentry-dsn
```

## 📈 CI/CD Pipeline Configuration

### GitHub Actions Workflow
```yaml
# .github/workflows/deploy.yml
name: Deploy DharmaDispatch

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm run test
    
    - name: Run security audit
      run: npm audit --audit-level high
    
    - name: Run linting
      run: npm run lint

  build:
    needs: test
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build application
      run: npm run build
      env:
        NEWS_API_KEY: ${{ secrets.NEWS_API_KEY }}
        GITA_API_KEY: ${{ secrets.GITA_API_KEY }}
    
    - name: Upload build artifacts
      uses: actions/upload-artifact@v3
      with:
        name: dist
        path: dist/

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Download build artifacts
      uses: actions/download-artifact@v3
      with:
        name: dist
        path: dist/
    
    - name: Deploy to Netlify
      uses: nwtgck/actions-netlify@v1.2
      with:
        publish-dir: './dist'
        production-branch: main
        github-token: ${{ secrets.GITHUB_TOKEN }}
        deploy-message: "Deploy from GitHub Actions"
        enable-pull-request-comment: false
        enable-commit-comment: true
        overwrites-pull-request-comment: true
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}

  docker:
    needs: test
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v2
    
    - name: Login to Docker Hub
      uses: docker/login-action@v2
      with:
        username: ${{ secrets.DOCKERHUB_USERNAME }}
        password: ${{ secrets.DOCKERHUB_TOKEN }}
    
    - name: Build and push Docker image
      uses: docker/build-push-action@v4
      with:
        context: .
        push: true
        tags: |
          dharmadispatch/web:latest
          dharmadispatch/web:${{ github.sha }}
        cache-from: type=gha
        cache-to: type=gha,mode=max
```

## 🛠️ Development Setup Guide

### Prerequisites Installation
```bash
# Install Node.js and npm
# Option 1: Using Node Version Manager (Recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18

# Option 2: Direct installation (Ubuntu/Debian)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Option 3: Using Homebrew (macOS)
brew install node@18

# Verify installation
node --version  # Should show v18.x.x
npm --version   # Should show 9.x.x or higher
```

### Local Development Setup
```bash
# 1. Clone and setup repository
git clone https://github.com/sudhu90/DharmaDispatch.git
cd DharmaDispatch

# 2. Install dependencies
npm install

# 3. Copy environment configuration
cp .env.example .env.development
# Edit .env.development with your API keys

# 4. Start development server
npm run dev

# 5. Open in browser
open http://localhost:3000
```

### Database Setup (Optional for Full-Stack)
```bash
# MongoDB installation (Ubuntu)
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org

# Start MongoDB service
sudo systemctl start mongod
sudo systemctl enable mongod

# Redis installation
sudo apt update
sudo apt install redis-server
sudo systemctl enable redis-server

# Initialize database with sample data
npm run db:seed
```

### IDE Configuration

#### VS Code Setup
```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "files.associations": {
    "*.js": "javascript"
  }
}

// .vscode/extensions.json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-json",
    "formulahendry.auto-rename-tag"
  ]
}
```

#### Package Scripts
```json
// package.json scripts section
{
  "scripts": {
    "dev": "webpack serve --mode development",
    "build": "webpack --mode production",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "lint": "eslint src/",
    "lint:fix": "eslint src/ --fix",
    "format": "prettier --write src/",
    "start": "serve -s dist -l 3000",
    "deploy:netlify": "netlify deploy --prod --dir=dist",
    "deploy:github": "gh-pages -d dist",
    "db:seed": "node scripts/seed-database.js",
    "docker:build": "docker build -t dharmadispatch .",
    "docker:run": "docker run -p 3000:3000 dharmadispatch"
  }
}
```

## 📊 Monitoring and Maintenance

### Health Check Endpoints
```javascript
// Health monitoring setup
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version,
    environment: process.env.NODE_ENV,
    uptime: process.uptime()
  });
});

app.get('/health/detailed', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    checks: {
      database: 'connected',
      cache: 'connected',
      newsAPI: 'accessible',
      memoryUsage: process.memoryUsage(),
      diskSpace: getDiskUsage()
    }
  });
});
```

### Backup Strategy
```bash
#!/bin/bash
# backup.sh - Database backup script

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/var/backups/dharmadispatch"

# MongoDB backup
mongodump --uri="$MONGODB_URI" --out="$BACKUP_DIR/mongodb_$DATE"

# Compress backup
tar -czf "$BACKUP_DIR/mongodb_backup_$DATE.tar.gz" -C "$BACKUP_DIR" "mongodb_$DATE"

# Upload to cloud storage
aws s3 cp "$BACKUP_DIR/mongodb_backup_$DATE.tar.gz" s3://dharmadispatch-backups/

# Clean old backups (keep last 30 days)
find $BACKUP_DIR -name "*.tar.gz" -mtime +30 -delete

echo "Backup completed: mongodb_backup_$DATE.tar.gz"
```

## 🔐 Security Checklist

### Production Security Setup
```bash
# 1. SSL/TLS Certificate
sudo certbot --nginx -d dharmadispatch.com -d www.dharmadispatch.com

# 2. Firewall configuration
sudo ufw enable
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS

# 3. Fail2Ban for brute force protection
sudo apt install fail2ban
sudo systemctl enable fail2ban

# 4. Security headers (Nginx configuration)
add_header X-Frame-Options DENY;
add_header X-Content-Type-Options nosniff;
add_header X-XSS-Protection "1; mode=block";
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";
```

### Environment Security
```bash
# Secure environment variables
echo "NEWS_API_KEY=your_secure_key" | sudo tee -a /etc/environment
echo "JWT_SECRET=$(openssl rand -base64 32)" | sudo tee -a /etc/environment

# File permissions
chmod 600 .env*
chmod 700 scripts/
```

This comprehensive deployment guide provides multiple options for hosting DharmaDispatch, from simple static hosting to full-scale cloud deployment. Choose the option that best fits your technical expertise and requirements.

## 🚀 Quick Start Recommendation

For beginners: Start with **Netlify deployment** (Option 1)
For developers: Use **Docker deployment** (Option 4)  
For production: Implement **VPS deployment** (Option 3) with CI/CD

Each option provides a complete, functional deployment of the DharmaDispatch application with all features working as designed.