import { useState } from 'react';
import { FormDataType, ErrorType } from '../types/formTypes';

export const validateSignUpInputs = (formData: FormDataType, setErrors: (errors: ErrorType) => void): boolean => {
    let tempErrors: ErrorType = {
        fullName: '',
        phone: '',
        email: '',
        password: '',
    };
    let isValid = true;

    if (!formData.fullName.trim()) {
        tempErrors.fullName = 'Full name is required.';
        isValid = false;
    }

    if (!formData.phone.trim() || !/^\d{10,15}$/.test(formData.phone)) {
        tempErrors.phone = 'Enter a valid phone number.';
        isValid = false;
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
        tempErrors.email = 'Enter a valid email address.';
        isValid = false;
    }

    if (!formData.password || formData.password.length < 6) {
        tempErrors.password = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
};
   export  const validateLogInInputs = (): boolean => {
          const [emailError, setEmailError] = useState<boolean>(false);
            const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');
            const [passwordError, setPasswordError] = useState<boolean>(false);
            const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>('')
        
        const email = document.getElementById('email') as HTMLInputElement | null;
        const password = document.getElementById('password') as HTMLInputElement | null;
        let isValid = true;

        if (!email || !email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Please enter a valid email address.');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        if (!password || !password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Password must be at least 6 characters long.');
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }

        return isValid;
    };