# ---------- Build Stage ----------
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build React app
RUN npm run build

# ---------- Serve Stage ----------
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built app from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config (if you have)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

