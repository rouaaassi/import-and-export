
import { ChangeEvent, useState } from 'react';
import { FormDataType, ErrorType } from '../types/formTypes';
import { validateSignUpInputs } from '../utils/validations';
import { loginUser } from '../api/signIn';

export const useSignUpHandlers = () => {
    const [formData, setFormData] = useState<FormDataType>({
        fullName: '',
        phone: '',
        email: '',
        password: '',
        photo: '',
    });

    const [errors, setErrors] = useState<ErrorType>({
        fullName: '',
        phone: '',
        email: '',
        password: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (validateSignUpInputs(formData, setErrors)) {
            try {
                const response = await loginUser(formData);
                console.log('Success:', response.data);
                alert('Registration successful!');
            } catch (error: any) {
                console.error('Error:', error);
                alert('Registration failed!');
            }
        }
    };

    return {
        formData,
        errors,
        handleChange,
        handleSubmit,
    };
};
