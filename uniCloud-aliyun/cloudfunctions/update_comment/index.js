'use strict';
const db = uniCloud.database()
// const $ = db.command.aggregate
const dbCmd = db.command		
exports.main = async (event, context) => {
	
	const {
		user_id,			// 评论者id
		article_id,			// 文章id
		content,			// 评论的内容
		comment_id = '',			// 评论的id
		is_reply = false,		// 是否是子回复
		reply_id = ''				// 子回复的id
	} = event
	
	// 获取评论者信息
	let user = await db.collection('user').doc(user_id).get()
	user = user.data[0]
	// 获取文章信息及所有评论
	const article = await db.collection('article').doc(article_id).get()
	const comments = article.data[0].comments
	
	// 评论者信息及评论信息
	let commentObj = {
		comment_id: getId(5),							// 评论的id
		comment_content: content,				// 评论的内容
		create_time: new Date().getTime(),		// 评论的时间
		is_reply: is_reply,						// 区分是主回复还是子回复
		author: {								// 评论者的信息
			author_id: user._id,				// 评论者的id
			author_name: user.author_name,		// 评论者的名称
			avatar: user.avatar,				// 评论者头像
			professional: user.professional		// 专业
		},
		replys: []								// 别人对该评论的评论
	}
	
	// 评论文章
	if (comment_id === '') {
		commentObj.replys = []
		commentObj = dbCmd.unshift(commentObj)
		console.log(commentObj.author)
	} else {
		// 对文章的评论做回复
		// 获取评论的索引
		let commentIndex = comments.findIndex(item => item.comment_id === comment_id)
		
		let commentAuthor = ''
		if (is_reply) {
			// 子回复
			commentAuthor = comments[commentIndex].replys.find(item => item.comment_id === reply_id)
		} else {
			// 主回复
			commentAuthor = comments.find(item => item.comment_id === comment_id)
		}
		commentAuthor = commentAuthor.author.author_name
		commentObj.to = commentAuthor
		
		// 更新回复信息
		commentObj = {
			[commentIndex]: {
				replys: dbCmd.unshift(commentObj)
			}
		}
		
		/*
			let obj = {
				arr: [{name: 1}, {name: 2}]
			}
			将arr的第二项的name改为3
			await db.collection('article').doc(article_id).update({
				arr: {
					1: {
						name: 3
					}
				}
			})
		
		*/
		
	}
	
	await db.collection('article').doc(article_id).update({
		comments: commentObj
	})
	
	//返回数据给客户端
	return {
		code: 200,
		msg: '评论更新成功'
	}
};

// 生成随机id
function getId (length) {
	return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36)
}