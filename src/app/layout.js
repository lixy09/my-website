import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
    title: "Anan | Portfolio",
    description: "Anan Li's Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <NavBar />
            <body className='bg-cream'>
                {children}
                <Footer />
            </body>
        </html>
    );
}
