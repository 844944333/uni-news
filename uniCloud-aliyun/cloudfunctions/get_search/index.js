'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const {
		value
	} = event
	
	
	const list = await db.collection('article')
		.aggregate()
		// 指定不返回或指定只返回字段的数据
		.project({
			content: 0
		})
		.match({
			title: new RegExp(value)
		})
		.end()
	
	
	return {
		code: 200,
		msg: "数据请求成功",
		data: list.data
	}
	
};
