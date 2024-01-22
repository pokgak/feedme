# Use a lightweight Node.js LTS base image
FROM node:20-alpine

LABEL org.opencontainers.image.source https://github.com/pokgak/feedme

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json before other files
# Utilize Docker cache to save re-installing dependencies if unchanged
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy source code
COPY . .

# Start the app
CMD [ "node", "-r", "./instrumentation.js", "index.js" ]  
