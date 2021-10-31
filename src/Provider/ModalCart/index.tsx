import { createContext, ReactNode, useContext, useState } from "react";

interface ModalCartProps {
    children: ReactNode;
}

export const ModalCartContext = createContext({})

export const ModalCartProvider = ({ children }:ModalCartProps) => {
    
    const [openModalCart, setOpenModalCart] = useState(false);
    const handleOpenModalCart = () => setOpenModalCart(!openModalCart);

    return (
        <ModalCartContext.Provider value={{ openModalCart, handleOpenModalCart }}>
            {children}
        </ModalCartContext.Provider>
    )
}

export const useModalCart = () => useContext(ModalCartContext);