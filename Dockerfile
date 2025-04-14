# Stage 1: Build stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy source files
COPY . .

# Stage 2: Production image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy only built artifacts and dependencies from builder
COPY --from=builder /app .

# Expose port (harus sama dengan port di app.js / index.js)
EXPOSE 5050

# Start the app
CMD ["node", "index.js"]
