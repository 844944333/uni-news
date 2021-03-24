'use strict';
const db = uniCloud.database()
const $ = db.command.aggregate
exports.main = async (event, context) => {
	
	const {
		user_id,
		type
	} = event
	
	let matchObj = {}
	if (type !== 'all') {
		matchObj = {
			current: true
		}
	}
	
	let userinfo = await db.collection('user').doc(user_id).get()
	userinfo = userinfo.data[0]
	let label = await db.collection('label')
		.aggregate()
		// 追加字段
		.addFields({
			// ifNull([userinfo.label_ids, []]): 如果userinfo.label_ids不存在 null undefined就返回一个空数组
			// 当前表的id是否在unserinfo.label_ids或者空数组中
			current: $.in(['$_id', $.ifNull([userinfo.label_ids, []])])
		})
		.match(matchObj)
		.end()
	
	//返回数据给客户端
	return {
		code: 200,
		msg: "数据请求成功",
		data: label.data
	}
};
