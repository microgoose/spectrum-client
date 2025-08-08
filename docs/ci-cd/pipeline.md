# npm audit

Команда ```npm audit``` — это встроенный инструмент безопасности в npm, который сканирует зависимости вашего проекта на наличие известных уязвимостей.

```bash
  # Сканирует зависимости проекта на уязвимости
  $ npm audit

  # Безопасное автоматическое исправление уязвимостей
  $ npm audit fix

  # Принудительное исправление с риском breaking changes
  $ npm audit fix --force
```

# npm outdated 

Команда ```npm outdated``` - выводит список устаревших зависимостей проекта в формате.

```bash
  # Пример использования
  $ npm outdated --json

  # Пример вывода
  {
    "react": {
      "current": "18.2.0",
      "wanted": "18.2.1",
      "latest": "19.0.0",
      "location": "node_modules/react",
      "type": "dependencies"
    },
    "lodash": {
      "current": "4.17.21",
      "wanted": "4.17.21",
      "latest": "4.17.22",
      "location": "node_modules/lodash",
      "type": "devDependencies"
    }
  }
```
- ```current``` — текущая установленная версия
- ```wanted``` — максимальная версия
- ```latest``` — последняя версия в npm-реестре
- ```location``` — путь к пакету в ```node_modules```
- ```type``` — тип зависимости

# npm run lint

Команда ```npm run lint``` запускает статический анализ кода с помощью ESLint.
```bash
  # Базовая проверка
  $ npm run lint

  # Проверка с автоисправлением:
  $ npm run lint:fix
```

# npm run style-lint

Команда ```npm run style-lint``` - запускает проверку стилей (CSS/SCSS/Less) через Stylelint — линтер для CSS-кода, который:
- [X] Проверяет синтаксис
- [X] Следит за стилем кода (порядок свойств, форматирование)
- [X] Находит ошибки (дубликаты, невалидные значения)

```bash
  # Запуск проверки:
  $ npm run style-lint
  
  # Автоисправление ошибок:
  $ npm run style-lint:fix
  
  # Проверка конкретного файла:
  $ npm run style-lint -- src/styles/main.scss
```
# npm run type-check

Команда ```npm run type-check``` - запускает статическую проверку типов TypeScript в проекте.

Это критически важно для:
- [X] Обнаружения ошибок типизации до запуска кода
- [X] Проверки корректности интерфейсов и API
- [X] Предотвращения runtime-ошибок, связанных с типами

```bash
  # Однократная проверка:
  $ npm run type-check

  # Проверка конкретного файла:
  $ npm run type-check -- src/components/Button.tsx
```
