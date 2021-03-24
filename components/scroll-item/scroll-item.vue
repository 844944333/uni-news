<template>
	<scroll-view scroll-y class="list-scroll" @scrolltolower="loadmore">
		<view>
			<view>
				<list-card v-for="(item, index) in list" :key="index" :item="item"></list-card>
			</view>
			<uni-load-more v-if="list.length === 0 || list.length > 7" :status="load.loading || 'loading'" iconType="snow"></uni-load-more>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default () {
					return []
				}
			},
			load: {
				type: Object,
				default () {
					return {
						loading: "loading"
					}
				}
			}
		},
		onReady () {
			console.log(this.list)
		},
		data() {
			return {
				
			};
		},
		methods: {
			loadmore () {
				this.$emit('loadmore')
			}
		}
	}
</script>

<style lang="scss">
	.list-scroll {
		height: 100%;
	}
</style>
