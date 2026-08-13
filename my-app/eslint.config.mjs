// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import angular from "angular-eslint";

export default tseslint.config(
    {
        ignores: ["projects/**/*"],
    },
    {
        files: ["**/*.ts"],
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommended,
            ...angular.configs.tsRecommended,
        ],
        processor: angular.processInlineTemplates,
        languageOptions: {
            parserOptions: {
                project: ["tsconfig.json", "cypress/tsconfig.json"],
                createDefaultProgram: true,
            },
        },
        rules: {
            "@angular-eslint/component-selector": ["error", {
                prefix: "app",
                style: "kebab-case",
                type: "element",
            }],
            "@angular-eslint/directive-selector": ["error", {
                prefix: "app",
                style: "camelCase",
                type: "attribute",
            }],
        },
    },
    {
        files: ["**/*.html"],
        extends: [
            ...angular.configs.templateRecommended,
        ],
        rules: {},
    },
);
