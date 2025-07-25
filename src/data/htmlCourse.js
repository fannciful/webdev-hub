export const htmlCourseData = {
  title: "Основи HTML",
  description: "Вивчіть структуру веб-сторінок, семантичні теги та сучасні можливості HTML5. Цей комплексний курс проведе вас від новачка до впевненого HTML-розробника.",
  level: "Початковий",
  duration: "~4 години",
  prerequisites: "Немає",
  certificate: "Доступний після завершення",
  topics: [
    {
      id: 1,
      title: "Введення в HTML",
      difficulty: "Початковий",
      duration: "20 хв",
      completed: true,
      description: "Дізнайтеся, що таке HTML, його історію та як він працює як основа веб-розробки.",
      learningPoints: [
        "Що таке HTML та для чого він використовується",
        "Розуміння тегів, атрибутів та елементів в HTML",
        "Основні принципи структури HTML-документа",
        "Поняття потоку документа в HTML"
      ],
      theory: {
        "Що таке HTML?": "HTML (HyperText Markup Language) - це стандартизована мова розмітки документів для перегляду вебсторінок у браузері. HTML є основою всіх веб-сторінок і визначає їх структуру та зміст.",
        "Теги, атрибути та елементи": "Тег - це елемент мови розмітки гіпертексту, записаний у кутових дужках. Атрибути - надають додаткову інформацію про html елементи (href, width, height, alt, src, lang). HTML елемент - це все від початкового тегу до кінцевого тегу.",
        "Потік документа": "Потоком документа HTML називається порядок виведення елементів на сторінку. У звичайному вигляді всі блоки виводяться у порядку, у якому записані всередині HTML-документа. Цей потік можна змінювати за допомогою CSS правил, наприклад, за допомогою position: absolute.",
        "Історія HTML": "HTML був створений у 1990 році Тімом Бернерсом-Лі. З тих пір він пройшов кілька версій: HTML 1.0, HTML 2.0, HTML 3.2, HTML 4.01, XHTML, і нарешті HTML5, який є поточним стандартом."
      }
    },
    {
      id: 2,
      title: "Структура HTML-документа",
      difficulty: "Початковий",
      duration: "25 хв",
      completed: true,
      description: "Розуміти базову структуру HTML-документа та призначення кожного елемента.",
      learningPoints: [
        "DOCTYPE declaration та його призначення",
        "Структура HTML, head та body елементів",
        "Метадані та їх важливість",
        "Правильне налаштування HTML-документа"
      ],
      theory: {
        "DOCTYPE": "DOCTYPE (Document Type Declaration) - це інструкція для веб-браузера, яка вказує тип документа та версію HTML, що використовується. Вона завжди розташовується на першому рядку HTML-документа. Основна мета - встановити режим сумісності для браузера, забезпечуючи коректне відображення сторінки.",
        "Метадані": "Метадані в HTML надають інформацію про сам документ, таку як його автор, опис, ключові слова, налаштування символів тощо. Метадані задаються всередині тегу head і не відображаються на сторінці.",
        "Viewport метатег": "Метатег viewport контролює, як сторінка відображається на мобільних пристроях. Він є критично важливим для адаптивного дизайну.",
        "Кодування символів": "UTF-8 є стандартним кодуванням для веб-сторінок, яке підтримує всі символи всіх мов світу. Завжди вказуйте charset='UTF-8' в метатегах."
      }
    },
    {
      id: 3,
      title: "Текстові елементи та форматування",
      difficulty: "Початковий",
      duration: "30 хв",
      completed: false,
      description: "Дізнайтеся про різні текстові елементи та способи форматування текстового вмісту в HTML.",
      learningPoints: [
        "Заголовки (h1-h6) та їх ієрархія",
        "Різниця між семантичними та стилістичними тегами",
        "Використання div та span елементів",
        "Блокові та рядкові елементи"
      ],
      theory: {
        "Типи заголовків": "HTML підтримує шість різних типів заголовків. Ці заголовки відрізняються за розміром шрифту, починаючи з найбільшого. h1 - найбільший заголовок, h6 - найменший заголовок. Важливо дотримуватися ієрархії заголовків для SEO та доступності.",
        "Семантичні vs стилістичні теги": "b і strong: обидва теги роблять текст жирним, але мають різне семантичне значення. b використовується для стилізації тексту без особливого значення, strong підкреслює важливість або вагомість тексту. i та em: i використовується для стилізації тексту без особливого значення, em надає тексту наголос або акцент.",
        "Div vs Span": "div - це блочний елемент, який використовується для структурування та групування інших елементів. span - це вбудований елемент, який використовується для стилізації або групування частини тексту чи інших елементів без створення нового блоку.",
        "Блокові та рядкові елементи": "Блокові елементи є основою, яка використовується для верстки сторінок. Такий елемент є прямокутником, який за замовчуванням займає всю доступну ширину сторінки. Рядковий елемент не переноситься на новий рядок, а розташовується у тому ж рядку, що й попередній елемент.",
        "Спеціальні символи": "HTML має спеціальні коди для символів, які мають особливе значення: &lt; для <, &gt; для >, &amp; для &, &quot; для лапок, &nbsp; для нерозривного пробілу."
      }
    },
    {
      id: 4,
      title: "Посилання та зображення",
      difficulty: "Початковий",
      duration: "25 хв",
      completed: false,
      description: "Опануйте мистецтво створення зв'язків між сторінками та вбудовування зображень у ваші HTML-документи.",
      learningPoints: [
        "Створення гіперпосилань з тегом anchor",
        "Внутрішні та зовнішні посилання",
        "Адаптивні зображення з srcset",
        "Коли використовувати button, а коли посилання"
      ],
      theory: {
        "Типи посилань": "Внутрішнє гіперпосилання - веде на сторінку того ж сайту за допомогою тегу a href. Зовнішнє гіперпосилання - веде на інший сайт. Також існують посилання на якоря (#section) та mailto/tel посилання.",
        "Адаптивні зображення": "Атрибут srcset вказує одну або кілька адрес альтернативних зображень для різних розмірів екрана. Це покращує продуктивність на мобільних пристроях та економить трафік.",
        "Button vs Link": "button - це функціональний елемент, тобто елемент, який відповідає за виконання певної функції після натискання на неї. a - це елемент навігації, тобто елемент, який відповідає за взаємозв'язок розділів веб-ресурсу між собою.",
        "Alt атрибут": "Alt атрибут для зображень є критично важливим для доступності. Він надає текстовий опис зображення для людей з порушеннями зору та для випадків, коли зображення не завантажилося.",
        "Оптимізація зображень": "Використовуйте правильні формати зображень: JPEG для фотографій, PNG для графіки з прозорістю, SVG для векторної графіки, WebP для кращого стиснення."
      }
    },
    {
      id: 5,
      title: "Списки та таблиці",
      difficulty: "Початковий",
      duration: "30 хв",
      completed: false,
      description: "Дізнайтеся, як створювати впорядковані та невпорядковані списки, а також таблиці даних.",
      learningPoints: [
        "Невпорядковані списки (ul) та елементи списку (li)",
        "Упорядковані списки (ol) з різними типами нумерації",
        "Описові списки (dl) для термінів та визначень",
        "Створення доступних таблиць даних"
      ],
      theory: {
        "Типи списків": "ul - невпорядкований список (з маркерами), ol - упорядкований список (з номерами), dl - описовий список (терміни та їхні описи). Списки можна вкладати один в одний для створення багаторівневої структури.",
        "Структура таблиць": "table: перший тег в якому верстається вся таблиця. tr: table row, табличний рядок в якому поміщаються чарунки. td: table data, теги чарунок в яких безпосередньо поміщається табличний контент. th: table header, заголовкові чарунки.",
        "Доступність таблиць": "Для покращення доступності таблиць використовуйте thead, tbody, tfoot для структурування, caption для опису таблиці, scope атрибут для заголовків.",
        "Об'єднання чарунок": "Атрибути colspan та rowspan дозволяють об'єднувати чарунки таблиці горизонтально та вертикально відповідно."
      }
    },
    {
      id: 6,
      title: "Форми та елементи введення",
      difficulty: "Середній",
      duration: "40 хв",
      completed: false,
      description: "Створюйте інтерактивні форми з різними типами введення та валідацією форм.",
      learningPoints: [
        "Основні теги форм: form, input, label, select, textarea",
        "Атрибут action та його функціональність",
        "Типи кнопок та їх призначення",
        "Різниця між checkbox та radio елементами"
      ],
      theory: {
        "Основні теги форм": "form: основний контейнер для всіх елементів форми. input: використовується для створення різних типів полів введення. label: використовується для зв'язування текстових міток з відповідними полями введення. select та option: використовуються для створення випадаючих списків. textarea: використовується для створення багаторядкових текстових полів.",
        "Атрибут action": "Атрибут action у тегу form визначає URL-адресу, куди будуть відправлені дані форми після її відправлення. Це може бути серверний скрипт, який обробляє дані, або інша веб-сторінка.",
        "Типи кнопок": "type визначає тип кнопки, який встановлює її поведінку у формі. Існує 3 типи: button (звичайна кнопка), reset (очищує форму) і submit (відправляє форму). За замовчуванням встановлено значення submit.",
        "Checkbox vs Radio": "Radio - створює перемикання між варіантами та дозволяє вибрати тільки один з них в межах однієї групи (однакове name). Checkbox - застосовується у формі для вибору кількох значень незалежно один від одного.",
        "HTML5 типи полів": "HTML5 додав нові типи полів: email, tel, url, date, time, number, range, color. Ці типи забезпечують кращу валідацію та користувацький досвід.",
        "Валідація форм": "HTML5 надає вбудовані можливості валідації: required для обов'язкових полів, pattern для регулярних виразів, min/max для числових значень."
      }
    },
    {
      id: 7,
      title: "Семантичні елементи HTML5",
      difficulty: "Середній",
      duration: "35 хв",
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
        "Основні семантичні теги": "header: використовується для визначення заголовка розділу або сторінки. footer: використовується для визначення нижнього колонтитулу розділу або сторінки. section: використовується для визначення розділу документа. article: використовується для визначення самостійного фрагмента контенту. nav: визначає набір навігаційних посилань. aside: використовується для контенту, який пов'язаний з основним, але може існувати окремо. main: основний контент сторінки.",
        "Переваги семантичної верстки": "Покращення SEO - пошукові системи краще індексують сторінки з чітко структурованим контентом. Доступність - допоміжні технології можуть краще інтерпретувати контент. Зрозумілість коду - семантичні теги роблять HTML-код більш зрозумілим для розробників.",
        "Мікродані та Schema.org": "Семантична розмітка може бути розширена за допомогою мікроданих та Schema.org для ще кращого розуміння контенту пошуковими системами."
      }
    },
    {
      id: 8,
      title: "Інтеграція CSS та стилізація",
      difficulty: "Середній",
      duration: "30 хв",
      completed: false,
      description: "Дізнайтеся, як інтегрувати CSS з HTML та зрозуміти ключові концепції стилів.",
      learningPoints: [
        "Різниця між атрибутами id та class",
        "Як CSS працює з HTML елементами",
        "Селектори та їх специфічність",
        "Вбудовування стилів в HTML"
      ],
      theory: {
        "ID vs Class": "Атрибути id та class використовуються для призначення ідентифікаторів та класів HTML-елементам. Id: унікальний ідентифікатор для елемента на сторінці. Використовується для стилізації CSS та маніпуляцій JavaScript. Class: призначає один або кілька класів для елемента. Використовується для стилізації та JavaScript. Один елемент може мати кілька класів, і один клас може бути застосований до багатьох елементів.",
        "Способи підключення CSS": "Існує три способи додавання CSS: зовнішні таблиці стилів (найкращий варіант), внутрішні стилі в тегу style, інлайн стилі в атрибуті style (слід уникати).",
        "Специфічність селекторів": "Специфічність визначає, які стилі будуть застосовані при конфлікті. Порядок від найвищої до найнижчої: інлайн стилі, ID, класи/атрибути/псевдокласи, елементи.",
        "Каскадність CSS": "CSS означає Cascading Style Sheets - каскадні таблиці стилів. Каскадність означає, що стилі наслідуються та перекривають один одного за певними правилами."
      }
    },
    {
      id: 9,
      title: "Можливості HTML5 та просунуті елементи",
      difficulty: "Просунутий",
      duration: "45 хв",
      completed: false,
      description: "Вивчіть розширені можливості HTML5, включаючи мультимедіа, зберігання даних і сучасні API.",
      learningPoints: [
        "Використання iframe для вбудовування контенту",
        "Атрибути data-* для зберігання користувацьких даних",
        "Мультимедійні елементи: audio та video",
        "Сучасні HTML5 API та їх можливості"
      ],
      theory: {
        "iframe": "iframe - це HTML-тег, який дозволяє вбудовувати інший HTML-документ всередину поточної сторінки. Він часто використовується для вбудовування відео, карт або інших веб-сторінок. Будьте обережні з безпекою при використанні iframe.",
        "Data атрибути": "Атрибут data-* використовується для зберігання настроюваних даних, закритих для сторінки чи програми. Атрибут data-* надає нам можливість вбудовувати власні атрибути даних у всі елементи HTML.",
        "Мультимедіа в HTML5": "HTML5 надає нативну підтримку відео та аудіо без необхідності плагінів. Використовуйте кілька форматів для кросбраузерної сумісності.",
        "Canvas та SVG": "Canvas дозволяє малювати графіку за допомогою JavaScript. SVG - це векторна графіка, яка масштабується без втрати якості.",
        "HTML5 API": "HTML5 включає багато корисних API: Geolocation для визначення місцезнаходження, Local Storage для зберігання даних, Drag and Drop для перетягування елементів.",
        "Прогресивні веб-додатки": "HTML5 є основою для створення PWA (Progressive Web Apps) - веб-додатків, які працюють як нативні програми."
      }
    },
    {
      id: 10,
      title: "Доступність та веб-стандарти",
      difficulty: "Просунутий",
      duration: "35 хв",
      completed: false,
      description: "Дізнайтеся про створення доступних веб-сторінок та дотримання сучасних веб-стандартів.",
      learningPoints: [
        "Принципи веб-доступності (WCAG)",
        "ARIA атрибути та їх використання",
        "Семантична розмітка для скрін-рідерів",
        "Валідація HTML та виправлення помилок"
      ],
      theory: {
        "Веб-доступність": "Веб-доступність означає, що веб-сайти, інструменти та технології розроблені та розроблені таким чином, щоб люди з інвалідністю могли їх використовувати. Це включає людей з порушеннями зору, слуху, рухливості та когнітивних функцій.",
        "WCAG принципи": "WCAG (Web Content Accessibility Guidelines) базується на чотирьох принципах: Perceivable (сприймається), Operable (керованість), Understandable (зрозумілість), Robust (надійність).",
        "ARIA атрибути": "ARIA (Accessible Rich Internet Applications) надає додаткову семантичну інформацію для допоміжних технологій. Основні атрибути: aria-label, aria-describedby, aria-hidden, role.",
        "Валідація HTML": "Валідація HTML перевіряє, чи відповідає ваш код стандартам W3C. Валідний код краще працює в різних браузерах та є більш доступним.",
        "Кросбраузерна сумісність": "Різні браузери можуть по-різному інтерпретувати HTML. Важливо тестувати сайти в різних браузерах та використовувати стандартні підходи.",
        "SEO-оптимізація": "Правильна HTML-розмітка критично важлива для SEO: використовуйте заголовки в правильній ієрархії, meta теги, семантичні елементи, alt атрибути для зображень."
      }
    }
  ]
};