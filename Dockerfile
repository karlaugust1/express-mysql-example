FROM node:12
WORKDIR /usr/src/marcafacil
COPY ./package.json .
RUN npm install --only=prod
COPY ./dist ./dist
EXPOSE 3000
CMD npm start