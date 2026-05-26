<!-- ![prettier-cm Banner](https://raw.githubusercontent.com/Minsu-Agrahari/prettier-cm/main/assets/Banner.png) -->
![prettier-cm Banner](./assets/tokoyoStyleBanner.png)

# prettier-cm

## Introduction

`prettier-cm` is a lightweight CLI tool that quickly sets up Prettier configuration in any project.

With a single command, it generates:

- `.prettierrc`
- `.prettierignore`

directly inside your project root.

---

## Why prettier-cm?

Setting up Prettier manually for every project usually means:

- Creating configuration files repeatedly
- Copying the same formatting rules
- Reusing ignore configurations manually

`prettier-cm` automates this setup and provides a consistent starting configuration instantly.

---

## Features

- One command setup
- Creates `.prettierrc`
- Creates `.prettierignore`
- Full-stack friendly configuration
- No manual copy-paste
- Ready to use in any project

---

## Installation

No installation required.

Run directly:

```bash
npx prettier-cm
```

Or install globally:

```bash
npm install -g prettier-cm
```

Run:

```bash
prettier-cm
```

---

## Usage

Inside your project:

```bash
npx prettier-cm
```

Before:

```text
project/
│── src/
│── package.json
```

After:

```text
project/
│── src/
│── package.json
│── .prettierrc
│── .prettierignore
```

Install Prettier:

```bash
npm install -D prettier
```

Format files:

```bash
npx prettier --write .
```

Example workflow:

```bash
npx prettier-cm
npm install -D prettier
npx prettier --write .
```

---

## Generated Configuration

### `.prettierrc`

Includes:

- 4 space indentation
- Single quotes
- Semicolons
- Trailing commas
- JSX support
- Markdown / JSON / YAML overrides

### `.prettierignore`

Includes common ignores:

```text
node_modules
dist
build
.next
coverage
```

---

## License

MIT

