<template>
	<view class="detail-comment">
		<view class="comments-content" v-for="item in commentsList" :key="item.comment_id">
			<comments-box @reply="reply" :comments="item"></comments-box>
		</view>
		<view class="add-new-comment" @click="openComment">
			<view class="add-new-content">
				<view class="add-new-btn">
					快来添加新评论吧
				</view>
				<uni-icons class="add-new-icons" type="compose" size="22" color="#f07373"></uni-icons>
			</view>
		</view>
		<u-popup mode="bottom" v-model="show" :mask-close-able="true">
			<view class="popup-wrap">
				<view class="popup-header">
					<text @click="close">取消</text>
					<text @click="submit(value)">发布</text>
				</view>
				<view class="popup-content">
					<textarea v-model="value" placeholder="请输入评论内容" class="popup-textarea" maxlength="200"/>
					<view class="popup-count">
						{{value.length}}/200
					</view>
				</view>
			</view>
		</u-popup>
		<u-back-top :scroll-top="scrollTop" top="600" :icon-style="iconStyle" :duration="500"></u-back-top>
		<!-- 
			只有commentsList的长度大于5的时候才显示组件
			长度为0的时候显示组件
			长度为1-4的之间不显示组件
		 -->
		<uni-load-more v-if="commentsList.length === 0 || commentsList.length > 5" iconType="snow" :status="loading"></uni-load-more>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				article_id: "",
				commentsList: [],
				page: 1,
				pageSize: 10,
				loading: "loading",
				show: false,
				value: '',
				replyFormData: {},
				scrollTop: 0,
				iconStyle: {
					fontSize: '32rpx',
					color: '#2979ff'
				}
			}
		},
		onLoad (query) {
			this.article_id = query.id
			this.getComments()
		},
		// 监听页面上拉
		onReachBottom () {
			// 如果请求回来的数据为0，继续上拉就不在执行下面代码
			if (this.loading === 'noMore') return
			this.page++
			this.getComments()
		},
		methods: {
			reply (e) {
				this.replyFormData = {
					"comment_id": e.comments.comment_id,
					"is_reply": e.is_reply
				}
				if (e.comments.reply_id) {
					this.replyFormData.reply_id = e.comments.reply_id
				}
				this.openComment()
			},
			// 打开评论发布框
			openComment () {
				this.show = !this.show
			},
			close () {
				this.show = !this.show
			},
			// 发布评论
			submit (content) {
				if (!content) {
					uni.showToast({
						title: "评论不能为空!",
						icon: "none"
					})
					return
				}
				this.setUpdateComments({content, ...this.replyFormData})
				this.value = ''
			},
			setUpdateComments (content) {
				const formdata = {
					article_id: this.article_id,
					...content
				}
				this.commentsList = []
				this.page = 1
				this.loading = 'loading'
				console.log(formdata)
				// return
				uni.showLoading()
				this.$api.update_comment(formdata).then(res => {
					uni.$emit('update_comments')
					uni.hideLoading()
					uni.showToast({
						title: "评论发布成功"
					})
					this.getComments()
					this.vlaue = ''
					this.replyFormData = {}
					this.close()
				})
			},
			// 请求评论列表
			getComments () {
				this.$api.get_comments({
					article_id: this.article_id,
					page: this.page,
					pageSize: this.pageSize
				}).then(res => {
					const {data} = res
					// 如果请求回来的数据为0，就不执行下面的代码
					if (data.length === 0) {
						this.loading = 'noMore'
						return 
					}
					// 将前面请求的评论缓存起来
					// 对象复制
					let oldFormData = JSON.parse(JSON.stringify(this.commentsList))
					oldFormData.push(...data)
					this.commentsList = oldFormData
				})
			}
		}
	}
</script>

<style lang="scss">
	.detail-comment {
		padding-bottom: 54px;
	}
	.comments-content {
		padding: 0 15px;
	}
	.popup-wrap {
		background-color: #fff;
		.popup-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 15px;
			box-sizing: border-box;
			height: 50px;
			font-size: 14px;
			color: #666;
			border-bottom: 1px solid #f5f5f5;
		}
		.popup-content {
			width: 100%;
			padding: 15px;
			box-sizing: border-box;
			.popup-textarea {
				height: 200px;
				width: 100%;
				font-size: 14px;
			}
			.popup-count {
				display: flex;
				justify-content: flex-end;
				font-size: 12px;
				color: #999;
			}
		}
	}
	.add-new-comment {
		background-color: #fff;
		border-top: 1px solid #f5f5f5;
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
		.add-new-content {
			display: flex;
			justify-content: center;
			.add-new-btn {
				display: flex;
				align-items: center;
				border: 1px solid #ccc;
				border-radius: 8px;
				color: #999;
				padding: 2px 20px;
				height: 30px;
				font-size: 14px;
			}
			.add-new-icons {
				margin-left: 10px;
				margin-top: 2px;
			}
		}
	}
</style>
