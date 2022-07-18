# Learning Journal

<!-- link to live site -->

A web app that allows users to log the topics they’re interested in and make journal entries
as they learn about each topic. Once logged in, a user can create new topics, add new entries,
read and edit existing entries or even delete them.

### Tech Stack

- [Sveltekit](https://kit.svelte.dev)
- [TailwindCSS](https://tailwindcss.com)
- [Prisma](https://prisma.io)

## Run Locally (Contribute to project)

#### Requirements

- [Node.js](https://nodejs.org) installed
- Git
- Basic understanding of:
  - HTML,
  - CSS,
  - JavaScript (optional but a plus)
  - TailwindCSS (optional but a plus)
  - Svelte (a huge plus)

### Fork the repo

Click on the `fork` button at the top of the browser.

### Clone the repo

```bash
git clone https://github.com/your-username/learning-journal.git
```

### Install dependencies

```bash
cd learning-journal

npm install
```

### Initialize prisma

> Initiliaze prisma for database connection, you can change the `sqlite` to any database you like or remove the `--datasource-provider` and use PostgreSQL as default database.

```bash
# Initialize a database
npx prisma init --datasource-provider sqlite


# Generate prisma client
npx prisma generate
```

### Run the project

```bash
npm run dev
```

> You can preview the production build with `npm run preview`.
