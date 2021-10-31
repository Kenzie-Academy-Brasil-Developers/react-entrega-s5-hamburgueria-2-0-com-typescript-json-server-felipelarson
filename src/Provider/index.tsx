import { ReactNode } from 'react'
import { AuthProvider } from './Auth'
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
                    {children}
                </SignUpProvider>
            </ProductsProvider>
        </AuthProvider>
    )
}