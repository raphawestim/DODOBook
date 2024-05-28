// _app.tsx
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/auth/AuthContext'; // Ajuste este caminho conforme necessário

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
