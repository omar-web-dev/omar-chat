import { createContext, useEffect, useState } from "react"
import app from "../firebase/firebase.config"
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut} from 'firebase/auth'


export const AuthContext = createContext()
const auth = getAuth(app) 


const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true) 
    const [error, setError] = useState('') 
    const createUserEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    
    const logOut = () => {
        setLoading(true)
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, courantUser => {
            setUser(courantUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe;
        }
    }, [])

    const authInfo = {user, createUserEmailPassword, loading, logOut, error, setError}
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )

    
    
}
export default AuthProvider