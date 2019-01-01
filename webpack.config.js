const path = requre('path')

module.exports = {
		mode: 'development',
		entry: './js/entry.js',
		output: {
				filename: 'bundle.js',
				path: path.join(__dirname, 'public/js'),
		},
}
