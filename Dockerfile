FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alphine
COPY --from=node /app/dist/angular-with-jsonserver /usr/share/nginx/html