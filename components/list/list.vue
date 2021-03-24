<template>
	<swiper class="home-swiper" :current="activeIndex" @change="change">
		<swiper-item class="swiper-item" v-for="(item, index) in tab" :key="index">
			<scroll-item :list="listCatchData[index]" :load="load[index]" @loadmore='loadmore'></scroll-item>
		</swiper-item>
	</swiper>
</template>

<script>
	import ScrollItem from '@/components/scroll-item/scroll-item.vue'
	export default {
		props: {
			tab: {
				type: Array,
				default () {
					return []
				}
			},
			activeIndex: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				listCatchData: {},
				load: {},
				pageSize: 10
			};
		},
		components: { ScrollItem },
		watch: {
			tab (value) {
				if (value.length === 0) return
				this.listCatchData = {}
				this.load = {}
				this.getList(this.activeIndex)
			}
		},
		created () {
			uni.$on('update_article', (e) => {
				// console.log(e)
				if (e === 'follow' || e === 'my_article') {
					this.listCatchData = {}
					this.load = {}
					this.getList(this.activeIndex)
				}
			})
		},
		methods: {
			loadmore () {
				if (this.load[this.activeIndex].loading === 'noMore') return
				this.load[this.activeIndex].page++
				this.getList(this.activeIndex)
			},
			change (e) {
				const {current} = e.detail
				this.$emit('change', current)
				// 切换时如果当前的listCatchData的第current项没有值才去请求数据
				if (!this.listCatchData[current] || this.listCatchData[current].length === 0) {
					this.getList(current)
				}
			},
			// 获取文章列表
			getList (current) {
				// 如果load的第current项未定义
				if (!this.load[current]) {
					this.load[current] = {
						page: 1,
						loading: 'loading'
					}
				}
				this.$api.get_list({
					name: this.tab[current].name,
					page: this.load[current].page,
					pageSize: this.pageSize
				}).then(res => {
					const {data} = res
					// 如果请求回来的数据为空(没有数据了)
					if (data.length === 0) {
						let oldLoad = {}
						oldLoad.page = 1
						oldLoad.loading = 'noMore'
						oldLoad.page = this.load[current].page
						this.$set(this.load, current, oldLoad)
						// 强制渲染页面
						this.$forceUpdate()
						return
					}
					// 对请求过的数据做缓存
					let oldList = this.listCatchData[current] || []
					oldList.push(...data)
					// 懒加载
					this.$set(this.listCatchData, current, oldList)
				})
			}
		}
	}
</script>

<style lang="scss">
	.home-swiper {
		height: 100%;
		.swiper-item {
			height: 100%;
			overflow: hidden;
		}
	}
</style>
