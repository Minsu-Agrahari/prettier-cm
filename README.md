# prettier-cm

A simple CLI tool to quickly set up Prettier configuration in any project.

`prettier-cm` creates a ready-to-use `.prettierrc.cjs` and `.prettierignore` file in your project root with a single command.

## Why?

Setting up Prettier manually in every project means repeatedly creating:

- `.prettierrc`
- `.prettierignore`

and copying the same configuration again and again.

`prettier-cm` automates this process.

## Features

- One command setup
- Creates `.prettierrc.cjs`
- Creates `.prettierignore`
- Full-stack friendly configuration
- No manual copy-paste

## Installation

No installation required.

Run directly using:

```bash
npx prettier-cm
```

Or install globally:

```bash
npm install -g prettier-cm
```

Then run:

```bash
prettier-cm
```

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
│── .prettierrc.cjs
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

## Generated Configuration

### `.prettierrc.cjs`

Includes:

- 4 space indentation
- Single quotes
- Semicolons
- Trailing commas
- JSX support
- Markdown / JSON / YAML overrides

### `.prettierignore`

Includes common ignores such as:

```text
node_modules
dist
build
.next
coverage
```

## License

MIT
