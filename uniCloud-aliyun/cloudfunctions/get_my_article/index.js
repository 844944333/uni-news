'use strict';
const db = uniCloud.database()
// 聚合操作符
const $ = db.command.aggregate
// 数据库操作符
const dbCmd = db.command
exports.main = async (event, context) => {
	
	const {
		user_id
	} = event
	
	let userinfo = await db.collection('user').doc(user_id).get()
	userinfo = userinfo.data[0]
	
	const lists = await db.collection('article')
		.aggregate()
		.addFields({
			is_like: $.in(['$_id', userinfo.article_likes_ids])
		})
		.match({
			// match中不能使用$
			// 传入一个数组，数组中存在id就返回
			id: dbCmd.in(userinfo.article_ids)
		})
		.end()
	
	
	//返回数据给客户端
	return {
		code: 200,
		msg: "数据请求成功",
		data: lists.data
	}
};
