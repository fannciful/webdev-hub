export const htmlCourseData = {
  title: "HTML Basics",
  description: "Learn the structure of web pages, semantic tags, and modern HTML5 features. This comprehensive course will take you from beginner to confident HTML developer.",
  level: "Beginner",
  duration: "~4 hours",
  prerequisites: "None",
  certificate: "Available upon completion",
  topics: [
    {
      id: 1,
      title: "Introduction to HTML",
      difficulty: "Beginner",
      duration: "20 min",
      completed: true,
      description: "Дізнайтеся, що таке HTML, його історію та як він працює як основа веб-розробки.",
      learningPoints: [
        "Що таке HTML та для чого він використовується",
        "Розуміння тегів, атрибутів та елементів в HTML",
        "Основні принципи структури HTML-документа",
        "Поняття потоку документа в HTML"
      ],
      theory: {
        "Що таке HTML?": "HTML - це стандартизована мова розмітки документів для перегляду вебсторінок у браузері.",
        "Теги, атрибути та елементи": `Тег - це елемент мови розмітки гіпертексту, записаний у кутових дужках.
Атрибути - надають додаткову інформацію про html елементи (href, width, height, alt, src, lang).
HTML елемент - це все від початкового тегу до кінцевого тегу.`,
        "Потік документа": "Потоком документа HTML називається порядок виведення елементів на сторінку. У звичайному вигляді всі блоки виводяться у порядку, у якому записані всередині HTML-документа. Так потік можна змінювати за допомогою css правил, наприклад, за допомогою position: absolute."
      },
      codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first HTML document.</p>
</body>
</html>`
    },
    {
      id: 2,
      title: "HTML Document Structure",
      difficulty: "Beginner",
      duration: "25 min",
      completed: true,
      description: "Розуміти базову структуру HTML-документа та призначення кожного елемента.",
      learningPoints: [
        "DOCTYPE declaration та його призначення",
        "Структура HTML, head та body елементів",
        "Метадані та їх важливість",
        "Правильне налаштування HTML-документа"
      ],
      theory: {
        "DOCTYPE": `DOCTOTYPE (Document Type Declaration) - це інструкція для веб-браузера, яка вказує тип документа та версію HTML, що використовується. Вона завжди розташовується на першому рядку HTML-документа. 
        Основна мета - встановити режим сумісності для браузера, забезпечуючи коректне відображення сторінки.`,
        "Метадані": "Метадані в HTML надають інформацію про сам документ, таку як його автор, опис, ключові слова, налаштування символів тощо. Метадані задаються всередині тегу <head>."
      },
      codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Page description">
    <meta name="keywords" content="HTML, CSS, JavaScript">
    <meta name="author" content="Your Name">
    <title>Document Title</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>`
    },
    {
      id: 3,
      title: "Text Elements & Formatting",
      difficulty: "Beginner",
      duration: "30 min",
      completed: false,
      description: "Дізнайтеся про різні текстові елементи та способи форматування текстового вмісту в HTML.",
      learningPoints: [
        "Заголовки (h1-h6) та їх ієрархія",
        "Різниця між семантичними та стилістичними тегами",
        "Використання div та span елементів",
        "Блокові та рядкові елементи"
      ],
      theory: {
        "Типи заголовків": `HTML підтримує шість різних типів заголовків. Ці заголовки відрізняються за розміром шрифту, починаючи з найбільшого. 
        h1 - найбільший заголовок, h6 - найменший заголовок.`,
        "Семантичні vs стилістичні теги": `< b > і < strong >: обидва теги роблять текст жирним, але мають різне семантичне значення. 
        < b > використовується для стилізації тексту без особливого значення
        < strong > підкреслює важливість або вагомість тексту.
        < i > та < em > : < i > використовується для стилізації тексту без особливого значення, < em > надає тексту наголос або акцент.`,
        "Div vs Span": `< div > - це блочний елемент, який використовується для структурування та групування інших елементів. 
        < span > - це вбудований елемент, який використовується для стилізації або групування частини тексту чи інших елементів без створення нового блоку.`,
        "Блокові та рядкові елементи": `Блокові елементи є основою, яка використовується для верстки сторінок. Такий елемент є прямокутником, який за замовчуванням займає всю доступну ширину сторінки. 
        Рядковий елемент не переноситься на новий рядок, а розташовується у тому ж рядку, що й попередній елемент.`
      },
      codeExample: `<h1>Головний заголовок</h1>
<h2>Підзаголовок</h2>
<h3>Заголовок третього рівня</h3>

<p>Це параграф з <strong>важливим текстом</strong> та <em>наголошеним текстом</em>.</p>
<p>Це параграф з <b>жирним текстом</b> та <i>курсивним текстом</i>.</p>

<div>Блоковий елемент - займає всю ширину</div>
<span>Рядковий елемент</span> <span>в одному рядку</span>

<pre>
    Попередньо відформатований текст
    зберігає    пробіли
    та переноси рядків.
</pre>`
    },
    {
      id: 4,
      title: "Links and Images",
      difficulty: "Beginner",
      duration: "25 min",
      completed: false,
      description: "Опануйте мистецтво створення зв'язків між сторінками та вбудовування зображень у ваші HTML-документи.",
      learningPoints: [
        "Створення гіперпосилань з тегом anchor",
        "Внутрішні та зовнішні посилання",
        "Адаптивні зображення з srcset",
        "Коли використовувати button, а коли посилання"
      ],
      theory: {
        "Типи посилань": "Внутрішнє гіперпосилання - веде на сторінку того ж сайту <a href>. Зовнішнє гіперпосилання - веде на інший сайт <link>.",
        "Адаптивні зображення": "Атрибут srcset вказує одну або кілька адрес альтернативних зображень для різних розмірів екрана.",
        "Button vs Link": `< button > - це функціональний елемент, тобто елемент, який відповідає за виконання певної функції після натискання на неї. 
        < a > - це елемент навігації, тобто елемент, який відповідає за взаємозв'язок розділів веб-ресурсу між собою.`
      },
      codeExample: `<!-- Внутрішні посилання -->
<a href="about.html">Про нас</a>
<a href="#section1">Перейти до розділу</a>

<!-- Зовнішні посилання -->
<a href="https://example.com" target="_blank">Зовнішній сайт</a>

<!-- Адаптивні зображення -->
<img src="small.jpg" 
     srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
     sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
     alt="Адаптивне зображення">

<!-- Звичайне зображення -->
<img src="logo.png" alt="Логотип компанії" width="200" height="100">`
    },
    {
      id: 5,
      title: "Lists and Tables",
      difficulty: "Beginner",
      duration: "30 min",
      completed: false,
      description: "Дізнайтеся, як створювати впорядковані та невпорядковані списки, а також таблиці даних.",
      learningPoints: [
        "Невпорядковані списки (ul) та елементи списку (li)",
        "Упорядковані списки (ol) з різними типами нумерації",
        "Описові списки (dl) для термінів та визначень",
        "Створення доступних таблиць даних"
      ],
      theory: {
        "Типи списків": `< ul > - невпорядкований список (з маркерами), 
        < ol > - упорядкований список (з номерами), 
        < dl > - описовий список (терміни та їхні описи).`,
        "Структура таблиць": `< table > : перший тег в якому вертається вся таблиця. 
        < tr > : table row, табличний рядок в якому поміщаються чарунки. 
        < td > : table data, теги чарунок в яких безпосередньо поміщається табличний контент.`
      },
      codeExample: `<!-- Невпорядкований список -->
<ul>
    <li>Перший елемент</li>
    <li>Другий елемент</li>
    <li>Третій елемент</li>
</ul>

<!-- Упорядкований список -->
<ol>
    <li>Крок перший</li>
    <li>Крок другий</li>
    <li>Крок третій</li>
</ol>

<!-- Описовий список -->
<dl>
    <dt>HTML</dt>
    <dd>Мова розмітки гіпертексту</dd>
    <dt>CSS</dt>
    <dd>Каскадні таблиці стилів</dd>
</dl>

<!-- Таблиця -->
<table>
    <thead>
        <tr>
            <th>Ім'я</th>
            <th>Вік</th>
            <th>Місто</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Іван</td>
            <td>25</td>
            <td>Київ</td>
        </tr>
        <tr>
            <td>Марія</td>
            <td>30</td>
            <td>Львів</td>
        </tr>
    </tbody>
</table>`
    },
    {
      id: 6,
      title: "Forms and Input Elements",
      difficulty: "Intermediate",
      duration: "40 min",
      completed: false,
      description: "Створюйте інтерактивні форми з різними типами введення та валідацією форм.",
      learningPoints: [
        "Основні теги форм: form, input, label, select, textarea",
        "Атрибут action та його функціональність",
        "Типи кнопок та їх призначення",
        "Різниця між checkbox та radio елементами"
      ],
      theory: {
        "Основні теги форм": `< form > : основний контейнер для всіх елементів форми. 
        < input > : використовується для створення різних типів полів введення. 
        < label > : використовується для зв'язування текстових міток з відповідними полями введення. 
        < select > та < option > : використовуються для створення випадаючих списків. 
        < textarea > : використовується для створення багаторядкових текстових полів.`,
        "Атрибут action": "Атрибут action у тегу <form> визначає URL-адресу, куди будуть відправлені дані форми після її відправлення. Це може бути серверний скрипт, який обробляє дані, або інша веб-сторінка.",
        "Типи кнопок": "type визначає тип кнопки, який встановлює її поведінку у формі. Існує 3 типи: button, reset і submit. За замовчуванням встановлено значення submit.",
        "Checkbox vs Radio": `Radio - створює перемикання між варіантами та дозволяє вибрати тільки один з них. 
        Checkbox - застосовується у формі для вибору кількох значень.`
      },
      codeExample: `<form action="/submit" method="POST">
    <!-- Текстові поля -->
    <label for="name">Ім'я:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="password">Пароль:</label>
    <input type="password" id="password" name="password">
    
    <!-- Radio buttons -->
    <fieldset>
        <legend>Стать:</legend>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Чоловіча</label>
        
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Жіноча</label>
    </fieldset>
    
    <!-- Checkboxes -->
    <input type="checkbox" id="subscribe" name="subscribe" value="yes">
    <label for="subscribe">Підписатися на новини</label>
    
    <!-- Select dropdown -->
    <label for="country">Країна:</label>
    <select id="country" name="country">
        <option value="ua">Україна</option>
        <option value="us">США</option>
        <option value="de">Німеччина</option>
    </select>
    
    <!-- Textarea -->
    <label for="message">Повідомлення:</label>
    <textarea id="message" name="message" rows="4" cols="50"></textarea>
    
    <!-- Buttons -->
    <button type="submit">Відправити</button>
    <button type="reset">Очистити</button>
    <button type="button">Звичайна кнопка</button>
</form>`
    },
    {
      id: 7,
      title: "Semantic HTML5 Elements",
      difficulty: "Intermediate",
      duration: "35 min",
      completed: false,
      description: "Відкрийте для себе сучасні семантичні елементи HTML5, які покращують доступність та SEO.",
      learningPoints: [
        "Поняття семантичної верстки",
        "Основні семантичні теги: header, nav, main, footer",
        "Структурні елементи: section, article, aside",
        "Переваги семантичної верстки для SEO та доступності"
      ],
      theory: {
        "Семантична верстка": "Це верстка орієнтована на структурування html-документів. У ній використовуються теги, які поділяють код на логічні блоки, що явно показують їх роль і зміст у структурі сторінки. Семантична верстка відрізняється від блокової лише елементами, що використовуються при структуризації сторінки.",
        "Семантичні елементи": "Семантичні елементи HTML - це теги, які надають змістовне значення контенту на веб-сторінці, а не просто визначають його зовнішній вигляд. Вони допомагають браузерам, пошуковим системам та допоміжним технологіям краще розуміти структуру та зміст веб-сторінки.",
        "Основні семантичні теги": `< header > : використовується для визначення заголовка розділу або сторінки. 
        < footer > : використовується для визначення нижнього колонтитулу розділу або сторінки. 
        < section > : використовується для визначення розділу документа. 
        < article > : використовується для визначення самостійного фрагмента контенту. 
        < nav > : визначає набір навігаційних посилань. 
        < aside > : використовується для контенту, який пов'язаний з основним, але може існувати окремо.`,
        "Переваги семантичної верстки": `Покращення SEO - пошукові системи краще індексують сторінки з чітко структурованим контентом. 
        Доступність - допоміжні технології можуть краще інтерпретувати контент. 
        Зрозумілість коду - семантичні теги роблять HTML-код більш зрозумілим для розробників.`
      },
      codeExample: `<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Семантична сторінка</title>
</head>
<body>
    <header>
        <h1>Назва сайту</h1>
        <nav>
            <ul>
                <li><a href="#home">Головна</a></li>
                <li><a href="#about">Про нас</a></li>
                <li><a href="#services">Послуги</a></li>
                <li><a href="#contact">Контакти</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="hero">
            <h2>Вітаємо на нашому сайті</h2>
            <p>Опис головної секції...</p>
        </section>
        
        <section id="articles">
            <h2>Наші статті</h2>
            
            <article>
                <h3>Назва статті</h3>
                <p>Текст статті...</p>
                <time datetime="2024-01-15">15 січня 2024</time>
            </article>
            
            <article>
                <h3>Ще одна стаття</h3>
                <p>Текст другої статті...</p>
                <time datetime="2024-01-10">10 січня 2024</time>
            </article>
        </section>
    </main>

    <aside>
        <h3>Корисні посилання</h3>
        <ul>
            <li><a href="#">Посилання 1</a></li>
            <li><a href="#">Посилання 2</a></li>
        </ul>
    </aside>

    <footer>
        <p>&copy; 2024 Назва компанії. Всі права захищено.</p>
    </footer>
</body>
</html>`
    },
    {
      id: 8,
      title: "CSS Integration & Styling",
      difficulty: "Intermediate",
      duration: "30 min",
      completed: false,
      description: "Дізнайтеся, як інтегрувати CSS з HTML та зрозуміти ключові концепції стилів.",
      learningPoints: [
        "Різниця між атрибутами id та class",
        "Як CSS працює з HTML елементами",
        "Селектори та їх специфічність",
        "Вбудовування стилів в HTML"
      ],
      theory: {
        "ID vs Class": `Атрибути id та class використовуються для призначення ідентифікаторів та класів HTML-елементам. 
        Id: унікальний ідентифікатор для елемента на сторінці. Використовується для стилізації CSS та маніпуляцій JavaScript. 
        Class: призначає один або кілька класів для елемента. Використовується для стилізації та JavaScript. 
        Один елемент може мати кілька класів, і один клас може бути застосований до багатьох елементів.`
      },
      codeExample: `<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>CSS Integration</title>
    <style>
        /* Стилі для ID - унікальний селектор */
        #header {
            background-color: #f0f0f0;
            padding: 20px;
        }
        
        /* Стилі для Class - може використовуватися багато разів */
        .highlight {
            background-color: yellow;
            font-weight: bold;
        }
        
        .button {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        
        .button-primary {
            background-color: #007bff;
            color: white;
        }
        
        .button-secondary {
            background-color: #6c757d;
            color: white;
        }
    </style>
</head>
<body>
    <!-- Використання ID - тільки один елемент -->
    <header id="header">
        <h1>Заголовок сторінки</h1>
    </header>
    
    <!-- Використання Class - можна повторювати -->
    <p>Це звичайний текст з <span class="highlight">виділеним фрагментом</span>.</p>
    <p>Ще один текст з <span class="highlight">іншим виділенням</span>.</p>
    
    <!-- Множинні класи -->
    <button class="button button-primary">Головна кнопка</button>
    <button class="button button-secondary">Додаткова кнопка</button>
    
    <!-- Data атрибути -->
    <div data-user-id="123" data-role="admin">
        Користувач з додатковими даними
    </div>
</body>
</html>`
    },
    {
      id: 9,
      title: "HTML5 Features & Advanced Elements",
      difficulty: "Advanced",
      duration: "45 min",
      completed: false,
      description: "Вивчіть розширені можливості HTML5, включаючи мультимедіа, зберігання даних і сучасні API.",
      learningPoints: [
        "Використання iframe для вбудовування контенту",
        "Атрибути data-* для зберігання користувацьких даних",
        "Мультимедійні елементи: audio та video",
        "Сучасні HTML5 API та їх можливості"
      ],
      theory: {
        "iframe": "<iframe> - це HTML-тег, який дозволяє вбудовувати інший HTML-документ всередину поточної сторінки. Він часто використовується для вбудовування відео, карт або інших веб-сторінок.",
        "Data атрибути": "Атрибут data-* використовується для зберігання настроюваних даних, закритих для сторінки чи програми. Атрибут data-* надає нам можливість вбудовувати власні атрибути даних у всі елементи HTML."
      },
      codeExample: `<!-- iframe для вбудовування контенту -->
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        width="560" 
        height="315" 
        frameborder="0" 
        allowfullscreen>
</iframe>

<!-- Video елемент -->
<video controls width="400" poster="poster.jpg">
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.webm" type="video/webm">
    <track kind="subtitles" src="subtitles.vtt" srclang="uk" label="Українські">
    Ваш браузер не підтримує відео.
</video>

<!-- Audio елемент -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Ваш браузер не підтримує аудіо.
</audio>

<!-- Canvas для графіки -->
<canvas id="myCanvas" width="200" height="100">
    Ваш браузер не підтримує canvas.
</canvas>

<!-- Progress bar -->
<progress value="70" max="100">70%</progress>

<!-- Meter елемент -->
<meter value="6" min="0" max="10">6 з 10</meter>

<!-- Details та summary -->
<details>
    <summary>Клікніть для розгортання</summary>
    <p>Цей контент можна розгорнути та згорнути.</p>
</details>

<!-- Data атрибути -->
<div data-product-id="12345" 
     data-category="electronics" 
     data-price="299.99">
    Товар з додатковими даними
</div>

<script>
// Доступ до data атрибутів через JavaScript
const element = document.querySelector('[data-product-id]');
console.log(element.dataset.productId); // "12345"
console.log(element.dataset.category);  // "electronics"
console.log(element.dataset.price);     // "299.99"
</script>`
    }
  ]
};