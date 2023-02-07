/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["@remix-run/eslint-config", "@remix-run/eslint-config/node"],
  "plugins": [
    "react",
    "simple-import-sort"
],
  rules: {
    "no-mixed-spaces-and-tabs": "off",
    "capitalized-comments": "off",
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          // Packages `react` related packages come first.
          ["^react", "^@?\\w"],
          // Internal packages.
          ["^(@|components)(/.*|$)"],
          // Side effect imports.
          ["^\\u0000"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ["^.+\\.?(css)$"]
        ]
      }
    ],
  "simple-import-sort/exports": "error"
  }
};
