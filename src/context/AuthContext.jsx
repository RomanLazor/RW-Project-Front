import {createContext, useEffect, useState} from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const res = await fetch('http://localhost:3001/api/users/verify', {
                    method: 'GET',
                    credentials: 'include' // true?

                });
                console.log(res);

                if (!res.ok) {
                    const errorData = await res.json();       // ✅ Parse the JSON body
                    throw new Error(errorData.message);
                }
                const data = await res.json();
                setUser(data.user);
            } catch {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        verifyUser();
    }, [])

    return (
        <AuthContext.Provider value={{ user, loading, setLoading}}>
            {children}
        </AuthContext.Provider>
    )
}