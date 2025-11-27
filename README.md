# Post Generator

Transform simple ideas into clean, structured, high-quality LinkedIn posts using AI.
This project analyzes your input, finds the best match among 160+ proven post templates, and generates a polished LinkedIn-ready post in seconds.

A fully responsive web app built with Next.js, TypeScript, Tailwind CSS, and the OpenRouter API.

## Images

<img width="1926" height="960" alt="Image" src="https://github.com/user-attachments/assets/26fc9aaf-9307-46d9-a75f-c14aa1307078" />
<img width="1922" height="957" alt="Image" src="https://github.com/user-attachments/assets/575f356f-e902-4da2-82ea-3124f25db065" />

## Overview

Post Generator allows users to type a rough idea, then automatically turns it into a well-written LinkedIn post.
The `/postGenerator` page sends the text to the backend `/api/postGenerator` endpoint, which uses the best-fit template and returns a fully structured LinkedIn post.

## Features

* Converts raw ideas into polished LinkedIn posts
* Selects from 160+ post templates automatically
* Clean, minimal, cream-based UI design
* Fully responsive layout for mobile and desktop
* Markdown rendering with react-markdown
* One-click copy functionality
* `/api/postGenerator` POST endpoint powered by OpenRouter

## Tech Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS v4
* React Markdown
* Node.js 18+
* OpenRouter API

## Installation

### Clone the repository

```bash
git clone git@github.com:MohammadTahaTalebi/Post-Generator.git
cd Post-Generator
```

### Install dependencies

```bash
npm install
```

### Run development mode

```bash
npm run dev
```

### Open in browser

```
http://localhost:3000
```

## Environment Variables

Create `.env.local` in the project root:

```env
OPENROUTER_API_KEY=your_api_key_here
```

## Project Structure

```
Post-Generator/
├── app/
│   ├── page.tsx
│   ├── postGenerator/page.tsx
│   ├── api/postGenerator/route.ts
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── PostGenerator.tsx
│
├── public/
│   └── robotHead.png
│
├── .env.local (ignored)
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── next.config.ts
```
