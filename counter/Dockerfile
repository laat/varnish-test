FROM node
COPY . /app
WORKDIR /app
RUN yarn && yarn webpack && yarn tsc
CMD [ "node", "src/server.js" ]