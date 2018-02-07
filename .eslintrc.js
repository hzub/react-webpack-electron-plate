const paths = require('./config/paths.js');

module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        config: 'config/webpack.config.dev.js'
      }
    }
  },
  "rules": {
    "react/jsx-filename-extension": "off",
    "no-console": 1
  }
};
