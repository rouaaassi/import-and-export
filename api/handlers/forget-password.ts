import axios from 'axios';
import forgetPassword from '../routes/forget-password';

export const ForgetPass = async (ForgetPassword: { email: string}) => {
    return await axios.post(forgetPassword.Add_request, ForgetPassword);
  };