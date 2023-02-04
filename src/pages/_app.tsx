import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import { AuthProvider } from "@/context/AuthContext";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <main className={poppins.className}>
                <Component {...pageProps} />
            </main>
        </AuthProvider>
    );
}
