import "./globals.css";

export const metadata = {
    title: "Anan | Portfolio",
    description: "Anan Li's Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='bg-cream'>
                {children}
            </body>
        </html>
    );
}
