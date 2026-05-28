---
title: "Jitsi Topic Segmentation and Recap MLOps System"
date: 2026-05-01
summary: "Data orchestration, feedback capture, and monitoring pipeline for meeting transcript segmentation and recap generation"
tags:
  - Featured
  - Full-Stack
  - AI
  - MLOps
  - Data
tech_stack:
  - Python
  - PostgreSQL
  - Docker
  - MLflow
  - Grafana
  - Alertmanager
featured: true
status: "Featured"
role: "Developer"
duration: "Academic project"
team_size: 1
links:
  - type: github
    url: https://github.com/aneeshKM/ML-Sys-Ops-Project
    label: GitHub
highlights:
  - "Transcript ingestion and model-ready data transformation"
  - "Human-in-the-loop feedback pipeline"
  - "MLOps monitoring with data quality gates"
---

Built a data orchestration layer for a Jitsi meeting system that turns raw meeting transcripts into structured inputs for topic segmentation and recap generation.

## Overview

The system ingests meeting transcripts, persists workflow state in PostgreSQL, and prepares model-ready data for segmentation and recap workflows. It also captures human corrections and edited recaps so feedback can be reused for model improvement.

## Key Features

- Transcript ingestion and normalization for downstream model workflows
- PostgreSQL-backed workflow state tracking
- Transformation of raw meeting data into model-ready inputs
- Human-in-the-loop feedback persistence for user corrections and edited recaps
- Reusable feedback data for retraining and evaluation
- MLOps monitoring and quality gates for model degradation detection

## Technical Implementation

The project uses Python for orchestration and data transformation, PostgreSQL for durable workflow state, Docker for reproducible deployment, and MLflow for experiment and artifact tracking. Grafana and Alertmanager provide monitoring coverage for data quality and model health signals.

## Impact

The pipeline creates a practical foundation for improving meeting intelligence workflows over time. User feedback becomes structured training data instead of isolated edits, and monitoring makes model quality regressions easier to detect.
