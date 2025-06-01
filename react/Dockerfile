FROM node:18-alpine AS builder

WORKDIR /app

COPY public/ /app/public
COPY src/ /app/src
COPY vite.config.ts /app/
COPY tsconfig.json /app/
COPY tsconfig.app.json /app/
COPY tsconfig.node.json /app/

COPY package.json /app/
COPY package-lock.json* /app/
COPY index.html /app/

RUN npm install
RUN npm run build

# Server
FROM nginx:1.24-alpine AS server
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf