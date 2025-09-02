# DharmaDispatch Technical Implementation Guide

## Architecture Overview

### System Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                     DharmaDispatch Platform                 │
├─────────────────────────────────────────────────────────────┤
│  Frontend Layer                                            │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   React.js  │  │   Vue.js    │  │ Vanilla JS  │        │
│  │   (Future)  │  │  (Future)   │  │ (Current)   │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
├─────────────────────────────────────────────────────────────┤
│  API Gateway Layer                                         │
│  ┌─────────────────────────────────────────────────────────┐│
│  │         Express.js / Fastify / Koa.js                  ││
│  └─────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────┤
│  Business Logic Layer                                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │ News Service│  │Gita Service │  │ User Service│        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
├─────────────────────────────────────────────────────────────┤
│  Data Layer                                                │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   MongoDB   │  │ PostgreSQL  │  │   Redis     │        │
│  │  (Document) │  │ (Relational)│  │  (Cache)    │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
└─────────────────────────────────────────────────────────────┘
```

### Technology Stack Selection

#### Frontend Options

**Option 1: Vanilla JavaScript (Current Implementation)**
- ✅ Quick deployment and prototyping
- ✅ No build process required
- ✅ Lightweight and fast loading
- ❌ Limited scalability for complex features
- ❌ No component reusability

**Option 2: React.js (Recommended for Scale)**
```javascript
// Component Structure
src/
├── components/
│   ├── NewsCard/
│   ├── GitaTeaching/
│   ├── CommentSystem/
│   └── ShareButtons/
├── pages/
│   ├── Home/
│   ├── Category/
│   └── Search/
├── hooks/
│   ├── useNews.js
│   ├── useGitaCorrelation.js
│   └── useComments.js
├── services/
│   ├── newsApi.js
│   ├── gitaService.js
│   └── userService.js
└── utils/
    ├── correlation.js
    └── sharing.js
```

**Option 3: Vue.js (Alternative)**
```javascript
// Vue 3 Composition API Structure
src/
├── views/
│   ├── HomeView.vue
│   ├── CategoryView.vue
│   └── NewsDetailView.vue
├── components/
│   ├── TheNavigation.vue
│   ├── NewsItem.vue
│   ├── GitaInsight.vue
│   └── CommentThread.vue
├── composables/
│   ├── useNewsData.js
│   ├── useGitaTeachings.js
│   └── useUserInteractions.js
└── stores/
    ├── newsStore.js
    └── userStore.js
```

#### Backend Architecture Options

**Option 1: Express.js + MongoDB (Recommended)**
```javascript
// Server Structure
server/
├── routes/
│   ├── news.js
│   ├── gita.js
│   ├── users.js
│   └── comments.js
├── models/
│   ├── News.js
│   ├── GitaTeaching.js
│   ├── User.js
│   └── Comment.js
├── services/
│   ├── newsAggregator.js
│   ├── correlationEngine.js
│   └── notificationService.js
├── middleware/
│   ├── auth.js
│   ├── validation.js
│   └── rateLimit.js
└── utils/
    ├── dbConnection.js
    └── correlation.js
```

**Option 2: Next.js Full-Stack (Modern Approach)**
```javascript
// Next.js Structure
src/
├── app/
│   ├── api/
│   │   ├── news/route.js
│   │   ├── gita/route.js
│   │   └── comments/route.js
│   ├── news/
│   │   └── [category]/page.js
│   └── layout.js
├── components/
│   ├── ui/
│   └── features/
├── lib/
│   ├── db.js
│   ├── news-service.js
│   └── gita-correlation.js
└── types/
    └── index.ts
```

### Database Design

#### MongoDB Schema (Recommended)
```javascript
// News Collection
{
  _id: ObjectId,
  headline: String,
  summary: String,
  fullContent: String,
  category: String,
  source: String,
  sourceUrl: String,
  publishedAt: Date,
  createdAt: Date,
  updatedAt: Date,
  tags: [String],
  location: {
    country: String,
    region: String
  },
  engagement: {
    likes: Number,
    dislikes: Number,
    shares: Number,
    comments: Number
  }
}

// GitaTeaching Collection
{
  _id: ObjectId,
  chapter: Number,
  verse: Number,
  sanskrit: String,
  transliteration: String,
  translation: String,
  commentary: String,
  themes: [String],
  keywords: [String],
  correlationTopics: [String]
}

// NewsGitaCorrelation Collection
{
  _id: ObjectId,
  newsId: ObjectId,
  gitaTeachingId: ObjectId,
  correlationScore: Number,
  explanation: String,
  createdBy: String,
  verifiedBy: String,
  votes: {
    helpful: Number,
    notHelpful: Number
  }
}

// User Collection
{
  _id: ObjectId,
  email: String,
  username: String,
  profile: {
    name: String,
    avatar: String,
    bio: String,
    location: String
  },
  preferences: {
    categories: [String],
    notifications: Boolean,
    darkMode: Boolean
  },
  karma: {
    points: Number,
    level: String
  },
  activity: {
    joinedAt: Date,
    lastActive: Date,
    totalComments: Number,
    totalVotes: Number
  }
}
```

#### PostgreSQL Alternative (Relational)
```sql
-- News table
CREATE TABLE news (
    id SERIAL PRIMARY KEY,
    headline VARCHAR(500) NOT NULL,
    summary TEXT,
    full_content TEXT,
    category VARCHAR(100),
    source VARCHAR(100),
    source_url TEXT,
    published_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    tags TEXT[],
    country VARCHAR(100),
    region VARCHAR(100),
    likes INTEGER DEFAULT 0,
    dislikes INTEGER DEFAULT 0,
    shares INTEGER DEFAULT 0,
    comment_count INTEGER DEFAULT 0
);

-- Gita teachings table
CREATE TABLE gita_teachings (
    id SERIAL PRIMARY KEY,
    chapter INTEGER NOT NULL,
    verse INTEGER NOT NULL,
    sanskrit TEXT NOT NULL,
    transliteration TEXT,
    translation TEXT NOT NULL,
    commentary TEXT,
    themes TEXT[],
    keywords TEXT[],
    created_at TIMESTAMP DEFAULT NOW()
);

-- Correlations table
CREATE TABLE news_gita_correlations (
    id SERIAL PRIMARY KEY,
    news_id INTEGER REFERENCES news(id),
    gita_teaching_id INTEGER REFERENCES gita_teachings(id),
    correlation_score INTEGER CHECK (correlation_score >= 0 AND correlation_score <= 100),
    explanation TEXT,
    created_by VARCHAR(100),
    verified_by VARCHAR(100),
    helpful_votes INTEGER DEFAULT 0,
    not_helpful_votes INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);
```

### API Design

#### RESTful Endpoints
```javascript
// News endpoints
GET /api/news                    // List all news
GET /api/news/:id               // Get specific news
GET /api/news/category/:cat     // News by category
POST /api/news                  // Create news (admin)
PUT /api/news/:id               // Update news (admin)
DELETE /api/news/:id            // Delete news (admin)

// Gita endpoints
GET /api/gita/teachings         // List all teachings
GET /api/gita/teachings/:id     // Get specific teaching
GET /api/gita/search           // Search teachings
POST /api/gita/correlations    // Create correlation
GET /api/gita/correlations/:newsId // Get correlations for news

// User endpoints
POST /api/auth/register        // User registration
POST /api/auth/login          // User login
POST /api/auth/logout         // User logout
GET /api/user/profile         // Get user profile
PUT /api/user/profile         // Update user profile

// Interaction endpoints
POST /api/news/:id/vote       // Vote on news
POST /api/news/:id/comments   // Add comment
GET /api/news/:id/comments    // Get comments
POST /api/comments/:id/vote   // Vote on comment
POST /api/news/:id/share      // Track sharing
```

#### GraphQL Alternative (Advanced)
```graphql
type Query {
  news(category: String, limit: Int, offset: Int): [News!]!
  newsById(id: ID!): News
  gitaTeachings(chapter: Int, verse: Int): [GitaTeaching!]!
  correlations(newsId: ID!): [Correlation!]!
  user: User
}

type Mutation {
  createNews(input: NewsInput!): News!
  voteOnNews(newsId: ID!, type: VoteType!): VoteResult!
  addComment(newsId: ID!, content: String!): Comment!
  shareNews(newsId: ID!, platform: Platform!): ShareResult!
}

type News {
  id: ID!
  headline: String!
  summary: String!
  category: String!
  source: String!
  publishedAt: DateTime!
  correlations: [Correlation!]!
  engagement: Engagement!
  comments: [Comment!]!
}
```

### News Aggregation Strategy

#### Data Sources Integration
```javascript
// News API Integration
const newsAPIs = {
  reuters: {
    url: 'https://api.reuters.com/v1/',
    key: process.env.REUTERS_API_KEY,
    endpoints: {
      topStories: '/news/top-stories',
      politics: '/news/politics',
      world: '/news/world'
    }
  },
  bbc: {
    url: 'https://api.bbc.co.uk/v1/',
    key: process.env.BBC_API_KEY,
    endpoints: {
      news: '/news',
      politics: '/news/politics'
    }
  },
  guardian: {
    url: 'https://content.guardianapis.com/',
    key: process.env.GUARDIAN_API_KEY,
    endpoints: {
      search: '/search',
      politics: '/politics'
    }
  }
};

// News aggregation service
class NewsAggregator {
  async fetchFromAllSources() {
    const sources = Object.keys(newsAPIs);
    const promises = sources.map(source => this.fetchFromSource(source));
    const results = await Promise.allSettled(promises);
    
    return this.consolidateResults(results);
  }

  async fetchFromSource(sourceName) {
    const config = newsAPIs[sourceName];
    // Implementation for each source
  }

  consolidateResults(results) {
    // Deduplicate and rank news items
    // Apply content filtering
    // Return top 10 political news
  }
}
```

#### RSS Feed Integration (Alternative)
```javascript
// RSS Feed parser for multiple sources
const RSSParser = require('rss-parser');
const parser = new RSSParser();

const feedSources = [
  'https://feeds.reuters.com/Reuters/worldNews',
  'http://feeds.bbci.co.uk/news/world/rss.xml',
  'https://www.theguardian.com/world/rss',
  'https://rss.cnn.com/rss/edition.rss',
  'https://feeds.npr.org/1001/rss.xml'
];

class RSSAggregator {
  async aggregateFeeds() {
    const feedPromises = feedSources.map(url => parser.parseURL(url));
    const feeds = await Promise.allSettled(feedPromises);
    
    return this.processFeeds(feeds);
  }

  processFeeds(feeds) {
    let allItems = [];
    
    feeds.forEach(result => {
      if (result.status === 'fulfilled') {
        allItems = allItems.concat(result.value.items);
      }
    });

    return this.filterAndSort(allItems);
  }
}
```

### Gita Correlation Engine

#### Correlation Algorithm
```javascript
class GitaCorrelationEngine {
  constructor() {
    this.keywords = {
      conflict: ['war', 'battle', 'fight', 'conflict', 'attack'],
      leadership: ['leader', 'president', 'minister', 'government'],
      economics: ['trade', 'economy', 'market', 'financial'],
      diplomacy: ['negotiate', 'agreement', 'treaty', 'diplomatic'],
      justice: ['court', 'law', 'justice', 'legal', 'rights']
    };

    this.gitaThemes = {
      dharmaYuddha: {
        verses: ['2.31', '2.47', '4.8'],
        keywords: ['conflict', 'leadership', 'justice'],
        weight: 0.9
      },
      karmaYoga: {
        verses: ['2.47', '3.19', '18.9'],
        keywords: ['leadership', 'economics'],
        weight: 0.8
      },
      lokaSangraha: {
        verses: ['3.20', '3.25', '12.13'],
        keywords: ['diplomacy', 'economics', 'leadership'],
        weight: 0.85
      }
    };
  }

  calculateCorrelation(newsItem) {
    const newsKeywords = this.extractKeywords(newsItem);
    let bestMatch = null;
    let highestScore = 0;

    Object.entries(this.gitaThemes).forEach(([theme, config]) => {
      const score = this.scoreMatch(newsKeywords, config);
      if (score > highestScore) {
        highestScore = score;
        bestMatch = {
          theme,
          score: Math.min(95, Math.max(70, score)),
          verses: config.verses
        };
      }
    });

    return bestMatch;
  }

  extractKeywords(newsItem) {
    const text = `${newsItem.headline} ${newsItem.summary}`.toLowerCase();
    const extractedKeywords = [];

    Object.entries(this.keywords).forEach(([category, words]) => {
      const matchCount = words.filter(word => text.includes(word)).length;
      if (matchCount > 0) {
        extractedKeywords.push(category);
      }
    });

    return extractedKeywords;
  }

  scoreMatch(newsKeywords, themeConfig) {
    const intersection = newsKeywords.filter(keyword => 
      themeConfig.keywords.includes(keyword)
    );
    
    const baseScore = (intersection.length / themeConfig.keywords.length) * 100;
    return baseScore * themeConfig.weight;
  }
}
```

### Deployment Strategies

#### Option 1: Traditional VPS/Server
```bash
# Server setup (Ubuntu 22.04)
sudo apt update
sudo apt install nodejs npm nginx mongodb-server redis-server

# Application deployment
git clone https://github.com/sudhu90/DharmaDispatch.git
cd DharmaDispatch
npm install
npm run build

# Nginx configuration
server {
    listen 80;
    server_name dharmadispatch.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# PM2 for process management
npm install -g pm2
pm2 start npm -- start
pm2 startup
pm2 save
```

#### Option 2: Docker Container
```dockerfile
# Multi-stage Dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM nginx:alpine AS production
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

```yaml
# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "80:80"
    depends_on:
      - mongodb
      - redis
    environment:
      - NODE_ENV=production
      - MONGODB_URI=mongodb://mongodb:27017/dharmadispatch
      - REDIS_URI=redis://redis:6379

  mongodb:
    image: mongo:6.0
    volumes:
      - mongodb_data:/data/db
    ports:
      - "27017:27017"

  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data
    ports:
      - "6379:6379"

volumes:
  mongodb_data:
  redis_data:
```

#### Option 3: Cloud Deployment (AWS/GCP/Azure)

**AWS Architecture:**
```yaml
# serverless.yml for AWS Lambda
service: dharmadispatch

provider:
  name: aws
  runtime: nodejs18.x
  region: us-east-1
  environment:
    MONGODB_URI: ${env:MONGODB_URI}
    NEWS_API_KEY: ${env:NEWS_API_KEY}

functions:
  api:
    handler: src/lambda.handler
    events:
      - http:
          path: /{proxy+}
          method: ANY
          cors: true

plugins:
  - serverless-offline
  - serverless-webpack

resources:
  Resources:
    # CloudFront distribution
    # S3 bucket for static assets
    # DynamoDB tables
    # API Gateway
```

**Vercel Deployment (Recommended for Quick Start):**
```json
{
  "name": "dharmadispatch",
  "version": 2,
  "builds": [
    {
      "src": "src/app.js",
      "use": "@vercel/node"
    },
    {
      "src": "public/**/*",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/src/app.js"
    },
    {
      "src": "/(.*)",
      "dest": "/public/$1"
    }
  ]
}
```

#### Option 4: CDN + Static Hosting
```javascript
// Build process for static deployment
const build = {
  input: 'src/main.js',
  output: {
    dir: 'dist',
    format: 'es'
  },
  plugins: [
    // Bundle all assets
    // Optimize images
    // Minify CSS/JS
    // Generate service worker
  ]
};

// Deployment to Netlify/Vercel
netlify deploy --prod --dir=dist
vercel --prod
```

### Performance Optimization

#### Frontend Optimizations
```javascript
// Lazy loading implementation
const NewsCard = lazy(() => import('./components/NewsCard'));
const GitaTeaching = lazy(() => import('./components/GitaTeaching'));

// Virtual scrolling for large lists
import { FixedSizeList as List } from 'react-window';

const NewsList = ({ items }) => (
  <List
    height={600}
    itemCount={items.length}
    itemSize={300}
    itemData={items}
  >
    {NewsCard}
  </List>
);

// Service worker for caching
self.addEventListener('fetch', event => {
  if (event.request.destination === 'document') {
    event.respondWith(
      caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
  }
});
```

#### Backend Optimizations
```javascript
// Redis caching strategy
const Redis = require('redis');
const client = Redis.createClient();

class CacheService {
  async getNews(category = 'all') {
    const cacheKey = `news:${category}`;
    const cached = await client.get(cacheKey);
    
    if (cached) {
      return JSON.parse(cached);
    }
    
    const news = await this.fetchNewsFromDB(category);
    await client.setEx(cacheKey, 300, JSON.stringify(news)); // 5 min cache
    
    return news;
  }

  async invalidateNewsCache() {
    const keys = await client.keys('news:*');
    if (keys.length > 0) {
      await client.del(keys);
    }
  }
}

// Database indexing
db.news.createIndex({ category: 1, publishedAt: -1 });
db.news.createIndex({ "engagement.likes": -1 });
db.correlations.createIndex({ newsId: 1, correlationScore: -1 });

// Connection pooling
const mongoose = require('mongoose');
mongoose.connect(uri, {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
});
```

### Security Implementation

#### Authentication & Authorization
```javascript
// JWT token implementation
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class AuthService {
  async register(email, password, profile) {
    const hashedPassword = await bcrypt.hash(password, 12);
    
    const user = new User({
      email,
      password: hashedPassword,
      profile,
      createdAt: new Date()
    });

    await user.save();
    return this.generateTokens(user);
  }

  async login(email, password) {
    const user = await User.findOne({ email });
    if (!user || !await bcrypt.compare(password, user.password)) {
      throw new Error('Invalid credentials');
    }

    return this.generateTokens(user);
  }

  generateTokens(user) {
    const accessToken = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );

    const refreshToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: '7d' }
    );

    return { accessToken, refreshToken };
  }
}

// Middleware for route protection
const requireAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
```

#### Input Validation & Sanitization
```javascript
const Joi = require('joi');
const xss = require('xss');

const commentSchema = Joi.object({
  content: Joi.string().min(3).max(1000).required(),
  parentId: Joi.string().optional(),
  newsId: Joi.string().required()
});

const validateComment = (req, res, next) => {
  const { error, value } = commentSchema.validate(req.body);
  
  if (error) {
    return res.status(400).json({
      error: error.details[0].message
    });
  }

  // Sanitize content to prevent XSS
  req.body.content = xss(value.content);
  next();
};

// Rate limiting
const rateLimit = require('express-rate-limit');

const commentLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // 10 comments per 15 minutes
  message: 'Too many comments, please try again later'
});
```

### Testing Strategy

#### Unit Testing
```javascript
// Jest test example
describe('GitaCorrelationEngine', () => {
  let engine;

  beforeEach(() => {
    engine = new GitaCorrelationEngine();
  });

  test('should calculate correlation for conflict news', () => {
    const newsItem = {
      headline: 'Russia attacks Ukraine infrastructure',
      summary: 'Military conflict escalates with missile strikes'
    };

    const correlation = engine.calculateCorrelation(newsItem);

    expect(correlation).toBeTruthy();
    expect(correlation.theme).toBe('dharmaYuddha');
    expect(correlation.score).toBeGreaterThan(70);
    expect(correlation.score).toBeLessThanOrEqual(95);
  });

  test('should extract keywords correctly', () => {
    const newsItem = {
      headline: 'Trade war between nations',
      summary: 'Economic tensions rise'
    };

    const keywords = engine.extractKeywords(newsItem);
    
    expect(keywords).toContain('economics');
    expect(keywords).toContain('conflict');
  });
});

// Integration testing
describe('News API', () => {
  test('GET /api/news should return news list', async () => {
    const response = await request(app)
      .get('/api/news')
      .expect(200);

    expect(response.body).toHaveLength(10);
    expect(response.body[0]).toHaveProperty('headline');
    expect(response.body[0]).toHaveProperty('gitaTeaching');
  });

  test('POST /api/news/:id/vote should require authentication', async () => {
    await request(app)
      .post('/api/news/1/vote')
      .send({ type: 'like' })
      .expect(401);
  });
});
```

#### End-to-End Testing
```javascript
// Cypress test example
describe('DharmaDispatch App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display news items', () => {
    cy.get('[data-testid="news-card"]').should('have.length', 10);
    cy.get('[data-testid="news-headline"]').should('be.visible');
    cy.get('[data-testid="gita-teaching"]').should('be.visible');
  });

  it('should allow voting on news', () => {
    cy.get('[data-testid="like-button"]').first().click();
    cy.get('[data-testid="like-count"]').should('contain', '1');
  });

  it('should filter news by category', () => {
    cy.get('[data-testid="category-filter"]').contains('Economics').click();
    cy.get('[data-testid="news-card"]').should('have.length.lessThan', 10);
  });

  it('should search for news', () => {
    cy.get('[data-testid="search-input"]').type('Ukraine');
    cy.get('[data-testid="news-card"]').should('contain', 'Ukraine');
  });
});
```

### Monitoring & Analytics

#### Application Monitoring
```javascript
// Error tracking with Sentry
const Sentry = require('@sentry/node');

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
});

// Custom metrics
const prometheus = require('prom-client');

const httpRequestDuration = new prometheus.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status']
});

const newsCorrelationAccuracy = new prometheus.Gauge({
  name: 'news_correlation_accuracy_score',
  help: 'Average accuracy score of news-Gita correlations'
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.APP_VERSION
  });
});
```

#### User Analytics
```javascript
// Custom analytics service
class AnalyticsService {
  trackEvent(event, properties) {
    // Send to analytics provider (Google Analytics, Mixpanel, etc.)
    if (typeof gtag !== 'undefined') {
      gtag('event', event, properties);
    }

    // Store in database for internal analysis
    this.storeEvent(event, properties);
  }

  trackNewsEngagement(newsId, action) {
    this.trackEvent('news_engagement', {
      news_id: newsId,
      action: action, // 'view', 'like', 'share', 'comment'
      timestamp: Date.now()
    });
  }

  trackGitaCorrelationViews(correlationId, rating) {
    this.trackEvent('gita_correlation_view', {
      correlation_id: correlationId,
      user_rating: rating,
      timestamp: Date.now()
    });
  }
}
```

This technical implementation guide provides a comprehensive roadmap for building and scaling DharmaDispatch from a simple web application to a full-featured platform. The modular approach allows for iterative development and easy maintenance.

### Next Steps

1. **Phase 1**: Implement basic news aggregation with static Gita correlations
2. **Phase 2**: Add user authentication and comment system
3. **Phase 3**: Implement real-time news API integration
4. **Phase 4**: Develop AI-powered correlation engine
5. **Phase 5**: Scale with advanced features and mobile apps

Each phase can be developed independently, allowing for continuous deployment and user feedback integration.