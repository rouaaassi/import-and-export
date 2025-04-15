import axios from 'axios';

export const signUpUser = async (signUpData: {fullName:string; phone:string; email: string; password: string }) => {
  return await axios.post('http://localhost:7000/api/v1.0.0/users/signup', signUpData);
};
