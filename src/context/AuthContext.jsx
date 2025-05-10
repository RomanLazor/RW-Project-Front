import {createContext, useEffect, useState} from "react";

const API_URL = process.env.REACT_APP_API_URL;

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const verifyUser = async () => {
        try {
            const res = await fetch(`${API_URL}/api/users/verify`, {
                method: "GET",
                credentials: "include",
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message);
            }

            const data = await res.json();
            setUser(data.user);
        } catch (err) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        verifyUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, setLoading, verifyUser}}>
            {children}
        </AuthContext.Provider>
    )
}