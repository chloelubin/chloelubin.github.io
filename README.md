# Personal Website

A modern, responsive personal website built with Next.js, TypeScript, and Tailwind CSS. The design blends Spotify's clean aesthetic with a modern, playful energy.

## Features

- 🎨 **Custom Theme**: Blends Spotify green (#1DB954) with a colorful, playful palette
- 📱 **Fully Responsive**: Works beautifully on all devices
- ⚡ **Fast Performance**: Built with Next.js for optimal performance
- 🎯 **Smooth Scrolling**: Seamless navigation between sections
- 🌈 **Modern Animations**: Subtle animations and transitions
- ♿ **Accessible**: Built with accessibility in mind

## Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Personal introduction and skills showcase
- **Projects**: Portfolio of featured projects
- **Contact**: Contact form and social media links

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to GitHub Pages

1. Build the project:
```bash
npm run build
```

2. The `out` directory will contain the static files ready for deployment

3. Push the `out` directory contents to the `gh-pages` branch, or configure GitHub Actions to automatically deploy

### GitHub Actions Setup (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## Customization

- Update personal information in the component files
- Modify colors in `tailwind.config.js`
- Add your projects in `components/Projects.tsx`
- Update social links in `components/Contact.tsx`

## Tech Stack

- **Next.js 14**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **React**: UI library

## License

MIT

