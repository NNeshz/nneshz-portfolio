export const languages = {
  es: "Español",
  en: "English",
};

export type UIKey = string | string[] | Record<string, any>;

export const languagesPicker = {
  es: {
    label: "Español",
    value: "es",
    image: "/assets/es.png",
  },
  en: {
    label: "English",
    value: "en",
    image: "/assets/en.png",
  },
};

export const defaultLanguage = "es";

export const ui = {
  es: {
    "nav.experience": "EXPERIENCIA",
    "nav.projects": "PROYECTOS",
    "nav.contact": "CONTACTO",
    "hero.name": "Neftali Hernández",
    "hero.title": "Desarrollador Full Stack",
    "hero.description1":
      "Como Desarrollador Full Stack dedicado, me especializo en crear aplicaciones web robustas y escalables. Mi experiencia abarca TypeScript, React, Node.js y varias otras tecnologías modernas, asegurando soluciones eficientes e innovadoras.",
    "hero.description2":
      "Actualmente estoy abierto a explorar nuevas oportunidades profesionales donde pueda contribuir con mis habilidades y experiencia a equipos dinámicos y proyectos desafiantes. Conectemos para trabajar juntos y lograr la excelencia.",
    "hero.quote":
      "La programación es la forma más fácil de entender cómo funcionan las cosas.",
    "hero.quoteAuthor": "Chris Pine",
    "work.title": "Experiencia Laboral",
    experience: [
      {
        company: "Exxpress",
        position: "Desarrollador Full Stack",
        date: "Enero 2024 - Marzo 2024",
        description:
          "Trabajé en el equipo de Exxpress, donde ayudé a construir el panel de control web. Fui responsable de la UI/UX y las solicitudes de API, lo que implicó aprender Elysia.js y Firebase, usar Radix y desarrollar una mejor experiencia de usuario.",
        highlights: [
          "Usar Shandcn para mejorar la experiencia del usuario y los formularios",
          "Aprender Elysia.js y Firebase para manejar solicitudes de API",
          "Entender la estructura de código de otros desarrolladores y trabajar en equipo",
        ],
      },
      {
        company: "Sois",
        position: "Desarrollador Full Stack",
        date: "Octubre 2024 - Diciembre 2024",
        description:
          "En Sois, fui parte del equipo de desarrollo de la aplicación de gestión de proyectos. Me encargué de la integración de la API, la mejora de la experiencia del usuario y la implementación de nuevas funcionalidades.",
        highlights: [
          "Usar Shandcn para mejorar la experiencia del usuario y los formularios",
          "Aprender Elysia.js y Firebase para manejar solicitudes de API",
          "Entender la estructura de código de otros desarrolladores y trabajar en equipo",
        ],
      },
    ],
    "stack.title": "Tecnologías",
    "projects.section": "Proyectos personales",
    projects: [
      {
        name: "Octo 🤖",
        description:
          "Este es un proyecto hecho para el Hackathon de Midudev. Te permite hacer revisiones de tus pull requests y enviar los comentarios al repositorio de GitHub para ahorrar tiempo y mejorar el proceso de revisión de código",
        imageUrl: "/assets/octo.webp",
        projectSocials: [
          {
            network: "GitHub",
            label: "GitHub",
            url: "https://github.com/JorgeRojas827/octo",
          },
          {
            network: "Demo",
            label: "Demo",
            url: "https://www.octo.lat/",
          },
        ],
      },
      {
        name: "Short URL 🔗",
        description:
          "Intentando mejorar mis habilidades como Full Stack, hice este proyecto para acortar URLs. Es un proyecto simple, pero me ayudó a entender muchos conceptos y mejorar mis habilidades con Shadcn y TailwindCSS",

        imageUrl: "/assets/url.webp",
        projectSocials: [
          {
            network: "GitHub",
            label: "GitHub",
            url: "https://github.com/NNeshz/url-shorter",
          },
          {
            network: "Demo",
            label: "Demo",
            url: "https://neshzurl.vercel.app/",
          },
        ],
      },
    ],
    "contact.title.1": "¿Listo para",
    "contact.title.2": "colaborar y crear algo nuevo?",
    "contact.description":
      "Estoy aquí para dar vida a tus ideas con creatividad y precisión. Conectemos y exploremos las posibilidades",
    "contact.button": "Ponte en contacto",
  },
  en: {
    "nav.experience": "EXPERIENCE",
    "nav.projects": "PROJECTS",
    "nav.contact": "CONTACT",
    "hero.name": "Neftali Hernández",
    "hero.title": "Full Stack Developer",
    "hero.description1":
      "As a dedicated Full Stack Developer, I specialize in creating robust and scalable web applications. My expertise spans across TypeScript, React, Node.js, and various other modern technologies, ensuring efficient and innovative solutions.",
    "hero.description2":
      "Currently open to exploring new professional opportunities where I can contribute my skills and experience to dynamic teams and challenging projects. Let's connect to discuss how we can work together to achieve excellence.",
    "hero.quote":
      "Programming is the easiest way to understand how things work.",
    "hero.quoteAuthor": "Chris Pine",
    "work.title": "Work Experience",
    experience: [
      {
        company: "Exxpress",
        position: "Full Stack Developer",
        date: "January 2024 - March 2024",
        description:
          "I worked at Exxpress team, where I helped build the web dashboard. I was responsible for UI/UX and API requests, which involved to learn Elysia.js and Firebase, use Radix and develop a better user experience.",
        highlights: [
          "Using Shandcn to improve user experience and forms",
          "Learning Elysia.js and Firebase to handle API requests",
          "Understanding other developers' code structure and working in a team",
        ],
      },
      {
        company: "Sois",
        position: "Full Stack Developer",
        date: "October 2024 - December 2024",
        description:
          "At Sois, I was part of the project management application development team. I was in charge of API integration, improving user experience, and implementing new features.",
        highlights: [
          "Using Shandcn to improve user experience and forms",
          "Learning Elysia.js and Firebase to handle API requests",
          "Understanding other developers' code structure and working in a team",
        ],
      },
    ],
    "stack.title": "Technologies",
    "projects.section": "Personal projects",
    projects: [
      {
        name: "Octo 🤖",
        description:
          "This is a project made for the Midudev Hackathon. Allows you to make reviews of your pull requests and send the comments to the GitHub repository to save time and improve the code review process.",
        imageUrl: "/assets/octo.webp",
        projectSocials: [
          {
            network: "GitHub",
            label: "GitHub",
            url: "https://github.com/JorgeRojas827/octo",
          },
          {
            network: "Demo",
            label: "Demo",
            url: "https://www.octo.lat/",
          },
        ],
      },
      {
        name: "Short URL 🔗",
        description:
          "Trying to improve my skills as Full Stack, I made this project to shorten URLs. It is a simple project, but it helped me to understand many concepts, and inprove my skills with Shadcn and TailwindCSS.",
        imageUrl: "/assets/url.webp",
        projectSocials: [
          {
            network: "GitHub",
            label: "GitHub",
            url: "https://github.com/NNeshz/url-shorter",
          },
          {
            network: "Demo",
            label: "Demo",
            url: "https://neshzurl.vercel.app/",
          },
        ],
      },
    ],
    "contact.title.1": "Ready to",
    "contact.title.2": "collaborate and create?",
    "contact.description":
      "I'm here to bring your ideas to life with creativity and precision. Let's connect and explore the possibilities",
    "contact.button": "Get in touch",
  },
} as const;
