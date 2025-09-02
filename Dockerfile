# Multi-stage Docker build for DharmaDispatch
# Stage 1: Development and build environment
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Add build arguments
ARG NODE_ENV=production
ARG NEWS_API_KEY
ARG GITA_API_KEY

# Set environment variables
ENV NODE_ENV=$NODE_ENV
ENV NEWS_API_KEY=$NEWS_API_KEY
ENV GITA_API_KEY=$GITA_API_KEY

# Install system dependencies
RUN apk add --no-cache \
    git \
    python3 \
    make \
    g++

# Copy package files
COPY package*.json ./

# Install Node.js dependencies
RUN npm ci --only=production && \
    npm cache clean --force

# Copy source code
COPY . .

# Create necessary directories
RUN mkdir -p logs dist

# Build application (if build step exists)
# RUN npm run build

# Stage 2: Production environment with Nginx
FROM nginx:1.25-alpine AS production

# Install runtime dependencies
RUN apk add --no-cache \
    curl \
    tzdata

# Set timezone to India (IST)
ENV TZ=Asia/Kolkata
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Create application user
RUN addgroup -g 1001 -S appgroup && \
    adduser -S appuser -u 1001 -G appgroup

# Copy application files from builder stage
COPY --from=builder --chown=appuser:appgroup /app/frontend/src/ /usr/share/nginx/html/

# Copy custom Nginx configuration
COPY --chown=appuser:appgroup docker/nginx/nginx.conf /etc/nginx/nginx.conf

# Create necessary directories with proper permissions
RUN mkdir -p /var/log/nginx /var/cache/nginx /var/run && \
    chown -R appuser:appgroup /var/log/nginx /var/cache/nginx /var/run /usr/share/nginx/html

# Copy health check script
COPY --chown=appuser:appgroup scripts/health-check.sh /usr/local/bin/health-check.sh
RUN chmod +x /usr/local/bin/health-check.sh

# Switch to non-root user
USER appuser

# Expose port
EXPOSE 80

# Add labels for metadata
LABEL maintainer="DharmaDispatch Team <contact@dharmadispatch.org>"
LABEL version="1.0.0"
LABEL description="DharmaDispatch - News aggregation with Bhagavad Gita teachings"
LABEL org.opencontainers.image.title="DharmaDispatch"
LABEL org.opencontainers.image.description="Correlating world affairs with dharmic wisdom"
LABEL org.opencontainers.image.vendor="DharmaDispatch Team"
LABEL org.opencontainers.image.version="1.0.0"
LABEL org.opencontainers.image.source="https://github.com/sudhu90/DharmaDispatch"
LABEL org.opencontainers.image.documentation="https://github.com/sudhu90/DharmaDispatch/blob/main/README.md"

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD /usr/local/bin/health-check.sh

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

# Development stage for local development
FROM node:18-alpine AS development

WORKDIR /app

# Install development dependencies
RUN apk add --no-cache \
    git \
    curl \
    vim \
    bash

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies)
RUN npm install

# Copy source code
COPY . .

# Create development user
RUN addgroup -g 1001 -S devgroup && \
    adduser -S devuser -u 1001 -G devgroup && \
    chown -R devuser:devgroup /app

USER devuser

# Expose development port
EXPOSE 3000

# Start development server
CMD ["npm", "run", "dev"]

# Build stage for CI/CD
FROM builder AS ci

# Install additional CI tools
RUN npm install --save-dev \
    @playwright/test \
    lighthouse \
    pa11y

# Run tests and linting
RUN npm run lint && \
    npm run test && \
    echo "CI tests completed successfully"

# Export test results
VOLUME ["/app/coverage", "/app/test-results"]

CMD ["npm", "run", "test:coverage"]