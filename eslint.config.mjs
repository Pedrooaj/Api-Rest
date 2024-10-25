import js from "@eslint/js";
import airbnb from "eslint-config-airbnb-base";

// Extraindo as regras do Airbnb
const airbnbRules = airbnb.rules;

export default [
  js.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      import: {}, // Declara o plugin, mas não precisa de configurações adicionais
    },
    rules: {
      ...airbnbRules, // Inclui as regras do Airbnb
      // Suas regras personalizadas, se necessário
    },
  },
];
