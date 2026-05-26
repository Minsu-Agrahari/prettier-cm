# prettier-cm

A Prettier configuration package with opinionated, consistent code formatting rules.

## Installation

```bash
npm install --save-dev prettier prettier-cm
```

Or using yarn:

```bash
yarn add --dev prettier prettier-cm
```

Or using pnpm:

```bash
pnpm add --save-dev prettier prettier-cm
```

## Quick Start

After installation, run the init command to automatically set up Prettier in your project:

```bash
npx prettier-init
```

This command will create the following files in your project root:

- `.prettierrc.cjs` - Prettier configuration file
- `.prettierignore` - Prettier ignore patterns

## Usage

Once initialized, you can run Prettier commands:

```bash
# Format all files
npx prettier --write .

# Check formatting without making changes
npx prettier --check .

# Format specific files
npx prettier --write src/
```

Add scripts to your `package.json` for convenience:

```json
{
    "scripts": {
        "format": "prettier --write .",
        "format:check": "prettier --check ."
    }
}
```

Then run:

```bash
npm run format
npm run format:check
```

## Configuration

The package includes the following opinionated formatting rules:

| Option           | Value    | Description                                                  |
| ---------------- | -------- | ------------------------------------------------------------ |
| `tabWidth`       | 4        | Indentation uses 4 spaces                                    |
| `useTabs`        | false    | Uses spaces instead of tabs                                  |
| `semi`           | true     | Adds semicolons automatically                                |
| `singleQuote`    | true     | Uses single quotes instead of double quotes                  |
| `trailingComma`  | 'es5'    | Adds trailing commas where valid in ES5                      |
| `printWidth`     | 100      | Maximum line length is 100 characters                        |
| `bracketSpacing` | true     | Adds spaces inside object brackets                           |
| `arrowParens`    | 'always' | Always includes parentheses around arrow function parameters |
| `jsxSingleQuote` | true     | Uses single quotes in JSX                                    |
| `endOfLine`      | 'lf'     | Uses Unix line endings (LF)                                  |

### Customizing Configuration

If you need to override the default configuration, edit `.prettierrc.cjs` in your project root after running `prettier-init`.

## Requirements

- **Node.js:** 12.0.0 or higher
- **Prettier:** ^3.0.0

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
