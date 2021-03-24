<template>
	<view>
		<uni-load-more v-if="lists.length === 0 && !articleShow" iconType="snow" status="loading"></uni-load-more>
		<list-card types="my_article" v-for="item in lists" :key="item.id" :item="item"></list-card>
		<view v-if="articleShow" class="no-data">
			您还没有发布的文章！！！
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists: [],
				articleShow: false
			}
		},
		onLoad () {
			this.getMyArticle()
			uni.$on('update_article', (e) => {
				// console.log("my_article", e)
				this.getMyArticle()
			})
		},
		methods: {
			getMyArticle () {
				this.$api.get_my_article().then(res => {
					const {data} = res
					this.lists = data
					this.articleShow = this.lists.length === 0 ? true : false
					console.log(data)
				})
			}
		}
	}
</script>

<style lang="scss">
	.no-data {
		padding: 50px;
		font-size: 14px;
		color: #999;
		text-align: center;
	}
</style>
