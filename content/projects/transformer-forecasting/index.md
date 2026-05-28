---
title: "Optimizing Transformer-Based Time Series Forecasting"
date: 2025-11-01
summary: "PyTorch optimization work incorporating FlashAttention into Temporal Fusion Transformer training"
tags:
  - Featured
  - AI
  - Data
  - PyTorch
tech_stack:
  - Python
  - PyTorch
  - FlashAttention
  - Temporal Fusion Transformer
featured: true
status: "Featured"
role: "Developer"
duration: "Academic project"
team_size: 1
links:
  - type: github
    url: https://github.com/aneeshKM/Optimizing-Temporal-Fusion-Transformer
    label: GitHub
highlights:
  - "10.9% training time reduction"
  - "42.4% faster inference on A100"
  - "74.7% model size reduction with PTQ"
  - "Transformer-based forecasting optimization"
---

Incorporated FlashAttention into the Temporal Fusion Transformer to improve training efficiency for time series forecasting workloads.

## Overview

The project focused on performance optimization for transformer-based forecasting. By combining FlashAttention, post-training quantization, and Optuna tuning, the training and inference path became more efficient while preserving the forecasting architecture.

## Technical Focus

- PyTorch implementation work for Temporal Fusion Transformer training
- Attention-path optimization using FlashAttention
- Post-training quantization for deployment-friendly model size reduction
- Optuna tuning across batch size and attention-head configurations
- Benchmarking training performance before and after optimization
- Measuring practical runtime and memory improvements on forecasting workloads

## Result

The optimized training path achieved a 10.9% reduction in training time, 42.4% faster inference on A100, and a 74.7% model size reduction through quantization.
