export const jsCourseData = {
  title: "JavaScript Fundamentals",
  description: "Вивчіть JavaScript від основ до просунутих концепцій. Цей комплексний курс охоплює все необхідне для становлення впевненим JavaScript розробником.",
  level: "Beginner to Advanced",
  duration: "~12 hours",
  prerequisites: "Базові знання HTML",
  certificate: "Доступний після завершення",
  topics: [
    {
      id: 1,
      title: "Типи даних та змінні",
      difficulty: "Beginner",
      duration: "35 min",
      completed: true,
      description: "Основи JavaScript: типи даних, оголошення змінних та робота з різними значеннями.",
      learningPoints: [
        "8 типів даних в JavaScript",
        "Різниця між null та undefined",
        "Особливості NaN",
        "Відмінності var, let та const"
      ],
      theory: {
        "Типи даних": `Існує 8 типів даних. 7 примітивних та 1 складний тип даних.
Примітивні типи: number, string, boolean, symbol, bigInt, null, undefined
Складний тип: object, array, function
Складний тип використовується для колекцій даних та для оголошення більш складних сутностей. Також він передається за посиланням, а прості типи даних за значенням.`,
        "NaN": "NaN (Not a Number) - це значення, що отримується в результаті виконання числової операції над не числовим значення.",
        "null vs undefined": `Undefined являє собою значення за замовчуванням:
- Змінної, яку оголосили без ініціалізації
- Функції, яка нічого не повертає явно
- Неіснуючої властивості об'єкта
Null - це значення «відсутності значення». Присвоюється змінній явно.`,
        "var vs let vs const": `Var - можна ініціалізувати після оголошення, можна змінювати, має функціональну область видимості. Змінна підіймається на верх своєї області видимості.
Let - змінну можна ініціалізувати після оголошення, можна змінювати, має блокову область видимості
Const - змінну обов'язково потрібно ініціалізувати під час оголошення, не можна змінювати, має блокову область видимості.`
      },
      codeExample: `// Примітивні типи
let numberType = 42;
let stringType = "Hello World";
let booleanType = true;
let undefinedType; // undefined
let nullType = null;
let symbolType = Symbol('id');
let bigIntType = 123n;

// Складний тип
let objectType = { name: "John", age: 30 };
let arrayType = [1, 2, 3];
let functionType = function() { return "Hello"; };

// Перевірка типів
console.log(typeof numberType);   // "number"
console.log(typeof stringType);   // "string"
console.log(typeof nullType);     // "object" (історична помилка JS)

// NaN приклади
console.log("text" * 2);     // NaN
console.log(parseInt("abc")); // NaN
console.log(NaN === NaN);    // false (особливість NaN)
console.log(Number.isNaN(NaN)); // true

// Змінні
var oldVar = "function scope";
let newLet = "block scope";
const CONSTANT = "cannot change";

// Області видимості
if (true) {
    var varInBlock = "доступна ззовні";
    let letInBlock = "доступна тільки в блоці";
    const constInBlock = "доступна тільки в блоці";
}
console.log(varInBlock); // "доступна ззовні"
// console.log(letInBlock); // ReferenceError`
    },
    {
      id: 2,
      title: "Оператори та порівняння",
      difficulty: "Beginner",
      duration: "25 min",
      completed: false,
      description: "Дізнайтеся про різні типи операторів в JavaScript та особливості порівняння значень.",
      learningPoints: [
        "Строга vs нестрога рівність",
        "Логічні оператори: НІ, АБО, І",
        "Арифметичні та присвоювальні оператори",
        "Оператор typeof та instanceof"
      ],
      theory: {
        "Строга vs нестрога рівність": `Строга рівність (===) - порівнює значення за типом даних та значенням.
Нестрога рівність (==) - приводить значення до одного типу, а потім ці значення порівнює.`,
        "Логічні оператори": `Логічне І (&&) - перевіряє до першого false. Повертає один true, якщо всі аргументи є true. Якщо один з аргументів false, повертає його.
Логічне АБО (||) - перевіряє до першого true. Якщо всі аргументи є false, повертає останній false.
Логічне НІ (!) - це унарний оператор, який інвертує логічне значення свого операнда.`,
        "Короткі обчислення": "Логічні оператори && та || використовують короткі обчислення - вони зупиняють обчислення, як тільки результат стає очевидним."
      },
      codeExample: `// Строга vs нестрога рівність
console.log(5 == "5");   // true (нестрога - приведення типів)
console.log(5 === "5");  // false (строга - різні типи)
console.log(null == undefined);  // true
console.log(null === undefined); // false

// Логічні оператори
console.log(true && false);  // false
console.log(true || false);  // true
console.log(!true);          // false

// Короткі обчислення
let user = { name: "John" };
console.log(user && user.name); // "John"
console.log(user || "Guest");   // { name: "John" }

let name = user.name || "Anonymous";
let hasPermission = user.isAdmin && user.canEdit;

// Nullish coalescing оператор (??)
let value = null;
console.log(value ?? "default"); // "default"
console.log(0 ?? "default");     // 0 (0 не null/undefined)

// Арифметичні оператори
let a = 10;
console.log(++a); // 11 (pre-increment)
console.log(a++); // 11 (post-increment, a стає 12)
console.log(a);   // 12

// Тернарний оператор
let age = 18;
let status = age >= 18 ? "adult" : "minor";

// typeof оператор
console.log(typeof "hello");    // "string"
console.log(typeof 42);         // "number"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (помилка JS)
console.log(typeof {});         // "object"
console.log(typeof []);         // "object"
console.log(typeof function(){}); // "function"`
    },
    {
      id: 3,
      title: "Функції та області видимості",
      difficulty: "Intermediate",
      duration: "45 min",
      completed: false,
      description: "Глибоке розуміння функцій, hoisting, замикань та лексичного оточення.",
      learningPoints: [
        "Function Declaration vs Function Expression",
        "Hoisting та його особливості",
        "Лексичне оточення та замикання",
        "IIFE - негайно викликувані функції"
      ],
      theory: {
        "Function Declaration vs Expression": `Function Expression - це змінна у яку записали функцію і на неї не розповсюджується hoisting, а на Function Declaration - розповсюджується.
Function Declaration можна використовувати у всьому скрипті, Function Expression створюється, коли виконання доходить до нього.`,
        "Hoisting": `Це механізм у JavaScript, в якому змінні типу var та оголошення функцій, пересуваються вгору своєї області видимості перед тим, як код буде виконаний.`,
        "Лексичне оточення": `Це властивості внутрішнього об'єкта функції, які створюються під час її виклику. Туди записуються аргументи, функції та змінні створені всередині цієї функції.`,
        "Замикання": `Це здатність функції під час створення запам'ятовувати посилання на змінні, функції та параметри, що знаходяться в поточному лексичному оточенні. Замикання дозволяють повʼязувати дані з функцією, яка працює з цими даними.`,
        "IIFE": `IIFE (Immediately Invoked Function Expression) - це функція, яка викликається одразу після створення. Використовується для виконання ініціалізації та створення приватної області видимості.`
      },
      codeExample: `// Function Declaration (hoisted)
console.log(sayHello()); // "Hello!" - працює завдяки hoisting

function sayHello() {
    return "Hello!";
}

// Function Expression (not hoisted)
// console.log(sayBye()); // ReferenceError
const sayBye = function() {
    return "Bye!";
};

// Arrow Function
const add = (a, b) => a + b;
const multiply = (a, b) => {
    return a * b;
};

// Hoisting приклади
console.log(myVar); // undefined (не помилка!)
var myVar = 5;

// let та const не hoisted у тому ж сенсі
// console.log(myLet); // ReferenceError
let myLet = 10;

// Замикання
function outerFunction(x) {
    // Зовнішня змінна
    
    function innerFunction(y) {
        return x + y; // Доступ до x з зовнішньої функції
    }
    
    return innerFunction;
}

const addFive = outerFunction(5);
console.log(addFive(3)); // 8

// Практичний приклад замикання
function createCounter() {
    let count = 0;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2

// IIFE
(function() {
    console.log("IIFE виконалася!");
    let privateVar = "Не доступна ззовні";
})();

// IIFE з параметрами
(function(name) {
    console.log("Hello, " + name);
})("World");

// Модульний патерн з IIFE
const myModule = (function() {
    let privateVariable = 0;
    
    return {
        increment: function() {
            privateVariable++;
        },
        getCount: function() {
            return privateVariable;
        }
    };
})();`
    },
    {
      id: 4,
      title: "Об'єкти та this",
      difficulty: "Intermediate",
      duration: "40 min",
      completed: false,
      description: "Розуміння об'єктів, контексту this та методів зміни контексту виклику.",
      learningPoints: [
        "Створення та копіювання об'єктів",
        "Контекст this та його визначення",
        "Методи call, apply, bind",
        "Стрілкові функції та this"
      ],
      theory: {
        "Порівняння об'єктів": `Результатом порівняння двох схожих об'єктів буде false, тому що об'єкти - це типи даних, що передаються за посиланням. 2 однакові на вигляд об'єкта мають різні посилання.`,
        "Копіювання об'єктів": `Існує поняття глибокого та поверхневого копіювання.
Поверхневе копіювання: spread оператор (...), Object.assign()
Глибоке копіювання: JSON.stringify + JSON.parse, або функція deepClone`,
        "this": `this - це посилання на контекст виклику функції. Контекстом є об'єкт, який в цей момент виконує або викликає функцію. Для стрілочної функції - це об'єкт у якому вона створена.`,
        "call, apply, bind": `Call та apply викликають функцію із заданим контекстом. В call параметри передаються як перерахування, а в apply у вигляді масиву.
Bind не викликає функцію, він повертає нову функцію із назавжди прив'язаним контекстом.`,
        "Стрілкові функції": `Стрілочна функція не має власного this. Вона бере його за місцем створення. Стрілочна функція не має methods call, apply, bind і контекст змінити не можна.`
      },
      codeExample: `// Створення об'єктів
const person = {
    name: "John",
    age: 30,
    greet: function() {
        return \`Hello, I'm \${this.name}\`;
    }
};

// Поверхневе копіювання
const shallowCopy1 = { ...person };
const shallowCopy2 = Object.assign({}, person);

// Глибоке копіювання (обмежений спосіб)
const deepCopy = JSON.parse(JSON.stringify(person));

// Власна функція глибокого копіювання
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof Array) return obj.map(item => deepClone(item));
    
    const cloned = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }
    return cloned;
}

// this в різних контекстах
const user = {
    name: "Alice",
    regularFunction: function() {
        console.log(this.name); // "Alice"
    },
    arrowFunction: () => {
        console.log(this.name); // undefined (this з глобального контексту)
    },
    nestedExample: function() {
        const inner = () => {
            console.log(this.name); // "Alice" (успадковує this від nestedExample)
        };
        inner();
    }
};

// call, apply, bind
function introduce(greeting, punctuation) {
    return \`\${greeting}, I'm \${this.name}\${punctuation}\`;
}

const person1 = { name: "Bob" };
const person2 = { name: "Charlie" };

// call - параметри окремо
console.log(introduce.call(person1, "Hi", "!")); // "Hi, I'm Bob!"

// apply - параметри масивом
console.log(introduce.apply(person2, ["Hello", "."])); // "Hello, I'm Charlie."

// bind - створює нову функцію
const boundIntroduce = introduce.bind(person1, "Hey");
console.log(boundIntroduce("?")); // "Hey, I'm Bob?"

// Практичний приклад з bind
class Timer {
    constructor() {
        this.seconds = 0;
    }
    
    start() {
        // Без bind this був би window
        setInterval(function() {
            this.seconds++;
            console.log(this.seconds);
        }.bind(this), 1000);
        
        // Або з стрілковою функцією
        // setInterval(() => {
        //     this.seconds++;
        //     console.log(this.seconds);
        // }, 1000);
    }
}`
    },
    {
      id: 5,
      title: "Масиви та методи",
      difficulty: "Beginner",
      duration: "50 min",
      completed: false,
      description: "Освойте роботу з масивами та їх потужними методами для обробки даних.",
      learningPoints: [
        "Перевірка чи є змінна масивом",
        "Перебираючі методи: forEach, map, filter, reduce",
        "Методи пошуку: find, includes, indexOf",
        "Об'єднання масивів та інші корисні методи"
      ],
      theory: {
        "Перевірка масиву": `Для перевірки чи є змінна масивом можна використати метод Array.isArray()`,
        "Перебираючі методи": `forEach - для перебору масиву, не повертає нічого
filter - для фільтрації масиву, повертає новий масив
every/some - для перевірки масиву, повертають булеві значення
map - для трансформації масиву, повертає новий масив
reduce - для обчислення значення з масиву
sort - сортує масив, мутує оригінальний масив`,
        "Об'єднання масивів": `Можна використовувати метод concat() або spread оператор для об'єднання масивів`,
        "Пошук в масивах": `includes - повертає true/false
indexOf - повертає індекс або -1
find - повертає елемент або undefined`,
        "for...in недоліки": `Цикл for...in можна використовувати для масивів, але не рекомендується:
- перебирає всі властивості, включаючи прототип
- порядок елементів не гарантований
- менша продуктивність`
      },
      codeExample: `// Перевірка масиву
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("string"));  // false

const numbers = [1, 2, 3, 4, 5];
const words = ["apple", "banana", "cherry"];

// forEach - перебір без повернення
numbers.forEach((num, index) => {
    console.log(\`Index \${index}: \${num}\`);
});

// map - трансформація
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - фільтрація
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// find - знаходження першого елемента
const found = numbers.find(num => num > 3);
console.log(found); // 4

// some - чи є хоча б один
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

// every - чи всі відповідають умові
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

// reduce - обчислення
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

const max = numbers.reduce((max, num) => num > max ? num : max);
console.log(max); // 5

// Групування з reduce
const people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 25 }
];

const groupedByAge = people.reduce((groups, person) => {
    const age = person.age;
    groups[age] = groups[age] || [];
    groups[age].push(person);
    return groups;
}, {});

// sort - сортування (мутує масив!)
const fruits = ["banana", "apple", "cherry"];
fruits.sort(); // Алфавітний порядок
console.log(fruits); // ["apple", "banana", "cherry"]

const nums = [10, 5, 40, 25, 1000, 1];
nums.sort((a, b) => a - b); // Числове сортування
console.log(nums); // [1, 5, 10, 25, 40, 1000]

// Об'єднання масивів
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined1 = arr1.concat(arr2);
const combined2 = [...arr1, ...arr2];

// Пошук в масивах
console.log(numbers.includes(3));    // true
console.log(numbers.indexOf(3));     // 2
console.log(numbers.indexOf(10));    // -1

// Деструктуризація масивів
const [first, second, ...rest] = numbers;
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

// Методи зміни масиву
const mutableArray = [1, 2, 3];
mutableArray.push(4);        // Додає в кінець
mutableArray.unshift(0);     // Додає на початок
mutableArray.pop();          // Видаляє з кінця
mutableArray.shift();        // Видаляє з початку
mutableArray.splice(1, 1, 99); // Видаляє/вставляє`
    },
    {
      id: 6,
      title: "Асинхронне програмування",
      difficulty: "Advanced",
      duration: "60 min",
      completed: false,
      description: "Опануйте асинхронний JavaScript: callback функції, Promise та async/await.",
      learningPoints: [
        "Callback функції та callback hell",
        "Promise: створення та використання",
        "async/await синтаксис",
        "Обробка помилок в асинхронному коді"
      ],
      theory: {
        "Callback функції": `callback функції - це функції, які передаються як аргументи в інші функції та викликаються після завершення певних операцій, зокрема асинхронних.`,
        "Promise": `Promise - це об'єкт, який використовується для відкладених та асинхронних обчислень. Promise має 3 стани:
- очікування (pending): початковий стан
- виконано (fulfilled): операцію завершено успішно
- відхилено (rejected): операцію завершено з помилкою`,
        "async/await": `async робить створену функцію асинхронною. Функція async може містити вираз await, який призупиняє виконання функції та чекає відповіді від promise. Async функція завжди повертає promise.`,
        "Обробка помилок": `Існує 2 способи обробки помилок в async/await:
- try...catch в тілі функції
- метод catch після виклику async функції`,
        "Event Loop": `Це механізм, який відповідає за виконання коду, збору та обробки подій та виконання підзадач із черги`
      },
      codeExample: `// Callback функції
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "John" };
        callback(null, data);
    }, 1000);
}

fetchData((error, data) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Data:", data);
    }
});

// Callback Hell
getData(function(a) {
    getMoreData(a, function(b) {
        getEvenMoreData(b, function(c) {
            // Вкладеність стає нечитабельною
        });
    });
});

// Promise створення
const myPromise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    
    setTimeout(() => {
        if (success) {
            resolve("Операція успішна!");
        } else {
            reject(new Error("Щось пішло не так!"));
        }
    }, 1000);
});

// Promise використання
myPromise
    .then(result => {
        console.log(result);
        return "Наступний крок";
    })
    .then(nextResult => {
        console.log(nextResult);
    })
    .catch(error => {
        console.error("Помилка:", error.message);
    })
    .finally(() => {
        console.log("Завершено");
    });

// Promise.all - всі одночасно
const promise1 = Promise.resolve(3);
const promise2 = new Promise(resolve => setTimeout(() => resolve('foo'), 1000));
const promise3 = Promise.resolve(42);

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values); // [3, "foo", 42]
    });

// Promise.race - перший що завершиться
Promise.race([
    new Promise(resolve => setTimeout(() => resolve('швидкий'), 100)),
    new Promise(resolve => setTimeout(() => resolve('повільний'), 500))
]).then(result => {
    console.log(result); // "швидкий"
});

// async/await
async function fetchUserData(userId) {
    try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        
        const posts = await fetch(\`/api/users/\${userId}/posts\`);
        const userPosts = await posts.json();
        
        return {
            user: userData,
            posts: userPosts
        };
    } catch (error) {
        console.error("Помилка отримання даних:", error);
        throw error;
    }
}

// Використання async функції
async function main() {
    try {
        const data = await fetchUserData(123);
        console.log("Отримані дані:", data);
    } catch (error) {
        console.error("Обробка помилки:", error);
    }
}

// Альтернативна обробка помилок
fetchUserData(123)
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Паралельне виконання з async/await
async function fetchMultipleUsers() {
    const [user1, user2, user3] = await Promise.all([
        fetchUserData(1),
        fetchUserData(2),
        fetchUserData(3)
    ]);
    
    return [user1, user2, user3];
}

// Послідовне vs паралельне виконання
async function sequential() {
    const result1 = await fetchData(1);  // Чекає 1 секунду
    const result2 = await fetchData(2);  // Чекає ще 1 секунду
    return [result1, result2];           // Загалом 2 секунди
}

async function parallel() {
    const [result1, result2] = await Promise.all([
        fetchData(1),  // Обидва запити виконуються одночасно
        fetchData(2)   
    ]);
    return [result1, result2]; // Загалом 1 секунда
}`
    },
    {
      id: 7,
      title: "ООП в JavaScript",
      difficulty: "Advanced",
      duration: "55 min",
      completed: false,
      description: "Об'єктно-орієнтоване програмування: прототипи, класи та принципи ООП.",
      learningPoints: [
        "Принципи ООП: інкапсуляція, наслідування, поліморфізм",
        "Прототипи та прототипне наслідування",
        "ES6 класи vs функції-конструктори",
        "Приватні властивості та методи"
      ],
      theory: {
        "Принципи ООП": `Інкапсуляція - дозволяє приховати внутрішній стан об'єкта та expose лише необхідні методи.
Наслідування - можливість створення нового класу на основі існуючого.
Поліморфізм - здатність об'єктів різних класів реагувати на однакові методи по-різному.`,
        "Прототип": `Це шаблон об'єкта. Він використовується як запасний варіант для властивостей та методів. JS шукає властивість спочатку в самому об'єкті, потім у прототипі.`,
        "constructor vs class": `class - це синтаксичний цукор над функцією конструктора. У класі методи автоматично потрапляють у прототип, у функції конструктора їх потрібно додавати окремо.`
      },
      codeExample: `// Функція-конструктор (старий спосіб)
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Додавання методу до прототипу
Person.prototype.greet = function() {
    return \`Hello, I'm \${this.name}\`;
};

Person.prototype.getAge = function() {
    return this.age;
};

const person1 = new Person("John", 30);
console.log(person1.greet()); // "Hello, I'm John"

// ES6 Класи (новий спосіб)
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return \`Hello, I'm \${this.name}\`;
    }
    
    getAge() {
        return this.age;
    }
    
    // Статичний метод
    static species() {
        return "Homo sapiens";
    }
}

// Наслідування з класами
class Student extends PersonClass {
    constructor(name, age, university) {
        super(name, age); // Виклик конструктора батьківського класу
        this.university = university;
    }
    
    study() {
        return \`\${this.name} is studying at \${this.university}\`;
    }
    
    // Перевизначення методу (поліморфізм)
    greet() {
        return \`Hi, I'm \${this.name}, a student at \${this.university}\`;
    }
}

const student = new Student("Alice", 20, "MIT");
console.log(student.greet());  // Перевизначений метод
console.log(student.study());  // Власний метод
console.log(student.getAge()); // Успадкований метод

// Приватні поля (ES2022)
class BankAccount {
    #balance = 0;  // Приватне поле
    #pin;          // Приватне поле
    
    constructor(initialBalance, pin) {
        this.#balance = initialBalance;
        this.#pin = pin;
    }
    
    // Приватний метод
    #validatePin(enteredPin) {
        return this.#pin === enteredPin;
    }
    
    getBalance(pin) {
        if (this.#validatePin(pin)) {
            return this.#balance;
        }
        throw new Error("Invalid PIN");
    }
    
    withdraw(amount, pin) {
        if (!this.#validatePin(pin)) {
            throw new Error("Invalid PIN");
        }
        if (amount > this.#balance) {
            throw new Error("Insufficient funds");
        }
        this.#balance -= amount;
        return this.#balance;
    }
}

const account = new BankAccount(1000, "1234");
console.log(account.getBalance("1234")); // 1000
// console.log(account.#balance); // SyntaxError: приватне поле

// Прототипне наслідування (ручне)
const animal = {
    makeSound() {
        return "Some sound";
    },
    
    eat() {
        return "Eating...";
    }
};

const dog = Object.create(animal);
dog.makeSound = function() {
    return "Woof!";
};

console.log(dog.makeSound()); // "Woof!" (власний метод)
console.log(dog.eat());       // "Eating..." (з прототипу)

// Міксини (композиція замість наслідування)
const CanFly = {
    fly() {
        return \`\${this.name} is flying\`;
    }
};

const CanSwim = {
    swim() {
        return \`\${this.name} is swimming\`;
    }
};

class Duck extends PersonClass {
    constructor(name) {
        super(name, 0);
    }
}

// Додаємо міксини
Object.assign(Duck.prototype, CanFly, CanSwim);

const duck = new Duck("Donald");
console.log(duck.fly());  // "Donald is flying"
console.log(duck.swim()); // "Donald is swimming"`
    },
    {
      id: 8,
      title: "Веб APIs та сховище",
      difficulty: "Intermediate",
      duration: "40 min",
      completed: false,
      description: "Робота з веб APIs, сховищем даних та обробкою подій.",
      learningPoints: [
        "LocalStorage та SessionStorage",
        "Event Listeners та обробка подій",
        "Fetch API для HTTP запитів",
        "Деструктуризація об'єктів та масивів"
      ],
      theory: {
        "LocalStorage vs SessionStorage": `LocalStorage зберігає дані безстроково. Інформація залишиться навіть після закриття браузера.
SessionStorage зберігає дані тільки під час поточної сесії вкладки. Дані втрачаються при закритті вкладки.`,
        "addEventListener": `Обробник подій, який дозволяє додавати слухачів подій до HTML елементів. Може додавати кілька обробників для однієї події.`,
        "Деструктуризація": `Деструктуризація - це спосіб розпакування значень з масивів або об'єктів у окремі змінні.`,
        "CRUD операції": `CRUD - це абревіатура: Create, Read, Update, Delete. Ці операції є основою для роботи з даними в багатьох додатках.`
      },
      codeExample: `// LocalStorage та SessionStorage
// Збереження даних
localStorage.setItem('username', 'john_doe');
sessionStorage.setItem('sessionId', '12345');

// Отримання даних
const username = localStorage.getItem('username');
const sessionId = sessionStorage.getItem('sessionId');

// Збереження об'єктів (потрібна серіалізація)
const user = { name: 'John', age: 30, preferences: ['coding', 'reading'] };
localStorage.setItem('user', JSON.stringify(user));

// Отримання об'єктів
const storedUser = JSON.parse(localStorage.getItem('user'));

// Видалення даних
localStorage.removeItem('username');
localStorage.clear(); // Очистити все

// Обробка подій з addEventListener
const button = document.getElementById('myButton');

// Додавання слухача події
button.addEventListener('click', function(event) {
    console.log('Button clicked!');
    console.log('Event target:', event.target);
    console.log('Event type:', event.type);
});

// Стрілкова функція як обробник
button.addEventListener('click', (e) => {
    e.preventDefault(); // Запобігти стандартній поведінці
    console.log('Arrow function handler');
});

// Видалення слухача події
function handleClick() {
    console.log('Removable handler');
}
button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);

// Event delegation
document.getElementById('parent').addEventListener('click', function(e) {
    if (e.target.classList.contains('child-button')) {
        console.log('Child button clicked');
    }
});

// Fetch API для HTTP запитів
async function fetchData() {
    try {
        // GET запит
        const response = await fetch('/api/users');
        const users = await response.json();
        
        // POST запит
        const newUser = {
            name: 'Alice',
            email: 'alice@example.com'
        };
        
        const postResponse = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser)
        });
        
        if (!postResponse.ok) {
            throw new Error(\`HTTP error! status: \${postResponse.status}\`);
        }
        
        const createdUser = await postResponse.json();
        return createdUser;
        
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

// CRUD операції з fetch
class UserAPI {
    static baseURL = '/api/users';
    
    // Create
    static async create(userData) {
        const response = await fetch(this.baseURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        return response.json();
    }
    
    // Read
    static async getAll() {
        const response = await fetch(this.baseURL);
        return response.json();
    }
    
    static async getById(id) {
        const response = await fetch(\`\${this.baseURL}/\${id}\`);
        return response.json();
    }
    
    // Update
    static async update(id, userData) {
        const response = await fetch(\`\${this.baseURL}/\${id}\`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        return response.json();
    }
    
    // Delete
    static async delete(id) {
        const response = await fetch(\`\${this.baseURL}/\${id}\`, {
            method: 'DELETE'
        });
        return response.ok;
    }
}

// Деструктуризація об'єктів
const person = {
    name: 'John',
    age: 30,
    address: {
        city: 'Kyiv',
        country: 'Ukraine'
    },
    hobbies: ['reading', 'coding']
};

// Базова деструктуризація
const { name, age } = person;

// Перейменування змінних
const { name: fullName, age: years } = person;

// Значення за замовчуванням
const { occupation = 'Developer' } = person;

// Вкладена деструктуризація
const { address: { city, country } } = person;

// Деструктуризація масивів
const [firstHobby, secondHobby] = person.hobbies;

// Rest оператор
const { name: userName, ...restProps } = person;

// Деструктуризація в параметрах функції
function greetUser({ name, age, city = 'Unknown' }) {
    return \`Hello \${name}, age \${age} from \${city}\`;
}

console.log(greetUser(person));

// Практичний приклад з формою
function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const { name, email, message } = Object.fromEntries(formData);
    
    // Обробка даних форми
    console.log({ name, email, message });
}`
    },
    {
      id: 9,
      title: "Сучасний JavaScript",
      difficulty: "Advanced",
      duration: "45 min",
      completed: false,
      description: "Останні можливості JavaScript: модулі, нові оператори та синтаксис.",
      learningPoints: [
        "ES6+ модулі: import/export",
        "Template literals та tagged templates",
        "Нові оператори: nullish coalescing, optional chaining",
        "use strict та його вплив на код"
      ],
      theory: {
        "use strict": `use strict - це директива, яка вмикає суворий режим у JavaScript. Вона забороняє використовувати небезпечні функції, робить код надійнішим і безпечнішим. У суворому режимі помилки видають виключення замість мовчазного ігнорування.`,
        "ES Modules": "Модулі дозволяють організувати код у окремі файли та контролювати, що експортується та імпортується між ними.",
        "Template Literals": "Шаблонні рядки дозволяють вбудовувати вирази та створювати багаторядкові рядки з більш зручним синтаксисом.",
        "Сучасні оператори": "Optional chaining (?.) та nullish coalescing (??) спрощують роботу з потенційно undefined/null значеннями."
      },
      codeExample: `"use strict"; // Суворий режим

// ES6 Модулі
// math.js
export const PI = 3.14159;
export function add(a, b) {
    return a + b;
}
export function multiply(a, b) {
    return a * b;
}
export default function calculator(operation, a, b) {
    switch(operation) {
        case 'add': return add(a, b);
        case 'multiply': return multiply(a, b);
        default: throw new Error('Unknown operation');
    }
}

// main.js
import calculator, { PI, add } from './math.js';
import * as mathUtils from './math.js';

console.log(PI); // 3.14159
console.log(add(2, 3)); // 5
console.log(calculator('add', 5, 7)); // 12
console.log(mathUtils.multiply(3, 4)); // 12

// Динамічний імпорт
async function loadMath() {
    const { add, PI } = await import('./math.js');
    console.log(add(1, 2));
}

// Template Literals
const name = 'John';
const age = 30;

// Базове використання
const greeting = \`Hello, my name is \${name} and I'm \${age} years old.\`;

// Багаторядкові рядки
const multiline = \`
    This is a multiline
    string that preserves
    formatting.
\`;

// Вирази в template literals
const mathResult = \`2 + 3 = \${2 + 3}\`;
const conditional = \`You are \${age >= 18 ? 'adult' : 'minor'}\`;

// Tagged Template Literals
function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => {
        const value = values[i] ? \`<mark>\${values[i]}</mark>\` : '';
        return result + string + value;
    }, '');
}

const highlightedText = highlight\`Hello \${name}, you are \${age} years old\`;

// Optional Chaining (?.)
const user = {
    profile: {
        social: {
            twitter: '@john_doe'
        }
    },
    preferences: {
        theme: 'dark'
    }
};

// Без optional chaining (небезпечно)
// const twitter = user.profile.social.twitter; // Може видати помилку

// З optional chaining (безпечно)
const twitter = user.profile?.social?.twitter;
const instagram = user.profile?.social?.instagram; // undefined
const theme = user.preferences?.theme; // 'dark'

// Optional chaining з методами
const result = user.getData?.(); // Викличе метод, якщо він існує

// Optional chaining з масивами
const firstItem = user.items?.[0];
const dynamicProp = user.profile?.[\`social_\${platform}\`];

// Nullish Coalescing (??)
const defaultName = user.name ?? 'Anonymous';
const defaultAge = user.age ?? 0;

// Різниця між || та ??
const falsy = '';
console.log(falsy || 'default');  // 'default' (|| реагує на все falsy)
console.log(falsy ?? 'default');  // '' (?? тільки на null/undefined)

// Logical Assignment Operators
let config = {};
config.theme ??= 'light';        // Присвоїти, якщо null/undefined
config.debug ||= false;          // Присвоїти, якщо falsy
config.feature &&= config.user; // Присвоїти, якщо truthy

// Числові роздільники
const million = 1_000_000;
const binary = 0b1010_0001;
const hex = 0xFF_EC_DE_5E;

// BigInt для великих чисел
const bigNumber = 123456789012345678901234567890n;
const anotherBig = BigInt('123456789012345678901234567890');

// Private Class Fields (сучасні браузери)
class ModernClass {
    #privateField = 'secret';
    
    #privateMethod() {
        return 'private';
    }
    
    publicMethod() {
        return this.#privateField + this.#privateMethod();
    }
}

// Top-level await (в модулях)
// const data = await fetch('/api/data').then(r => r.json());

// Оператор ?. для assignments
// element.style?.setProperty?.('color', 'red');

// String methods
const text = 'Hello World';
console.log(text.replaceAll('l', 'x')); // 'Hexxo Worxd'
console.log(text.at(-1)); // 'd' (останній символ)

// Array methods
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.at(-1)); // 5 (останній елемент)

// Object methods
const entries = Object.entries(user);
const fromEntries = Object.fromEntries(entries);
const hasOwnProp = Object.hasOwn(user, 'profile'); // true`
    },
    {
      id: 10,
      title: "Обробка помилок та відладка",
      difficulty: "Intermediate",
      duration: "35 min",
      completed: false,
      description: "Навчіться ефективно обробляти помилки та відлагоджувати JavaScript код.",
      learningPoints: [
        "Try-catch-finally конструкції",
        "Створення власних типів помилок",
        "Console API для відладки",
        "Debugger та breakpoints"
      ],
      theory: {
        "Типи помилок": "У JavaScript існують різні типи помилок: SyntaxError, ReferenceError, TypeError, RangeError. Кожен має своє призначення та ситуацію використання.",
        "Error handling": "Правильна обробка помилок включає try-catch блоки, створення користувацьких помилок та graceful degradation.",
        "Debugging": "Відладка включає використання console методів, debugger statement та інструментів розробника браузера."
      },
      codeExample: `// Основи обробки помилок
try {
    // Код, який може видати помилку
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    // Обробка помилки
    console.error('Сталася помилка:', error.message);
    console.error('Stack trace:', error.stack);
} finally {
    // Виконується завжди
    console.log('Блок finally виконався');
}

// Різні типи помилок
function demonstrateErrors() {
    try {
        // SyntaxError - неправильний синтаксис
        // eval('let a = ;'); // Видасть SyntaxError
        
        // ReferenceError - використання неоголошеної змінної
        console.log(nonExistentVariable);
        
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log('Reference error occurred');
        } else if (error instanceof TypeError) {
            console.log('Type error occurred');
        }
    }
}

// Створення власних помилок
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

class NetworkError extends Error {
    constructor(message, status) {
        super(message);
        this.name = 'NetworkError';
        this.status = status;
    }
}

// Використання власних помилок
function validateUser(user) {
    if (!user.email) {
        throw new ValidationError('Email is required', 'email');
    }
    if (!user.email.includes('@')) {
        throw new ValidationError('Invalid email format', 'email');
    }
}

async function fetchUserData(id) {
    try {
        const response = await fetch(\`/api/users/\${id}\`);
        
        if (!response.ok) {
            throw new NetworkError(
                \`Failed to fetch user: \${response.statusText}\`,
                response.status
            );
        }
        
        const user = await response.json();
        validateUser(user);
        
        return user;
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error(\`Validation failed for field \${error.field}: \${error.message}\`);
        } else if (error instanceof NetworkError) {
            console.error(\`Network error (status \${error.status}): \${error.message}\`);
        } else {
            console.error('Unexpected error:', error);
        }
        throw error; // Re-throw для вищого рівня
    }
}

// Console API для відладки
const debugData = { name: 'John', age: 30, hobbies: ['coding', 'reading'] };

console.log('Simple log');
console.info('Information message');
console.warn('Warning message');
console.error('Error message');

// Групування логів
console.group('User Data');
console.log('Name:', debugData.name);
console.log('Age:', debugData.age);
console.groupCollapsed('Hobbies'); // Згорнута група
debugData.hobbies.forEach(hobby => console.log(hobby));
console.groupEnd();
console.groupEnd();

// Таблиця
console.table(debugData);
console.table([
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 35 }
]);

// Вимірювання часу
console.time('Operation Timer');
// Якась операція
for (let i = 0; i < 1000000; i++) {
    // Симуляція роботи
}
console.timeEnd('Operation Timer');

// Лічильник
function someFunction() {
    console.count('Function called'); // Рахує виклики
}
someFunction(); // Function called: 1
someFunction(); // Function called: 2

// Assert - перевірка умов
console.assert(debugData.age > 0, 'Age should be positive');
console.assert(debugData.name === 'Jane', 'Name should be Jane'); // Видасть повідомлення

// Trace - показує stack trace
function a() {
    b();
}
function b() {
    c();
}
function c() {
    console.trace('Trace from function c');
}
a();

// Debugger statement
function complexFunction(data) {
    let processed = data.map(item => {
        debugger; // Браузер зупиниться тут при відкритих DevTools
        return item * 2;
    });
    
    return processed.filter(item => item > 10);
}

// Performance monitoring
function monitorPerformance(fn, name) {
    return function(...args) {
        const start = performance.now();
        const result = fn.apply(this, args);
        const end = performance.now();
        
        console.log(\`\${name} took \${end - start} milliseconds\`);
        return result;
    };
}

const slowFunction = monitorPerformance(
    (n) => {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += i;
        }
        return sum;
    },
    'slowFunction'
);

// Global error handling
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    // Відправити помилку на сервер для моніторингу
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    event.preventDefault(); // Запобігти виводу в консоль
});

// Utility для safe execution
function safeExecute(fn, fallback = null) {
    try {
        return fn();
    } catch (error) {
        console.error('Safe execution failed:', error);
        return fallback;
    }
}

const result = safeExecute(() => {
    return JSON.parse(potentiallyInvalidJSON);
}, { error: 'Invalid JSON' });`
    }
  ]
};