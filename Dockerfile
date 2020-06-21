# Create base image from debian
FROM node:12.18.0-stretch-slim

# Maintainer
MAINTAINER "Amit Sarkar"

# User as root
USER root

# Install required dependencies for Debian and Chromium and install git
RUN apt-get update && \
    apt-get install -yq gconf-service libasound2 libatk1.0-0 libatk-bridge2.0-0 libc6 libcairo2 libcups2 libdbus-1-3 \
    libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 \
    libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 \
    libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 \
    ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget git \
    unzip fontconfig locales --no-install-recommends

# Set environment variable for Taiko to use Chromium
ENV TAIKO_BROWSER_PATH /usr/bin/chromium-browser

    # Install taiko while building the image
RUN npm install -g taiko --unsafe-perm=true && \
    # Add a non-privileged user in a new group
    groupadd -r test && useradd -r -m -g test test && \
    # Make a new directory Downloads for the user
    mkdir -p /home/test/Downloads && \
    # Change the user and group ownership of the folder
    chown -R test:test /home/test && \
    # Change directory to Downloads folder
    cd /home/test/Downloads/ && \
    # Clone the Taiko scripts git repo from user @amitsarkar007
    git clone https://github.com/amitsarkar007/Taiko-Scripts.git && \
    # Change the user and group ownership of the cloned git folder
    chown -R test:test /home/test/Downloads/Taiko-Scripts

# Set the working directory
WORKDIR /home/test/Downloads/Taiko-Scripts

# User as test
USER test

# Run the following commands on execution
# CMD [ "/bin/bash", "taiko Taiko-GoogleSearch-Headless.js" ]