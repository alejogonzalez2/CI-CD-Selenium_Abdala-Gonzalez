FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm build run
EXPOSE 80
EXPOSE 4200
CMD ["npm", "start"]
