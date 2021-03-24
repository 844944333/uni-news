'use strict';
const db = uniCloud.database()
const $ = db.command.aggregate
exports.main = async (event, context) => {
	const {
		user_id,
		article_id
	} = event
	
	// 获取用户的信息
	let userinfo = await db.collection('user').doc(user_id).get()
	userinfo = userinfo.data[0]
	// 获取文章信息
	let article = await db.collection('article')
		.aggregate()
		.addFields({
			// 该文章的作者是否被当前用户关注
			is_author_like: $.in(['$author.id', userinfo.author_likes_ids]),
			// 该文章是否被当前用户收藏
			is_like: $.in(['$_id', userinfo.article_likes_ids]),
			// 该文章是否被当前用户点赞
			is_thumbs_up_article: $.in(['$_id', userinfo.thumbs_up_article_ids])
		})
		.match({
			// 返回指定的
			_id: article_id
		})
		.project({
			coments: 0
		})
		.end()
	
	
	//返回数据给客户端
	return {
		code: 200,
		smg: "数据请求成功",
		data: article.data[0]
	}
};
