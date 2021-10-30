import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom"
import api from "../../services/api";

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
    () => localStorage.getItem("@kenzie_hamburguer_token") || ""
    );
    
    const signIn = (userData: Login) => {
    api
      .post("/login", userData)
      .then((response: any) => {
        localStorage.setItem("@kenzie_hamburguer_token", response.data.accessToken);
        setAuthToken(response.data.accessToken);
        history.push("/");
      })
      .catch((err:any) => console.log(err));
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