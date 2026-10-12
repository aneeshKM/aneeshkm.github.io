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
      'Agentic AI Development',
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
      role: 'Software Engineer',
      org: 'Accenture',
      location: 'Mumbai, India',
      start: '2024-03-01',
      end: '2024-08-01',
      description:
        'Built backend services for a distributed banking platform using Java, Spring Boot, and Kafka. Owned microservice development, REST APIs, and reusable messaging integrations for reliable transaction processing. Tuned Kafka consumers and SQL queries, and automated builds and deployments through Jenkins, Maven, Docker, and Kubernetes.',
    },
    {
      role: 'Associate Software Engineer',
      org: 'Accenture',
      location: 'Mumbai, India',
      start: '2022-09-01',
      end: '2024-03-01',
      description:
        'Developed an internal task-tracking platform with React, TypeScript, and Django on AWS, and led technical delivery through code reviews, feature integration, and production releases. Built data ingestion and transformation services with Docker, Amazon S3, and AWS Lambda. Worked on payment reconciliation by tuning SQL queries and developing Java and Spring Boot APIs backed by PostgreSQL, with role-based access to payment data.',
    },
    {
      role: 'Research Assistant',
      org: 'NYU Langone Health',
      location: 'New York City, NY',
      start: '2025-07-01',
      end: '2026-05-15',
      description:
        'Worked on clinical AI research, fine-tuning and benchmarking vision-language models with Python and PyTorch and building automated training and evaluation pipelines. Developed an agentic AI system with Gemma and LangGraph to investigate clinical data, supported by MCP tools and FastAPI endpoints for metadata validation, patient linkage, and evidence retrieval with AI guardrails. Built a multimodal duplicate-detection pipeline to identify overlaps in clinical datasets and support data quality.',
    },
    {
      role: 'Course Assistant',
      org: 'New York University',
      location: 'New York City, NY',
      start: '2025-09-01',
      end: '2026-05-15',
      description:
        'Supported graduate coursework in high-performance machine learning, artificial intelligence, and LLM-based generative AI systems. Mentored students on AI workflows, GPU profiling, and performance bottleneck analysis, and guided them through PyTorch profiling, CUDA concepts, vLLM, RAG workflows, quantization, and cloud deployment.',
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
      name: 'Backend and APIs',
      items: [
        { label: 'Spring Boot', icon: 'devicon/spring/spring-original.svg' },
        { label: 'Node.js', icon: 'devicon/nodejs/nodejs-original.svg' },
        { label: 'Django', icon: 'devicon/django/django-plain.svg' },
        { label: 'FastAPI', icon: 'devicon/fastapi/fastapi-original.svg' },
        { label: 'REST APIs', icon: 'custom/API' },
        { label: 'GraphQL', icon: 'devicon/graphql/graphql-plain.svg' },
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
      name: 'Databases and Data',
      items: [
        { label: 'PostgreSQL', icon: 'devicon/postgresql/postgresql-original.svg' },
        { label: 'MySQL', icon: 'devicon/mysql/mysql-original.svg' },
        { label: 'MongoDB', icon: 'devicon/mongodb/mongodb-original.svg' },
        { label: 'Redis', icon: 'devicon/redis/redis-original.svg' },
        { label: 'Kafka', icon: 'devicon/apachekafka/apachekafka-original.svg' },
        { label: 'PySpark', icon: 'devicon/apachespark/apachespark-original.svg' },
        { label: 'ETL Pipelines', icon: 'custom/ETL' },
      ],
    },
    {
      name: 'Cloud and DevOps',
      items: [
        { label: 'AWS', icon: 'devicon/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { label: 'Azure', icon: 'devicon/azure/azure-original.svg' },
        { label: 'Google Cloud', icon: 'devicon/googlecloud/googlecloud-original.svg' },
        { label: 'Docker', icon: 'devicon/docker/docker-original.svg' },
        { label: 'Kubernetes', icon: 'devicon/kubernetes/kubernetes-original.svg' },
        { label: 'Terraform', icon: 'devicon/terraform/terraform-original.svg' },
        { label: 'Jenkins', icon: 'devicon/jenkins/jenkins-original.svg' },
        { label: 'Maven', icon: 'devicon/maven/maven-original.svg' },
        { label: 'CI/CD', icon: 'custom/CI' },
        { label: 'Git', icon: 'devicon/git/git-original.svg' },
        { label: 'Linux', icon: 'devicon/linux/linux-original.svg' },
        { label: 'Grafana', icon: 'devicon/grafana/grafana-original.svg' },
      ],
    },
    {
      name: 'AI and Agentic Systems',
      items: [
        { label: 'PyTorch', icon: 'devicon/pytorch/pytorch-original.svg' },
        { label: 'LangChain', icon: 'custom/LC' },
        { label: 'LangGraph', icon: 'custom/LG' },
        { label: 'LLMs', icon: 'custom/LLM' },
        { label: 'Vision-Language Models', icon: 'custom/VLM' },
        { label: 'RAG', icon: 'custom/RAG' },
        { label: 'MCP', icon: 'custom/MCP' },
        { label: 'FAISS', icon: 'custom/FA' },
        { label: 'MLflow', icon: 'custom/ML' },
        { label: 'Agentic AI', icon: 'custom/AI' },
      ],
    },
    {
      name: 'AI Development Tools',
      items: [
        { label: 'Claude Code', icon: 'custom/CC' },
        { label: 'Cursor', icon: 'custom/CU' },
        { label: 'GitHub Copilot', icon: 'custom/GC' },
        { label: 'Codex', icon: 'custom/CX' },
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
