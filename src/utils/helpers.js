import axios from 'axios';
import server from '../config/config';

export function login(email){
  const query = server + 'sendtoken';
  return axios.post(query, {
    user: email
  });
}
