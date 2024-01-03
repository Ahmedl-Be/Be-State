"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { showToast } from '@/components/UI/Notify';
import {UseUserContext} from '@/services/state/user/userContext';

export const useForm = (initialState, endpoint, successMessage, DirectTo) => {
    const router = useRouter();
    const [formData, setFormData] = useState(initialState);
    const [error, setError] = useState("something went Wrong!");
    const [loading, setLoading] = useState(false);
    const {user,setUserInfo} = UseUserContext()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await fetch(`http://localhost:5000/api/auth/${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
                credentials:'include'
            });
            const data = await res.json();
            if (data.success === false) {
                setError(data.message);
                setLoading(false);
                return;
            }
            setUserInfo(data)
            console.log(user)
            setLoading(false);
            setError(null);
            setFormData(initialState);
            showToast(successMessage, 'success');
            router.push(DirectTo);
        } catch (error) {
            setError(error);
            setLoading(false);
        } finally {
            showToast(error, "warn")
        }
    };

    return {
        formData,
        error,
        loading,
        handleChange,
        handleSubmit,
    };
};
