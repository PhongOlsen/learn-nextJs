import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AuthProvider from "../src/components/AuthProvider";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

function MyApp({Component, pageProps}: AppProps) {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={true} />
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </QueryClientProvider>
    )
}

export default MyApp
