/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: "#f0eedd",
                geel: "#f3ba59",
                mint: "#79c2ae",
                leave: "#639c88",
                dirt: "#eab676",
                navy: "#466684",
                salmon: "#ffb7a9",
                tan: "#dcd1b4"

            },
        },
    },
    plugins: [],
};
