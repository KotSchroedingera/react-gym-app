# React Gym App

Приложение позволяет найти упражнения для тренировки и посмотреть информацию о них.  
https://react-gym-app.vercel.app/

## Замечание
Визуальный функционал не оптимизирован до конца. К сожалению, бесплатный лимит Rapid API составляет 500 запросов в месяц, и он существенно исчерпан. Решил оставить приложение в рабочем виде. 

## Команды

Запуск - npm start  
Билд = npm build

Переменные:  
REACT_APP_RAPID_API_KEY - ключ Rapid API

## Функционал

### Главная страница

- поиск по названию, группе мышц, оборудованию и части тела
- выбор части тела
- пагинатор

### Страница упражнения

- видео, демонстрирующие технику выполнения
- упражнения на ту же группу мышц
- упражнения с тем же оборудованием

## Технологии

- React
- React Router Dom
- Material UI

## API

- ExerciseDB https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/
- Youtube Search and Download https://rapidapi.com/h0p3rwe/api/youtube-search-and-download/
