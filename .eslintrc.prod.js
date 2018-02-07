const base = require('./.eslintrc.js');

module.exports = Object.assign(base, {
  "rules": Object.assign(base.rules, {
    "no-console": 2
  })
});
