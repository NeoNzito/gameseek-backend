# 🎮 College Game Info Explorer

![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-black?logo=express)
![RAWG](https://img.shields.io/badge/RAWG-Video%20Games%20DB-orange)
![Axios](https://img.shields.io/badge/Axios-HTTP-blue)
![dotenv](https://img.shields.io/badge/dotenv-important?logo=dotenv)

> A Node.js & TypeScript application that integrates the RAWG Video Games Database API to fetch and display comprehensive game information.

---

## 🚀 Features

- Fetch paginated lists of games with filters (genre, release date, rating, etc.)
- Search games by name
- View detailed metadata for individual games (description, release date, ratings, platforms, genres, screenshots, trailers, and more)
- Clean, type-safe service layer using Axios and TypeScript interfaces

## 🛠️ Tech Stack

| Technology         | Badge                                                    |
| ------------------ | -------------------------------------------------------- |
| TypeScript         | ![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)      |
| Node.js            | ![Node.js](https://img.shields.io/badge/Node.js-green?logo=node.js)              |
| Express.js         | ![Express](https://img.shields.io/badge/Express.js-black?logo=express)           |
| RAWG API           | ![RAWG](https://img.shields.io/badge/RAWG-Video%20Games%20DB-orange)             |
| Axios              | ![Axios](https://img.shields.io/badge/Axios-HTTP-blue)                          |
| dotenv             | ![dotenv](https://img.shields.io/badge/dotenv-important?logo=dotenv)             |
| ESLint             | ![ESLint](https://img.shields.io/badge/ESLint-linting-blue?logo=eslint)          |
| Prettier           | ![Prettier](https://img.shields.io/badge/Prettier-formatting-orange?logo=prettier) |


## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/NeoNzito/gameseek-backend.git
   cd gameseek-backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   - Create a `.env` file in the project root:
     ```bash
     RAWG_API_KEY=your_rawg_api_key_here
     PORT=3000
     ```

4. **Run in development mode**:
   ```bash
   npm run dev
   ```

   - This uses `ts-node` and watches for file changes.

5. **Build & run production**:
   ```bash
   npm run build
   npm start
   ```

## 🛣️ API Routes

Base path: `/api/games`

| Method | Endpoint       | Description                                  |
| ------ | -------------- | -------------------------------------------- |
| GET    | `/`            | Fetch paginated list of games (with filters) |
| GET    | `/search`      | Search games by name (query param: `q`)      |
| GET    | `/:id`         | Fetch detailed info for a single game by ID  |

**Example**:
```
GET http://localhost:3000/api/games/search?q=elden+ring&page=1&pageSize=10
```

## 📑 Environment Variables

| Variable      | Description                    | Required           |
| ------------- | ------------------------------ | ------------------ |
| `RAWG_API_KEY`| Your RAWG API key              | Yes                |
| `PORT`        | Port number for the server     | No (default: 3000) |


## 📄 License

This project is licensed under the [MIT License](LICENSE).

