FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Run the correct entry file
CMD ["node", "app.js"]

