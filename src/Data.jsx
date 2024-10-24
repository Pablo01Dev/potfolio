/* ======= Icones Tecnologias =======*/
import { SiJavascript, SiTypescript, SiReact, SiAngular, SiBootstrap, SiStyledcomponents, SiNodedotjs, SiJquery } from 'react-icons/si';

/*======== Import das imagens =======*/
import imagem01 from '/public/poke-api.jpg'
import imagem02 from '/public/andarilo-studio.png'
import imagem05 from '/public/calculadora-react.jpg'


export const links = [
    {
        name: 'Home',
        path: 'home',
    },
    {
        name: 'Services',
        path: 'services',
    },
    {
        name: 'Skills',
        path: 'skills',
    },
    {
        name: 'Portfolio',
        path: 'portfolio',
    },
    {
        name: 'Resume',
        path: 'resume',
    },
    {
        name: 'Contact',
        path: 'contact',
    },
]

export const services = [
    {
        id: 1,
        name: 'Desenvolvimento Web',
        title: 'Front-End',
        description:'Desenvolvimento de sites profissionais, blogs, portfólios, landing pages e e-commerce.'
    },
    {
        id: 2,
        name: 'Designer',
        title: 'UI Design',
        description:'Desenho interfaces que sejam claras, objetivas e que possam ser intuitivas para o usuário. '
    },
]

export const skills = [
    {
        id: 1,
        name: 'JavaScript',
        image: <SiJavascript id='js' />
    },
    {
        id: 2,
        name: 'TypeScript',
        image: <SiTypescript id='ts' />
    },
    {
        id: 3,
        name: 'React',
        image: <SiReact id='react' />
    },
    {
        id: 4,
        name: 'Angular',
        image: <SiAngular id='angular' />
    },
    {
        id: 5,
        name: 'Bootstrap',
        image: <SiBootstrap id='bootstrap' />
    },
    {
        id: 6,
        name: 'styled-components',
        image: <SiStyledcomponents id='styled' />
    },
    {
        id: 7,
        name: 'jQuery',
        image: <SiJquery id='jquery' />
    },
    {
        id: 8,
        name: 'Node js',
        image: <SiNodedotjs id='node' />
    },
]

export const projects = [

    {
        id: 1,
        img: imagem01,
        category: 'JavaScript',
        title: 'Pokedex API',
        description:
            'O site utiliza HTML, CSS e JavaScript para criar uma interface dinâmica e responsiva. O site também usa conceitos de API, fetch e async/await consumindo dados da PokéAPI.',
        codigo: 'https://github.com/Pablo01Dev/Pokedex-API',
        demo: 'https://pokedex-api-javascript.netlify.app/'
    },
    {
        id: 2,
        img: imagem02,
        category: 'React',
        title: 'Andarilo Studio',
        description:
            'Andarilo Studio é um projeto pessoal dedicado ao meu próprio negócio, projetado para oferecer uma interface minimalista e simplificada.',
        codigo: 'https://github.com/Pablo01Dev/andarilo',
        demo: 'https://www.andarilo.com.br'
    },
    {
        id: 3,
        img: imagem05,
        category: 'React',
        title: 'Calculadora com React',
        description:
            'Um site que usa React para criar uma calculadora simples e funcional. O site usa componentes, estados e hooks para gerenciar a lógica da calculadora.',
        codigo: 'https://github.com/BrunoOliveira16/calculadora-react',
        demo: 'https://calculadora-projeto-react.netlify.app/'
    },
]

export const cv = [
    {
        id: 1,
        title: 'Bacharel em Ciência da Computação',
        subtitle: 'Faculdade Descomplica',
        date: '2022 - 2026',
        description:
        'Ingressei na faculdade em setembro de 2022, com o objetivo de se especializar ainda mais na área de TI em uma faculdade com foco em desenvolvimento full-stack, desde então tive experiêcia com Java, JavaScript, lógica de programação e algoritimos, analise e requistos de software e banco de dados.',
        category: 'educacao',
    },
    {
        id: 2,
        title: 'Desenvolvimento Full-Stack Python',
        subtitle: 'EBAC',
        date: '2022 - 2023',
        description:
        'Iniciei meus estudos em junho de 2022 neste curso que é focado na linguagem Python para o back-end, finalizei o front-end onde apliquei conhecimentos com javascript, react, bootstrap, jquery, sass e material UI na construção de alguns projetos e no momento venho estudando o back-end com o python.',
        category: 'educacao',
    },
    {
        id: 3,
        title: 'Desenvolvedor Front-End',
        subtitle: 'Freelance',
        date: '2022 - Até o Momento',
        description:
        'Apesar de ter tido algumas experiências com tecnologia anteriores, iniciei de fato meus estudos e transição de carreira em junho de 2022, onde desde então venho realizando alguns projetos front-end com tecnologias como react.',
        category: 'experiencia',
    },
    {
        id: 4,
        title: 'Analista de Manutenção',
        subtitle: 'Ternium Brasil',
        date: '2017 - 2023',
        description:
        'Fui promovido a técnico III como responsável da manutenção do setor de lingotamento continuo, e após fui promovido a analista de manutenção e participei de projetos com foco na analise de dados, para identificação de perfis de perda de manutenção e captura de ganhos em disponibilidade e redução de custos.',
        category: 'experiencia',
    },
    {
        id: 5,
        title: 'Engenharia de Produção',
        subtitle: 'Universidade Cândido Mendes',
        date: '2013 - 2018',
        description:
        'Cursei no período descrito o curso de engenharia no campus de santa cruz e como projeto final apresentei um estudo de caso da aplicação da ferramenta 8D na analise e resolução de problemas de manutenção em equipamentos.',
        category: 'educacao',
    },
    {
        id: 6,
        title: 'Técnico de Manutenção Elétrica',
        subtitle: 'ThyssenKrupp CSA',
        date: '2010 - 2017',
        description:
        'Iniciei como auxiliar e fui promovido até o nível de técnico II como inspetor, fui responsável pela manutenção de equipamentos de um setor inteiro, atuei resolvendo problemas elétricos e de automação de equipamentos siemens como PLC, inversores e motores elétricos.',
        category: 'experiencia',
    },
]

