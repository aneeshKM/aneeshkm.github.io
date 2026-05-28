---
title: ''
summary: ''
date: 2026-01-05
type: landing

sections:
  - block: dev-hero
    id: hero
    content:
      username: me
      greeting: "Hi, I'm"
      show_status: true
      show_scroll_indicator: true
      typewriter:
        enable: true
        prefix: "I build"
        strings:
          - "scalable backend services"
          - "full-stack applications"
          - "AI and data pipelines"
          - "MLOps systems"
        type_speed: 70
        delete_speed: 40
        pause_time: 2500
      cta_buttons:
        - text: View Projects
          url: "#projects"
          icon: arrow-down
        - text: Contact Me
          url: "#contact"
          icon: envelope
    design:
      style: centered
      avatar_shape: circle
      animations: true
      background:
        color:
          light: "#fafafa"
          dark: "#0a0a0f"
      spacing:
        padding: ["6rem", "0", "4rem", "0"]

  - block: portfolio
    id: projects
    content:
      title: "Featured Projects"
      subtitle: "Systems, data, and machine learning work"
      count: 0
      filters:
        folders:
          - projects
      buttons:
        - name: All
          tag: '*'
        - name: Full-Stack
          tag: Full-Stack
        - name: Backend
          tag: Backend
        - name: AI
          tag: AI
        - name: Data
          tag: Data
      default_button_index: 0
    design:
      columns: 3
      background:
        color:
          light: "#ffffff"
          dark: "#0d0d12"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]

  - block: tech-stack
    id: skills
    content:
      title: "Tech Stack"
      subtitle: "Technologies I use to build reliable software systems"
      categories:
        - name: Languages
          items:
            - name: Java
              icon: devicon/java
            - name: Python
              icon: devicon/python
            - name: JavaScript
              icon: devicon/javascript
            - name: TypeScript
              icon: devicon/typescript
            - name: C++
              icon: devicon/cplusplus
            - name: SQL
              icon: hero/circle-stack
        - name: Backend and Data
          items:
            - name: Spring Boot
              icon: devicon/spring
            - name: Node.js
              icon: devicon/nodejs
            - name: Kafka
              icon: devicon/apachekafka
            - name: PostgreSQL
              icon: devicon/postgresql
            - name: MySQL
              icon: devicon/mysql
            - name: MongoDB
              icon: devicon/mongodb
        - name: Frontend
          items:
            - name: React
              icon: devicon/react
            - name: Angular
              icon: devicon/angular
            - name: Tailwind CSS
              icon: devicon/tailwindcss
            - name: HTML5
              icon: devicon/html5
            - name: CSS3
              icon: devicon/css3
        - name: Cloud and MLOps
          items:
            - name: AWS
              icon: devicon/amazonwebservices
            - name: Docker
              icon: devicon/docker
            - name: Git
              icon: devicon/git
            - name: Linux
              icon: devicon/linux
            - name: PyTorch
              icon: devicon/pytorch
            - name: Grafana
              icon: devicon/grafana
    design:
      style: grid
      show_levels: false
      background:
        color:
          light: "#f5f5f5"
          dark: "#08080c"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]

  - block: resume-experience
    id: experience
    content:
      title: Experience
      date_format: Jan 2006
      items:
        - title: Research Assistant
          company: NYU Langone Health
          company_url: https://nyulangone.org/
          company_logo: ''
          location: New York City, NY
          date_start: '2025-07-01'
          date_end: ''
          description: |2-
            * Fine-tuned 3+ vision-language models on a curated dataset of 50k+ clinical images
            * Built reproducible preprocessing and benchmarking pipelines with AUROC, F1, and per-class accuracy evaluation
            * Benchmarked PEFT strategies across model architectures and identified configurations improving AUROC by 3-5%
        - title: Course Assistant
          company: New York University
          company_url: https://www.nyu.edu/
          company_logo: ''
          location: New York City, NY
          date_start: '2025-09-01'
          date_end: ''
          description: |2-
            * Mentored 100+ graduate students across AI workflows, GPU profiling, and performance bottleneck analysis
            * Supported coursework in high performance machine learning, artificial intelligence, and LLM-based generative AI systems
            * Guided students on PyTorch profiling, CUDA concepts, vLLM, RAG workflows, quantization, and cloud deployment
        - title: Application Development Analyst
          company: Accenture
          company_url: https://www.accenture.com/
          company_logo: ''
          location: Mumbai, India
          date_start: '2024-03-01'
          date_end: '2024-08-01'
          description: |2-
            * Engineered 5+ Spring Boot microservices for core banking transactions including deposits, mandates, and remittance processing
            * Integrated Kafka for real-time processing of 100,000+ daily transactions
            * Designed Jenkins CI pipelines and reduced average build-to-deploy cycle time by 25%
            * Achieved 90%+ code coverage with JUnit and Mockito test suites
        - title: Application Development Associate
          company: Accenture
          company_url: https://www.accenture.com/
          company_logo: ''
          location: Mumbai, India
          date_start: '2022-09-01'
          date_end: '2024-03-01'
          description: |2-
            * Led 8 developers building a scalable task-tracking platform with Alpine.js, Tailwind CSS, Java, Spring Boot, AWS, and PostgreSQL
            * Implemented Kanban workflows, story creation, and estimation features for cross-functional sprint planning
            * Reduced frontend bundle size by 20% and cut initial page load time by 1.8s through a custom Webpack setup
    design:
      columns: '1'
      background:
        color:
          light: "#ffffff"
          dark: "#0d0d12"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]

  - block: contact-info
    id: contact
    content:
      title: Get In Touch
      subtitle: "Open to software engineering, full-stack, backend, and ML systems roles"
      text: |-
        I am interested in building reliable software systems across backend services, full-stack products, and AI/data workflows.
        Reach out by email or connect with me on LinkedIn.
      email: aneeshkmokashi@gmail.com
      autolink: true
    design:
      columns: '1'
      background:
        color:
          light: "#ffffff"
          dark: "#0d0d12"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]

  - block: cta-card
    content:
      title: "Open to Opportunities"
      text: |-
        I am currently open to **software engineering**, **full-stack**, **backend**, and **ML systems** opportunities.

        Let's connect and discuss how I can contribute to your team.
      button:
        text: 'Download Resume'
        url: uploads/resume.pdf
        new_tab: true
    design:
      card:
        css_class: 'bg-gradient-to-br from-primary-200 via-primary-100 to-secondary-200 dark:from-primary-600 dark:via-primary-700 dark:to-secondary-700'
        text_color: dark
      background:
        color:
          light: "#f5f5f5"
          dark: "#08080c"
      spacing:
        padding: ["4rem", "0", "6rem", "0"]
---
