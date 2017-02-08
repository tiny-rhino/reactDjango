const path = require('path'),
	glob = require('glob')

module.exports.compileEntry = (srcDir) => {
	/**
		Return an object that maps the file name to it's source path.
		{
			'filename': 'path/to/source/file.js'
		}
	**/
	
	let entry = {}

	var files = glob.sync(srcDir).map((file) => {
		let ext = file.split('.').pop()
		let name = file.split('/').pop().split('.')[0]
		Object.assign(entry, {[name]: file})
	})
	
	return entry
}