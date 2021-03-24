<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<!-- 状态栏占位 -->
			<!-- #ifndef MP-ALIPAY -->
			<view :style="{height: statusBarHeight + 'px'}"></view>
			<!-- #endif -->
			<!-- 导航栏内容 -->
			<view class="navbar-content" :style="{width: windowWidth + 'px'}" :class="{search: isSearch}" @click.stop="open">
				<view v-if="isSearch" class="navbar-content__search-icons" @click="back">
					<u-icon name="arrow-left" color="#fff" size="40"></u-icon>
				</view>
				<view v-if="!isSearch" class="navbar-search">
					<!-- 非搜索页 -->
					<view class="navbar-search_icon">
						<uni-icons type="search" size="16" color="#999"></uni-icons>
					</view>
					<view class="navbar-content_text">
						uni-app、vue
					</view>
				</view>
				<view v-else class="navbar-search">
					<!-- 搜索页 -->
					<input type="text" class="navbar-content_text" placeholder="请输入您想要搜索的内容" v-model="val" @input="inputChange" />
				</view>
			</view>
		</view>
		<view :style="{height: statusBarHeight + navBarHeight + 'px'}"></view>
	</view>
</template>

<script>
	export default {
		props: {
			isSearch: {
				type: Boolean,
				default: false
			},
			value: {
				type: [String, Number],
				default: ''
			}
		},
		watch: {
			value (value) {
				this.val = value
			}
		},
		data() {
			return {
				statusBarHeight: 20,
				navBarHeight: 45,
				val: '',
				windowWidth: 375
			};
		},
		created () {
			// 获取手机系统信息
			const info = uni.getSystemInfoSync()
			this.statusBarHeight = info.statusBarHeight
			
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			// 获取胶囊位置
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			// 导航栏高度 = (胶囊底部高度 - 状态栏高度) + (胶囊顶部高度 - 状态栏高度)
			this.navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info.statusBarHeight)
			this.windowWidth = menuButtonInfo.left
			// #endif
			
			// #ifdef MP-ALIPAY
			this.statusBarHeight = 0
			// #endif
		},
		methods: {
			inputChange (e) {
				const {value} = e.detail
				this.$emit('input', value)
			},
			back () {
				uni.switchTab({
					url: "/pages/tabbar/index/index"
				})
			},
			open () {
				if (this.isSearch) return
				uni.navigateTo({
					url: "/pages/home-search/home-search"
				})
					console.log("home")
			}
		}
	}
</script>

<style lang="scss">
	.navbar {
		.navbar-fixed {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;
			width: 100%;
			background-color: $mk-base-color;
			.navbar-content {
				padding: 0 15px;
				height: 45px;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				.navbar-search {
					display: flex;
					align-items: center;
					height: 30px;
					width: 100%;
					padding: 0 10px;
					background-color: #fff;
					border-radius: 30px;
					.navbar-search_icon {
						margin-right: 10px;
					}
					.navbar-content_text {
						font-size: 14px;
						color: #999;
						width: 100%;
					}
				}
				&.search {
					padding-left: 0px;
					.navbar-content__search-icons {
						margin: 0 10px;
					}
					.navbar-search {
						border-radius: 5px;
					}
				}
			}
		}
	}
</style>
