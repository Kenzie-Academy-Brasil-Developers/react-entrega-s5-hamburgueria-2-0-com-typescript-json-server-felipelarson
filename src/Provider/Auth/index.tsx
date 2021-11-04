import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom"
import api from "../../services/api";

export const AuthContext = createContext({});

interface AuthProps {
  children: ReactNode;
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
        JSON.stringify(localStorage.setItem("@kenzie_hamburguer_token", response.data.accessToken));
        JSON.stringify(localStorage.setItem("@kenzie_hamburguer_user_id", response.data.user.id))
        setAuthToken(response.data.accessToken);
        history.push("/dashboard");
      })
      .catch((err: any) => console.log(err));
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