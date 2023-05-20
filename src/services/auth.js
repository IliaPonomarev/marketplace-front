import axios from 'axios';
const { REACT_APP_API_HOST, REACT_APP_API_PORT } = process.env;

const instance = axios.create({
  baseURL: `${REACT_APP_API_HOST}:${REACT_APP_API_PORT}`,
});

const login = async (email, password) => {
  const response = await instance.post('/api/v1/auth/email/login', { email, password });

  if (response.status === 200) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const getMe = async ({ token }) => {
  const response = await instance.get('/api/v1/auth/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const AuthService = {
  login, getMe
};