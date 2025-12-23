#!/bin/bash
set -e

echo "Starting custom build script..."
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"

echo "Installing dependencies..."
npm install

echo "Checking if Angular CLI is available..."
if ! command -v ng &> /dev/null; then
    echo "ng command not found, using npx..."
    npx ng version
    echo "Building with npx ng build..."
    npx ng build --configuration production
else
    echo "ng command found, building..."
    ng build --configuration production
fi

echo "Build completed!"
echo "Listing dist directory:"
ls -la dist/
ls -la dist/safira-site/