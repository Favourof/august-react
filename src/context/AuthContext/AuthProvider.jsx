import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { privateInstance } from "@/lib/axios";
import { useNavigate } from "react-router-dom";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    const isAuthenticated = Boolean(token)

    const logIn = ({ user, token }) => {
        setUser(user || null)
        setToken(token || null)

        if (user || token) {
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
        }
        setLoading(false)
    }

    const logOut = async () => {
        try {
            const res = await privateInstance.get("/auth/logout")
            if (res) {
                console.log("log out successfully");
                setToken(null)
                setUser(null)
                localStorage.clear("token")
                localStorage.clear("user")
            }
        } catch (error) {
            console.log(error.response.data.error);

        }


    }

    const getCurrentUser = async () => {
        console.log("running ......");

        try {
            const response = await privateInstance.get("api/auth/currentUser")
            console.log(response.data.token, "from here.....");


            if (response) {
                // localStorage.setItem("token", response.token)
                await navigate("/home")
            }
        } catch (error) {
            console.log(error.response.data.message);
            await navigate("/login")

        }
    }


    useEffect(() => {
        const savedToken = localStorage.getItem("token")
        const savedUser = localStorage.getItem("user")

        try {
            if (savedToken) {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setToken(savedToken)
            }
            if (savedUser) {
                const preSavedUser = JSON.parse(savedUser)
                setUser(preSavedUser)
            }
            getCurrentUser()

        } catch (error) {
            console.log(error);

        }

        setLoading(false)
    }, [])




    const values = {
        user, token, loading, isAuthenticated, logIn, logOut
    }

    return (<AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>)

}


