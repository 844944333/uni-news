'use strict';
const db = uniCloud.database()
const $ = db.command.aggregate
exports.main = async (event, context) => {
	
	const {
		user_id,		// 当前用户的id
		article_id,		// 文章的id
		page = 1,
		pageSize = 10
	} = event
	
	const list = await db.collection('article')
		.aggregate()
		.match({
			_id: article_id
		})
		.unwind('$comments')
		.project({
			// 指定返回的字段
			_id: 0,
			comments: 1
		})
		.replaceRoot({
			newRoot: "$comments"
		})
		// 每次要跳过的数据量
		.skip(pageSize * (page - 1))
		// 每次请求的数据量
		.limit(pageSize)
		.end()
	
	//返回数据给客户端
	return {
		code: 200,
		msg: "数据请求成功",
		data: list.data
	}
};
