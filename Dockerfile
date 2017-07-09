FROM alpine
# Update apk and install node
RUN apk update && apk upgrade
RUN apk add nodejs
# Create app directory
RUN mkdir -p /app
ADD package.json /app
WORKDIR /app
ENV HOME /app
ENV NODE_ENV development
# Install dependencies
RUN npm install
# Development Only
#VOLUME ["/mnt_vol"]
# Production
COPY . /app
EXPOSE 3000
CMD npm start

