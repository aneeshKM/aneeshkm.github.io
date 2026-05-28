---
title: ''
summary: ''
date: 2026-01-05
type: landing

sections:
  - block: dev-hero
    id: home
    content:
      username: me
      greeting: "Hi, I'm"
      show_status: true
      show_scroll_indicator: true
      scroll_target: "#work-experience"
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
        - text: Work Experience
          url: "#work-experience"
          icon: briefcase
        - text: Projects
          url: "#projects"
          icon: code-bracket
        - text: Contact
          url: "#contact"
          icon: envelope
        - text: Download Resume
          url: "/uploads/resume.pdf"
          icon: document-arrow-down
    design:
      style: centered
      avatar_shape: circle
      animations: true
      background:
        color:
          light: "#fafafa"
          dark: "#0a0a0f"
      spacing:
        padding: ["6rem", "0", "3rem", "0"]

  - block: tech-stack
    id: skills
    content:
      title: "Skills"
      subtitle: "Core technologies across backend engineering, full-stack development, AI, data, and MLOps"
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
        - name: AI, Cloud, and Tools
          items:
            - name: PyTorch
              icon: devicon/pytorch
            - name: AWS
              icon: devicon/amazonwebservices
            - name: Docker
              icon: devicon/docker
            - name: Git
              icon: devicon/git
            - name: Linux
              icon: devicon/linux
            - name: Grafana
              icon: devicon/grafana
    design:
      style: grid
      show_levels: false
      background:
        color:
          light: "#ffffff"
          dark: "#0d0d12"
      spacing:
        padding: ["3rem", "0", "3rem", "0"]

  - block: markdown
    id: education
    content:
      title: "Education"
      text: |-
        - **M.S. Computer Engineering, New York University**
          2024-2026. GPA: 3.87/4.00. Coursework includes Machine Learning, Deep Learning, Data Structures, and Generative AI / LLMs.

        - **B.Tech. Information Technology, University of Mumbai**
          2018-2022. GPA: 8.64/10.00.
    design:
      background:
        color:
          light: "#f5f5f5"
          dark: "#08080c"
      spacing:
        padding: ["3rem", "0", "4rem", "0"]

  - block: markdown
    id: work-experience
    content:
      title: "Work Experience"
      text: |-
        ### Research Assistant, NYU Langone Health
        **Jul 2025 - Present | New York City, NY**

        - Fine-tuned 3+ vision-language models on a curated dataset of 50k+ clinical images.
        - Built reproducible preprocessing and benchmarking pipelines with AUROC, F1, and per-class accuracy evaluation.
        - Benchmarked PEFT strategies across model architectures and identified configurations improving AUROC by 3-5%.

        ### Course Assistant, New York University
        **Sep 2025 - Present | New York City, NY**

        - Mentored 100+ graduate students across AI workflows, GPU profiling, and performance bottleneck analysis.
        - Supported coursework in high performance machine learning, artificial intelligence, and LLM-based generative AI systems.
        - Guided students on PyTorch profiling, CUDA concepts, vLLM, RAG workflows, quantization, and cloud deployment.

        ### Application Development Analyst, Accenture
        **Mar 2024 - Aug 2024 | Mumbai, India**

        - Engineered 5+ Spring Boot microservices for core banking transactions including deposits, mandates, and remittance processing.
        - Integrated Kafka for real-time processing of 100,000+ daily transactions.
        - Designed Jenkins CI pipelines and reduced average build-to-deploy cycle time by 25%.
        - Achieved 90%+ code coverage with JUnit and Mockito test suites.

        ### Application Development Associate, Accenture
        **Sep 2022 - Mar 2024 | Mumbai, India**

        - Led 8 developers building a scalable task-tracking platform with Alpine.js, Tailwind CSS, Java, Spring Boot, AWS, and PostgreSQL.
        - Implemented Kanban workflows, story creation, and estimation features for cross-functional sprint planning.
        - Reduced frontend bundle size by 20% and cut initial page load time by 1.8s through a custom Webpack setup.
    design:
      background:
        color:
          light: "#ffffff"
          dark: "#0d0d12"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]

  - block: portfolio
    id: projects
    content:
      title: "Projects"
      subtitle: "Featured GitHub repositories and selected software, AI, data, and MLOps work"
      count: 0
      filters:
        folders:
          - projects
      buttons:
        - name: All
          tag: '*'
        - name: Featured
          tag: Featured
        - name: AI
          tag: AI
        - name: Backend
          tag: Backend
        - name: Full-Stack
          tag: Full-Stack
        - name: Data
          tag: Data
      default_button_index: 0
      archive:
        enable: false
    design:
      columns: 3
      fallback_icon: code-bracket
      background:
        color:
          light: "#f5f5f5"
          dark: "#08080c"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]

  - block: contact-info
    id: contact
    content:
      title: Contact
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
        padding: ["4rem", "0", "6rem", "0"]
---
