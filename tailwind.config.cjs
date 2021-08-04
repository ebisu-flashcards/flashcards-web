const {tailwindExtractor} = require("tailwindcss/lib/lib/purgeUnusedStyles");

module.exports = {
  mode: "jit",
    purge: {
        content: ["./src/**/*.{html,js,svelte,ts}"],
        options: {
            defaultExtractor: (content) => [
                // If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
                ...tailwindExtractor(content),
                // Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
                ...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
                    ([_match, group, ..._rest]) => group
                ),
            ],
            keyframes: true,
        },
    },
    theme: {
        boxShadow: {
            sm: "0.25rem 0.25rem rgba(107, 114, 128)",
            md: "0.5rem 0.5rem rgba(107, 114, 128)",
            DEFAULT: "1.5rem 1.5rem #5a5c69",
        },
        color: {
        },
        extend: {
            keyframes: {
                swim: {
                    "0%, 100%": {
                        transform: "rotate(0deg) translateY(0)",
                    },
                    "25%": {
                        transform: "rotate(-5deg) translateY(-25%)",
                    },
                    "50%": {
                        transform: "rotate(0deg) translateY(-50%)",
                        // animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
                    },
                    "75%": {
                        transform: "rotate(5deg) translateY(-25%)",
                    },
                },
                barberpole: {
                    from: {
                        backgroundPosition: "0 0"
                    },
                    to: {
                        backgroundPosition: "60px 30px"
                    }
                },
            },
            animation: {
                swim: "swim 1s linear infinite",
                barberpole: "barberpole 0.5s linear infinite",
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['odd'],
            animation: ['hover'],
            zIndex: ['hover']
        },
    },
    plugins: [],
};
