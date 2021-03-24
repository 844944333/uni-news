<template>
	<u-popup mode="bottom" v-model="show" :mask-close-able="false">
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
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				value: ''
			};
		},
		methods: {
			// 关闭评论发布框
			close () {
				this.show = !this.show
				// 关闭窗口清空内容
				this.value = ''
			},
			// 打开评论发布框
			openComment () {
				// 打开窗口之前清空内容
				this.value = ''
				this.show = !this.show
			},
			// 发布内容
			submit () {
				if (!this.value) {
					uni.uni.showToast({
						title: '请输入评论内容',
						icon: 'none'
					})
					return 
				}
				this.$emit('submit', this.value)
			}
		}
	}
</script>

<style lang="scss">
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
