import { ReactNode } from 'react';
import './style.css';

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
    return <main className='container'>
        {children}
    </main>
}