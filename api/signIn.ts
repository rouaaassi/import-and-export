import axios from 'axios';

export const loginUser = async (loginData: { email: string; password: string }) => {
  return await axios.post('http://localhost:7000/api/v1.0.0/users/login', loginData);
};
