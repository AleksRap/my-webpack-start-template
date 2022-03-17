# Webpack start template

Стартовый шаблон сборщика для быстрого начала разработки на TypeScript

### Скрипты

`npm run start` - запускает приложение в режиме разработки с установкой 
переменных окружения из файла .env.development, браузер откроется 
автоматически. Подробнее в разделе [Environment variables](###Environment variables)

`npm run build` - собирает билд приложения с установкой переменных 
окружения из файла .env.production. Подробнее в разделе
[Environment variables](###Environment variables)

`npm run gen` - запускает генератор файлов проекта согласно указанным 
шаблонам. Подробнее в разделе [Template generator](###Template generators)

`npm run tsc` - запускает проверку ts файлов без создания выходных файлов,
т.к. за транспиляцию в проекте отвечает babel. Подробнее в разделе 
[TypeScript](###TypeScript)

`npm run lint` - запускает линтинг проекта в папке src, файлов с 
расширением .ts, с автоматическим исправлением, если это возможно. 
Подробнее в разделе [Eslint](###Eslint)

`npm run stylelint` - запускает линтинг стилей проекта, файлов с 
расширением .scss, с автоматическим исправлением, если это возможно. 
Подробнее в разделе [Stylelint](###Stylelint)

`npm run prepare` - устанавливает хуки husky при выполнении команды `npm i`.
Подробнее в разделе [Hooks](###Hooks)


### Babel
В билдере используется: 

##### Пресеты: 
- `@babel/preset-env` - основные настройки babel. Подробнее: https://babeljs.io/docs/en/babel-preset-env,

###### Параметры:

`debug: true` - для отображения списка полифиллов, поддерживаемых браузеров 
и подключаемых модулей преобразования

`useBuiltIns: "usage"` - добавляет определенный импорт для полифиллов, когда 
они используются в каждом файле. Мы воспользуемся тем, что упаковщик 
загрузит один и тот же полифилл только один раз

`corejs: 3` - указывает версию используемого corejs

- `@babel/preset-typescript` - Настройки касающиеся ts. Подробнее: https://babeljs.io/docs/en/babel-preset-typescript,

##### Плагины:
- `module-resolver` - https://github.com/tleunen/babel-plugin-module-resolver,

###### Параметры:

`root: ["."]` - указывает на корневую папку для построения путей

`alias: { [key: string]: string }` - добавляет алиасы путей

---

### TypeScript

---

### Environment variables

---

### Browsers

---

### Eslint

---

### Prettier

---

### Stylelint

---

### Hooks

---

### LintStage

---

### Template generator

---

### Webpack config

