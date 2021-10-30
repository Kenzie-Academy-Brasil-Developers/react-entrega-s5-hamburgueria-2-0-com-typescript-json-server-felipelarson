import { ReactNode } from 'react'
import { AuthProvider } from './Auth'

interface ProvidersProps {
    children: ReactNode;
}

export const Provider = ({ children }: ProvidersProps) => {
    return (
        <AuthProvider>
                {children}
        </AuthProvider>
    )
}