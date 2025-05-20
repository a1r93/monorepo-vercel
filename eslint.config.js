import js from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  customizePerfectionist(perfectionist.configs["recommended-natural"]),
);

function customizePerfectionist(config) {
  return {
    ...config,
    rules: {
      ...config.rules,
      ...customizeRule(config, "perfectionist/sort-imports", {
        groups: ["external", "internal"],
        newlinesBetween: "never",
      }),
      ...customizeRule(config, "perfectionist/sort-union-types", {
        groups: ["unknown", "nullish"],
      }),
    },
  };
}

function customizeRule(config, ruleName, adaptation) {
  const rule = config.rules[ruleName];

  if (!rule) {
    throw new Error(`Cannot find rule: '${ruleName}'`);
  }

  return {
    [ruleName]: [rule[0], { ...rule[1], ...adaptation }],
  };
}
