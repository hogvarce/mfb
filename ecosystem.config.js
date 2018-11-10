const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  apps: [
    {
      name: 'build',
      script: 'webpack',
    },
    {
      name: 'server',
      script: 'webpack',
      args: '--config ./webpack.config.production.js',
    },
    {
      name: 'gogo',
      script: 'node',
      args: './dist/server.js',
    },
  ],
};
