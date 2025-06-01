# frontend/Dockerfile

# Use official nginx image to serve static files
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy your frontend build (or raw files if no build) to nginx folder
COPY . /usr/share/nginx/html

# Expose port 80 for nginx
EXPOSE 80

# Start nginx (default command)
CMD ["nginx", "-g", "daemon off;"]
