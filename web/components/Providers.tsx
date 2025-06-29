'use client';

import { Provider } from 'react-redux';
import { ClerkProvider } from '@clerk/nextjs';
import { store } from '@/store/store';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ClerkProvider>
      <Provider store={store}>
        {children}
      </Provider>
    </ClerkProvider>
  );
} 