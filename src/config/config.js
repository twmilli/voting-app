let server = 'heroku-deployed-name.com';

const env = process.env.NODE_ENV;

if (env === 'debug'){
  server = 'http://localhost:3000';
}

module.exports = server;
