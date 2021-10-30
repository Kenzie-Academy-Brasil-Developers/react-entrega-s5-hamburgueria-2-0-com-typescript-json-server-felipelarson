import { ReactNode } from 'react'
import { AuthProvider } from './Auth'
import { ProductsProvider } from './Products'

interface ProvidersProps {
    children: ReactNode;
}

export const Provider = ({ children }: ProvidersProps) => {
    return (
        <AuthProvider>
            <ProductsProvider>
                {children}
            </ProductsProvider>
        </AuthProvider>
    )
}