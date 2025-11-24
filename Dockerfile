# Build step
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY vite.config.* ./

RUN npm install

COPY . .
RUN npm run build

# Nginx to serve static files
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Delete default nginx website
RUN rm -rf ./*

# Copy Vite production build
COPY --from=builder /app/dist .

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
