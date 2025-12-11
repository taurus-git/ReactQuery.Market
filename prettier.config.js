/** @type {import("prettier").Config} */
module.exports = {
    // Общий стиль
    printWidth: 100,       // Максимальная длина строки
    tabWidth: 2,           // Размер таба
    useTabs: false,        // Используем пробелы, не табы
    semi: true,            // Точки с запятой в конце строк
    singleQuote: true,     // Одиночные кавычки в JS/TS
    quoteProps: 'as-needed',
    trailingComma: 'all',  // Запятая в конце объектов/массивов
    bracketSpacing: true,  // Пробелы внутри { a: 1 }
    bracketSameLine: false,
    arrowParens: 'always', // (x) => {...}

    // Специфика для разных файлов (если понадобится)
    overrides: [
        {
            files: ['*.json', '*.jsonc'],
            options: {
                singleQuote: false,
            },
        },
        {
            files: ['*.yml', '*.yaml'],
            options: {
                singleQuote: false,
            },
        },
    ],
};
