'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	
	const {
		user_id,				// 提交意见的用户
		content = '',			// 意见内容
		feedbackImages = []		// 意见图片
	} = event
	
	await db.collection('feedback').add({
		user_id,
		content,
		feedbackImages
	})
	
	//返回数据给客户端
	return {
		code: 200,
		msg: "反馈成功"
	}
};
