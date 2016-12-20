let server = 'https://vote-backend.herokuapp.com/';

const env = process.env.NODE_ENV;

if (env !== 'production'){
  server = 'http://localhost:3000';
}

module.exports = server;
