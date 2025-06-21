# Используем официальный образ Node.js как основу
FROM node:24.2-slim

COPY package.json package-lock.json ./

RUN npm install

# Копируем остальной код приложения
COPY . .

# Экспозиция порта для приложения
EXPOSE 8000

CMD [ "node", "index.js" ]