#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const root = process.cwd();

fs.copyFileSync(
    path.join(__dirname, '../prettier.config.json'),
    path.join(root, '.prettierrc')
);

fs.copyFileSync(
    path.join(__dirname, '../.prettierignore'),
    path.join(root, '.prettierignore')
);

console.log('Created .prettierrc and .prettierignore');