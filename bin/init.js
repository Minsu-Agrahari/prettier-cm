#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const root = process.cwd();

fs.copyFileSync(
    path.join(__dirname, '../prettier.config.cjs'),
    path.join(root, '.prettierrc.cjs')
);

fs.copyFileSync(
    path.join(__dirname, '../.prettierignore'),
    path.join(root, '.prettierignore')
);

console.log('Prettier setup added');
