FROM node:16.13.1-alpine

COPY src /opt/app

RUN apk update && apk add vim

CMD ["node", "/opt/app/index.js"]
