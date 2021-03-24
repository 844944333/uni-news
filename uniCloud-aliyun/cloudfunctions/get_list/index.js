'use strict';
const db = uniCloud.database()
const $ = db.command.aggregate
exports.main = async (event, context) => {
	const {
		user_id = "5fe4196206add500011eb070",
		name,
		page = 1,
		pageSize = 10
	} = event
	let matchObj = {}
	if (name !== '全部') {
		matchObj = {
			classify: name
		}
	}
	// 获取当前用户的点赞的文章
	const userinfo = await db.collection('user').doc(user_id).get()
	const article_likes_ids = userinfo.data[0].article_likes_ids
	
	const list = await db.collection('article')
		.aggregate()
		// 追加字段
		.addFields({
			// $_id在字段article_likes_ids中是否存在
			// $_id: 当前表的id字段
			is_like: $.in(['$_id', article_likes_ids]) 
		})
		// 返回指定的数据
		.match(matchObj)
		// 指定不返回或指定只返回字段的数据
		.project({
			content: 0
		})
		// 每次请求跳过的数据的数量
		.skip(pageSize * (page - 1))
		// 每次请求数据的数量
		.limit(pageSize)
		.end()
	
	
	return {
		code: 200,
		msg: "数据请求成功",
		data: list.data
	}
	
};
