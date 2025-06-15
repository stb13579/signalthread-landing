## Setup

1. Copy `.env.example` to `.env` and fill in your Supabase credentials.
2. Run `npm install` to install dependencies.
3. Use `npm run dev` to start the development server.
4. Use the theme toggle in the navigation bar to switch between light and dark modes.

## GitHub Pages

This project is configured to deploy automatically to **GitHub Pages** from the
`main` branch. On every push to `main`, a workflow builds the site with Vite and
publishes the contents of the `dist` directory. The deployed site will be
available at:

```
https://<your-github-username>.github.io/signalthread-landing/
```

Make sure GitHub Pages is enabled for the repository and uses the `GitHub Pages`
workflow as its source.
