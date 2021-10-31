import { createContext, ReactNode, useContext } from "react";
import { useHistory } from "react-router-dom"
import api from "../../services/api";

export const SignUpContext = createContext({});

interface SignUpProps {
  children : ReactNode;
}

interface SignUp {
  email: string,
  password: string,
  name: string,
  age: number
}

export const SignUpProvider = ({ children }: SignUpProps) => {
  const history = useHistory();
    
    const signUp = (userData: SignUp) => {
    api
      .post("/register", userData)
      .then((response: any) => {
        history.push("/login");
      })
      .catch((err:any) => console.log(err));
  };

  return (
    <SignUpContext.Provider value={{ signUp }}>
      {children}
    </SignUpContext.Provider>
  );
};

export const useSignUp = () => useContext(SignUpContext);