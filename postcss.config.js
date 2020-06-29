const production = process.env.NODE_ENV === 'production'

module.exports = {
	plugins: [
    require ('postcss-import'),
    require ('autoprefixer'),
    require ('tailwindcss'),
	]
}
