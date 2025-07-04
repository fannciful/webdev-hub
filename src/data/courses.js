import CodeIcon from '@mui/icons-material/Code';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import BrushIcon from '@mui/icons-material/Brush';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

export const courses = [
    {
        title: "HTML Basics",
        description: "Learn structure of web pages, semantic tags and modern HTML5 features.",
        level: "Beginner",
        lessons: 15,
        icon: WebAssetIcon 
    },
    {
        title: "CSS & Design",
        description: "From basic styling to advanced layouts, learn how to make your web pages beautiful and responsive.",
        level: "Beginner",
        lessons: 25,
        icon: BrushIcon
    },
    {
        title: "JavaScript",
        description: "Full course from variables to async programming.",
        level: "Medium",
        lessons: 35,
        icon: FlashOnIcon
    },
    {
        title: "React",
        description: "Modern web development with React, hooks, and state management.",
        level: "Medium",
        lessons: 30,
        icon: CodeIcon
    },
    {
        title: "TypeScript",
        description: "Type-safe JavaScript for large applications.",
        level: "Expert",
        lessons: 20,
        icon: IntegrationInstructionsIcon
    },
    {
        title: "MUI Design + TailwindCSS",
        description: "Learn to create beautiful and responsive interfaces with MUI and TailwindCSS.",
        level: "Expert",
        lessons: 10,
        icon: BrushIcon
    }
];
