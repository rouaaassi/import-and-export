import axios from 'axios';
import Signin from '../routes/signin';

export const loginUser = async (loginData: { email: string; password: string }) => {
  return await axios.post(Signin.Access_User, loginData);
};
