<template>
	<view class="home">
		<navbar :isSearch="true" v-model="value" @input="change"></navbar>
		<view class="home-list">
			<view v-if="is_history" class="label-box">
				<view class="label-header">
					<text class="label-title">搜索历史</text>
					<text class="label-clear" @click="clear">清空</text>
				</view>
				<view class="label-content" v-if="historyLists.length > 0">
					<view class="label-content__item" v-for="(item, index) in historyLists" :key="index" @click="openHistory(item)">
						{{item.name}}
					</view>
				</view>
				<view class="no-data" v-else>
					没有搜索历史
				</view>
			</view>
			<scroll-view v-else scroll-y class="list-scroll">
				<uni-load-more v-if="loading" status="loading" iconType="snow"></uni-load-more>
				<view v-if="searchList.length > 0">
					<list-card v-for="(item, index) in searchList" :key="index" :item="item" @click="setHistory"></list-card>
				</view>
				<view v-if="searchList.length === 0 && !loading" class="no-data">
					没有搜索到相关数据
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				is_history: false,
				value: '',
				searchList: [],
				loading: false
			}
		},
		onLoad () {
			this.getSearch()
		},
		computed: {
			...mapState(['historyLists'])
		},
		methods: {
			openHistory (item) {
				this.value = item.name
				this.getSearch(this.value)
			},
			setHistory () {
				this.$store.dispatch('set_history', {
					name: this.value
				})
			},
			clear () {
				this.$store.dispatch('clearHistory')
				uni.showToast({
					title: "清空完成"
				})
			},
			change (value) {
				// 如果value为空不存在
				if (!value) {
					clearTimeout(this.timer)
					this.mark = false
					this.getSearch(value)
					return
				}
				// this.is_history = false
				// 做标记	mark一开始为undefined
				if (!this.mark) {
					this.mark = true
					this.timer = setTimeout(() => {
						this.mark = false
						this.getSearch(value)
					}, 1000)
				}
			},
			getSearch (value) {
				if (!value) {
					this.searchList = []
					this.is_history = true
					return
				}
				this.is_history = false
				this.loading = true
				this.$api.get_search({
					value
				}).then(res => {
					const {data} = res
					console.log(data)
					this.searchList = data
					this.loading = false
				}).catch(err => {
					this.loading = false
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F5F5F5;
	}
	.home {
		display: flex;
		flex-direction: column;
		flex: 1;
		.home-list {
			flex: 1;
			.label-box {
				background-color: #fff;
				margin-bottom: 10px;
				.label-header {
					display: flex;
					justify-content: space-between;
					padding: 10px 15px;
					font-size: 14px;
					color: #666;
					border-bottom: 1px solid #F5F5F5;
					.label-title {
						color: $mk-base-color;
					}
					.label-clear {
						color: #30b33a;
						font-weight: bold;
					}
				}
				.label-content {
					display: flex;
					flex-wrap: wrap;
					padding: 15px;
					padding-top: 0;
					.label-content__item {
						margin: 12px 10px 0 0;
						padding: 2px 10px;
						border: 1px solid $mk-base-color;
						border-radius: 5px;
						font-size: 14px;
						color: #666;
					}
				}
			}
		}
	}
	
	.no-data {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 200px;
		color: #666;
		font-size: 12px;
	}
</style>
