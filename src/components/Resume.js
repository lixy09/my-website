"use client";

import { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Link from "next/link";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
    const [width, setWidth] = useState(1200);
    const pdfFile = "../public/resume.pdf";

    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            {/* PDF Viewer */}
            <div className="w-full max-w-3xl bg-white shadow-lg p-4 rounded-lg">
                <Document file={pdfFile} className="flex justify-center">
                    <Page pageNumber={1} scale={width > 786 ? 1.2 : 0.6} />
                </Document>
            </div>

            {/* Download Button */}
            <div className="mt-4">
                <Link href={pdfFile} target="_blank" rel="noopener noreferrer">
                    <button className="flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-md shadow hover:bg-blue-600 transition">
                        <AiOutlineDownload size={20} />
                        Download CV
                    </button>
                </Link>
            </div>
        </div>
    );
}
