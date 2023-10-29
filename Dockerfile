# Use an official Node runtime as a parent image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock files into the container
COPY package*.json ./
COPY yarn.lock ./

# Install any dependencies
RUN yarn install

# Bundle app source inside the Docker image
COPY . .

# Build the static files
RUN yarn build

CMD ["yarn", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"]
EXPOSE 3000