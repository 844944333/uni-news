<template>
	<view class="home">
		<!-- 自定义导航栏 -->
		<navbar></navbar>
		<!-- 选项卡 -->
		<tab :list="tabList" @tab="tab" :tabIndex="tabIndex"></tab>
		<!-- list内容 -->
		<view class="home-list">
			<list :tab="tabList" :activeIndex="activeIndex" @change="change"></list>
		</view>
	</view>
</template>

<script>
	// 解决小程序中清除缓存请求接口数据（vuex）报错的问题
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				tabList: [],
				activeIndex: 0,
				tabIndex: 0
			}
		},
		computed: {
			...mapState(['userinfo'])
		},
		watch: {
			userinfo (value) {
				this.getLabel()
			}
		},
		onLoad() {
			uni.$on('labelChange', () => {
				this.tabIndex = []
				this.activeIndex = 0
				this.tabIndex = 0
				this.getLabel()
			})
		},
		methods: {
			getLabel () {
				this.$api.get_label().then(res => {
					const {data} = res
					data.unshift({
						name: "全部"
					})
					this.tabList = data
				})
			},
			tab (index) {
				this.activeIndex = index
			},
			change (current) {
				this.activeIndex = current
				this.tabIndex = current
			}
		}
	}
</script>

<style lang="scss">
	page {
		display: flex;
		height: 100%;
	}
	.home {
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;
		.home-list {
			flex: 1;
			box-sizing: border-box;
		}
	}
</style>
