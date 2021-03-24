<template>
	<view class="feedback">
		<view class="feedback-title">
			意见反馈：
		</view>
		<view class="feedback-content">
			<textarea class="feedback-content__textarea" v-model="content" placeholder="请输入您要反馈的问题" />
		</view>
		<view class="feedback-title">
			反馈图片：
		</view>
		<!-- 九宫格图片 -->
		<view class="feedback-image-box">
			<view class="feedback-image__item" v-for="(item, index) in imgList" :key="index">
				<view class="close-icon" @click="delImg(index)">
					<uni-icons type="closeempty" color="#fff" size="18"></uni-icons>
				</view>
				<view class="image-box">
					<image :src="item.url" mode="aspectFill"></image>
				</view>
			</view>
			<view v-if="imgList.length < 6" class="feedback-image__item" @click="addImg">
				<view class="image-box">
					<uni-icons class="feedback-image__icon" type="plusempty" size="50" color="#eee"></uni-icons>
				</view>
			</view>
		</view>
		<button @click="submit" type="primary" class="feedback-btn">提交反馈意见</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: [],
				content: ''
			}
		},
		methods: {
			delImg (index) {
				this.imgList.splice(index, 1)
			},
			addImg () {
				const count = 6 - this.imgList.length
				uni.chooseImage({
					count: count,		// 每次选择图片的数量, H5不会受到选择图片数量的限制
					// 回调函数中的this指向uni.chooseImage，应使用箭头函数，或者在外部声明this的临时变量_this
					success: (res) => {
						const tempFilePaths = res.tempFilePaths
						tempFilePaths.forEach((item, index) => {
							// 解决H5不会受到选择图片数量的限制问题
							if (index < count) {
								this.imgList.push({
									url: item
								})
							}
						})
					}
				})
			},
			async submit () {
				let imagesPath = []
				uni.showLoading()
				// 采用同步的方法上传，不然网络出问题就会出现不知道上传的是那个文件
				for (let i = 0; i < this.imgList.length; i++) {
					let filePath = this.imgList[i].url
					filePath = await this.uploadFiles(filePath)		
					imagesPath.push(filePath)
					console.log(filePath)					// 打印顺序 2
				}
				// console.log(imagesPath)						// 打印顺序 3
				this.updateFeedback({
					content: this.content, 
					feedbackImages: imagesPath,
				})
			},
			async uploadFiles (filePath) {					
				// uni提供上传文件的API
				const result = await uniCloud.uploadFile({
					filePath: filePath,
					cloudPath: filePath
				})
				console.log(result)							// 打印顺序 1
				return result.fileID
			},
			// 上传反馈意见
			updateFeedback ({content, feedbackImages}) {
				this.$api.update_feedback({
					content,
					feedbackImages
				}).then(res => {
					uni.hideLoading()
					uni.showToast({
						title: "意见反馈成功"
					})
					setTimeout(() => {
						uni.switchTab({
							url: "../tabbar/my/my"
						})
					}, 2000)
				}).catch(() => {
					uni.hideLoading()
					uni.showToast({
						title: "意见反馈成功",
						icon: "none"
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.feedback-content {
		margin: 15px;
		padding: 10px;
		box-sizing: border-box;
		border: 1px solid #666;
		border-radius: 4px;
		.feedback-content__textarea {
			color: #666;
			width: 100%;
			height: 150px;
			font-size: 12px;
			box-sizing: border-box;
		}
	}
	.feedback-title {
		margin: 15px;
		margin-bottom: 0;
		font-size: 14px;
		color: #666;
	}
	// 九宫格图片布局
	.feedback-image-box {
		display: flex;
		flex-wrap: wrap;
		padding: 10px;
		.feedback-image__item {
			position: relative;
			width: 33.33%;
			height: 0;
			padding-bottom: 33.33%;
			// border: 1px solid red;
			box-sizing: border-box;
			.close-icon {
				position: absolute;
				right: 0;
				top: 0;
				z-index: 2;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 22px;
				height: 22px;
				background-color: #ff5a5f;
				border-radius: 50%;
			}
			.image-box {
				display: flex;
				justify-content: center;
				align-items: center;
				position: absolute;
				top: 5px;
				left: 5px;
				right: 5px;
				bottom: 5px;
				border-radius: 5px;
				overflow: hidden;
				border: 1px solid #eee;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
		.feedback-image__icon {
			width: 40px;
			height: 40px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 40px;
		}
	}
	.feedback-btn {
		margin: 0 15px;
		padding: 4px 0;
		font-size: 14px;
	}
</style>
