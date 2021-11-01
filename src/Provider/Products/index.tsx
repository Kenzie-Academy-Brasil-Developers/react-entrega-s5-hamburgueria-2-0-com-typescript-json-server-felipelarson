import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import api from '../../services/api'

interface ProductsProps {
    children: ReactNode;
    // id: number;
    // name: string;
    // category: string;
    // price: number;
    // userId: number;
}

export const ProductsContext = createContext({})

export const ProductsProvider = ({ children }: ProductsProps) => {

    const [listProducts, setListProducts] = useState<ProductsProps[]>([])

    const getAllProducts = () => {
        api
            .get('/products')
            .then(res => setListProducts(res.data))
            .catch(console.log)
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <ProductsContext.Provider value={{ listProducts, getAllProducts }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext);