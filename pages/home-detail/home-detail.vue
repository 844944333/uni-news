<template>
	<view class="detail">
		<view class="detail-title">
			<text>{{formData.title}}</text>
		</view>
		<view class="detail-header">
			<view class="detail-header__logo">
				<image :src="formData.author.avatar" mode=""></image>
			</view>
			<view class="detail-header__content">
				<view class="detail-header__content-title">
					{{formData.author.author_name}}
				</view>
				<view class="detail-header__content-info">
					<text>{{formData.create_time}}</text>
					<text>{{formData.browse_count}}浏览</text>
					<text>{{formData.thumbs_up_count}}赞</text>
				</view>
			</view>
			<u-button class="detail-header__button" type="success" :ripple="true" shape="square" @click="follow(formData.author.id)">{{formData.is_author_like ? "已关注" : "关注"}}</u-button>
		</view>
		<view class="detail-content">
			<view class="detail-html">
				<u-parse :content="formData.content" :noData="noData"></u-parse>
			</view>
			<view class="detail-comment">
				<view class="comment-title">
					最新评论
				</view>
				<view class="comment-content" v-for="item in commentsList" :key="item.comment_id">
					<comments-box @reply="reply" :comments="item"></comments-box>
				</view>
			</view>
		</view>
		<view class="detail-bottom">
			<view @click="openComment" class="detail-bottom_input">
				<text>谈谈你的看法</text>
				<uni-icons type="compose" size="16" color="#f07373"></uni-icons>
			</view>
			<view class="detail-bottom_icons">
				<view class="detail-bottom_icons-box" @click="open">
					<uni-icons type="chat" size="22" color="#F07373"></uni-icons>
				</view>
				<view class="detail-bottom_icons-box" @click="clickHeart(formData._id)">
					<uni-icons :type="formData.is_like ? 'heart-filled' : 'heart'" size="22" color="#F07373"></uni-icons>
				</view>
				<view class="detail-bottom_icons-box" @click="thumbsup(formData._id)">
					<uni-icons :type="formData.is_thumbs_up_article?'hand-thumbsup-filled':'hand-thumbsup'" size="22" color="#F07373"></uni-icons>
				</view>
			</view>
		</view>
		<u-popup mode="bottom" v-model="show" :mask-close-able="true">
			<view class="popup-wrap">
				<view class="popup-header">
					<text @click="close">取消</text>
					<text @click="submit">发布</text>
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
	</view>
</template>

<script>
	import uParse from '@/components/u-parse/u-parse.vue'
	import commentsBox from '@/components/comments-box/comments-box.vue'
	export default {
		data() {
			return {
				formData: {},
				noData: '<p style="text-align: center; color:#666;">详情加载中...</p>',
				show: false,
				value: '',
				scrollTop: 0,
				iconStyle: {
					fontSize: '32rpx',
					color: '#2979ff'
				},
				commentsList: [],		// 评论的列表
				replyFormData: {}
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		components: {
			uParse,
			commentsBox
		},
		onLoad (query) {
			this.formData = JSON.parse(query.params)
			this.getDetail()
			this.getComments()
			uni.$on('update_comments', () => {
				console.log("监听到了")
				this.getComments()
				this.getDetail()
			})
		},
		methods: {
			// 打开评论列表
			open () {
				uni.navigateTo({
					url: "../detail-comments/detail-comments?id=" + this.formData._id
				})
			},
			// 点赞文章
			thumbsup (article_id) {
				this.setUpdateThumbSup(article_id)
			},
			// 点赞文章
			setUpdateThumbSup (article_id) {
				uni.showLoading()
				this.$api.update_thumbsup({
					article_id
				}).then(res => {
					uni.hideLoading()
					uni.showToast({
						title: res.msg
					})
					this.getDetail()
					console.log(res)
				})
			},
			// 收藏文章
			clickHeart (article_id) {
				this.setUpdateLike(article_id)
			},
			// 收藏文章
			setUpdateLike (article_id) {
				uni.showLoading()
				this.$api.update_like({
					article_id
				}).then(res => {
					uni.hideLoading()
					this.formData.is_like = !this.formData.is_like
					uni.$emit('update_article', 'follow')
					uni.showToast({
						title: this.formData.is_like ? "收藏文章成功" :	"取消收藏" 
					})
					console.log(res)
					console.log(this.formData)
					this.getDetail()
				}).catch(() => {
					uni.hideLoading()
				})
			},
			// 关注作者
			follow (author_id) {
				this.setUpdateAuthor(author_id)
				// console.log(author_id)
			},
			// 关注作者
			setUpdateAuthor (author_id) {
				// console.log(author_id)
				uni.showLoading()
				this.$api.update_author({
					author_id
				}).then(res => {
					uni.hideLoading()
					this.formData.is_author_like = !this.formData.is_author_like
					uni.showToast({
						title: this.formData.is_author_like ? "关注成功" : "取消关注"
					})
					uni.$emit("update_author")
					// console.log(res)
					// console.log(author_id)
				})
			},
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
			// 关闭评论发布框
			close () {
				this.show = !this.show
				// this.value = ''
			},
			// 打开评论发布框
			openComment () {
				this.value = ''
				this.show = !this.show
			},
			// 发布评论
			submit () {
				if (!this.value) {
					uni.showToast({
						title: "评论不能为空!",
						icon: "none"
					})
					return
				}
				this.setUpdateComments({content: this.value, ...this.replyFormData})
			},
			setUpdateComments (content) {
				const formdata = {
					article_id: this.formData._id,
					...content
				}
				this.commentsList = []
				// console.log(formdata)
				// return
				uni.showLoading()
				this.$api.update_comment(formdata).then(res => {
					uni.hideLoading()
					uni.showToast({
						title: "评论发布成功"
					})
					this.replyFormData = {}
					this.getComments()
					this.close()
				})
			},
			// 请求评论内容
			getComments () {
				this.$api.get_comments({
					article_id: this.formData._id
				}).then(res => {
					const {data} = res
					this.commentsList = data
					this.vlaue = ''
					this.replyFormData = {}
				})
			},
			// 获取文章详情
			getDetail () {
				this.$api.get_detail({
					article_id: this.formData._id
				}).then((res) => {
					const {data} = res
					this.formData = data
				})
			}
		}
	}
</script>

<style lang="scss">
	.detail {
		padding: 15px 0;
		padding-bottom: 54px;
	}
	.detail-title {
		padding: 0 15px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.detail-header {
		margin-top: 10px;
		padding: 15px;
		display: flex;
		.detail-header__logo {
			flex-shrink: 0;
			border-radius: 50%;
			overflow: hidden;
			width: 40px;
			height: 40px;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.detail-header__content {
			width: 100%;
			padding-left: 10px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.detail-header__content-title {
				font-size: 14px;
				color: #333;
			}
			.detail-header__content-info {
				color: #999;
				font-size: 12px;
				text {
					margin-right: 10px;
				}
			}
		}
		.detail-header__button {
			height: 30px;
			font-size: 12px;
			flex-shrink: 0;
			color: #fff;
		}
	}
	.detail-content {
		min-height: 500px;
		margin-top: 20px;
		.detail-html {
			padding: 0 15px;
		}
		.detail-comment {
			margin-top: 30px;
			.comment-title {
				padding: 10px 15px;
				font-size: 14px;
				color: #666;
				border-bottom: 1px solid #f5f5f5;
			}
			.comment-content {
				padding: 0 15px;
				border-top: 1px solid #eee;
			}
		}
	}
	.detail-bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		height: 44px;
		width: 100%;
		border-top: 1px solid #f5f5f5;
		display: flex;
		align-items: center;
		background-color: #fff;
		box-sizing: border-box;
		.detail-bottom_input {
			width: 100%;
			height: 30px;
			border: 1px solid #ddd;
			border-radius: 4px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 10px;
			margin-left: 10px;
			text {
				font-size: 14px;
				color: #999;
			}
		}
		.detail-bottom_icons {
			display: flex;
			flex-shrink: 0;
			padding: 0 10px;
			.detail-bottom_icons-box {
				width: 44px;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
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
</style>
