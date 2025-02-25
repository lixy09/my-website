"use client";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Intro from "@/components/Intro";


export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <Intro />
            <Footer />
        </div>
    );
}
