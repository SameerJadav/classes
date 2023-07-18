import { mauveDark } from "@radix-ui/colors"
import { type Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...mauveDark,
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} satisfies Config
