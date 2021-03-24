// 批量导出文件
const requireApi = require.context(
	// api的相对路径
	'.',
	// 是否查询子目录
	false,
	// 查询文件的后缀
	/.js$/
)

let module = {}
requireApi.keys().forEach((key, index) => {
	if (key === './index.js') return
	// 获取list.js暴露出来的数据并且将其用作对象合并
	Object.assign(module, requireApi(key))
})
export default module