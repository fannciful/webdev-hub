export const muiCourseData = {
  title: "Material-UI (MUI) Fundamentals",
  description: "Освойте Material-UI - найпопулярнішу React UI бібліотеку. Навчіться створювати красиві, доступні інтерфейси з готовими компонентами та Material Design принципами.",
  level: "Beginner to Advanced",
  duration: "~6 hours",
  prerequisites: "React, HTML/CSS основи",
  certificate: "Доступний після завершення",
  topics: [
    {
      id: 1,
      title: "Введення в Material-UI",
      difficulty: "Beginner",
      duration: "25 min",
      completed: true,
      description: "Дізнайтеся про Material-UI, Material Design принципи та переваги використання.",
      learningPoints: [
        "Що таке Material-UI та Material Design",
        "Історія та розвиток MUI",
        "Основні принципи Material Design",
        "Порівняння з іншими UI бібліотеками"
      ],
      theory: {
        "Material-UI": "Material-UI (тепер MUI) - це React UI бібліотека, яка реалізує Material Design від Google. Надає готові компоненти з продуманим дизайном, доступністю та консистентністю.",
        "Material Design": "Material Design - це система дизайну, розроблена Google, яка базується на принципах фізичного світу: матеріали, світло, тіні, рух. Створює інтуїтивний користувацький досвід.",
        "Основні принципи": `• Матеріальні метафори - UI елементи поводяться як фізичні об'єкти
• Яскравий, графічний, цілеспрямований дизайн
• Значущі переходи та анімації
• Адаптивний дизайн для всіх пристроїв`,
        "Переваги MUI": `• Готові компоненти з Material Design
• Доступність (accessibility) із коробки
• Консистентний дизайн
• Активна спільнота та підтримка
• TypeScript підтримка`
      },
      codeExample: `// Базовий приклад MUI
import React from 'react';
import { Button, Typography, Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Material-UI
      </Typography>
      <Typography variant="body1" paragraph>
        Beautiful React components implementing Material Design.
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Box>
  );
}

export default App;

// Material Design принципи в коді
const materialPrinciples = {
  elevation: 'shadow-lg', // Глибина та тіні
  motion: 'transition-all duration-300', // Значущі переходи
  typography: 'font-roboto', // Типографіка
  spacing: '8px grid system' // Консистентний spacing
};`
    },
    {
      id: 2,
      title: "Встановлення та налаштування MUI",
      difficulty: "Beginner",
      duration: "20 min",
      completed: false,
      description: "Налаштуйте MUI у вашому React проекті та зрозумійте базову структуру.",
      learningPoints: [
        "Встановлення MUI пакетів",
        "Налаштування ThemeProvider",
        "CssBaseline для reset стилів",
        "Структура MUI проекту"
      ],
      theory: {
        "MUI пакети": "MUI складається з кількох пакетів: @mui/material (основні компоненти), @mui/icons-material (іконки), @emotion (styling engine), @mui/lab (експериментальні компоненти).",
        "ThemeProvider": "ThemeProvider - це компонент, який надає тему всім дочірнім MUI компонентам. Дозволяє кастомізувати кольори, типографіку, spacing.",
        "CssBaseline": "CssBaseline - це компонент, який надає консистентний CSS reset, подібний до normalize.css, але адаптований для Material Design.",
        "Emotion": "MUI використовує Emotion як CSS-in-JS рішення для стилізації компонентів. Забезпечує динамічні стилі та theming."
      },
      codeExample: `// Встановлення
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install @mui/lab

// Налаштування App.js
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Your app components */}
    </ThemeProvider>
  );
}

export default App;

// Додавання шрифту Roboto (public/index.html)
/*
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
*/`
    },
    {
      id: 3,
      title: "Основні MUI компоненти",
      difficulty: "Beginner",
      duration: "40 min",
      completed: false,
      description: "Вивчіть найважливіші MUI компоненти для створення інтерфейсів.",
      learningPoints: [
        "Button та його варіанти",
        "Typography для тексту",
        "Box та Container для layout",
        "Paper та Card компоненти"
      ],
      theory: {
        "Button варіанти": "MUI Button має три основні варіанти: contained (заповнений), outlined (з обводкою), text (текстовий). Кожен має різне візуальне навантаження.",
        "Typography система": "Typography компонент реалізує Material Design типографічну шкалу: h1-h6 для заголовків, body1-body2 для тексту, caption для підписів.",
        "Layout компоненти": "Box - найгнучкіший компонент для layout з sx prop. Container обмежує ширину контенту та центрує його.",
        "Surface компоненти": "Paper створює поверхню з тінню. Card розширює Paper додаючи структуру для контенту."
      },
      codeExample: `import {
  Button, Typography, Box, Container,
  Paper, Card, CardContent, CardActions
} from '@mui/material';

// Button приклади
function ButtonExamples() {
  return (
    <Box sx={{ display: 'flex', gap: 2, p: 2 }}>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
    </Box>
  );
}

// Typography приклади
function TypographyExamples() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h1">h1. Heading</Typography>
      <Typography variant="h4">h4. Heading</Typography>
      <Typography variant="body1">
        body1. Lorem ipsum dolor sit amet.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        body2. Secondary text color.
      </Typography>
      <Typography variant="caption" display="block">
        caption text
      </Typography>
    </Box>
  );
}

// Layout приклади
function LayoutExamples() {
  return (
    <Container maxWidth="md">
      <Box sx={{ bgcolor: 'primary.light', p: 2, m: 2 }}>
        Box with theme colors
      </Box>
      
      <Paper sx={{ p: 2, mb: 2 }}>
        Paper component with elevation
      </Paper>
      
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Card Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Card content goes here.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
}`
    },
    {
      id: 4,
      title: "Layout та Grid система",
      difficulty: "Intermediate",
      duration: "35 min",
      completed: false,
      description: "Освойте MUI Grid систему для створення адаптивних макетів.",
      learningPoints: [
        "Grid container та item props",
        "Breakpoints та responsive дизайн",
        "Spacing та alignment",
        "Практичні layout паттерни"
      ],
      theory: {
        "Grid система": "MUI Grid використовує 12-колонкову систему з flexbox. Grid container створює flex контейнер, Grid item - flex елементи.",
        "Breakpoints": "MUI має 5 breakpoints: xs (0px), sm (600px), md (900px), lg (1200px), xl (1536px). Можна задавати різні розміри для кожного breakpoint.",
        "Spacing": "Grid використовує spacing scale з теми (за замовчуванням 8px). spacing prop контролює відстань між items.",
        "Alignment": "justifyContent та alignItems props контролюють вирівнювання items в контейнері."
      },
      codeExample: `import { Grid, Paper, Box } from '@mui/material';

// Базова Grid структура
function BasicGrid() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ p: 2 }}>Item 1</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ p: 2 }}>Item 2</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ p: 2 }}>Item 3</Paper>
      </Grid>
    </Grid>
  );
}

// Responsive layout
function ResponsiveLayout() {
  return (
    <Grid container spacing={2}>
      {/* Main content */}
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 3, minHeight: 400 }}>
          <h2>Main Content</h2>
          <p>This takes 8 columns on medium+ screens</p>
        </Paper>
      </Grid>
      
      {/* Sidebar */}
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 3, minHeight: 400 }}>
          <h3>Sidebar</h3>
          <p>This takes 4 columns on medium+ screens</p>
        </Paper>
      </Grid>
    </Grid>
  );
}

// Complex layout з nested grids
function ComplexLayout() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        {/* Header */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            Header
          </Paper>
        </Grid>
        
        {/* Content area */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Paper sx={{ p: 2 }}>Card 1</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper sx={{ p: 2 }}>Card 2</Paper>
            </Grid>
          </Grid>
        </Grid>
        
        {/* Sidebar */}
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2, height: 200 }}>
            Sidebar
          </Paper>
        </Grid>
        
        {/* Footer */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            Footer
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

// Auto layout
function AutoLayout() {
  return (
    <Grid container spacing={2}>
      <Grid item xs>
        <Paper sx={{ p: 2 }}>Auto width</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper sx={{ p: 2 }}>xs=6</Paper>
      </Grid>
      <Grid item xs>
        <Paper sx={{ p: 2 }}>Auto width</Paper>
      </Grid>
    </Grid>
  );
}`
    },
    {
      id: 5,
      title: "Форми та Input компоненти",
      difficulty: "Intermediate",
      duration: "45 min",
      completed: false,
      description: "Створення функціональних форм з MUI input компонентами.",
      learningPoints: [
        "TextField та його варіанти",
        "Select, Checkbox, Radio компоненти",
        "FormControl та validation",
        "Autocomplete компонент"
      ],
      theory: {
        "TextField варіанти": "TextField має три варіанти: outlined (за замовчуванням), filled, standard. Підтримує різні типи input: text, email, password, number.",
        "Form components": "FormControl групує пов'язані input елементи. FormLabel, FormHelperText надають додаткову інформацію.",
        "Validation": "MUI підтримує вбудовану HTML5 валідацію через required, error props. Можна інтегрувати з бібліотеками як react-hook-form.",
        "Autocomplete": "Autocomplete - потужний компонент для вибору з великого списку опцій з пошуком та фільтрацією."
      },
      codeExample: `import {
  TextField, Select, MenuItem, FormControl,
  InputLabel, Checkbox, FormControlLabel,
  Radio, RadioGroup, FormLabel, Button,
  Autocomplete, Box
} from '@mui/material';
import { useState } from 'react';

// Базова форма
function BasicForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    newsletter: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 3, maxWidth: 400 }}>
      <TextField
        fullWidth
        label="Full Name"
        variant="outlined"
        margin="normal"
        required
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
      
      <TextField
        fullWidth
        label="Email"
        type="email"
        variant="outlined"
        margin="normal"
        required
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
      />
      
      <FormControl fullWidth margin="normal">
        <InputLabel>Country</InputLabel>
        <Select
          value={formData.country}
          label="Country"
          onChange={(e) => setFormData({...formData, country: e.target.value})}
        >
          <MenuItem value="us">United States</MenuItem>
          <MenuItem value="uk">United Kingdom</MenuItem>
          <MenuItem value="ua">Ukraine</MenuItem>
        </Select>
      </FormControl>
      
      <FormControlLabel
        control={
          <Checkbox
            checked={formData.newsletter}
            onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
          />
        }
        label="Subscribe to newsletter"
      />
      
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
    </Box>
  );
}

// Radio Group приклад
function RadioExample() {
  const [value, setValue] = useState('female');

  return (
    <FormControl>
      <FormLabel>Gender</FormLabel>
      <RadioGroup
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}

// Autocomplete приклад
function AutocompleteExample() {
  const countries = [
    { label: 'Ukraine', code: 'UA' },
    { label: 'United States', code: 'US' },
    { label: 'United Kingdom', code: 'GB' }
  ];

  return (
    <Autocomplete
      options={countries}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} label="Choose a country" />
      )}
      sx={{ width: 300 }}
    />
  );
}

// Form з validation
function ValidatedForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    if (value && !validateEmail(value)) {
      setError('Please enter a valid email');
    } else {
      setError('');
    }
  };

  return (
    <TextField
      fullWidth
      label="Email"
      type="email"
      value={email}
      onChange={handleChange}
      error={!!error}
      helperText={error || 'Enter your email address'}
      margin="normal"
    />
  );
}`
    },
    {
      id: 6,
      title: "Navigation компоненти",
      difficulty: "Intermediate",
      duration: "35 min",
      completed: false,
      description: "Створення навігації з AppBar, Drawer та Tabs компонентами.",
      learningPoints: [
        "AppBar та Toolbar для header",
        "Drawer для sidebar навігації",
        "Tabs для секційної навігації",
        "Breadcrumbs для navigation path"
      ],
      theory: {
        "AppBar": "AppBar - це top-level навігаційний компонент, зазвичай містить логотип, назву додатка та основні дії. Може бути статичним або липким.",
        "Drawer": "Drawer - це sidebar навігація, яка може бути постійною (persistent) або тимчасовою (temporary). Підтримує swipe gestures на мобільних.",
        "Tabs": "Tabs дозволяють переключатися між різними видами контенту в одному просторі. Підтримують scrollable та centered варіанти.",
        "Navigation patterns": "Material Design пропонує різні навігаційні паттерни залежно від структури додатка та розміру екрану."
      },
      codeExample: `import {
  AppBar, Toolbar, Typography, IconButton, Button,
  Drawer, List, ListItem, ListItemIcon, ListItemText,
  Tabs, Tab, Breadcrumbs, Link, Box
} from '@mui/material';
import {
  Menu as MenuIcon, Home, Settings, Person
} from '@mui/icons-material';
import { useState } from 'react';

// AppBar з navigation
function Navigation() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List sx={{ width: 250 }}>
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

// Tabs navigation
function TabsNavigation() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Overview" />
        <Tab label="Analytics" />
        <Tab label="Settings" />
      </Tabs>
      
      {/* Tab panels */}
      <Box sx={{ p: 3 }}>
        {value === 0 && <div>Overview content</div>}
        {value === 1 && <div>Analytics content</div>}
        {value === 2 && <div>Settings content</div>}
      </Box>
    </Box>
  );
}

// Breadcrumbs
function BreadcrumbsNavigation() {
  return (
    <Breadcrumbs sx={{ mb: 2 }}>
      <Link underline="hover" color="inherit" href="/">
        Home
      </Link>
      <Link underline="hover" color="inherit" href="/products">
        Products
      </Link>
      <Typography color="text.primary">Current Page</Typography>
    </Breadcrumbs>
  );
}

// Responsive navigation
function ResponsiveNavigation() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setDrawerOpen(!drawerOpen)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="persistent"
        open={drawerOpen}
        sx={{
          width: 240,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            mt: '64px' // AppBar height
          }
        }}
      >
        <List>
          {['Dashboard', 'Users', 'Products', 'Orders'].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: '64px', // AppBar height
          ml: drawerOpen ? '240px' : 0,
          transition: 'margin 0.3s'
        }}
      >
        <Typography>Main content area</Typography>
      </Box>
    </Box>
  );
}`
    },
    {
      id: 7,
      title: "Data Display компоненти",
      difficulty: "Intermediate",
      duration: "40 min",
      completed: false,
      description: "Відображення даних з Table, List, Avatar та Chip компонентами.",
      learningPoints: [
        "Table для табличних даних",
        "List та ListItem для списків",
        "Avatar та Badge для профілів",
        "Chip для тегів та статусів"
      ],
      theory: {
        "Table компонент": "MUI Table реалізує Material Design таблиці з підтримкою сортування, sticky headers, responsive поведінки. Складається з TableContainer, Table, TableHead, TableBody, TableRow, TableCell.",
        "List variants": "List може бути simple, dense, або з subheader. ListItem підтримує primary/secondary text, icons, actions.",
        "Avatar типи": "Avatar може відображати зображення, ініціали, або іконки. Підтримує різні розміри та кольори.",
        "Data visualization": "Chip компоненти ідеальні для тегів, фільтрів, статусів. Badge для notifications та counters."
      },
      codeExample: `import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, List, ListItem,
  ListItemText, ListItemIcon, Avatar, Chip,
  Badge, IconButton, Typography
} from '@mui/material';
import { Person, Email, Phone } from '@mui/icons-material';

// Базова таблиця
function BasicTable() {
  const rows = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' }
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>
                <Chip 
                  label={row.role} 
                  color={row.role === 'Admin' ? 'primary' : 'default'}
                  size="small"
                />
              </TableCell>
              <TableCell>
                <IconButton size="small">
                  <Person />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// List з іконками
function ContactList() {
  const contacts = [
    { name: 'John Doe', email: 'john@example.com', phone: '+1234567890' },
    { name: 'Jane Smith', email: 'jane@example.com', phone: '+0987654321' }
  ];

  return (
    <List>
      {contacts.map((contact, index) => (
        <ListItem key={index} divider>
          <ListItemIcon>
            <Avatar>
              {contact.name.split(' ').map(n => n[0]).join('')}
            </Avatar>
          </ListItemIcon>
          <ListItemText
            primary={contact.name}
            secondary={
              <>
                <Typography component="span" variant="body2">
                  <Email sx={{ fontSize: 16, mr: 1 }} />
                  {contact.email}
                </Typography>
                <br />
                <Typography component="span" variant="body2">
                  <Phone sx={{ fontSize: 16, mr: 1 }} />
                  {contact.phone}
                </Typography>
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}

// Avatar варіанти
function AvatarExamples() {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      {/* Text avatar */}
      <Avatar>A</Avatar>
      
      {/* Image avatar */}
      <Avatar src="/avatar.jpg" alt="User" />
      
      {/* Icon avatar */}
      <Avatar>
        <Person />
      </Avatar>
      
      {/* Colored avatar */}
      <Avatar sx={{ bgcolor: 'primary.main' }}>J</Avatar>
      
      {/* Different sizes */}
      <Avatar sx={{ width: 24, height: 24 }}>S</Avatar>
      <Avatar sx={{ width: 56, height: 56 }}>L</Avatar>
      
      {/* With badge */}
      <Badge badgeContent={4} color="error">
        <Avatar>N</Avatar>
      </Badge>
    </div>
  );
}

// Chip варіанти
function ChipExamples() {
  const handleDelete = () => {
    console.log('Chip deleted');
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      <Chip label="Default" />
      <Chip label="Primary" color="primary" />
      <Chip label="Secondary" color="secondary" />
      <Chip label="Deletable" onDelete={handleDelete} />
      <Chip label="Clickable" onClick={() => console.log('clicked')} />
      <Chip 
        label="With Icon" 
        icon={<Person />}
        variant="outlined"
      />
      <Chip 
        label="Small" 
        size="small" 
        color="primary" 
        variant="outlined" 
      />
    </div>
  );
}

// User card приклад
function UserCard({ user }) {
  return (
    <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <div style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: user.online ? 'green' : 'gray',
            border: '2px solid white'
          }} />
        }
      >
        <Avatar src={user.avatar}>{user.name[0]}</Avatar>
      </Badge>
      
      <div style={{ flex: 1 }}>
        <Typography variant="h6">{user.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
        <div style={{ marginTop: 8, display: 'flex', gap: 4 }}>
          {user.tags.map(tag => (
            <Chip key={tag} label={tag} size="small" />
          ))}
        </div>
      </div>
    </Paper>
  );
}`
    },
    {
      id: 8,
      title: "Icons та візуальні елементи",
      difficulty: "Beginner",
      duration: "25 min",
      completed: false,
      description: "Використання MUI іконок та візуальних компонентів.",
      learningPoints: [
        "Material Icons бібліотека",
        "IconButton для інтерактивних іконок",
        "Avatar з іконками",
        "Fab (Floating Action Button)"
      ],
      theory: {
        "Material Icons": "@mui/icons-material містить більше 5000+ Material Design іконок. Всі іконки є React компонентами з props для кольору та розміру.",
        "Icon розміри": "Icons мають стандартні розміри: small (20px), medium (24px), large (35px), inherit (розмір батька).",
        "IconButton": "IconButton обгортає іконку в clickable область з ripple ефектом. Ідеальний для toolbar actions.",
        "Accessibility": "Іконки повинні мати aria-label для screen readers, особливо коли використовуються без тексту."
      },
      codeExample: `import {
  IconButton, Fab, Avatar, Tooltip
} from '@mui/material';
import {
  Home, Search, Favorite, Settings, Add,
  Delete, Edit, Share, Menu, NotificationsIcon,
  PersonIcon
} from '@mui/icons-material';

// Базові іконки
function BasicIcons() {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Home />
      <Search color="primary" />
      <Favorite color="error" />
      <Settings fontSize="large" />
      <Home fontSize="small" />
    </div>
  );
}

// IconButton приклади
function IconButtonExamples() {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <IconButton>
        <Home />
      </IconButton>
      
      <IconButton color="primary">
        <Search />
      </IconButton>
      
      <IconButton color="error">
        <Delete />
      </IconButton>
      
      <IconButton disabled>
        <Settings />
      </IconButton>
      
      <Tooltip title="Add item">
        <IconButton>
          <Add />
        </IconButton>
      </Tooltip>
    </div>
  );
}

// Floating Action Button
function FabExamples() {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Fab color="primary">
        <Add />
      </Fab>
      
      <Fab color="secondary" size="small">
        <Edit />
      </Fab>
      
      <Fab variant="extended">
        <Add sx={{ mr: 1 }} />
        Create
      </Fab>
    </div>
  );
}

// Toolbar з іконками
function IconToolbar() {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 8,
      padding: 8,
      backgroundColor: '#f5f5f5',
      borderRadius: 4
    }}>
      <IconButton>
        <Menu />
      </IconButton>
      
      <div style={{ flexGrow: 1 }} />
      
      <IconButton>
        <Search />
      </IconButton>
      
      <IconButton>
        <NotificationsIcon />
      </IconButton>
      
      <IconButton>
        <Avatar sx={{ width: 32, height: 32 }}>
          <PersonIcon />
        </Avatar>
      </IconButton>
    </div>
  );
}

// Social media buttons
function SocialButtons() {
  const handleShare = (platform) => {
    console.log(\`Sharing to \${platform}\`);
  };

  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <Tooltip title="Share">
        <IconButton onClick={() => handleShare('general')}>
          <Share />
        </IconButton>
      </Tooltip>
      
      <Tooltip title="Like">
        <IconButton color="error" onClick={() => handleShare('like')}>
          <Favorite />
        </IconButton>
      </Tooltip>
      
      <Tooltip title="Edit">
        <IconButton color="primary" onClick={() => handleShare('edit')}>
          <Edit />
        </IconButton>
      </Tooltip>
    </div>
  );
}

// Action bar приклад
function ActionBar({ title, onEdit, onDelete, onShare }) {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      padding: '8px 16px',
      borderBottom: '1px solid #e0e0e0'
    }}>
      <Typography variant="h6">{title}</Typography>
      
      <div>
        <IconButton onClick={onEdit}>
          <Edit />
        </IconButton>
        <IconButton onClick={onShare}>
          <Share />
        </IconButton>
        <IconButton onClick={onDelete} color="error">
          <Delete />
        </IconButton>
      </div>
    </div>
  );
}`
    },
    {
      id: 9,
      title: "Theming та кастомізація",
      difficulty: "Advanced",
      duration: "50 min",
      completed: false,
      description: "Створення власних тем та кастомізація MUI компонентів.",
      learningPoints: [
        "createTheme та theme структура",
        "Palette, typography, spacing кастомізація",
        "Component style overrides",
        "Dark theme implementation"
      ],
      theory: {
        "Theme structure": "MUI тема включає palette (кольори), typography (шрифти), spacing (відстані), breakpoints (точки злому), shape (форми), shadows (тіні).",
        "Palette система": "Palette містить primary, secondary, error, warning, info, success кольори. Кожен колір має main, light, dark варіанти.",
        "Typography scale": "Typography система включає font family, размеры (h1-h6, body1-body2, caption), weights, line heights.",
        "Component overrides": "Можна перевизначити стилі компонентів глобально через theme.components або локально через sx prop."
      },
      codeExample: `import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// Кастомна тема
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#6366f1', // indigo
      light: '#818cf8',
      dark: '#4f46e5'
    },
    secondary: {
      main: '#ec4899', // pink
      light: '#f472b6',
      dark: '#db2777'
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff'
    },
    text: {
      primary: '#1f2937',
      secondary: '#6b7280'
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6
    }
  },
  spacing: 8, // 8px base unit
  shape: {
    borderRadius: 12
  },
  components: {
    // Button кастомізація
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '8px 24px',
          fontWeight: 600
        },
        containedPrimary: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)'
          }
        }
      }
    },
    // Paper кастомізація
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }
      }
    }
  }
});

// Dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#818cf8'
    },
    background: {
      default: '#0f172a',
      paper: '#1e293b'
    }
  }
});

// Theme provider
function ThemedApp() {
  const [isDark, setIsDark] = useState(false);
  
  return (
    <ThemeProvider theme={isDark ? darkTheme : customTheme}>
      <CssBaseline />
      <Box sx={{ p: 3 }}>
        <Button onClick={() => setIsDark(!isDark)}>
          Toggle {isDark ? 'Light' : 'Dark'} Mode
        </Button>
        
        <Typography variant="h1" sx={{ mt: 2 }}>
          Custom Theme
        </Typography>
        
        <Button variant="contained" sx={{ mt: 2 }}>
          Custom Button
        </Button>
      </Box>
    </ThemeProvider>
  );
}

// Responsive theme
const responsiveTheme = createTheme({
  typography: {
    h1: {
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:900px)': {
        fontSize: '3rem',
      }
    }
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '16px',
          paddingRight: '16px',
          '@media (min-width:600px)': {
            paddingLeft: '24px',
            paddingRight: '24px',
          }
        }
      }
    }
  }
});

// sx prop advanced usage
function AdvancedStyling() {
  return (
    <Box
      sx={{
        p: 2,
        m: 1,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 1,
        '&:hover': {
          boxShadow: 3,
          transform: 'translateY(-2px)',
          transition: 'all 0.2s ease-in-out'
        },
        // Responsive styles
        display: { xs: 'block', md: 'flex' },
        flexDirection: { md: 'row' },
        alignItems: { md: 'center' },
        // Theme breakpoints
        [customTheme.breakpoints.up('md')]: {
          p: 3
        }
      }}
    >
      <Typography variant="h6">Advanced Box</Typography>
    </Box>
  );
}

// Global theme augmentation (types)
declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      gradient: string;
    };
  }
  
  interface ThemeOptions {
    custom?: {
      gradient?: string;
    };
  }
}

// Extended theme
const extendedTheme = createTheme({
  ...customTheme,
  custom: {
    gradient: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)'
  }
});`
    },
    {
      id: 10,
      title: "Просунуті MUI паттерни",
      difficulty: "Advanced",
      duration: "45 min",
      completed: false,
      description: "Просунуті техніки роботи з MUI: styled components, sx system, optimization.",
      learningPoints: [
        "styled() API для custom компонентів",
        "sx prop система та performance",
        "useTheme hook та responsive utilities",
        "MUI Lab компоненти"
      ],
      theory: {
        "styled() API": "styled() дозволяє створювати кастомні компоненти з доступом до теми. Більш продуктивний ніж sx prop для статичних стилів.",
        "sx prop система": "sx prop надає shorthand для CSS properties з доступом до theme values. Підтримує responsive values та pseudo-selectors.",
        "Performance": "sx prop має runtime overhead. Використовуйте styled() для статичних стилів, sx - для динамічних.",
        "MUI Lab": "@mui/lab містить експериментальні компоненти: DatePicker, TreeView, Timeline. Можуть змінюватися між версіями."
      },
      codeExample: `import { styled } from '@mui/material/styles';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { DatePicker } from '@mui/lab';

// Styled components
const StyledCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: theme.shadows[8],
    transform: 'translateY(-4px)'
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2)
  }
}));

// Gradient button
const GradientButton = styled(Button)(({ theme }) => ({
  background: \`linear-gradient(45deg, \${theme.palette.primary.main} 30%, \${theme.palette.secondary.main} 90%)\`,
  border: 0,
  borderRadius: 12,
  boxShadow: 'none',
  color: 'white',
  height: 48,
  padding: '0 30px',
  '&:hover': {
    background: \`linear-gradient(45deg, \${theme.palette.primary.dark} 30%, \${theme.palette.secondary.dark} 90%)\`,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  }
}));

// Responsive utilities
function ResponsiveComponent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 2, md: 3 },
        p: { xs: 2, sm: 3, md: 4 }
      }}
    >
      <Typography variant={isMobile ? 'h5' : 'h4'}>
        Responsive Text
      </Typography>
      
      {!isMobile && (
        <Typography variant="body1">
          Only visible on desktop
        </Typography>
      )}
    </Box>
  );
}

// Custom hook для theme
function useCustomTheme() {
  const theme = useTheme();
  
  return {
    spacing: (factor) => theme.spacing(factor),
    palette: theme.palette,
    breakpoints: theme.breakpoints,
    isMobile: useMediaQuery(theme.breakpoints.down('md')),
    isTablet: useMediaQuery(theme.breakpoints.between('md', 'lg'))
  };
}

// Advanced sx patterns
function AdvancedSxPatterns() {
  return (
    <Box
      sx={{
        // Conditional styles
        color: (theme) => theme.palette.mode === 'dark' ? 'white' : 'black',
        
        // Function styles
        bgcolor: (theme) => theme.palette.primary.main,
        
        // Responsive array values
        fontSize: ['0.875rem', '1rem', '1.125rem'],
        p: [1, 2, 3], // 8px, 16px, 24px
        
        // Complex responsive objects
        flexDirection: {
          xs: 'column',
          sm: 'row'
        },
        
        // Nested selectors
        '& .MuiButton-root': {
          margin: 1
        },
        
        // Pseudo-classes
        '&:hover': {
          opacity: 0.8
        },
        
        // CSS Grid
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)'
        },
        gap: 2
      }}
    >
      Content
    </Box>
  );
}

// Performance optimized component
const OptimizedCard = React.memo(styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(1),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  
  // Static styles are better in styled() than sx
  '&:hover': {
    boxShadow: theme.shadows[3]
  }
})));

// MUI Lab components
function LabComponents() {
  const [date, setDate] = useState(null);
  
  return (
    <Box sx={{ p: 3 }}>
      <DatePicker
        label="Select Date"
        value={date}
        onChange={setDate}
        renderInput={(params) => <TextField {...params} />}
      />
      
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ mt: 2 }}
      >
        <TreeItem nodeId="1" label="Applications">
          <TreeItem nodeId="2" label="Calendar" />
          <TreeItem nodeId="3" label="Chrome" />
        </TreeItem>
      </TreeView>
    </Box>
  );
}

// Theme-aware component
function ThemeAwareComponent() {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        p: 2,
        bgcolor: theme.palette.mode === 'dark' 
          ? 'grey.800' 
          : 'grey.100',
        color: theme.palette.text.primary,
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.up('md')]: {
          p: 3
        }
      }}
    >
      <Typography variant="h6">
        Theme Mode: {theme.palette.mode}
      </Typography>
    </Box>
  );
}`
    }
  ]
};