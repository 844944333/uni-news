// 时间格式化
export const parseTime = (time) => {
	// 时间的格式
	const format = '{y}-{m}-{d} {h}:{i}:{s}'
	let date = null
	if (typeof time === 'string') {
		time = parse(time)
	}
	date = new Date(time)
	// 时间对象
	const formatObj = {
		y: date.getFullYear(),
		m: date.getMonth() + 1,
		d: date.getDate(),
		h: date.getHours(),
		i: date.getMinutes(),
		s: date.getSeconds()
	}
	const strTime = format.replace(/{(y|m|d|h|i|s)+}/g, (result, key) => {
		// result: format中与第一个参数相匹配的字符
		// key: format中与第一个参数相匹配的字符的索引
		let value = formatObj[key]
		if (value.length > 0 && value.length < 10) {
			value = '0' + value
		}
		return value
	})
	return strTime
}