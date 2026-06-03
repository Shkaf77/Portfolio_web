# Portfolio Website

A personal portfolio website built with **React** and **Vite**.

## Live Demo

https://portfolio-web-ten-zeta-44.vercel.app/

## About

This project is a personal portfolio website created to present my skills, background and contact information in a clean and minimalistic way.

The website includes a home page with an avatar, separate pages for information about me, skills and contact links. The project uses React Router for page navigation and is deployed with Vercel.

## Features

- Minimalistic and responsive design
- Home page with hero section and avatar
- Separate pages for:
  - About
  - Skills
  - Contact
- React Router navigation
- Custom 404 page
- Mobile-friendly layout
- Deployed on Vercel

## Technologies Used

- React
- Vite
- JavaScript
- HTML
- CSS
- React Router
- Git
- GitHub
- Vercel

## Pages

### Home

The main landing page with a short introduction, avatar and navigation buttons.

### About

A page with short information about me, my interests and development focus.

### Skills

A page that presents my current technical skills.

### Contact

A page with links to contact me by email, GitHub and LinkedIn.

### 404 Page

A custom page that appears when the user opens a route that does not exist.

## Installation

To run this project locally, clone the repository and install dependencies.

```bash
git clone https://github.com/Shkaf77/your-repository-name.git
cd your-repository-name
npm install
```

## Run Locally

```bash
npm run dev
```

After running this command, open the local development URL shown in the terminal.

Usually it looks like this:

```text
http://localhost:5173/
```

## Build

To create a production build:

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Deployment

The project is deployed using **Vercel**.

The deployment is connected to GitHub, so every push to the main branch automatically triggers a new deployment.

## Vercel Configuration

The project includes a `vercel.json` file to support React Router routes on Vercel.

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
```

This allows routes like `/about`, `/skills` and `/contact` to work correctly when opened directly in the browser.

## Contact

- Email: nitsenko.oleksandr@gmail.com
- GitHub: https://github.com/Shkaf77
- LinkedIn: https://linkedin.com/in/oleksandr-nitsenko-0a1400386

## Author

Oleksandr Nitsenko
