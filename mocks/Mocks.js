export const aboutInfo = [
    { 
        id: 1,
        title: 'Vanilla / NodeJS / React', 
        linkLabel: 'See Backend Skills', 
        linkUrl: 'backend',
        content: 'Strong experience working as a Javascript developer, both on client-side and server-side. Always considering best code quality. Great ES6+ knowledge',
    },
    { 
        id: 2, 
        title: 'AWS Knowledge', 
        linkLabel: 'See devops Skills',
        linkUrl: 'devops',
        content: 'Good experience working on projects with the most used Amazon Web Services technologies for the Web (S3, Lambda, DynamoDB among others)' 
    },
    { 
        id: 3, 
        title: 'Html5 / CSS3 / JS Expert', 
        linkLabel: 'See Frontend Skills', 
        linkUrl: 'frontend',
        content: 'Fast and Pixel perfect development, always considering to develop a maintenable, testable, e performatic code.' 
    },
    { 
        id: 4, 
        title: 'Good Soft Skills', 
        linkLabel: 'See My Linkedin Profile', 
        linkUrl: 'https://www.linkedin.com/in/diogocercilio/',
        content: `I'm a self learner, and I always do my best for the projects. I can teaching a lot, but I'm always open mind to learn new stuff as well. I solve problems, and I'm passionate for the web` 
    },
]

export const footerLinks = [
    { 
        id: 1, 
        name: 'Github',
        link: 'https://github.com/DiogoCercilio',
        icon: {
            path: 'M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z',
            viewbox: '0 0 1792 1792'
        }
    },
    { 
        id: 2, 
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/diogocercilio/',
        icon: {
            path: 'M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z',
            viewbox: '0 -10 550 500'
        }
    }
]

export const sections = [
    { id: 1, name: 'About', alias: 'about' },
    { id: 2, name: 'Portfolio', alias: 'portfolio' },
    { id: 3, name: 'Skills', alias: 'skills' },
]

export const skills = {
    others: [
        { 
            id: 1, 
            name: 'Soft Skills', 
            tags: [ 'Extremely Focused', 'Self learner', 'Self motivated', 'Passionated', 'Friendly' ] 
        },
        { 
            id: 1, 
            name: 'Methodologies / Tools', 
            tags: [ 'SCRUM', 'Sprint', 'Kanban', 'OKR', 'JIRA', 'MVP', 'AB Testing' ] 
        },
    ],
    frontend: [
        { 
            id: 1, 
            name: 'Performance', 
            tags: [ 'Chrome Devtools', 'Page Speed Insights', 'Lighthouse', 'Critical Rendering Path Optimization', 'HTTP2 Multiplexing Requests', 'Conca / Minify assets', 'Lazy load', 'Gzip', 'Sprites' ] 
        },
        { 
            id: 2, 
            name: 'Testing', 
            tags: [ 'Jenkins Pipeline', 'Github / Bitbucket Hooks', 'Code review', 'AB Testing', 'Cypress', 'Jest', 'Mocha', 'Chai', 'Jasmine','Husky', 'Browser Stack','Unit Testing', 'Integration Testing', 'E2E Testing' ] 
        },
        { 
            id: 3, 
            name: 'HTML5', 
            tags: [ 'PWA', 'Offline First', 'Mobile First', 'Semantic', 'Microformats', 'SEO', 'Analytics', 'Amplitude Analytics', 'APIS', 'Pixel Perfect', 'Cross Browser', 'Cross Platform', 'SVG' ] 
        },
        { 
            id: 4, 
            name: 'CSS3', 
            tags: [ 'Styled Components', 'SCSS', 'SMACSSS', 'BEM', 'Compass', 'Advanced selectors', 'CSS Arquitecture', 'Material IO', 'Bootstrap', 'Animations', 'Responsive', 'Fluid', 'Adaptative', 'Box Model' ] 
        },
        { 
            id: 5, 
            name: 'Javascript', 
            tags: [ 'SOLID', 'Data Structures', 'Design Patterns','Api integration', 'Typescript', 'Semantic Versioning', 'OOP', 'Vanilla', 'ES6+', 'Ajax', 'Axios','React', 'React Native', 'GraphQL', 'Electron', 'Redux', 'NextJS', 'Angular 2+', 'Vuejs', 'Debugging', 'JQuery', 'Canvas', 'JSON', 'Ionic', 'Template Engines' ] 
        },
        { 
            id: 6, 
            name: 'GIT', 
            tags: [ 'Terminal', 'SSH', 'Hooks', 'Feature Branches', 'Pull Request', 'Hard user', 'Github', 'Github Pages', 'Pipelines', 'Bitbucket', 'Gitflow' ] 
        },
        { 
            id: 7, 
            name: 'Tools', 
            tags: [ 'NPM', 'NPM sripts', 'Yarn', 'Webpack', 'Grunt', 'Gulp', 'Bower', 'Terminal', 'Visual Studio Code', 'Docker Compose' ]
        }
    ],
    backend: [
        { 
            id: 1, 
            name: 'Standards', 
            tags: [ 'Serverless','Microservices', 'OSx', 'SOLID', 'Data Structures', 'Design Patterns','API', 'Semantic Versioning', 'OOP', 'REST' ]
        },
        { 
            id: 2, 
            name: 'Testing', 
            tags: [ 'Jenkins Pipeline', 'Github / Bitbucket Hooks', 'Code review', 'AB Testing', 'Cypress', 'Jest', 'Mocha', 'Chai', 'Jasmine', 'Husky', 'Browser Stack','Unit Testing', 'Integration Testing', 'E2E Testing' ]
        },
        { 
            id: 3, 
            name: 'NodeJS', 
            tags: [ 'Core', 'Debugging', 'ES6+','Typescript', 'Express', 'NestJS', 'AdonisJS', 'Event Emmiters', 'Buffers', 'PM2', 'SocketIO', 'Mailer'  ]
        },
        { 
            id: 5, 
            name: 'Database', 
            tags: [ 'DynamoDB', 'Mysql', 'PostgreSQL', 'NoSql', 'Relational', 'MongoDB', 'GraphQL', 'Knex' ]
        },
        { 
            id: 6, 
            name: 'GIT', 
            tags: [ 'Terminal', 'SSH', 'Hooks', 'Feature Branches', 'Pull Request', 'Hard user', 'Github', 'Github Pages', 'Pipelines', 'Bitbucket', 'Gitflow' ]
        },
        { 
            id: 7, 
            name: 'Tools', 
            tags: [ 'Continous Delivery', 'Continous Integration','Jenkins', 'NGINX', 'Apache', 'NPM', 'NPM sripts', 'Yarn', 'Webpack', 'Terminal', 'Visual Studio Code', 'Docker Compose', 'Logging' ] 
        }
    ],
    devops: [
        { 
            id: 1, 
            name: 'Devops', 
            tags: [ 'SSH', 'Terminal', 'Serverless Framework', 'Jenkins Configuration', 'AWS Lambda', 'AWS S3',  'AWS Api Gateway', 'AWS EC2', 'AWS Cloud Formation', 'AWS CloudWatch', 'AWS DynamoBD', 'Bitbucket Hooks', 'Github Hooks' ] 
        }
    ]
};

export const categories = [
    { 
        id: 1, 
        name: 'Frontend', 
        alias: 'frontend'
    },
    { 
        id: 2, 
        name: 'Backend', 
        alias: 'backend'
    },
    { 
        id: 3, 
        name: 'Devops', 
        alias: 'devops'
    },
    { 
        id: 4, 
        name: 'Others', 
        alias: 'others'
    }
]

export const publicPortfolio = [
    { 
        id: 3,
        img: 'omni.png', 
        link: 'https://www.omni.com.br/', 
        title: "Omni Banco e Financeira" 
    },
    { 
        id: 4,
        img: 'gv.png', 
        link: 'https://www.guichevirtual.com.br/', 
        title: "Guichê Virtual" 
    },
    { 
        id: 5,
        img: 'sinduscon.png', 
        link: 'https://sindusconsp.com.br/', 
        title: "Sinduscon SP"
     }
]

export const privatePortfolio = [
    { 
        id: 1, 
        type: 'img', 
        label: 'Embraer', 
        alias: 'embraer', 
        src: 'https://logodownload.org/wp-content/uploads/2014/06/embraer-logo-1.png' 
    },
    { 
        id: 2, 
        type: 'img', 
        label: 'Guichê Virtual', 
        alias: 'guiche', 
        src: 'https://static.guichevirtual.com.br/public-2468/_v2/static/img/logo-branco.svg' 
    },
    { 
        id: 3, 
        type: 'img', 
        label: 'Focusnetworks', 
        alias: 'focus', 
        src: 'https://www.focusnetworks.com.br/static/images/star-focus-color.svg' 
    },
    { 
        id: 4, 
        type: 'img', 
        label: 'Banco Safra', 
        alias: 'safra', 
        src: 'https://www.safra.com.br/data/files/BE/23/26/33/A1CDE610C42FD1E6181808FF/logo-azul-safra.png' 
    },
    { 
        id: 5, 
        type: 'img', 
        label: 'Banco BTG Pactual', 
        alias: 'btg', 
        src: 'https://logodownload.org/wp-content/uploads/2014/07/btg-pactual-logo-1.png' 
    },
    { 
        id: 6, 
        type: 'svg', 
        label: 'Banco Santander', 
        alias: 'santander', 
        src: 'M107.6,65.4c-0.2-5.2-1.7-10.3-4.3-14.9L79.8,9.9c-1.8-3.1-3-6.4-3.7-9.9l-1,1.7c-5.8,10.1-5.8,22.5,0,32.6l18.8,32.6c5.8,10.1,5.8,22.5,0,32.6l-1,1.7c-0.7-3.5-1.9-6.8-3.7-9.8L72,61.5l-11-19c-1.8-3.1-3-6.4-3.7-9.8l-1,1.7c-5.8,10-5.8,22.4-0.1,32.5l0,0l18.9,32.6c5.8,10.1,5.8,22.5,0,32.6l-1,1.7c-0.7-3.5-2-6.8-3.7-9.8L46.9,83.2c-3.1-5.4-4.6-11.5-4.3-17.7C17.4,72,0,86,0,102.2c0,22.5,33.6,40.7,75.1,40.7s75.1-18.2,75.1-40.7C150.2,86,132.8,72,107.6,65.4zM178.5,135c0.2-4.9,1.1-9.7,2.7-14.2c8.1,3.6,16.9,5.4,25.8,5.5c13.1,0,20.4-4.2,20.4-12.6s-5.4-12-18.6-17.8l-7.2-3.1c-13.3-5.8-22.3-13.3-22.3-28.2c0-16.1,11.1-26.4,34-26.4c8.8-0.1,17.5,1.3,25.8,4.1c-0.3,4.8-1.3,9.5-2.8,14.1c-7.4-2.6-15.2-4-23.1-4.1c-12.3,0-17.9,4.8-17.9,12.3s5.5,11.6,15.4,15.8l7.6,3.2c17.9,7.6,25.4,15.7,25.4,29.4c0,16.2-12.3,27.4-36.2,27.4C195.9,140.4,186.4,138.7,178.5,135z M319.5,67.6v70.5h-14.2l-0.8-8.5c-4,6.2-10,10.1-19.9,10.1c-18.6,0-31-13.5-31-37.2c0-24.8,13.3-38.9,39.4-38.9C303,63.6,311.3,64.7,319.5,67.6z M303.9,122V77.7c-3.7-0.6-7.4-0.9-11.1-0.8c-16.1,0-23.5,9.9-23.5,25.7c0,14.4,5.8,24.5,19.6,24.5C294.3,127.1,299.6,125.3,303.9,122z M398.9,90.7v47.4h-15.5V93.4c0-11.1-3.7-16.5-19.2-16.5c-4.1,0.1-8.2,0.4-12.3,1.1v60.1h-15.5V67.6c9.9-2.4,20.7-3.9,28.2-3.9C390.5,63.6,398.9,73.6,398.9,90.7z M441.9,126.5c4.1,0,8.2-0.7,12.1-2.1c-0.4,4.2-1,9-1.8,13.1c-4.2,1.6-8.6,2.3-13.1,2.2c-15.1,0-24.7-6.9-24.7-24.1v-74c5-1.5,10.3-2.3,15.5-2.3V66h24.5c-0.2,4.4-0.7,8.9-1.4,13.3h-23.1v34.6C429.9,123,434.4,126.5,441.9,126.5L441.9,126.5z M525.1,67.5V138h-14.2l-0.9-8.5c-4,6.2-10,10.1-19.9,10.1c-18.6,0-31-13.5-31-37.2c0-24.8,13.3-38.9,39.4-38.9C508.6,63.6,516.9,64.7,525.1,67.5L525.1,67.5z M509.6,122V77.7c-3.7-0.6-7.4-0.9-11.1-0.8c-16.1,0-23.6,9.9-23.6,25.7c0,14.4,5.8,24.5,19.6,24.5C500,127.1,505.3,125.3,509.6,122z M604.5,90.7v47.4H589V93.4c0-11.1-3.7-16.5-19.2-16.5c-4.1,0.1-8.2,0.4-12.2,1.1v60.1H542V67.6c9.9-2.4,20.7-3.9,28.2-3.9C596.2,63.6,604.5,73.6,604.5,90.7z M683.2,39.3v98.7H669l-0.8-9c-4,6.6-10,10.7-20.2,10.7c-18.6,0-31-13.5-31-37.2c0-24.8,13.3-38.9,39.3-38.9c3.9,0,7.8,0.4,11.6,1.1V41.5C672.7,39.8,678.2,39.3,683.2,39.3L683.2,39.3z M667.9,121.7V78.3c-4.1-0.9-8.2-1.4-12.4-1.4c-15.4,0-22.7,9.6-22.7,25.7c0,14.4,5.8,24.5,19.6,24.5C658,127.1,663.5,125.2,667.9,121.7L667.9,121.7z M761.3,107.9h-49.5c2,12.6,9.3,18.6,23.1,18.6c8.6,0,17-1.8,24.8-5.4c-0.6,4.1-1.4,9.5-2.4,14.1c-7.1,3.2-14.5,4.5-22.8,4.5c-26,0-38.5-14.4-38.5-38.5c0-21,9.7-37.7,34.4-37.7c22.1,0,31.7,14.5,31.7,32.3C762.1,99.9,761.8,103.9,761.3,107.9L761.3,107.9zM711.5,94.9h35c0-11.6-6.2-18.3-16.9-18.3C718.5,76.6,712.7,82.9,711.5,94.9L711.5,94.9z M815.6,64.2c0,4.5-0.4,8.9-1.4,13.3c-3.9-0.4-7.8-0.6-11.7-0.6c-3.8,0-7.6,0.3-11.4,0.8v60.4h-15.5V67.6c6.6-2.2,17.8-3.9,26.5-3.9C806.5,63.6,811.1,63.8,815.6,64.2L815.6,64.2z' 
    },
    { 
        id: 7, 
        type: 'img', 
        label: 'Sistema Poliedro', 
        alias: 'poliedro', 
        src: 'http://www.sistemapoliedro.com.br/menu/img/logo-sistema-menu.png' 
    }
]

export const personalPortfolio = [
    { 
        id: 1, 
        title: 'HTML5 + CSS3 Only Compass', 
        description: 'Project Winner from the IMasters competition', 
        link: 'https://codepen.io/dcweb/full/WbyYeX',
        linkLabel: 'See on Codepen'
    },
    { 
        id: 2, 
        title: 'NPM Package - DC Form Validator', 
        description: 'A Vanilla JS form validator', 
        link: 'https://www.npmjs.com/package/dc-form-validator', 
        linkLabel: 'See on NPM'
    },
    { 
        id: 3, 
        title: 'NPM Package - Binary 2 Text 2 Binary', 
        description: 'A Binary / Text / Binary Converter', 
        link: 'https://www.npmjs.com/package/@diogocercilio/binary-2-text-2-binary', 
        linkLabel: 'See on NPM' 
    },
    { 
        id: 4, 
        title: 'Chrome Dino Game', 
        description: 'The Chrome Dino Game re-implemented', 
        link: 'https://github.com/DiogoCercilio/dino', 
        linkLabel: 'See on Github' 
    },
    { 
        id: 5, 
        title: 'Snake Game', 
        description: 'The Snake Game using Vanilla JS', 
        link: 'https://github.com/DiogoCercilio/snake-game', 
        linkLabel: 'See on Github' 
    },
    { 
        id: 6, 
        title: 'Node / Express / Typescript Scaffold', 
        description: 'Idea for NodeJS project structure', 
        link: 'https://github.com/DiogoCercilio/snake-game', 
        linkLabel: 'See on Github' 
    },
]