import { ReactNode } from 'react'
import { AuthProvider } from './Auth'
import { CartProvider } from './Cart'
import { ModalCartProvider } from './ModalCart'
import { ProductsProvider } from './Products'
import { SignUpProvider } from './SignUp'

interface ProvidersProps {
    children: ReactNode;
}

export const Provider = ({ children }: ProvidersProps) => {
    return (
        <AuthProvider>
            <ProductsProvider>
                <SignUpProvider>
                    <ModalCartProvider>
                        <CartProvider>
                            {children}
                        </CartProvider>
                    </ModalCartProvider>
                </SignUpProvider>
            </ProductsProvider>
        </AuthProvider>
    )
}