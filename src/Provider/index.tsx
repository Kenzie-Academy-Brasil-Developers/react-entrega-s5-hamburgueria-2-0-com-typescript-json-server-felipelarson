import { ReactNode } from 'react'
import { AuthProvider } from './Auth'
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
                        {children}
                    </ModalCartProvider>
                </SignUpProvider>
            </ProductsProvider>
        </AuthProvider>
    )
}