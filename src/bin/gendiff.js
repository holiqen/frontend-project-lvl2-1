#!/usr/bin/env node

import program from 'commander';

program
.description('Compares two configuration files and shows a difference.')
.version('0.1.0')
.option('-f, --format [type]', 'output format', (a, b) => console.log(a, b))
.arguments('<firstConfig> <secondConfig>')
.action(function (cmd, env) {
  console.log('dd');
});


program.parse(process.argv);
