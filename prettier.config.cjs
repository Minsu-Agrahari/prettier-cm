module.exports = {
    // Number of spaces used for indentation
    // 4 = every indent level gets 4 spaces
    tabWidth: 4,

    // false = use spaces instead of tab characters (\t)
    // true would insert actual tabs
    useTabs: false,

    // Add semicolons automatically
    // true => const a = 10;
    // false => const a = 10
    semi: true,

    // Use single quotes instead of double quotes
    // true => 'Hello'
    // false => "Hello"
    singleQuote: true,

    // Add trailing commas where valid in ES5
    // Example:
    // {
    //     a: 1,
    //     b: 2,
    // }
    trailingComma: 'es5',

    // Maximum line length before wrapping
    // Long lines break after 100 characters
    printWidth: 100,

    // Add spaces inside object brackets
    // true => { name: 'John' }
    // false => {name:'John'}
    bracketSpacing: true,

    // Always keep parentheses around arrow function parameters
    // true => (x) => x + 1
    // false => x => x + 1
    arrowParens: 'always',

    // Use single quotes inside JSX
    // Example:
    // <Button text='Save' />
    jsxSingleQuote: true,

    // Force Linux line endings
    // lf = Line Feed (\n)
    // Helps avoid Windows/Linux conflicts
    endOfLine: 'lf',

    // File-specific formatting rules
    overrides: [
        {
            // Rules only for Markdown files
            // Example: README.md
            files: '*.md',

            options: {
                // Preserve existing line wrapping in markdown
                // Prevents auto-reformatting paragraphs
                proseWrap: 'preserve',
            },
        },

        {
            // Rules only for JSON files
            files: '*.json',

            options: {
                // Use 4 spaces in JSON files
                tabWidth: 4,
            },
        },

        {
            // Rules only for YAML files
            // Example: docker-compose.yml
            files: '*.yml',

            options: {
                // YAML convention usually uses 2 spaces
                tabWidth: 2,
            },
        },
    ],
};
