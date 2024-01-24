FROM node:16.19.0-alpine
# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Add environment variables

ENV BASE_URL=http://localhost:8080

# Install dependencies
RUN npm install

# Copy the rest of the app code to the container
COPY . .

# Build the Nuxt app
RUN npm run build

# Expose port 3000
EXPOSE 3000

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=3000

# Start the Nuxt app
CMD [ "node", "/app/.output/server/index.mjs" ]