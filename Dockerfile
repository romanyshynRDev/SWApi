# Вибираємо офіційний Node.js образ для білду
FROM node:18-alpine AS build

# Встановлюємо робочу директорію в контейнері
WORKDIR /app

# Копіюємо package.json та package-lock.json
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо решту файлів
COPY . .

# Збираємо додаток
RUN npm run build

# Створюємо новий образ для продакшн-сервера
FROM nginx:alpine

# Копіюємо білд у папку Nginx
COPY --from=build /app/build /usr/share/nginx/html


# Порти для доступу
EXPOSE 80

# Запускаємо Nginx
CMD ["nginx", "-g", "daemon off;"]
