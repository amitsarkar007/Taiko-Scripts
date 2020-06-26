# Create base image from nodejs on Docker hub
FROM node:12.18.0-stretch-slim AS builder

# Maintainer
LABEL maintainer="Amit Sarkar"

# User as root
USER root

# Install required dependencies for Chromium and install git
RUN apt-get update && apt-get install -yq \
    gconf-service libasound2 libatk1.0-0 libatk-bridge2.0-0 libc6 libcairo2 libcups2 libdbus-1-3 \
    libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 \
    libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 \
    libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 \
    ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget git \
    unzip fontconfig locales --no-install-recommends

    # Create a non-privileged user in a new group
RUN groupadd -r test && useradd -r -m -g test test && \
    # Change the user and group ownership of the folder
    chown -R test:test /home/test/ && \
    # Install taiko
    npm install -g taiko@1.0.12 --unsafe-perm=true

# Set the working directory
WORKDIR /home/test/Taiko-Scripts/

# Change the user and group ownership of the folder
RUN chown -R test:test /home/test/Taiko-Scripts/

# Create new image from the previous base image
FROM builder

# User as test
USER test

# Copy everything from local folder into working directory
COPY --chown=test:test . .

# Run the following commands on execution
CMD taiko Taiko-GoogleSearch-Headless.js