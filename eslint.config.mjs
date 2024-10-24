import globals from "globals";
import pluginJs from "@eslint/js";


export default [
    { languageOptions: { globals: globals.node } },
    pluginJs.configs.recommended,
    {
        "env": {
          "node": true,
          "es6": true
        },
        "extends": "airbnb",
        "parserOptions": {
          "ecmaVersion": 2020,
          "sourceType": "module"
        },
        "plugins": [
          "import",
          "node",
          "promise"
        ],
        "rules": {
            "no-console": "off", // Permitir console.log
            "import/prefer-default-export": "off" // Desativar a exigência de exportação padrão
        }
      }
      
];
