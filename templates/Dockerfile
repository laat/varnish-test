FROM node
COPY . /app
WORKDIR /app
RUN yarn && yarn tsc
CMD [ "node", "src/server.js" ]