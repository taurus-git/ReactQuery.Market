/// <reference types="react-scripts" />

// Для TypeScript понимал импорты SCSS/СSS модулей
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

// Для обычных CSS/SCSS (не модульных)
declare module '*.css';
declare module '*.scss';

// Для изображений и шрифтов
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';
declare module '*.woff';
declare module '*.woff2';
declare module '*.eot';
declare module '*.ttf';
declare module '*.otf';
