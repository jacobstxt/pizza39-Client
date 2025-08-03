# Pizza39-App

Проєкт сайту доставки піци з фронтендом і бекендом.

---

## Структура

- `/client/my-jerseygoal-ts` — фронтенд (React).  
  Детальна інструкція в `client/my-jerseygoal-ts/README.md`.
- `/server/JearsyGoal_WebApi` — бекенд (ASP.NET Core Web API).  
  Документація всередині папки.

---

## Запуск

### Клонування репозиторію
```bash
git clone https://github.com/jacobstxt/pizza39-app.git
cd pizza39-app

### Запуск frontend
cd client/my-jerseygoal-ts
npm install
npm run dev

### Запуск backend
cd server/JearsyGoal_WebApi
dotnet restore
dotnet run

### Технології
```bash
Фронтенд: React, TypeScript, Vite (або CRA), CSS Modules / Styled Components
Бекенд: ASP.NET Core Web API, C#, Entity Framework Core
База даних: SQL Server (або інша, яку налаштуєш)
Контроль версій: Git, GitHub
Управління пакетами: npm (фронтенд), NuGet (бекенд)
Інструменти: Visual Studio / WebStorm , Postman для тестування API

###Налаштування
Для бекенду потрібно налаштувати підключення до бази даних у appsettings.json.
Використовуй .env файли для секретних ключів та інших конфігурацій.


