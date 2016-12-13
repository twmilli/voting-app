let server = 'heroku-deployed-name.com';

const env = process.env.NODE_ENV;

if (env === 'debug'){
  server = 'https://vote-backend.herokuapp.com/';
}

module.exports = server;
