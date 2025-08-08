## Установка
Глобальная установка:
```bash
  $ npm install -g npm-check-updates
```

Локальное использование:
```bash
  $ npx ncu
```

Базовое использование

Проверка обновлений:
```bash
  $ ncu
```

Эта команда покажет список пакетов, требующих обновления, с указанием текущей и новой версии.

Типы обновлений
В соответствии с семантическим версионированием:
- Патч-обновления (зеленый цвет) — исправления ошибок
- Минорные обновления (голубой цвет) — новые функции без нарушения обратной совместимости
- Мажорные обновления (красный цвет) — критические изменения

Пример рабочего процесса
Проверка доступных обновлений:
```bash
ncu
```

Обновление патч-версий:
```bash
ncu -u -t patch
npm install
```

Обновление минорных версий:
```bash
ncu -u -t minor
npm install
```

Обновление мажорных версий (по одному пакету):
```bash
ncu -u -f package-name
npm install
```

"generate-report": "npm outdated --json | node -e \"process.stdin.on('data', data => { const json = JSON.parse(data.toString()); const cleanJson = JSON.stringify(json, null, 2); require('fs').writeFileSync('outdated-report.json', cleanJson); });\"",
