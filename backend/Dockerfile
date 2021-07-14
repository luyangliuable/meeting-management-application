FROM node:14-alpine
ENV PORT 8081
EXPOSE 8081
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install -g nodemon
RUN npm install

ENTRYPOINT ["nodemon", "/usr/src/app/app.js"]
