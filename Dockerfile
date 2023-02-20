FROM node:16-alpine AS build

RUN apk add --update nodejs npm curl

RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm i --no-progress

# Start application
ENTRYPOINT ["npm", "run", "start-app"]