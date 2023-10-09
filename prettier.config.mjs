/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options & import("@trivago/prettier-plugin-sort-imports").PluginConfig} */
const config = {
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "^~/config/(.*)$",
    "^~/lib/(.*)$",
    "^~/components/ui/(.*)$",
    "^~/components/(.*)$",
    "^~/app/(.*)$",
    "^~/styles/(.*)$",
    "^[./]",
  ],
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};

export default config;
