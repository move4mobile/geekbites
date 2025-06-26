# Geek Bites

You can find our blog here: https://geekbites.move4mobile.io

## Getting Started

Follow these steps to set up the Geek Bites blog locally and start contributing:

### Prerequisites

First, make sure you have Node.js installed on your system. Eleventy requires Node.js version 8 or newer.

Check your Node.js version:
```bash
node --version
```

### Installation

1. Clone this repository to your local machine
2. Navigate to the project directory
3. Install the project dependencies:

```bash
npm install
```

### Development

To start the development server with live reload:

```bash
npm run start
```

This will:
- Clear the `dist` directory
- Start the Eleventy development server
- Watch for file changes and automatically rebuild
- Serve the site locally (usually at `http://localhost:8080`)

### Building for Production

To build the site for production:

```bash
npm run build
```

This will generate all the static files needed for deployment in the `dist` directory.

### Writing Blog Posts

After setting up the project, you're ready to write your own Geek Bites blog posts! Blog posts are located in the `src/posts` directory and are written in Markdown format.

## Tips

- If you encounter vulnerabilities after running `npm install`, you can run `npm audit fix` to fix them automatically, or `npm audit` for more details
- The site uses Eleventy (11ty) as a static site generator
- Styles are processed with Sass and located in the `src/_sass` directory

Good luck with your blogging!
