"use client"
import { createContext, useState, useEffect,useContext } from 'react';
const UserContext = createContext();

const getInitialState = () => {
    let user = null
    if (typeof window !== 'undefined') {
        user = sessionStorage.getItem('user')
    }
    return user ? JSON.parse(user) : null;
}

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(getInitialState);
    useEffect(() => {
        if(user){
            sessionStorage.setItem('user', JSON.stringify(user));
        }
    }, [user]);

    const setUserInfo = (info) => {
        setUser(info)
    }

    const removeUser = () => {
        setUser(null);
        sessionStorage.removeItem('user');
    }

    return (
        <UserContext.Provider value={{ user,setUserInfo,removeUser}}>
            {children}
        </UserContext.Provider>
    );
};

const useUserContext = () => {
    return useContext(UserContext);
};

export {useUserContext as UseUserContext, UserContextProvider };