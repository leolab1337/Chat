import React, {useContext, useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

const AuthContext = React.createContext();


export const useAuth = ()=> useContext(AuthContext);


export const AuthProvider = ({children}) =>{
    const [loading,setLoading] = useState(true);
    const [user,setUser]= useState({});
    const history= useHistory();

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            setUser(user);
            setLoading(false);
            //renavigate us to the chat application
            history.push('/chats');
        })
    },[user,history]);

    const value = {user};

    return(
        <AuthContext.Provider value ={value}>
            {/* if not loading show the children */}
            {!loading && children}
        </AuthContext.Provider>
    )
} 
