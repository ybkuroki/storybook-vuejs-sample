const path = require('path');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.vue$/,
	loader: [require.resolve('storybook-addon-vue-info/loader')],
	enforce: 'post',
  });
  return config;
};
