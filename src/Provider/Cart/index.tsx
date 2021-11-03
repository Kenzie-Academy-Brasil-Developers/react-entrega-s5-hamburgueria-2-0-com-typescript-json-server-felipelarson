import { createContext, ReactNode, useContext, useState } from 'react';
import { useAuth } from '../Auth';
import api from "../../services/api"


interface CartProps {
    children: ReactNode;
}

interface ProductDataProps {
    title: string;
    type: string;
    price: number;
    userId: number;
    id: number;
    quantity?: number;
}

export const CartContext = createContext({});

export const CartProvider = ({ children }: CartProps) => {
    const [cart, setCart] = useState<ProductDataProps[]>([]);
    const { authToken }: any = useAuth()
    console.log({ authToken })
    const addToCart = (item: ProductDataProps) => {
        api
            .post("/cart", item, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                }
            })
            .then((res) => {
                console.log(res)
                // toast.success("Produto adicionado com sucesso!");
            })
            .catch()
    };

    const addQuantity = (id: number, item: any) => {
        api
            .post(`/cart/${id}`, item, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                }
            })
            .then((res) => {
                console.log(res.data)
                // toast.success("Produto acrescido com sucesso!");
            })
            .catch()
    }

    const subQuantity = (id: number, item: any) => {
        api
            .post(`/cart/${id}`, item, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                }
            })
            .then((res) => {
                console.log(res)
                // toast.success("Produto diminuido com sucesso!");
            })
            .catch()
    }

    const removeFromCart = (id: number) => {
        api
            .delete(`/cart/${id}`, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            })
            .then(() => {
                // toast.success("Produto removido com sucesso!");
            });
    };

    return (
        <CartContext.Provider value={{ addToCart, addQuantity, subQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useListCart = () => useContext(CartContext);