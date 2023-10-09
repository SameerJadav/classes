import { slateDark } from "@radix-ui/colors";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ...slateDark },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
export default config;
