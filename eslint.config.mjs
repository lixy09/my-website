import { dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);
const { version } = require("eslint-config-next/package.json");

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = compat.extends("next/core-web-vitals").map((config) => {
    const parser = config.languageOptions?.parser;

    // Next 15.1's parser wrapper omits metadata required by ESLint's cache.
    if (!parser || parser.meta) return config;

    return {
        ...config,
        languageOptions: {
            ...config.languageOptions,
            parser: {
                ...parser,
                meta: { name: "eslint-config-next/parser", version },
            },
        },
    };
});

export default eslintConfig;
