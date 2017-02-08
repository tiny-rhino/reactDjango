const getValueTypesInObjs = (arr, key) => { 
	// returns an array of values matching a key of a child object
	let list = []
	arr.filter((obj) => {
		if (!list.includes(obj[key])) list.push(obj[key])
	})
	return list
}

const getObjectsWithValue = (arr, key, value) => {
	// returns an array of objects which contain specific key and value 
	let list = []
	arr.filter((obj) => {
		if (obj[key] == value) list.push(obj)
	})
	return list
}

module.exports.dictArrayByValueInObj = (arr, key) => {
	// takes an array and categorizes it given value type of key
	let obj = {}
	getValueTypesInObjs(arr, key).map((value) => {
		let objectsOfValue = getObjectsWithValue(arr, key, value)
		if (obj[value]) obj[value] = []
			Object.assign(obj, { [value]: objectsOfValue })
	})
	return obj
}
