import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Anan | Portfolio",
    description: "Anan Li's Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='bg-cream'>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
