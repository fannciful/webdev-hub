export const reactCourseData = {
  title: "React Fundamentals",
  description: "Вивчіть React від основ до просунутих концепцій. Комплексний курс, який навчить вас створювати сучасні інтерактивні користувацькі інтерфейси.",
  level: "Beginner to Advanced",
  duration: "~15 hours",
  prerequisites: "JavaScript ES6+, HTML, CSS",
  certificate: "Доступний після завершення",
  topics: [
    {
      id: 1,
      title: "Введення в React та Virtual DOM",
      difficulty: "Beginner",
      duration: "40 min",
      completed: true,
      description: "Дізнайтеся основи React, концепцію Virtual DOM та переваги використання цієї бібліотеки.",
      learningPoints: [
        "Що таке React та для чого він використовується",
        "Virtual DOM: основи та переваги",
        "Процес reconciliation",
        "Налаштування проекту з Create React App"
      ],
      theory: {
        "Що таке React": "React.js - це JavaScript бібліотека з відкритим вихідним кодом для розробки інтерфейсів користувача. Компонент React створюється дуже просто, оскільки він використовує JSX.",
        "Virtual DOM": "Virtual DOM - це ідея про створення віртуального представлення структури дерева об'єктів DOM у пам'яті. Основні переваги: покращення швидкості відображення змін та спрощення взаємодії з подіями.",
        "Reconciliation": "Reconciliation - це процес порівняння попереднього та поточного стану Virtual DOM для визначення різниці між ними. React використовує алгоритми 'diffing' для визначення мінімальних змін у DOM.",
        "Create React App": `Переваги: швидкий старт, стандартна структура, автоматичне перезавантаження, вбудована оптимізація.
Недоліки: обмежена конфігурація, розмір конфігураційних файлів, залежність від npm.`
      },
      codeExample: `// Встановлення та створення проекту
npx create-react-app my-app
cd my-app
npm start

// Базовий React компонент
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Hello React!</h1>
      <p>Мій перший React додаток</p>
    </div>
  );
}

export default App;

// Virtual DOM концепція (спрощено)
const virtualElement = {
  type: 'div',
  props: {
    className: 'container',
    children: [
      {
        type: 'h1',
        props: { children: 'Hello World' }
      }
    ]
  }
};`
    },
    {
      id: 2,
      title: "JSX та основи синтаксису",
      difficulty: "Beginner",
      duration: "35 min",
      completed: false,
      description: "Опануйте JSX - розширення синтаксису JavaScript для опису UI компонентів.",
      learningPoints: [
        "Що таке JSX та його основні концепції",
        "Вбудовані вирази JavaScript в JSX",
        "Робота з класами та подіями в JSX",
        "Відмінності JSX від HTML"
      ],
      theory: {
        "JSX основи": "JSX (JavaScript XML) - це розширення синтаксису JavaScript, яке надає можливість описувати структуру UI, схожу на XML чи HTML. JSX - це суміш JavaScript та HTML.",
        "Основні концепції JSX": `• Синтаксис схожий на HTML
• Вбудовані вирази JavaScript
• Компоненти в JSX
• Класи та стилі`,
        "Класи та події": `Робота з класами: використовуються атрибути className для встановлення класів.
Динамічні класи: використовуємо JavaScript в фігурних дужках.
Робота з подіями: використовуємо атрибути onClick, onChange і так далі.`,
        "JSX правила": "JSX повинен мати один кореневий елемент, атрибути пишуться в camelCase, самозакриваючі теги потребують слеша."
      },
      codeExample: `// Основи JSX
const element = <h1>Hello, World!</h1>;

// Вбудовані вирази JavaScript
const name = 'John';
const greeting = <h1>Hello, {name}!</h1>;
const result = <p>2 + 2 = {2 + 2}</p>;

// Робота з класами
const isActive = true;
const button = (
  <button 
    className={isActive ? 'btn active' : 'btn'}
    onClick={() => console.log('Clicked!')}
  >
    Click me
  </button>
);

// Умовний рендеринг
const user = { name: 'Alice', isLoggedIn: true };
const welcome = (
  <div>
    {user.isLoggedIn ? (
      <h1>Welcome, {user.name}!</h1>
    ) : (
      <h1>Please log in</h1>
    )}
  </div>
);

// Списки
const items = ['apple', 'banana', 'orange'];
const list = (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

// Стилі
const style = { color: 'blue', fontSize: '18px' };
const styledElement = <p style={style}>Styled text</p>;`
    },
    {
      id: 3,
      title: "Компоненти: функціональні та класові",
      difficulty: "Beginner",
      duration: "45 min",
      completed: false,
      description: "Розуміння різних типів компонентів у React та їх основних відмінностей.",
      learningPoints: [
        "Функціональні компоненти",
        "Класові компоненти",
        "Основні відмінності між типами компонентів",
        "Коли використовувати кожен тип"
      ],
      theory: {
        "Функціональні компоненти": "Function component - це прості JavaScript функції, які приймають props та повертають React-елемент. Найпростіше оголосити React-компонент як функцію.",
        "Класові компоненти": "Class component - це класи, які розширюють React.Component і мають внутрішній стан через this.state та доступ до методів життєвого циклу.",
        "Основні відмінності": `1. Синтаксис: function components мають простіший синтаксис
2. Стан: function components використовують хуки
3. Життєвий цикл: class components мають методи життєвого циклу
4. Хуки: function components можуть використовувати хуки`,
        "Компоненти багаторазового використання": "React дозволяє використовувати компоненти повторно. Готові бібліотеки: Material UI, Reactstrap, DevExpress, Ant Design."
      },
      codeExample: `// Функціональний компонент
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Стрілкова функція
const Greeting = (props) => {
  return <p>Welcome, {props.user}!</p>;
};

// Класовий компонент
class UserCard extends React.Component {
  render() {
    return (
      <div className="user-card">
        <h2>{this.props.name}</h2>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

// Використання компонентів
function App() {
  return (
    <div>
      <Welcome name="John" />
      <Greeting user="Alice" />
      <UserCard name="Bob" email="bob@example.com" />
    </div>
  );
}

// Композиція компонентів
function Header() {
  return <h1>My App</h1>;
}

function Footer() {
  return <p>&copy; 2024</p>;
}

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}`
    },
    {
      id: 4,
      title: "Props та State",
      difficulty: "Beginner",
      duration: "50 min",
      completed: false,
      description: "Вивчіть основи передачі даних між компонентами та управління внутрішнім станом.",
      learningPoints: [
        "Props: передача та використання",
        "State: створення та оновлення",
        "Правила роботи зі станом",
        "Односпрямований потік даних"
      ],
      theory: {
        "Props": "Props (властивості) - передаються в компонент і служать як параметри виклику функції. Props можна лише читати! Зміна Props призводить до повторного виклику методу render.",
        "State": `State - внутрішній стан компонента. Для його відображення у класовому компоненті потрібно:
1. У конструкторі створити this.state
2. У потрібному методі взяти this.state`,
        "Зміна стану": "Для зміни потрібно викликати метод this.setState. Цей метод додає зміну у стані компонента та вказує React на необхідність повторного рендерингу.",
        "Правила стану": `1. Не змінюйте стан безпосередньо
2. Оновлення стану об'єднуються
3. Оновлення стану можуть бути асинхронними`
      },
      codeExample: `// Props в функціональному компоненті
function UserProfile({ name, age, email }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

// Використання
<UserProfile name="John" age={30} email="john@example.com" />

// State в класовому компоненті
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

// Props з дефолтними значеннями
function Button({ text = 'Click me', onClick = () => {} }) {
  return <button onClick={onClick}>{text}</button>;
}

// Передача функції як prop
function Parent() {
  const handleClick = (message) => {
    alert(message);
  };

  return <Child onButtonClick={handleClick} />;
}

function Child({ onButtonClick }) {
  return (
    <button onClick={() => onButtonClick('Hello!')}>
      Click me
    </button>
  );
}`
    },
    {
      id: 5,
      title: "Життєвий цикл компонентів",
      difficulty: "Intermediate",
      duration: "55 min",
      completed: false,
      description: "Розуміння етапів життя компонентів та методів життєвого циклу.",
      learningPoints: [
        "Три етапи життєвого циклу",
        "Основні методи життєвого циклу",
        "Монтування, оновлення, розмонтування",
        "Практичне використання методів"
      ],
      theory: {
        "Життєвий цикл": "Життєвий цикл компонента — це послідовність етапів, які проходить компонент від моменту створення до видалення з DOM.",
        "Три етапи": `1. Монтування - перший рендер та вставка в DOM
2. Оновлення - всі наступні рендери та оновлення DOM
3. Розмонтування - видалення з DOM`,
        "Фази": `• Render - може бути призупинено або перезапущено
• Pre-commit - читання DOM до оновлення
• Commit - дії після оновлення DOM`,
        "Основні методи": `Монтування: constructor(), render(), componentDidMount()
Оновлення: componentDidUpdate(), render()
Розмонтування: componentWillUnmount()`
      },
      codeExample: `// Повний приклад життєвого циклу
class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('1. Constructor');
  }

  componentDidMount() {
    console.log('3. ComponentDidMount');
    // Ініціалізація, підписки, запити до API
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('4. ComponentDidUpdate');
    // Реакція на зміни props або state
    if (prevState.count !== this.state.count) {
      console.log('Count changed!');
    }
  }

  componentWillUnmount() {
    console.log('5. ComponentWillUnmount');
    // Очищення: таймери, підписки
    clearInterval(this.timer);
  }

  render() {
    console.log('2. Render');
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.setState({ count: 0 })}>
          Reset
        </button>
      </div>
    );
  }
}

// Практичний приклад з API
class UserData extends React.Component {
  state = { user: null, loading: true };

  async componentDidMount() {
    try {
      const response = await fetch('/api/user');
      const user = await response.json();
      this.setState({ user, loading: false });
    } catch (error) {
      this.setState({ loading: false });
    }
  }

  render() {
    const { user, loading } = this.state;
    
    if (loading) return <div>Loading...</div>;
    if (!user) return <div>Error loading user</div>;
    
    return <div>Welcome, {user.name}!</div>;
  }
}`
    },
    {
      id: 6,
      title: "React Hooks: useState та useEffect",
      difficulty: "Intermediate",
      duration: "60 min",
      completed: false,
      description: "Освойте основні хуки React для управління станом та побічними ефектами.",
      learningPoints: [
        "Що таке хуки та їх переваги",
        "useState для управління станом",
        "useEffect для побічних ефектів",
        "Правила використання хуків"
      ],
      theory: {
        "Хуки": "Хуки - це функції, які додають стан та інші можливості в функціональні компоненти. Назва починається з 'use'. Хуки не можна використовувати за умовою.",
        "Проблеми які вирішують хуки": `1. Спільний код логіки компонентів
2. Складна логіка стану та ефектів
3. Відсутність стану в функціональних компонентах
4. Затримка рендерингу та витрати пам'яті
5. Спільне використання стану між компонентами`,
        "useState": "Хук useState дозволяє додавати стан до функціональних компонентів. Додає зміну стану в компонент.",
        "useEffect": "Хук useEffect використовується для виконання побічних ефектів у функціональних компонентах. Являє собою сукупність методів: componentDidMount, componentWillUpdate, componentWillUnmount.",
        "Правила хуків": `1. Використовувати тільки в функціональних компонентах
2. Тільки на верхньому рівні
3. Дотримуватися порядку виклику`
      },
      codeExample: `import React, { useState, useEffect } from 'react';

// useState основи
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

// useState з об'єктом
function UserForm() {
  const [user, setUser] = useState({ name: '', email: '' });
  
  const updateUser = (field, value) => {
    setUser(prev => ({ ...prev, [field]: value }));
  };
  
  return (
    <form>
      <input 
        value={user.name}
        onChange={(e) => updateUser('name', e.target.value)}
        placeholder="Name"
      />
      <input 
        value={user.email}
        onChange={(e) => updateUser('email', e.target.value)}
        placeholder="Email"
      />
    </form>
  );
}

// useEffect - componentDidMount
function DataFetcher() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []); // Порожній масив = виконати один раз
  
  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}

// useEffect - componentDidUpdate
function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup function (componentWillUnmount)
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return <div>Window width: {width}px</div>;
}

// useEffect з залежностями
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    if (userId) {
      fetch(\`/api/users/\${userId}\`)
        .then(res => res.json())
        .then(setUser);
    }
  }, [userId]); // Виконати при зміні userId
  
  return user ? <div>{user.name}</div> : <div>Loading...</div>;
}`
    },
    {
      id: 7,
      title: "Просунуті хуки: useContext, useReducer, useMemo",
      difficulty: "Advanced",
      duration: "65 min",
      completed: false,
      description: "Вивчіть просунуті хуки для складного управління станом та оптимізації.",
      learningPoints: [
        "useContext для передачі даних",
        "useReducer для складного стану",
        "useMemo та useCallback для оптимізації",
        "useRef для роботи з DOM"
      ],
      theory: {
        "useContext": "Хук useContext дозволяє отримати значення з контексту, заміняючи необхідність передавати пропси через кілька рівнів компонентів.",
        "useReducer": "Хук useReducer дозволяє керувати станом компонента за допомогою функцій редуктора. Корисний для складного стану.",
        "useMemo та useCallback": "useMemo дозволяє мемоізувати результат обчислення. useCallback мемоізує функції, щоб уникнути непотрібного рендерингу.",
        "useRef": "Хук useRef допомагає зберігати значення між рендерами компонента, але не викликає повторний рендер при зміні цього значення."
      },
      codeExample: `import React, { 
  useContext, useReducer, useMemo, 
  useCallback, useRef, createContext 
} from 'react';

// useContext
const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Header />
    </ThemeContext.Provider>
  );
}

function Header() {
  const theme = useContext(ThemeContext);
  return <h1 className={theme}>Header</h1>;
}

// useReducer
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

// useMemo та useCallback
function ExpensiveComponent({ items, filter }) {
  // Мемоізуємо обчислення
  const filteredItems = useMemo(() => {
    return items.filter(item => item.includes(filter));
  }, [items, filter]);
  
  // Мемоізуємо функцію
  const handleClick = useCallback((id) => {
    console.log('Clicked:', id);
  }, []);
  
  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item} onClick={() => handleClick(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
}

// useRef
function FocusInput() {
  const inputRef = useRef(null);
  const countRef = useRef(0);
  
  const focusInput = () => {
    inputRef.current.focus();
  };
  
  const incrementCount = () => {
    countRef.current += 1;
    console.log('Count:', countRef.current);
  };
  
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}`
    },
    {
      id: 8,
      title: "Context API та глобальне управління станом",
      difficulty: "Advanced",
      duration: "50 min",
      completed: false,
      description: "Використання Context API для передачі даних через дерево компонентів.",
      learningPoints: [
        "Створення та використання Context",
        "Provider та Consumer",
        "Передача функцій через контекст",
        "Оптимізація контексту"
      ],
      theory: {
        "Context": "Context у React - це механізм, який дозволяє передавати дані вглиб без необхідності передавати пропси через кілька рівнів компонентів.",
        "Використання": `• Загальний контекст для всього додатку
• Передача функцій через контекст
• Оновлення контексту від подій`,
        "Переваги": "Контекст дозволяє створювати більш гнучкі та масштабовані компоненти та полегшує управління станом у додатку.",
        "Оптимізація": "Розділяйте контексти на логічні частини та використовуйте мемоізацію для запобігання зайвих рендерів."
      },
      codeExample: `import React, { createContext, useContext, useReducer } from 'react';

// Створення контексту
const AuthContext = createContext();

// Reducer для управління станом
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload, isLoggedIn: true };
    case 'LOGOUT':
      return { ...state, user: null, isLoggedIn: false };
    default:
      return state;
  }
};

// Provider компонент
function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isLoggedIn: false
  });
  
  const login = (userData) => {
    dispatch({ type: 'LOGIN', payload: userData });
  };
  
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };
  
  const value = {
    ...state,
    login,
    logout
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook для використання контексту
function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

// Використання в компонентах
function LoginButton() {
  const { login, isLoggedIn } = useAuth();
  
  if (isLoggedIn) return null;
  
  return (
    <button onClick={() => login({ name: 'John', id: 1 })}>
      Login
    </button>
  );
}

function UserProfile() {
  const { user, logout, isLoggedIn } = useAuth();
  
  if (!isLoggedIn) return <div>Please log in</div>;
  
  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

// Головний компонент
function App() {
  return (
    <AuthProvider>
      <LoginButton />
      <UserProfile />
    </AuthProvider>
  );
}`
    },
    {
      id: 9,
      title: "Маршрутизація з React Router",
      difficulty: "Intermediate",
      duration: "55 min",
      completed: false,
      description: "Навігація в односторінкових додатках за допомогою React Router.",
      learningPoints: [
        "Налаштування React Router",
        "Основні компоненти: Router, Route, Link",
        "Параметри маршрутів",
        "Програмна навігація"
      ],
      theory: {
        "React Router": "React Router - це бібліотека для реалізації навігації в односторінкових додатках (SPA). Вона дозволяє створювати маршрути, що відображають різні компоненти на основі URL.",
        "Основні елементи": `1. BrowserRouter - обгортка для всього додатка
2. Route - визначає шлях і компонент
3. Switch - рендеринг лише одного компонента
4. Link - посилання без перезавантаження
5. NavLink - посилання з активним стилем`,
        "Маршрутизація": "Маршрутизація дозволяє керувати вмістом веб-додатка та визначити, який компонент відображати для конкретного шляху в URL."
      },
      codeExample: `import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
  useNavigate
} from 'react-router-dom';

// Компоненти сторінок
function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Users() {
  return (
    <div>
      <h1>Users</h1>
      <Link to="/users/1">User 1</Link>
      <Link to="/users/2">User 2</Link>
    </div>
  );
}

function User() {
  const { id } = useParams();
  return <h1>User {id}</h1>;
}

// Навігація
function Navigation() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => 
        isActive ? 'active-link' : 'link'
      }>
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/users">Users</NavLink>
    </nav>
  );
}

// Програмна навігація
function LoginPage() {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    // Логіка входу
    navigate('/dashboard');
  };
  
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

// Захищений маршрут
function ProtectedRoute({ children }) {
  const isAuthenticated = false; // Перевірка аутентифікації
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return children;
}

// Головний компонент
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;`
    },
    {
      id: 10,
      title: "Оптимізація та просунуті паттерни",
      difficulty: "Advanced",
      duration: "70 min",
      completed: false,
      description: "Методи оптимізації React додатків та просунуті паттерни розробки.",
      learningPoints: [
        "React.memo та мемоізація",
        "Error Boundaries",
        "Lazy loading та Suspense",
        "Custom hooks та паттерни"
      ],
      theory: {
        "Мемоізація": "Мемоізація - це техніка оптимізації, яка забезпечує збереження результатів викликів функцій. React.memo створює мемоізовану версію функціонального компонента.",
        "React.memo": "React.memo дозволяє уникнути зайвих ререндерів в React. Використовують для оптимізації рендерингу та зменшення затрат на виконання компонентів.",
        "Error Boundaries": "Компоненти, які ловлять JavaScript помилки в будь-якому місці дерева компонентів та відображають fallback UI.",
        "Lazy Loading": "Дозволяє завантажувати компоненти тільки тоді, коли вони потрібні, що покращує початкову швидкість завантаження."
      },
      codeExample: `import React, { 
  memo, lazy, Suspense, 
  ErrorBoundary, useState 
} from 'react';

// React.memo
const ExpensiveComponent = memo(function ExpensiveComponent({ data }) {
  console.log('Rendering expensive component');
  return <div>{data.map(item => <p key={item}>{item}</p>)}</div>;
});

// Custom comparison function
const OptimizedComponent = memo(function OptimizedComponent(props) {
  return <div>{props.name}</div>;
}, (prevProps, nextProps) => {
  return prevProps.name === nextProps.name;
});

// Error Boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

// Lazy loading
const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </ErrorBoundary>
  );
}

// Custom Hook
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}

// Використання custom hook
function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// Higher-Order Component (HOC)
function withLoading(WrappedComponent) {
  return function WithLoadingComponent(props) {
    if (props.loading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
}

// Render Props pattern
function DataFetcher({ render }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);
  
  return render({ data, loading });
}

// Використання render props
function App() {
  return (
    <DataFetcher 
      render={({ data, loading }) => 
        loading ? <div>Loading...</div> : <div>{data}</div>
      } 
    />
  );
}`
    }
  ]
};