FROM node:10-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm ci --only-production

COPY . . 
RUN npm run deploy

FROM nginx:1.17.2-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/nginx.conf && nginx -g 'daemon off;'
