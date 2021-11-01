import { createContext, ReactNode, useContext, useState } from 'react';

export const CartContext = createContext({});

interface CartProps {
    children: ReactNode;
}

export const CartProvider = ({ children }:CartProps) => {
    const [cart, setCart] = useState<any[]>([]);

    const addToCart = (item:any) => {
        const plusSameCart = cart.filter(elm => item.id === elm.id)
        if (plusSameCart.length !== 0) {
            plusSameCart[0]["quantity"] += 1
            setCart(plusSameCart)
            // toast.success("Bebida adicionada para formatura")
        } else {
            item["quantity"] = 1
            setCart([...cart, item])
            // toast.success("Bebida adicionada para formatura")
        }
    };

    const removeFromCart = (item:any) => {
        const newCart = cart.filter(
            (itemOnCart) => itemOnCart.name !== item.name
        );
        setCart(newCart);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useListCart = () => useContext(CartContext);