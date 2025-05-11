import axios from 'axios';
import SignUp from '../routes/signup';
export const signUpUser = async (signUpData: {fullName:string; phone:string; email: string; password: string }) => {
  return await axios.post(SignUp.Add_User, signUpData);
};
