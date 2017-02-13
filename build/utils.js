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

    let files = glob.sync(srcDir).map((file) => {
        let ext = file.split('.').pop()
        let name = file.split('/').pop().split('.')[0]
        if (ext == 'scss') ext = 'css' // use css dir in static
        let staticDir = `${ext}/${name}`
        Object.assign(entry, {[staticDir]: file})
    })

    return entry
} 
