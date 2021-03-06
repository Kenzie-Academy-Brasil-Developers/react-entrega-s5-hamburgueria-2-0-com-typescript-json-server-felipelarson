import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useAuth } from '../Auth';
import api from "../../services/api"

interface CartProps {
    children: ReactNode;
}

interface ProductDataProps {
    id: number;
    title: string;
    type: string;
    price: number;
    userId: number;
    quantity: number;
}

export const CartContext = createContext({});

export const CartProvider = ({ children }: CartProps) => {
    const [cart, setCart] = useState<ProductDataProps[]>([]);
    const { authToken }: any = useAuth()


    const getAllCart = () => {
        api
            .get("/cart/", {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                }
            })
            .then((res) => {
                res.data.length !== 0 && setCart(res.data)
            })
            .catch(err => console.log(err.message))
    }

    useEffect(() => {
        getAllCart()
        // eslint-disable-next-line
    }, [])

    const addToCart = (item: ProductDataProps) => {
        const id = JSON.parse(localStorage.getItem('@kenzie_hamburguer_user_id') || "")
        item["userId"] = id
        item["quantity"] === undefined ? item["quantity"] = 1 : item["quantity"] += 1

        api
            .post("/cart/", item, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                }
            })
            .then((_) => {
                // setCart([...cart, res.data])
                getAllCart()
                // toast.success("Produto adicionado com sucesso!");
            })
            .catch(err => console.log(err.message))
    };

    const addQuantity = (id: number, item: any) => {
        api
            .put(`/cart/${id}`, item, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                }
            })
            .then((res) => {
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
                // toast.success("Produto diminuido com sucesso!");
            })
            .catch()
    }

    const removeFromCart = (id: number) => {
        api
            .delete(`/cart/${id}/`, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            })
            .then((_) => {
                // toast.success("Produto removido com sucesso!");
                getAllCart()
            });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, addQuantity, subQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useListCart = () => useContext(CartContext);