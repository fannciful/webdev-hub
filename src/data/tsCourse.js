export const tsCourseData = {
  title: "TypeScript Fundamentals",
  description: "Освойте TypeScript від основ до просунутих концепцій. Навчіться створювати типобезпечні застосунки з кращою підтримуваністю та меншою кількістю помилок.",
  level: "Beginner to Advanced",
  duration: "~10 hours",
  prerequisites: "JavaScript ES6+, основи програмування",
  certificate: "Доступний після завершення",
  topics: [
    {
      id: 1,
      title: "Введення в TypeScript",
      difficulty: "Beginner",
      duration: "30 min",
      completed: true,
      description: "Дізнайтеся, що таке TypeScript, його переваги та як почати розробку.",
      learningPoints: [
        "Що таке TypeScript та його призначення",
        "Основні переваги статичної типізації",
        "Встановлення та налаштування",
        "Перший TypeScript файл"
      ],
      theory: {
        "Що таке TypeScript": "TypeScript - це мова програмування, розроблена Microsoft, яка є надмножиною JavaScript. Основна ідея полягає в додаванні статичної типізації до JavaScript.",
        "Основні переваги": `1. Раннє виявлення помилок на етапі розробки
2. Краще автодоповнення в редакторах коду
3. Покращена читабельність та підтримуваність коду
4. Можливість використання сучасних можливостей JavaScript
5. Поступова міграція з JavaScript проектів`,
        "Статична типізація": "На відміну від JavaScript, де тип змінної визначається під час виконання, TypeScript дозволяє оголошувати типи змінних заздалегідь.",
        "Компіляція": "TypeScript компілюється в звичайний JavaScript, який може виконуватися в будь-якому середовищі JavaScript."
      },
      codeExample: `// Встановлення TypeScript
npm install -g typescript

// Компіляція файлу
tsc app.ts

// Базовий TypeScript код
let message: string = "Hello TypeScript!";
let count: number = 42;
let isActive: boolean = true;

// Функція з типізацією
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

// Виклик функції
console.log(greet("World")); // Hello, World!

// JavaScript еквівалент після компіляції
// let message = "Hello TypeScript!";
// let count = 42;
// let isActive = true;`
    },
    {
      id: 2,
      title: "Система типів та примітивні типи",
      difficulty: "Beginner",
      duration: "40 min",
      completed: false,
      description: "Вивчіть основні типи даних TypeScript та виведення типів.",
      learningPoints: [
        "Примітивні типи TypeScript",
        "Автоматичне виведення типів",
        "Складні типи: масиви, об'єкти",
        "Анотації типів"
      ],
      theory: {
        "Примітивні типи": `TypeScript підтримує всі примітивні типи JavaScript:
• number - для чисел (цілих та дробових)
• string - для текстових даних
• boolean - для логічних значень
• null - представляє відсутність значення
• undefined - значення, яке ще не було присвоєно
• symbol - унікальний ідентифікатор
• bigint - для великих цілих чисел`,
        "Виведення типів": "TypeScript може автоматично визначати тип змінної на основі присвоєного їй значення. Наприклад, якщо ви присвоюєте змінній число, TypeScript автоматично визначить її як тип number.",
        "Складні типи": `• Array - масив елементів одного типу
• Tuple - масив фіксованої довжини з елементами різних типів
• Object - об'єкт з визначеними властивостями та їх типами
• Function - функція з типізованими параметрами та поверненим значенням`
      },
      codeExample: `// Примітивні типи
let age: number = 25;
let name: string = "John";
let isStudent: boolean = true;
let data: null = null;
let value: undefined = undefined;

// Автоматичне виведення типів
let autoNumber = 42;        // number
let autoString = "hello";   // string
let autoBool = true;        // boolean

// Масиви
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// Tuple (кортеж)
let user: [string, number] = ["John", 25];

// Об'єкт
let person: {
  name: string;
  age: number;
} = {
  name: "Alice",
  age: 30
};

// Функція
function add(a: number, b: number): number {
  return a + b;
}

// Стрілкова функція
const multiply = (x: number, y: number): number => x * y;`
    },
    {
      id: 3,
      title: "Спеціальні типи TypeScript",
      difficulty: "Beginner",
      duration: "35 min",
      completed: false,
      description: "Розуміння спеціальних типів: any, unknown, void, never.",
      learningPoints: [
        "Тип any та його використання",
        "Unknown як безпечна альтернатива any",
        "Void для функцій без повернення",
        "Never для неможливих значень"
      ],
      theory: {
        "Any": "Тип any відключає перевірку типів для змінної. Це найменш бажаний тип, оскільки він нівелює основні переваги TypeScript.",
        "Unknown": "Більш безпечна альтернатива any. Змінна типу unknown може містити будь-яке значення, але перед використанням потрібно перевірити її тип.",
        "Void": "Використовуються для функцій, які нічого не повертають. Це протилежність типу, який повертає значення.",
        "Never": "Представляє тип значень, які ніколи не з'являються. Зазвичай використовується для функцій, які завжди викидають помилку або мають нескінченний цикл."
      },
      codeExample: `// Any - уникайте використання
let anything: any = 42;
anything = "hello";
anything = true;

// Unknown - безпечніший варіант
let userInput: unknown = getData();
if (typeof userInput === "string") {
  console.log(userInput.toUpperCase());
}

// Void - функції без повернення
function logMessage(msg: string): void {
  console.log(msg);
}

// Never - функції, що не завершуються
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // нескінченний цикл
  }
}

// Type guards з unknown
function processValue(value: unknown) {
  if (typeof value === "string") {
    return value.length;
  }
  if (typeof value === "number") {
    return value * 2;
  }
  return null;
}`
    },
    {
      id: 4,
      title: "Union та Intersection типи",
      difficulty: "Intermediate",
      duration: "40 min",
      completed: false,
      description: "Об'єднання та перетин типів для створення гнучких типових систем.",
      learningPoints: [
        "Union types з оператором |",
        "Intersection types з оператором &",
        "Type guards та звуження типів",
        "Практичні приклади використання"
      ],
      theory: {
        "Union types": "Дозволяє змінній мати один з декількох можливих типів. Використовується оператор вертикальної риски (|). Це корисно, коли функція може приймати різні типи даних.",
        "Intersection types": "Об'єднує декілька типів в один, використовуючи оператор амперсанд (&). Результуючий тип містить всі властивості всіх об'єднаних типів.",
        "Type guards": "Механізм для звуження типів в union types. Дозволяє TypeScript зрозуміти, який саме тип використовується в конкретному блоці коду.",
        "Discriminated unions": "Спеціальний вид union types з загальною властивістю-дискримінатором для розрізнення типів."
      },
      codeExample: `// Union types
type StringOrNumber = string | number;
let value: StringOrNumber = "hello";
value = 42;

function format(input: string | number): string {
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  return input.toString();
}

// Intersection types
type Person = { name: string };
type Employee = { id: number };
type Staff = Person & Employee;

let worker: Staff = {
  name: "John",
  id: 123
};

// Discriminated Union
type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; side: number };
type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
  }
}

// Type guards
function isString(value: unknown): value is string {
  return typeof value === "string";
}

if (isString(userInput)) {
  console.log(userInput.length); // TypeScript знає, що це string
}`
    },
    {
      id: 5,
      title: "Інтерфейси та типи",
      difficulty: "Intermediate",
      duration: "50 min",
      completed: false,
      description: "Створення складних типових структур за допомогою інтерфейсів та type aliases.",
      learningPoints: [
        "Оголошення та використання інтерфейсів",
        "Опціональні та readonly властивості",
        "Розширення інтерфейсів",
        "Відмінності між interface та type"
      ],
      theory: {
        "Інтерфейси": "Інтерфейси описують структуру об'єктів. Вони визначають, які властивості повинен мати об'єкт, їх типи та чи є вони обов'язковими.",
        "Можливості інтерфейсів": `• Опціональні властивості (позначаються знаком питання)
• Readonly властивості (не можна змінювати після створення)
• Розширення інтерфейсів (наслідування від інших інтерфейсів)
• Індексні сигнатури (для об'єктів з динамічними ключами)`,
        "Types": "Типи схожі на інтерфейси, але мають більше можливостей. Вони можуть описувати не тільки структуру об'єктів, але й об'єднання типів, примітивні типи тощо.",
        "Interface vs Type": `• Type може описувати примітивні типи, об'єднання, кортежі
• Interface краще підходить для опису об'єктів
• Interface можна розширювати декларативно
• Type більш гнучкий для складних типів`
      },
      codeExample: `// Базовий інтерфейс
interface User {
  name: string;
  age: number;
  email?: string;        // опціональна властивість
  readonly id: number;   // тільки для читання
}

let user: User = {
  id: 1,
  name: "John",
  age: 30
};

// Розширення інтерфейсів
interface Employee extends User {
  department: string;
  salary: number;
}

// Індексна сигнатура
interface Dictionary {
  [key: string]: string;
}

// Type aliases
type Point = { x: number; y: number };
type ID = string | number;
type UserOrAdmin = User | { role: "admin" };

// Функціональні типи
interface Calculator {
  (a: number, b: number): number;
}

const add: Calculator = (x, y) => x + y;

// Intersection з interfaces
interface Serializable {
  serialize(): string;
}

interface Timestamped {
  timestamp: Date;
}

type SerializableUser = User & Serializable & Timestamped;

// Generic interfaces
interface Container<T> {
  value: T;
  getValue(): T;
}`
    },
    {
      id: 6,
      title: "Generics (Узагальнені типи)",
      difficulty: "Intermediate",
      duration: "55 min",
      completed: false,
      description: "Створення переописуваних компонентів за допомогою узагальнених типів.",
      learningPoints: [
        "Основи generics та параметри типів",
        "Generic функції та класи",
        "Обмеження типів (constraints)",
        "Утилітні типи з generics"
      ],
      theory: {
        "Generics": "Generics дозволяють створювати компоненти, які працюють з різними типами, зберігаючи інформацію про тип. Це робить код більш переперевикористовуваним та типобезпечним.",
        "Основні концепції": `• Параметри типу (зазвичай позначаються як T, U, V)
• Обмеження типів (constraints)
• Узагальнені функції, класи та інтерфейси
• Умовні типи`,
        "Type constraints": "Дозволяють обмежити, які типи можуть бути передані як generic параметри. Використовується ключове слово extends.",
        "Conditional types": "Типи, які змінюються в залежності від умови. Використовують синтаксис подібний до тернарного оператора."
      },
      codeExample: `// Базові generics
function identity<T>(arg: T): T {
  return arg;
}

let result1 = identity<string>("hello");
let result2 = identity(42); // автоматичне виведення типу

// Generic інтерфейси
interface Response<T> {
  data: T;
  status: number;
}

interface User {
  name: string;
  email: string;
}

let userResponse: Response<User> = {
  data: { name: "John", email: "john@example.com" },
  status: 200
};

// Generic класи
class Storage<T> {
  private items: T[] = [];
  
  add(item: T): void {
    this.items.push(item);
  }
  
  get(index: number): T {
    return this.items[index];
  }
}

const stringStorage = new Storage<string>();
stringStorage.add("hello");

// Constraints (обмеження)
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// Keyof operator
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "John", age: 30 };
const name = getProperty(person, "name"); // string
const age = getProperty(person, "age");   // number

// Conditional types
type IsArray<T> = T extends any[] ? true : false;
type Test1 = IsArray<string[]>; // true
type Test2 = IsArray<string>;   // false`
    },
    {
      id: 7,
      title: "Класи в TypeScript",
      difficulty: "Intermediate",
      duration: "45 min",
      completed: false,
      description: "Розширені можливості класів з модифікаторами доступу та абстракцією.",
      learningPoints: [
        "Модифікатори доступу: public, private, protected",
        "Абстрактні класи та методи",
        "Статичні члени класів",
        "Реалізація інтерфейсів в класах"
      ],
      theory: {
        "Модифікатори доступу": `• Public - доступний всюди (за замовчуванням)
• Private - доступний тільки в межах класу
• Protected - доступний в класі та його нащадках
• Readonly - властивість тільки для читання`,
        "Абстрактні класи": "Класи, які не можна інстанціювати напряму. Вони слугують базою для інших класів та можуть містити абстрактні методи, які повинні бути реалізовані в дочірніх класах.",
        "Статичні члени": "Властивості та методи, які належать класу, а не його екземплярам.",
        "Реалізація інтерфейсів": "Класи можуть реалізовувати один або кілька інтерфейсів, гарантуючи наявність певних властивостей та методів."
      },
      codeExample: `// Базовий клас з модифікаторами
class Animal {
  public name: string;
  private age: number;
  protected species: string;
  readonly id: number;
  
  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
    this.id = Math.random();
  }
  
  protected makeSound(): void {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age, "Canis lupus");
  }
  
  bark(): void {
    this.makeSound(); // доступний через protected
    console.log("Woof!");
  }
}

// Абстрактний клас
abstract class Shape {
  abstract getArea(): number;
  
  display(): void {
    console.log(\`Area: \${this.getArea()}\`);
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  
  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

// Статичні члени
class MathUtils {
  static PI = 3.14159;
  
  static calculateCircleArea(radius: number): number {
    return MathUtils.PI * radius ** 2;
  }
}

// Реалізація інтерфейсів
interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

class Duck implements Flyable, Swimmable {
  fly(): void {
    console.log("Flying...");
  }
  
  swim(): void {
    console.log("Swimming...");
  }
}`
    },
    {
      id: 8,
      title: "Enums та константи",
      difficulty: "Beginner",
      duration: "30 min",
      completed: false,
      description: "Створення іменованих констант за допомогою енумів.",
      learningPoints: [
        "Числові енуми",
        "Рядкові енуми",
        "Const енуми для оптимізації",
        "Зворотне відображення енумів"
      ],
      theory: {
        "Енуми": "Енуми дозволяють створювати іменовані константи. Існують кілька видів енумів.",
        "Числові енуми": "За замовчуванням значення починаються з 0 та автоматично збільшуються.",
        "Рядкові енуми": "Кожне значення повинно бути явно ініціалізоване рядком.",
        "Const енуми": "Повністю видаляються під час компіляції для кращої продуктивності. Значення вставляються безпосередньо в код."
      },
      codeExample: `// Числовий enum
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

let dir: Direction = Direction.Up;

// Рядковий enum
enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue"
}

let color: Color = Color.Red;

// Змішаний enum (не рекомендується)
enum Mixed {
  No = 0,
  Yes = "yes"
}

// Const enum
const enum Size {
  Small = "small",
  Medium = "medium",
  Large = "large"
}

// Після компіляції Size.Small стане просто "small"
let size = Size.Small;

// Зворотне відображення (тільки для числових)
enum Status {
  Active = 1,
  Inactive = 2
}

console.log(Status[1]); // "Active"
console.log(Status.Active); // 1

// Обчислювані значення
enum FileAccess {
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write
}

// Використання в типах
function processStatus(status: Status): void {
  if (status === Status.Active) {
    console.log("Processing active");
  }
}`
    },
    {
      id: 9,
      title: "Утилітні типи",
      difficulty: "Advanced",
      duration: "50 min",
      completed: false,
      description: "Використання вбудованих утилітних типів для трансформації існуючих типів.",
      learningPoints: [
        "Partial, Required, Readonly",
        "Pick, Omit, Record",
        "Exclude, Extract, NonNullable",
        "Створення власних утилітних типів"
      ],
      theory: {
        "Утилітні типи": "TypeScript надає набір вбудованих утилітних типів для трансформації існуючих типів.",
        "Основні утилітні типи": `• Partial<T> - робить всі властивості опціональними
• Required<T> - робить всі властивості обов'язковими
• Readonly<T> - робить всі властивості тільки для читання
• Pick<T, K> - вибирає тільки вказані властивості
• Omit<T, K> - виключає вказані властивості`,
        "Додаткові типи": `• Record<K, T> - створює тип з ключами K та значеннями T
• Exclude<T, U> - виключає типи U з T
• Extract<T, U> - витягує типи U з T
• NonNullable<T> - виключає null та undefined`
      },
      codeExample: `interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Partial - всі властивості опціональні
type PartialUser = Partial<User>;
let updateUser: PartialUser = { name: "John" };

// Required - всі властивості обов'язкові
type RequiredUser = Required<User>;

// Readonly - всі властивості тільки для читання
type ReadonlyUser = Readonly<User>;

// Pick - вибрати конкретні властивості
type UserPreview = Pick<User, "id" | "name">;
let preview: UserPreview = { id: 1, name: "John" };

// Omit - виключити властивості
type CreateUser = Omit<User, "id">;
let newUser: CreateUser = {
  name: "Alice",
  email: "alice@example.com",
  age: 25
};

// Record - створити тип зі словника
type Roles = "admin" | "user" | "guest";
type Permissions = Record<Roles, string[]>;

let perms: Permissions = {
  admin: ["read", "write", "delete"],
  user: ["read", "write"],
  guest: ["read"]
};

// Exclude - виключити типи
type NonNullString = Exclude<string | null | undefined, null | undefined>;

// Extract - витягти типи
type StringsOnly = Extract<string | number | boolean, string>;

// NonNullable - виключити null та undefined
type SafeValue = NonNullable<string | number | null | undefined>;

// Власний утилітний тип
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};`
    },
    {
      id: 10,
      title: "Розширені концепції типізації",
      difficulty: "Advanced",
      duration: "60 min",
      completed: false,
      description: "Просунуті техніки типізації: mapped types, conditional types, template literals.",
      learningPoints: [
        "Mapped Types для трансформації типів",
        "Conditional Types та їх логіка",
        "Template Literal Types",
        "Index Signatures та Key Remapping"
      ],
      theory: {
        "Mapped Types": "Спосіб створення нових типів шляхом перебору властивостей існуючого типу. Це основа для утилітних типів TypeScript.",
        "Conditional Types": "Типи, які змінюються в залежності від умови. Використовують синтаксис подібний до тернарного оператора. Дозволяють створювати складну логіку типізації.",
        "Template Literal Types": "Типи, які використовують template literals для створення нових рядкових типів на основі існуючих. Це дозволяє створювати типи з динамічними рядками.",
        "Index Signature": "Спосіб опису об'єктів з невідомими заздалегідь ключами, але відомими типами значень. Корисно для словників або мапи з динамічними ключами.",
        "Key Remapping": "Техніка в mapped types, яка дозволяє змінювати назви ключів під час трансформації типу."
      },
      codeExample: `// Mapped Types
type Optional<T> = {
  [P in keyof T]?: T[P];
};

type User = { name: string; age: number; email: string };
type OptionalUser = Optional<User>;

// Conditional Types
type IsString<T> = T extends string ? true : false;
type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false

// Template Literal Types
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type ClickEvent = EventName<"click">; // "onClick"

type APIEndpoint<T extends string> = \`/api/\${T}\`;
type UserEndpoint = APIEndpoint<"users">; // "/api/users"

// Більш складний приклад з conditional types
type NonEmptyArray<T> = T extends readonly any[] 
  ? T extends readonly [] 
    ? never 
    : T
  : never;

// Key Remapping в Mapped Types
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

type Person = { name: string; age: number };
type PersonGetters = Getters<Person>;
// { getName: () => string; getAge: () => number; }

// Index Signatures
interface StringDictionary {
  [key: string]: string;
}

interface NumberDictionary {
  [index: number]: string;
}

// Recursive types
type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

// Infer keyword в conditional types
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type FunctionReturn = ReturnType<() => string>; // string

// Distributive conditional types
type ToArray<T> = T extends any ? T[] : never;
type StrOrNumArray = ToArray<string | number>; // string[] | number[]`
    },
    {
      id: 11,
      title: "Налаштування компілятора та tsconfig.json",
      difficulty: "Intermediate",
      duration: "40 min",
      completed: false,
      description: "Конфігурація TypeScript компілятора для оптимальної розробки.",
      learningPoints: [
        "Структура файлу tsconfig.json",
        "Основні опції компіляції",
        "Строгий режим та його опції",
        "Налаштування шляхів та модулів"
      ],
      theory: {
        "tsconfig.json": "Файл tsconfig.json містить всі налаштування компіляції: цільова версія JavaScript, система модулів, строгість перевірки типів, шляхи до файлів.",
        "Процес компіляції": `TypeScript код проходить кілька етапів:
1. Лексичний аналіз (tokenization)
2. Синтаксичний аналіз (parsing)  
3. Семантичний аналіз (type checking)
4. Генерація JavaScript коду`,
        "Строгий режим": `Набір опцій для суворішої перевірки:
• noImplicitAny - заборона неявного any
• strictNullChecks - строга перевірка null/undefined
• strictFunctionTypes - строга перевірка типів функцій
• noImplicitThis - заборона неявного this`,
        "Модульна система": "TypeScript підтримує різні системи модулів: CommonJS, ES6, AMD, UMD. Вибір залежить від цільового середовища."
      },
      codeExample: `// tsconfig.json базова конфігурація
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}

// Розширена конфігурація
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM"],
    "module": "ESNext",
    "moduleResolution": "node",
    
    // Строгість
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitThis": true,
    
    // Додаткові перевірки
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    
    // Вихідні файли
    "outDir": "./dist",
    "rootDir": "./src",
    "declaration": true,
    "sourceMap": true,
    
    // Шляхи
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"]
    },
    
    // Інтероперабельність
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    
    // Експериментальні функції
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}

// Використання різних конфігурацій
// package.json scripts
{
  "scripts": {
    "build": "tsc",
    "build:prod": "tsc --project tsconfig.prod.json",
    "dev": "tsc --watch",
    "type-check": "tsc --noEmit"
  }
}`
    },
    {
      id: 12,
      title: "TypeScript у реальних проектах",
      difficulty: "Advanced",
      duration: "55 min",
      completed: false,
      description: "Практичне застосування TypeScript в React, Node.js та інших технологіях.",
      learningPoints: [
        "TypeScript з React та JSX",
        "Типізація API відповідей",
        "Декоратори та метапрограмування",
        "Міграція з JavaScript на TypeScript"
      ],
      theory: {
        "TypeScript + React": "Повна підтримка JSX з типізацією props, state та обробників подій. Покращує DX та зменшує кількість помилок.",
        "API типізація": "Створення типів для серверних відповідей, request/response об'єктів та інтеграції з REST API.",
        "Декоратори": "Експериментальна функція, яка дозволяє додавати метадані та змінювати поведінку класів, методів, властивостей та параметрів.",
        "Міграція": "Поступова міграція JavaScript проектів на TypeScript через allowJs опцію та поступове додавання типів."
      },
      codeExample: `// React з TypeScript
interface Props {
  name: string;
  age?: number;
  onClick: (id: number) => void;
}

const UserCard: React.FC<Props> = ({ name, age, onClick }) => {
  return (
    <div onClick={() => onClick(1)}>
      <h2>{name}</h2>
      {age && <p>Age: {age}</p>}
    </div>
  );
};

// API типізація
interface User {
  id: number;
  name: string;
  email: string;
}

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

async function fetchUser(id: number): Promise<User> {
  const response = await fetch(\`/api/users/\${id}\`);
  const result: ApiResponse<User> = await response.json();
  return result.data;
}

// Promise типізація
type LoadingState<T> = {
  loading: true;
  data?: undefined;
  error?: undefined;
} | {
  loading: false;
  data: T;
  error?: undefined;
} | {
  loading: false;
  data?: undefined;
  error: string;
};

// Декоратори (експериментальні)
function log(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(\`Calling \${propertyName} with\`, args);
    return method.apply(this, args);
  };
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}

// Namespace для організації коду
namespace Utils {
  export function formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }
  
  export namespace Validators {
    export function isEmail(email: string): boolean {
      return email.includes('@');
    }
  }
}

// Використання: Utils.formatDate(new Date())

// Модульна декларація для сторонніх бібліотек
declare module 'third-party-lib' {
  export function doSomething(param: string): number;
}`
    }
  ]
};