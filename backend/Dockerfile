# backend/Dockerfile

# Use official Node.js LTS image as base
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy backend source code
COPY . .

# Expose port your backend runs on
EXPOSE 5000

# Start the backend server
CMD ["node", "server.js"]
