const pdfmake = require('pdfmake');
const fs = require('fs');
const path = require('path');

pdfmake.fonts = {
  Roboto: {
    normal: path.join(__dirname, 'node_modules', 'pdfmake', 'fonts', 'Roboto', 'Roboto-Regular.ttf'),
    bold: path.join(__dirname, 'node_modules', 'pdfmake', 'fonts', 'Roboto', 'Roboto-Medium.ttf'),
    italics: path.join(__dirname, 'node_modules', 'pdfmake', 'fonts', 'Roboto', 'Roboto-Italic.ttf'),
    bolditalics: path.join(__dirname, 'node_modules', 'pdfmake', 'fonts', 'Roboto', 'Roboto-MediumItalic.ttf'),
  },
};

const docDefinition = {
  pageSize: 'A4',
  pageMargins: [40, 40, 40, 40],
  defaultStyle: {
    font: 'Roboto',
    fontSize: 10,
    color: '#333333',
  },
  styles: {
    header: {
      fontSize: 22,
      bold: true,
      color: '#111827',
      margin: [0, 0, 0, 4],
    },
    subheader: {
      fontSize: 11,
      color: '#4b5563',
      margin: [0, 0, 0, 12],
    },
    sectionTitle: {
      fontSize: 12,
      bold: true,
      color: '#111827',
      margin: [0, 14, 0, 6],
      border: [false, false, false, true],
      fillColor: '#f3f4f6',
    },
    jobTitle: {
      fontSize: 11,
      bold: true,
      color: '#111827',
      margin: [0, 6, 0, 2],
    },
    jobDetail: {
      fontSize: 10,
      color: '#4b5563',
      margin: [0, 0, 0, 4],
    },
    bodyText: {
      fontSize: 10,
      color: '#374151',
      margin: [0, 0, 0, 6],
    },
    link: {
      fontSize: 10,
      color: '#2563eb',
      decoration: 'underline',
    },
    badge: {
      fontSize: 9,
      color: '#374151',
      margin: [0, 0, 4, 4],
    },
  },
  content: [
    {
      text: 'LUIZ EDUARDO MENDONÇA AMORIM',
      style: 'header',
    },
    {
      text: [
        { text: '📍 Taguatinga, DF  |  ' },
        { text: '📱 (61) 9 8104-8509  |  ' },
        { text: '✉ luiz.eduardo.amorim@hotmail.com\n' },
        { text: '🔗 LinkedIn: linkedin.com/in/luiz-amorim-5a0847400\n' },
        { text: '💻 GitHub: github.com/luizking30\n' },
      ],
      style: 'subheader',
    },

    {
      text: 'OBJETIVO',
      style: 'sectionTitle',
    },
    {
      text: 'Estágio em Desenvolvimento de Software (Java / Python), contribuindo com soluções web, automações e integrações em ambientes reais de negócio.',
      style: 'bodyText',
    },

    {
      text: 'FORMAÇÃO ACADÊMICA',
      style: 'sectionTitle',
    },
    {
      text: [
        { text: 'Bacharelado em Sistemas de Informação', bold: true },
        { text: ' | 4º Semestre\n' },
        { text: 'Foco em Engenharia de Software, Arquitetura de Sistemas e Banco de Dados.' },
      ],
      style: 'bodyText',
    },

    {
      text: 'EXPERIÊNCIA PROFISSIONAL',
      style: 'sectionTitle',
    },
    {
      text: 'Proprietário e Técnico Responsável | Shark Eletrônicos',
      style: 'jobTitle',
    },
    {
      text: '2014 – Atual (10 anos)',
      style: 'jobDetail',
    },
    {
      ul: [
        'Gestão operacional e técnica de assistência especializada em hardware, smartphones e tablets.',
        'Desenvolvimento e implementação de software interno para automatizar o fluxo de ordens de serviço e estoque da loja.',
      ],
      style: 'bodyText',
    },
    {
      text: 'Auxiliar Administrativo | SESI / SENAI',
      style: 'jobTitle',
    },
    {
      text: 'Período de 2 anos',
      style: 'jobDetail',
    },
    {
      ul: [
        'Suporte em rotinas administrativas, organização documental e atendimento ao público utilizando sistemas de gestão interna.',
      ],
      style: 'bodyText',
    },

    {
      text: 'HABILIDADES TÉCNICAS',
      style: 'sectionTitle',
    },
    {
      ul: [
        { text: [{ text: 'Back-end: ', bold: true }, 'Java (Spring Boot, Spring Security), Python.'] },
        { text: [{ text: 'Banco de Dados: ', bold: true }, 'MySQL (Modelagem Relacional, Queries, CRUD).'] },
        { text: [{ text: 'Front-end: ', bold: true }, 'HTML5, CSS3, JavaScript, Bootstrap 5, React, Thymeleaf.'] },
        { text: [{ text: 'Arquitetura: ', bold: true }, 'MVC (Model-View-Controller), REST APIs.'] },
        { text: [{ text: 'Ferramentas: ', bold: true }, 'Git, GitHub, Maven.'] },
      ],
      style: 'bodyText',
    },

    {
      text: 'CURSOS E IDIOMAS',
      style: 'sectionTitle',
    },
    {
      ul: [
        { text: [{ text: 'Front-end: ', bold: true }, 'HTML5, CSS3, JavaScript, Thymeleaf, Bootstrap 5, React - Senai.'] },
        { text: [{ text: 'Back-end: ', bold: true }, 'Python, Java, Banco de Dados (MySQL) - Senai.'] },
        { text: [{ text: 'Administração: ', bold: true }, 'Auxiliar Administrativo - Senai.'] },
        { text: [{ text: 'Idiomas: ', bold: true }, 'Inglês nível intermediário - CILT Taguatinga.'] },
      ],
      style: 'bodyText',
    },
  ],
};

pdfmake.createPdf(docDefinition).write(path.join(__dirname, 'curriculo-luiz-amorim.pdf'))
  .then(() => console.log('Currículo gerado com sucesso: curriculo-luiz-amorim.pdf'))
  .catch(err => {
    console.error('Erro ao gerar currículo:', err);
    process.exit(1);
  });
