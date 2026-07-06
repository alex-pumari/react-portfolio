import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import storybook from "eslint-plugin-storybook";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

const storybookConfigs = storybook.configs["flat/recommended"];

export default defineConfig([
  { ignores: ["dist"] },

  {
    files: ["**/*.{ts,tsx}"],
    extends: [tseslint.configs.recommended],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      quotes: ["error", "double"],
      semi: ["error", "always"],
    },
  },

  // Temporary workaround for a type incompatibility between
  // eslint-plugin-storybook and ESLint 9's defineConfig().
  // See:
  // - https://github.com/storybookjs/storybook/issues/34468
  // - https://github.com/storybookjs/storybook/issues/32405
  //
  // Remove this cast once the upstream typing issue is fixed.
  ...(storybookConfigs as Parameters<typeof defineConfig>[0][]),
]);
