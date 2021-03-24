<template>
	<view>
		<view class="my-header">
			<view class="my-header__bg">
				<image :src="userinfo.avatar" mode=""></image>
			</view>
			<view class="my-header__logo">
				<view class="my-header__logo-img">
					<image :src="userinfo.avatar" mode=""></image>
				</view>
				<view class="my-header__logo-name">
					{{userinfo.author_name}}
				</view>
			</view>
			<view class="my-header__info">
				<view class="my-header__info-item">
					<text class="my-header__info-item-title">被关注</text>
					<text>{{userinfo.follow_count}}</text>
				</view>
				<view class="my-header__info-item">
					<text class="my-header__info-item-title">粉丝</text>
					<text>{{userinfo.fans_count}}</text>
				</view>
				<view class="my-header__info-item">
					<text class="my-header__info-item-title">积分</text>
					<text>{{userinfo.integral_count || 0}}</text>
				</view>
			</view>
		</view>
		<view class="my-content">
			<u-cell-group>
				<u-cell-item @click="open" class="cell-item" :border-bottom="false" icon="setting-fill" title="我的文章"></u-cell-item>
				<view class="cell-item-bg"></view>
				<u-cell-item @click="feedBack" class="cell-item" icon="integral-fill" title="意见反馈"></u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				userData: []
			}
		},
		computed: {
			...mapState(['userinfo'])
		},
		onLoad () {
			// console.log(this.userinfo)
		},
		methods: {
			open () {
				uni.navigateTo({
					url: "/pages/my-article/my-article"
				})
			},
			feedBack () {
				uni.navigateTo({
					url: "/pages/feedback/feedback"
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f5f5f5;
	}
	.my-header {
		padding-bottom: 15px;
		position: relative;
		// 背景模糊效果
		.my-header__bg {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			filter: blur(6px);
			opacity: .3;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.my-header__logo {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding-top: 30px;
			.my-header__logo-img {
				width: 60px;
				height: 60px;
				border-radius: 50%;
				overflow: hidden;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.my-header__logo-name {
				margin-top: 10px;
			}
		}
		.my-header__info {
			display: flex;
			justify-content: center;
			margin-top: 15px;
			.my-header__info-item {
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				font-size: 12px;
				color: #666;
				.my-header__info-item-title {
					font-size: 14px;
					color: #333;
				}
			}
		}
	}
	.my-content {
		margin-top: 20px;
		.cell-item-bg {
			height: 10px;
			background-color: #F5F5F5;
		}
		.cell-item {
			height: 50px;
		}
	}
</style>
