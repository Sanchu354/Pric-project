FROM node:20 as build
WORKDIR /app
COPY package.json ./
RUN npm i
COPY . .
RUN npm run build

FROM node:20
WORKDIR /app
COPY --from=build /app /
CMD ["npm", "start"]
