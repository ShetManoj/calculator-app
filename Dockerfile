# Use Node.js as base image

FROM node:alpine

# Create a work directory

WORKDIR /app 

# Copy all files to working directory 

COPY . . 

# Expose port 80

EXPOSE 80

# Run the container

CMD ["npx", "http-server","-p","80"]


