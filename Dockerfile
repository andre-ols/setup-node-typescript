FROM node:18.13.0 as base

FROM base as development
WORKDIR /app
COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .
COPY nodemon.json .
COPY ./src ./src
RUN yarn install

FROM base as production
WORKDIR /app
COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .
COPY ./src ./src
RUN yarn install --production
RUN yarn build
