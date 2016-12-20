import axios from 'axios';

export function login(email){
  const query = 'https://vote-backend.herokuapp.com/login/';
  return axios.post(query, {
    user: email
  });
}
