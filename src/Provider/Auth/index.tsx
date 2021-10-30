import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom"
import axios from "axios";

export const AuthContext = createContext({});

interface AuthProps {
  children : ReactNode;
}

interface Login {
  email: string;
  password: string;
}

export const AuthProvider = ({ children }: AuthProps) => {
  const history = useHistory();
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("@refLogin_token") || ""
    );
    
    const signIn = (userData: Login) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", userData)
      .then((response) => {
        localStorage.setItem("@refLogin_token", response.data.token);
        setAuthToken(response.data.token);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    localStorage.clear();
    setAuthToken("");
    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ authToken, logout, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);