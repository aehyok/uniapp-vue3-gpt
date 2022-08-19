// .lintstagedrc.js
module.exports = {
  '*.js': ['prettier --config .prettierrc.js --write', 'eslint --fix --ext .js'],
  '*.ts': ['prettier --config .prettierrc.js --write', 'eslint --fix --ext .ts'],
  '*.json': 'prettier --config .prettierrc.js --write'
}
