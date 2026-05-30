export const site = {
  baseUrl: 'https://aneeshkm.github.io',
  description:
    'Portfolio of Aneesh Mokashi, a software developer focused on backend systems, full-stack applications, AI workflows, data systems, and MLOps.',
  author: {
    name: 'Aneesh Mokashi',
    initials: 'AM',
    role: 'Software Developer | MS Computer Engineering at NYU',
    email: 'aneeshkmokashi@gmail.com',
    bio:
      'Software developer with around 2 years of experience at Accenture building scalable systems with Java, Spring Boot, React, Kafka, AWS, and PostgreSQL. Currently focused on AI, big data, and ML systems through graduate work at NYU.',
    photo: '/media/authors/me.png',
    focusAreas: [
      'Full-Stack Development',
      'Backend Systems',
      'AI and Machine Learning',
      'Big Data Analytics',
      'MLOps',
    ],
    links: [
      {
        label: 'Email',
        url: 'mailto:aneeshkmokashi@gmail.com',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/aneeshKm',
      },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/aneeshkmokashi/',
      },
    ],
  },
  navigation: [
    { label: 'Home', url: '/#home' },
    { label: 'Work Experience', url: '/#work-experience' },
    { label: 'Projects', url: '/#projects' },
    { label: 'Contact', url: '/#contact' },
  ],
  education: [
    {
      degree: 'M.S. in Computer Engineering',
      institution: 'New York University',
      start: '2024-09-01',
      end: '2026-05-01',
      summary: 'GPA: 3.87/4.00.',
    },
    {
      degree: 'B.Tech. in Information Technology',
      institution: 'University of Mumbai',
      start: '2018-08-01',
      end: '2022-07-01',
      summary: 'GPA: 8.64/10.00.',
    },
  ],
  relevantCoursework: [
    'Machine Learning',
    'Deep Learning',
    'Data Structures',
    'Generative AI / LLMs',
  ],
  experience: [
    {
      role: 'Application Development Analyst',
      org: 'Accenture',
      category: 'Professional Experience',
      location: 'Mumbai, India',
      start: '2022-09-01',
      end: '2024-08-01',
      highlights: [
        'Engineered 5+ Spring Boot microservices for core banking transactions including deposits, mandates, and remittance processing.',
        'Integrated Kafka for real-time processing of 100,000+ daily transactions.',
        'Designed Jenkins CI pipelines and reduced average build-to-deploy cycle time by 25%.',
        'Achieved 90%+ code coverage with JUnit and Mockito test suites.',
        'Led 8 developers building a scalable task-tracking platform with javascript, CSS, Java, Spring Boot, AWS, and PostgreSQL.',
        'Implemented Kanban workflows, story creation, and estimation features for cross-functional sprint planning.',
        'Reduced frontend bundle size by 20% and cut initial page load time by 1.8s through a custom Webpack setup.',
      ],
    },
    {
      role: 'Research Assistant',
      org: 'NYU Langone Health',
      category: 'Academic Experience',
      location: 'New York City, NY',
      start: '2025-07-01',
      highlights: [
        'Fine-tuned 3+ vision-language models on a curated dataset of 50k+ clinical images.',
        'Built reproducible preprocessing and benchmarking pipelines with AUROC, F1, and per-class accuracy evaluation.',
        'Benchmarked PEFT strategies across model architectures and identified configurations improving AUROC by 3-5%.',
      ],
    },
    {
      role: 'Course Assistant',
      org: 'New York University',
      category: 'Academic Experience',
      location: 'New York City, NY',
      start: '2025-09-01',
      highlights: [
        'Mentored 100+ graduate students across AI workflows, GPU profiling, and performance bottleneck analysis.',
        'Supported coursework in high performance machine learning, artificial intelligence, and LLM-based generative AI systems.',
        'Guided students on PyTorch profiling, CUDA concepts, vLLM, RAG workflows, quantization, and cloud deployment.',
      ],
    },
  ],
  skills: [
    {
      name: 'Languages',
      items: [
        { label: 'Java', icon: 'devicon/java/java-original.svg' },
        { label: 'Python', icon: 'devicon/python/python-original.svg' },
        { label: 'JavaScript', icon: 'devicon/javascript/javascript-original.svg' },
        { label: 'TypeScript', icon: 'devicon/typescript/typescript-original.svg' },
        { label: 'C++', icon: 'devicon/cplusplus/cplusplus-original.svg' },
        { label: 'SQL', icon: 'custom/sql' },
      ],
    },
    {
      name: 'Backend and Data',
      items: [
        { label: 'Spring Boot', icon: 'devicon/spring/spring-original.svg' },
        { label: 'Node.js', icon: 'devicon/nodejs/nodejs-original.svg' },
        { label: 'Kafka', icon: 'devicon/apachekafka/apachekafka-original.svg' },
        { label: 'PostgreSQL', icon: 'devicon/postgresql/postgresql-original.svg' },
        { label: 'MySQL', icon: 'devicon/mysql/mysql-original.svg' },
        { label: 'MongoDB', icon: 'devicon/mongodb/mongodb-original.svg' },
        { label: 'PySpark', icon: 'devicon/apachespark/apachespark-original.svg' },
      ],
    },
    {
      name: 'Frontend',
      items: [
        { label: 'React', icon: 'devicon/react/react-original.svg' },
        { label: 'Angular', icon: 'devicon/angular/angular-original.svg' },
        { label: 'Tailwind CSS', icon: 'devicon/tailwindcss/tailwindcss-original.svg' },
        { label: 'HTML5', icon: 'devicon/html5/html5-original.svg' },
        { label: 'CSS3', icon: 'devicon/css3/css3-original.svg' },
      ],
    },
    {
      name: 'Cloud and Tools',
      items: [
        { label: 'AWS', icon: 'devicon/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { label: 'Docker', icon: 'devicon/docker/docker-original.svg' },
        { label: 'Git', icon: 'devicon/git/git-original.svg' },
        { label: 'Linux', icon: 'devicon/linux/linux-original.svg' },
        { label: 'MLflow', icon: 'custom/mlflow' },
        { label: 'Grafana', icon: 'devicon/grafana/grafana-original.svg' },
      ],
    },
  ],
  projectFilters: [
    { label: 'All', value: 'all' },
    { label: 'Featured', value: 'featured' },
    { label: 'AI', value: 'ai' },
    { label: 'Backend', value: 'backend' },
    { label: 'Full-Stack', value: 'full-stack' },
    { label: 'Data', value: 'data' },
  ],
};
