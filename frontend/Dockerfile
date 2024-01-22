# Start from the official Nginx image
FROM nginx:alpine

# Copy the static site files to the default nginx public folder
COPY default.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html

# Expose port 80
EXPOSE 80