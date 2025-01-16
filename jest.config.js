/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testEnvironment: "jest-environment-jsdom", // Используем jsdom для браузерных тестов
  moduleFileExtensions: ["js", "json"], // Поддержка .js и .json файлов
  testMatch: [
    "**/?(*.)+(spec|test).[jt]s?(x)", // Поиск тестов по файлам с расширением .spec.js, .test.js
  ],
};

export default config;
