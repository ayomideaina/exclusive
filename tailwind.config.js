export default {
  theme: {
    extend: {
      colors: {
        // Primary
        primary: "#DB4444",
        "primary-dark": "#C73A3A",
        secondary: "#00FF66",

        // Base
        white: "#FFFFFF",
        black: "#000000",

        // Text
        text: {
          primary: "#000000",
          secondary: "#7D8184",
          muted: "#999999",
          light: "#FAFAFA",
        },

        // Backgrounds
        background: {
          DEFAULT: "#FFFFFF",
          dark: "#000000",
          light: "#F5F5F5",
          muted: "#FAFAFA",
        },

        // Borders
        border: {
          DEFAULT: "#E5E5E5",
          light: "#F0F0F0",
        },

        // Ratings
        rating: "#FFAD33",

        // Status
        success: "#00FF66",
        danger: "#DB4444",

        // Neutral
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E5E5E5",
          400: "#B3B3B3",
          500: "#999999",
          600: "#7D8184",
          700: "#555555",
          800: "#333333",
          900: "#000000",
        },
      },

      borderRadius: {
        none: "0",
        sm: "4px",
        DEFAULT: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        full: "9999px",
      },

      boxShadow: {
        card: "0 2px 10px rgba(0,0,0,.08)",
        hover: "0 8px 24px rgba(0,0,0,.12)",
        dropdown: "0 4px 16px rgba(0,0,0,.10)",
      },
    },
  },
};
