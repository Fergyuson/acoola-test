/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue'
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    from: 'var(--color-primary-from)',
                    to:   'var(--color-primary-to)'
                },
                accent: 'var(--color-accent)'
            },
            backgroundImage: {
                'btn-gradient': 'linear-gradient(90deg, var(--color-primary-from) 0%, var(--color-primary-to) 100%)'
            },
            borderRadius: {
                pill: '9999px'
            }
        }
    },
    plugins: []
}
