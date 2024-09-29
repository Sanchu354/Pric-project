# Stage 1: Build the application
FROM node:20 as build
# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./
# COPY package-lock.json ./

# Install dependencies
RUN npm i

# Copy the rest of the application code
COPY . .

# Build the api-gateway service
RUN npm run build

FROM node:20

# Set the working directory
WORKDIR /app

# Copy the compiled code from the build stage
COPY --from=build /app /

# Set the command to run the microservice
CMD ["npm", "start"]