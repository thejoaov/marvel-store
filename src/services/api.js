import axios from 'axios';
import md5 from 'md5';

export function hashGenerator() {
  const hash = md5(
    1 +
      process.env.REACT_APP_MARVEL_PRIV_KEY +
      process.env.REACT_APP_MARVEL_PUB_KEY
  );
  return hash;
}

export const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});
