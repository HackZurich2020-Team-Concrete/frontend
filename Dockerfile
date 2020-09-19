# Use a docker multi-step build to compile the web application in a node environment.
FROM node:13-alpine

WORKDIR /app

# Add the package.json and yarn.lock first for better caching.
COPY package.json yarn.lock ./

# Install the dependencies using the lockfile.
RUN yarn install --frozen-lockfile

#COPY . .
COPY public /app/public
COPY src /app/src

# Build the web application.
RUN yarn run build

# The hosting of the webapp is done using nginx.
FROM nginx:latest

# Copy the build from the build-image into this image.
COPY --from=0 /app/build/ static/

# Add the nginx configuration.
COPY nginx.conf /etc/nginx/sites-enabled/default

# Set the access rights on the app folder.
RUN chown -Rv www-data:www-data /app/*
