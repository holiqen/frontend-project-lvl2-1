import fs from 'fs';
import yaml from 'js-yaml';
import ini from 'ini';
import has from 'lodash';

const formatFromPath = (path) => {
  const defineIndexFormat = path.lastIndexOf('.') + 1;
  const nameFormat = path.substr(defineIndexFormat);
  return nameFormat;
};

const parsers = {
  json: JSON.parse,
  yml: yaml.safeLoad,
  ini: ini.parse,
};

const getParser = (format, content) => format(content);

const parse = (pathToFile) => {
  const contentFromPath = fs.readFileSync(pathToFile, 'utf-8');
  const pathFormat = formatFromPath(pathToFile);
  const format = parsers[pathFormat];
  if (!has(parsers, format)) {
    throw new Error('Unknown format: accept "plain", "nested", "json"');
  }
  return getParser(format, contentFromPath);
};

export default parse;
