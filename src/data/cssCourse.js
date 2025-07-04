export const cssCourseData = {
  title: "CSS & Design",
  description: "From basic styling to advanced layouts, learn how to make your web pages beautiful and responsive with modern CSS techniques.",
  level: "Beginner",
  duration: "~6 hours",
  prerequisites: "Basic HTML knowledge",
  certificate: "Available upon completion",
  topics: [
    {
      id: 1,
      title: "Introduction to CSS",
      difficulty: "Beginner",
      duration: "30 min",
      completed: true,
      description: "Дізнайтеся, що таке CSS, як він працює та різні способи включення CSS у ваші HTML-документи.",
      learningPoints: [
        "Що таке CSS та для чого він використовується",
        "Способи підключення CSS до HTML",
        "Структура CSS правил",
        "Коментарі в CSS"
      ],
      theory: {
        "Що таке CSS?": "CSS (Cascading Style Sheets) - це мова стилів, яка використовується для опису зовнішнього вигляду та форматування HTML-документів. CSS дозволяє розробникам контролювати візуальне представлення веб-сторінок, включаючи кольори, шрифти, розміри, розташування елементів та багато іншого.",
        "Способи підключення CSS": `Зовнішні стилі:
<link rel="stylesheet" href="styles.css">

Внутрішні стилі:
<style></style>

Inline-стилі:
<h1 style="color: #333; text-align: center">`,
        "Переваги зовнішніх стилів": "Зовнішні CSS файли можна кешувати браузером, використовувати на декількох сторінках, легше підтримувати та оновлювати. Це найкращий спосіб організації стилів для більшості проектів."
      },
      codeExample: `/* Зовнішній CSS файл (styles.css) */
/* Це коментар в CSS */

/* Базові стилі для body */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f5f5f5;
}

/* Стилі для заголовків */
h1 {
    color: #333;
    text-align: center;
    font-size: 2rem;
}

/* Стилі для параграфів */
p {
    line-height: 1.6;
    color: #666;
    margin-bottom: 1rem;
}`
    },
    {
      id: 2,
      title: "CSS Selectors & Specificity",
      difficulty: "Beginner",
      duration: "40 min",
      completed: true,
      description: "Опануйте селектори CSS, зрозумійте специфіку, дізнайтеся про каскад та успадкування.",
      learningPoints: [
        "Основні типи селекторів",
        "Комбіновані селектори",
        "Псевдокласи та псевдоелементи",
        "Специфічність та каскадність"
      ],
      theory: {
        "Типи селекторів": `Прості селектори - вибір елементів на основі імені, ідентифікатору, класу
Комбінаторні селектори - вибір елементів на основі визначених відношень між ними
Селектори псевдокласів - вибір елементів на основі визначеного стану
Селектори псевдоелементів - вибір і стилізація частини елемента
Селектори атрибутів - вибір елементів на основі атрибуту або значення атрибуту`,
        "Комбінатори": `Дочірні: вибирає прямі дочірні елементи (div > p)
Сусідні: вибирає елементи, що йдуть одразу після іншого елемента (h1 + p)
Загальні: вибирає всі елементи, що слідують за іншим елементом (h1 ~ p)
Нащадки: вибирає всі нащадки (div p)`,
        "Специфічність": "Це алгоритм, що використовується браузерами для визначення того оголошення CSS, яке найбільше відповідає елементові. Розраховується за формулою: inline стилі (1000) > ID (100) > класи/атрибути/псевдокласи (10) > елементи/псевдоелементи (1)",
        "Каскадність та наслідування": `Під каскадом розуміється одночасне застосування різних стильових правил до елементів документа.

Концепція спадкування полягає в тому, що деякі властивості CSS успадковують за замовчуванням значення встановлені для батьківського елемента поточного елемента, а деякі не успадкують.`
      },
      codeExample: `/* Селектор елемента */
p { color: blue; }

/* Селектор класу */
.highlight { background-color: yellow; }

/* Селектор ID */
#header { font-size: 24px; }

/* Селектор атрибута */
input[type="text"] { border: 1px solid #ccc; }

/* Комбіновані селектори */
div > p { margin-left: 20px; } /* Дочірні */
h1 + p { font-weight: bold; } /* Сусідні */
h1 ~ p { color: gray; } /* Загальні сусідні */

/* Псевдокласи */
a:hover { color: red; }
li:nth-child(odd) { background-color: #f0f0f0; }
input:focus { outline: 2px solid blue; }

/* Псевдоелементи */
p::before { content: "★ "; }
p::after { content: " ✓"; }
p::first-line { font-weight: bold; }`
    },
    {
      id: 3,
      title: "Box Model & Layout Fundamentals",
      difficulty: "Beginner",
      duration: "45 min",
      completed: true,
      description: "Зрозумійте модель блоків CSS, дізнайтеся про різні типи відображення та опануйте позиціонування.",
      learningPoints: [
        "Модель коробки (Box Model)",
        "Властивість box-sizing",
        "Типи відображення (display)",
        "Позиціонування елементів"
      ],
      theory: {
        "Box Model": `Це концепція в CSS, яка визначає структуру і розміри елементів на веб-сторінці. Складається з чотирьох частин:

Content (вміст): власне вміст елемента
Padding (відступ): внутрішній відступ елемента
Border (рамка): рамка, що оточує внутрішню частину елемента
Margin (поле): зовнішній відступ елемента`,
        "Box-sizing": `Content-box - стандартна поведінка, width і height задають тільки розміри вмісту
Border-box - width і height включають padding і border, що дозволяє легко контролювати загальні розміри елемента`,
        "Позиціонування": `Static - стандартне позиціонування
Relative - позиціювання щодо самого себе
Absolute - позиціювання відносно найближчого відносно позиціонованого предка
Fixed - позиціювання відносно viewport
Sticky - липке позиціювання, змінює значення з relative на fixed під час прокручування`,
        "Z-index": "Визначає положення елемента по осі z. Елементи з більшим z-index перекривають елементи з меншим. Працює тільки для позиціонованих елементів."
      },
      codeExample: `/* Box Model */
.box {
    width: 200px;          /* Ширина контенту */
    height: 100px;         /* Висота контенту */
    padding: 20px;         /* Внутрішній відступ */
    border: 2px solid #333; /* Рамка */
    margin: 10px;          /* Зовнішній відступ */
    
    /* Box-sizing */
    box-sizing: border-box; /* Включає padding і border в width/height */
}

/* Display types */
.block { display: block; }
.inline { display: inline; }
.inline-block { display: inline-block; }
.none { display: none; }

/* Позиціонування */
.relative {
    position: relative;
    top: 10px;
    left: 10px;
}

.absolute {
    position: absolute;
    top: 50px;
    right: 20px;
    z-index: 10;
}

.fixed {
    position: fixed;
    bottom: 0;
    right: 0;
}

.sticky {
    position: sticky;
    top: 0;
}`
    },
    {
      id: 4,
      title: "Flexbox Layout System",
      difficulty: "Intermediate",
      duration: "50 min",
      completed: true,
      description: "Master Flexbox для створення гнучких та адаптивних одновимірних макетів.",
      learningPoints: [
        "Основи Flexbox",
        "Flex-контейнер та flex-елементи",
        "Властивості flex-контейнера",
        "Властивості flex-елементів"
      ],
      theory: {
        "Що таке Flexbox": "Flexbox найкраще підходить для простих одновимірних макетів, таких як вирівнювання елементів в одному рядку або стовпці, адаптивних компонентів, вирівнювання елементів та управління простором між ними.",
        "Flex-контейнер та flex-елемент": `Flex-контейнер встановлює новий гнучкий контекст форматування для його вмісту. Flex-контейнером є той елемент, у якого задано властивість display: flex або display: inline-flex.

Flex-елементом є кожен дочірній елемент flex-контейнера.`,
        "Основні властивості контейнера": `flex-direction - напрямок головної осі
justify-content - вирівнювання по головній осі
align-items - вирівнювання по поперечній осі
flex-wrap - перенесення елементів
gap - проміжки між елементами`,
        "Властивості flex-елементів": `flex-grow - коефіцієнт росту
flex-shrink - коефіцієнт скорочення
flex-basis - базовий розмір
align-self - індивідуальне вирівнювання`
      },
      codeExample: `/* Flex контейнер */
.container {
    display: flex;
    
    /* Напрямок */
    flex-direction: row; /* row, column, row-reverse, column-reverse */
    
    /* Вирівнювання по головній осі */
    justify-content: center; /* flex-start, flex-end, center, space-between, space-around, space-evenly */
    
    /* Вирівнювання по поперечній осі */
    align-items: center; /* flex-start, flex-end, center, stretch, baseline */
    
    /* Перенесення */
    flex-wrap: wrap; /* nowrap, wrap, wrap-reverse */
    
    /* Проміжки */
    gap: 20px;
    
    /* Висота контейнера */
    height: 400px;
}

/* Flex елементи */
.item {
    /* Гнучкість */
    flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
    
    /* Або окремо */
    flex-grow: 1;     /* Коефіцієнт росту */
    flex-shrink: 0;   /* Коефіцієнт скорочення */
    flex-basis: 200px; /* Базовий розмір */
    
    /* Індивідуальне вирівнювання */
    align-self: flex-end;
}

/* Центрування div за допомогою Flexbox */
.center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}`
    },
    {
      id: 5,
      title: "CSS Grid Layout System",
      difficulty: "Intermediate",
      duration: "55 min",
      completed: true,
      description: "Вивчіть CSS Grid для створення складних двовимірних макетів з точним контролем.",
      learningPoints: [
        "Основи CSS Grid",
        "Визначення сітки",
        "Розміщення елементів в сітці",
        "Адаптивні сітки"
      ],
      theory: {
        "Що таке CSS Grid": "Grid найкраще підходить для складних двовимірних макетів, де потрібно розмістити елементи у сітці, задавати розміри і позиціювання як по горизонталі, так і по вертикалі.",
        "Основні поняття": `Grid Container - батьківський елемент з display: grid
Grid Items - дочірні елементи grid контейнера
Grid Lines - лінії, що розділяють сітку
Grid Tracks - рядки та стовпці сітки
Grid Cells - окремі комірки сітки
Grid Areas - прямокутні області сітки`,
        "Властивості контейнера": `grid-template-columns - визначає стовпці
grid-template-rows - визначає рядки
grid-template-areas - визначає іменовані області
gap - проміжки між елементами
justify-items - вирівнювання елементів по горизонталі
align-items - вирівнювання елементів по вертикалі`,
        "Одиниці виміру Grid": `fr (fraction) - частка доступного простору
repeat() - повторення шаблону
minmax() - мінімальне та максимальне значення
auto-fit / auto-fill - автоматичне підлаштування`
      },
      codeExample: `/* Grid контейнер */
.grid-container {
    display: grid;
    
    /* Визначення стовпців та рядків */
    grid-template-columns: 1fr 2fr 1fr; /* 3 стовпці */
    grid-template-rows: 100px auto 50px; /* 3 рядки */
    
    /* Або з repeat */
    grid-template-columns: repeat(3, 1fr);
    
    /* Адаптивна сітка */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    
    /* Проміжки */
    gap: 20px; /* або grid-gap */
    
    /* Іменовані області */
    grid-template-areas: 
        "header header header"
        "sidebar main main"
        "footer footer footer";
}

/* Розміщення елементів */
.grid-item {
    /* За номерами ліній */
    grid-column: 1 / 3; /* з 1 до 3 стовпця */
    grid-row: 2 / 4;    /* з 2 до 4 рядка */
    
    /* Або коротко */
    grid-area: 1 / 2 / 3 / 4; /* row-start / column-start / row-end / column-end */
}

/* Іменовані області */
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

/* Вирівнювання в комірці */
.centered-item {
    justify-self: center; /* по горизонталі */
    align-self: center;   /* по вертикалі */
}`
    },
    {
      id: 6,
      title: "Responsive Design & Media Queries",
      difficulty: "Intermediate",
      duration: "45 min",
      completed: false,
      description: "Створюйте адаптивні веб-сайти, які чудово працюють на всіх пристроях, використовуючи медіа-запити та гнучкі блоки.",
      learningPoints: [
        "Медіа-запити та їх синтаксис",
        "Одиниці виміру (px, em, rem, %, vw, vh)",
        "Типи верстки (гумова, адаптивна, респонсивна)",
        "Mobile-first підхід"
      ],
      theory: {
        "Медіа-запити": "Медіа-запити (media queries) - це потужний інструмент CSS, який дозволяє застосовувати стилі до елементів веб-сторінки залежно від характеристик пристрою, на якому ця сторінка переглядається. Вони є основним компонентом для створення адаптивного дизайну.",
        "Одиниці виміру": `px - базова абсолютна одиниця виміру
em - одиниця виміру відносно поточного розміру шрифту
rem - одиниця виміру відносно розміру шрифту елемента <html>
% - відсотки від батьківського елемента
vw/vh - відсотки від ширини/висоти viewport
vmin/vmax - мінімальний/максимальний розмір viewport`,
        "Типи верстки": `Гумова верстка - блоки змінюють ширину залежно від розміру вікна браузера і часто задаються у відсотках.

Адаптивна верстка - реалізується за допомогою медіа правил. Для кожного окремого розміру екрана відображається різна верстка.

Респонсивна верстка - поєднання гумової та адаптивної верстки. Найскладніша в реалізації, але найприйнятніший результат.`,
        "Популярні breakpoints": `Mobile: 320px - 768px
Tablet: 768px - 1024px
Desktop: 1024px і більше
Large Desktop: 1440px і більше`
      },
      codeExample: `/* Mobile-first підхід */
/* Базові стилі для мобільних */
.container {
    width: 100%;
    padding: 10px;
    font-size: 14px;
}

/* Tablet */
@media screen and (min-width: 768px) {
    .container {
        max-width: 750px;
        margin: 0 auto;
        padding: 20px;
        font-size: 16px;
    }
}

/* Desktop */
@media screen and (min-width: 1024px) {
    .container {
        max-width: 1200px;
        padding: 30px;
        font-size: 18px;
    }
}

/* Адаптивні зображення */
img {
    max-width: 100%;
    height: auto;
}

/* Різні одиниці виміру */
.responsive-text {
    font-size: clamp(1rem, 2.5vw, 2rem); /* Мін, бажаний, макс */
}

.viewport-units {
    width: 50vw;  /* 50% від ширини viewport */
    height: 100vh; /* 100% від висоти viewport */
}

/* Медіа-запити для різних пристроїв */
@media screen and (orientation: landscape) {
    /* Альбомна орієнтація */
}

@media print {
    /* Стилі для друку */
}

@media (prefers-color-scheme: dark) {
    /* Темна тема */
    body { background: #333; color: #fff; }
}`
    },
    {
      id: 7,
      title: "CSS Variables & Advanced Features",
      difficulty: "Intermediate",
      duration: "40 min",
      completed: false,
      description: "Вивчіть користувацькі властивості CSS, розширені функції та сучасні можливості CSS.",
      learningPoints: [
        "CSS-перемінні (custom properties)",
        "CSS функції (calc, clamp, min, max)",
        "Кольори та градієнти",
        "Сучасні CSS властивості"
      ],
      theory: {
        "CSS-перемінні": `CSS-перемінні (також відомі як кастомні властивості) дозволяють зберігати значення CSS властивостей у змінних і використовувати їх повторно в стилях.

Оголошення: --назва-змінної
Використання: var(--назва-змінної, значення-за-замовчуванням)`,
        "CSS функції": `calc() - дозволяє виконувати математичні обчислення
clamp() - обмежує значення між мінімумом і максимумом
min() - повертає найменше значення
max() - повертає найбільше значення
minmax() - для Grid, встановлює мін і макс значення`,
        "Кольорові простори": `hex - #ff0000
rgb() - rgb(255, 0, 0)
rgba() - rgba(255, 0, 0, 0.5)
hsl() - hsl(0, 100%, 50%)
hsla() - hsla(0, 100%, 50%, 0.5)`,
        "Градієнти": `linear-gradient() - лінійний градієнт
radial-gradient() - радіальний градієнт
conic-gradient() - конічний градієнт
repeating-linear-gradient() - повторюваний лінійний`
      },
      codeExample: `/* CSS перемінні */
:root {
    /* Глобальні перемінні */
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --font-size-base: 16px;
    --spacing-unit: 8px;
    --border-radius: 4px;
}

.component {
    /* Локальні перемінні */
    --component-bg: #f8f9fa;
    
    background-color: var(--component-bg);
    color: var(--primary-color);
    font-size: var(--font-size-base);
    padding: calc(var(--spacing-unit) * 2);
    border-radius: var(--border-radius);
}

/* CSS функції */
.responsive-container {
    /* calc() для складних обчислень */
    width: calc(100% - 40px);
    height: calc(100vh - 60px);
    
    /* clamp() для адаптивної типографіки */
    font-size: clamp(1rem, 2.5vw, 2.5rem);
    
    /* min() та max() */
    width: min(90%, 1200px);
    height: max(300px, 50vh);
}

/* Градієнти */
.gradient-bg {
    /* Лінійний градієнт */
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    
    /* Радіальний градієнт */
    background: radial-gradient(circle, #ff6b6b 0%, #4ecdc4 100%);
    
    /* Множинні градієнти */
    background: 
        linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 30%),
        linear-gradient(-45deg, #ff6b6b, #4ecdc4);
}

/* Сучасні властивості */
.modern-card {
    /* Backdrop filter */
    backdrop-filter: blur(10px);
    
    /* Accent color */
    accent-color: var(--primary-color);
    
    /* Scroll behavior */
    scroll-behavior: smooth;
    
    /* Aspect ratio */
    aspect-ratio: 16 / 9;
}`
    },
    {
      id: 8,
      title: "Animations & Transitions",
      difficulty: "Intermediate",
      duration: "50 min",
      completed: false,
      description: "Створюйте плавні анімації та переходи, щоб покращити взаємодію з користувачем.",
      learningPoints: [
        "CSS переходи (transitions)",
        "CSS анімації (animations)",
        "Ключові кадри (@keyframes)",
        "Performance та оптимізація анімацій"
      ],
      theory: {
        "CSS переходи": `CSS-переходи дозволяють плавно змінювати значення CSS-властивостей протягом заданого часу при виникненні певної події.

Основні властивості:
transition-property - які властивості анімувати
transition-duration - тривалість анімації
transition-timing-function - швидкість зміни анімації
transition-delay - затримка перед початком`,
        "CSS анімації": `CSS-анімації дозволяють створювати більш складні та контрольовані анімаційні ефекти, визначаючи серії ключових кадрів (@keyframes).

Основні властивості:
animation-name - ім'я анімації
animation-duration - тривалість
animation-timing-function - функція часу
animation-delay - затримка
animation-iteration-count - кількість повторень
animation-direction - напрямок
animation-fill-mode - стилі до і після виконання`,
        "Функції часу": `ease - повільний старт, швидка середина, повільний кінець
ease-in - повільний старт
ease-out - повільний кінець
ease-in-out - повільний старт і кінець
linear - рівномірна швидкість
cubic-bezier() - кастомна функція`,
        "Performance анімацій": `Оптимізовані властивості (не викликають reflow/repaint):
- transform (translate, rotate, scale)
- opacity
- filter

Уникайте анімації:
- width, height, top, left
- background-color (краще використовувати opacity)
- border, margin, padding`
      },
      codeExample: `/* CSS Transitions */
.button {
    background-color: #3498db;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    
    /* Transition для всіх властивостей */
    transition: all 0.3s ease;
    
    /* Або для конкретних властивостей */
    transition: 
        background-color 0.3s ease,
        transform 0.2s ease-out;
}

.button:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* CSS Animations */
@keyframes slideIn {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
}

.animated-element {
    animation: slideIn 1s ease-out;
}

.bounce-on-hover:hover {
    animation: bounce 1s ease infinite;
}

/* Складна анімація */
.loading-spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Анімація з затримкою для послідовності */
.staggered-animation .item {
    opacity: 0;
    animation: fadeInUp 0.5s ease forwards;
}

.staggered-animation .item:nth-child(1) { animation-delay: 0.1s; }
.staggered-animation .item:nth-child(2) { animation-delay: 0.2s; }
.staggered-animation .item:nth-child(3) { animation-delay: 0.3s; }

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}`
    },
    {
      id: 9,
      title: "Visual Effects & Styling",
      difficulty: "Intermediate",
      duration: "35 min",
      completed: false,
      description: "Вивчіть просунуті візуальні ефекти, включаючи фільтри, тіні та сучасні техніки стилізації.",
      learningPoints: [
        "Фільтри та візуальні ефекти",
        "Тіні (box-shadow, text-shadow)",
        "Трансформації (transform)",
        "Типографіка та веб-шрифти"
      ],
      theory: {
        "CSS фільтри": `Filter властивість застосовує графічні ефекти до елементів:
blur() - розмиття
brightness() - яскравість
contrast() - контрастність
grayscale() - сірий колір
hue-rotate() - поворот відтінку
saturate() - насиченість
sepia() - сепія ефект
drop-shadow() - тінь`,
        "Тіні": `Box-shadow - додає тінь до елемента
Синтаксис: h-offset v-offset blur spread color inset

Text-shadow - додає тінь до тексту
Синтаксис: h-offset v-offset blur color`,
        "Трансформації": `Transform дозволяє змінювати елементи:
translate() - переміщення
rotate() - обертання
scale() - масштабування
skew() - нахил
matrix() - комплексна трансформація`,
        "Типографіка": `font-family - сімейство шрифтів
font-weight - вага шрифта
font-style - стиль шрифта
line-height - висота рядка
letter-spacing - відстань між символами
text-align - вирівнювання тексту`
      },
      codeExample: `/* Фільтри */
.image-effects {
    /* Розмиття */
    filter: blur(5px);
    
    /* Множинні фільтри */
    filter: 
        brightness(1.2) 
        contrast(1.1) 
        saturate(1.3);
    
    /* Hover ефект */
    transition: filter 0.3s ease;
}

.image-effects:hover {
    filter: none;
}

/* Тіні */
.card-shadow {
    /* Проста тінь */
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    
    /* Множинні тіні */
    box-shadow: 
        0 1px 3px rgba(0,0,0,0.12),
        0 1px 2px rgba(0,0,0,0.24);
    
    /* Внутрішня тінь */
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
}

.text-shadow {
    /* Тінь для тексту */
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    
    /* Множинні тіні для тексту */
    text-shadow: 
        1px 1px 2px rgba(0,0,0,0.5),
        0 0 10px rgba(255,255,255,0.3);
}

/* Трансформації */
.transform-element {
    /* Переміщення */
    transform: translate(50px, 100px);
    
    /* Обертання */
    transform: rotate(45deg);
    
    /* Масштабування */
    transform: scale(1.5);
    
    /* Комбінація */
    transform: 
        translate(50px, 50px) 
        rotate(45deg) 
        scale(1.2);
    
    /* 3D трансформації */
    transform: rotateX(45deg) rotateY(45deg);
    transform-style: preserve-3d;
}

/* Типографіка */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

.typography {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: 0.02em;
    
    /* Адаптивна типографіка */
    font-size: clamp(1rem, 2.5vw, 1.5rem);
}

.heading {
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.02em;
    
    /* Градієнтний текст */
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Backdrop filter */
.glass-effect {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
}`
    },
    {
      id: 10,
      title: "CSS Best Practices & Optimization",
      difficulty: "Advanced",
      duration: "40 min",
      completed: false,
      description: "Вивчіть методології CSS, методи оптимізації та найкращі практики для створення зручного для обслуговування коду.",
      learningPoints: [
        "CSS методології (BEM, OOCSS)",
        "Оптимізація та performance",
        "CSS препроцесори",
        "Кращі практики та організація коду"
      ],
      theory: {
        "CSS методології": `BEM (Block Element Modifier) - методологія іменування класів:
.block__element--modifier

OOCSS (Object-Oriented CSS) - об'єктно-орієнтований підхід

SMACSS - масштабована та модульна архітектура

Atomic CSS - атомарний підхід з мікро-класами`,
        "Performance оптимізація": `Мінімізація CSS файлів
Видалення невикористаного CSS
Оптимізація селекторів
Використання CSS sprites
Критичні стилі inline
Завантаження некритичних стилів асинхронно`,
        "CSS препроцесори": `Sass/SCSS - найпопулярніший препроцесор
- Змінні, вкладеність, міксини
- Функції та операції
- Імпорти та модулі

PostCSS - інструмент для трансформації CSS
- Автопрефікси
- Майбутні CSS властивості
- Оптимізація`,
        "Організація коду": `Структура файлів:
- Базові стилі (reset, typography)
- Компоненти
- Утиліти
- Змінні та конфігурація

Правила іменування:
- Використовуйте семантичні назви
- Уникайте вкладеності глибше 3 рівнів
- Групуйте схожі властивості`
      },
      codeExample: `/* BEM методологія */
/* Block */
.card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Element */
.card__header {
    padding: 20px;
    border-bottom: 1px solid #eee;
}

.card__title {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
}

.card__content {
    padding: 20px;
}

/* Modifier */
.card--large {
    max-width: 500px;
}

.card--featured {
    border: 2px solid #3498db;
}

/* SCSS/Sass приклад */
// Змінні
$primary-color: #3498db;
$border-radius: 8px;
$spacing-unit: 8px;

// Міксин
@mixin button-style($bg-color, $text-color: white) {
    background-color: $bg-color;
    color: $text-color;
    border: none;
    border-radius: $border-radius;
    padding: ($spacing-unit * 2) ($spacing-unit * 3);
    cursor: pointer;
    
    &:hover {
        background-color: darken($bg-color, 10%);
    }
}

// Використання
.btn-primary {
    @include button-style($primary-color);
}

// Вкладеність
.navigation {
    background: white;
    
    &__list {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    
    &__item {
        margin-right: $spacing-unit * 2;
        
        &:last-child {
            margin-right: 0;
        }
    }
    
    &__link {
        text-decoration: none;
        color: #333;
        
        &:hover,
        &--active {
            color: $primary-color;
        }
    }
}

/* Утилітарні класи */
.u-margin-bottom-small { margin-bottom: 1rem; }
.u-margin-bottom-medium { margin-bottom: 2rem; }
.u-margin-bottom-large { margin-bottom: 3rem; }

.u-text-center { text-align: center; }
.u-text-left { text-align: left; }
.u-text-right { text-align: right; }

/* Критичні стилі для швидкого завантаження */
.above-fold {
    /* Стилі для контенту "above the fold" */
    display: block;
    visibility: visible;
}

/* Оптимізація selectors */
/* ❌ Неефективно */
div#content .sidebar ul li a { }

/* ✅ Ефективно */
.sidebar-link { }

/* CSS для різних пристроїв */
@media (max-width: 768px) {
    .card {
        margin: 10px;
        border-radius: 4px;
    }
}

@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}`
    }
  ]
};