<template>
	<view class="follow">
		<!-- 导航栏 -->
		<view class="follow-tab">
			<view class="follow-tab__box">
				<view class="follow-tab__item" :class="{active: activeIndex === 0}" @click="tab(0)">文章</view>
				<view class="follow-tab__item" :class="{active: activeIndex === 1}" @click="tab(1)">作者</view>
			</view>
		</view>
		<!-- swiper -->
		<view class="follow-list">
			<swiper class="follow-list__swiper" :current="activeIndex" @change="change">
				<swiper-item>
					<scroll-view class="scroll" scroll-y>
						<view>
							<uni-load-more v-if="list.length === 0 && !articleShow" iconType="snow" status="loading"></uni-load-more>
							<list-card types="follow" v-for="item in list" :item="item" :key="item._id"></list-card>
							<view v-if="articleShow" class="no-data">
								当前没有数据
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view class="scroll" scroll-y>
						<view>
							<list-author v-for="item in authorList" :key="item.id" :author="item"></list-author>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 0,
				list: [],
				articleShow: false,
				authorList: []
			}
		},
		onLoad () {
			uni.$on('update_article', (e) => {
				console.log(e)
				this.getFollow()
			})
			this.getFollow()
			this.getAuthor()
			uni.$on('update_author', () => {
				console.log("监听到了")
				this.getAuthor()
			})
		},
		methods: {
			// 获取关注的作者
			getAuthor () {
				this.$api.get_author().then(res => {
					const {data} = res
					this.authorList = data
					// console.log(this.authorList)
				})
			},
			change (e) {
				const {current} = e.detail
				this.activeIndex = current
			},
			tab (index) {
				this.activeIndex = index
			},
			// 更新/请求收藏的文章
			getFollow () {
				this.$api.get_follow().then(res => {
					const {data} = res
					this.list = data
					this.articleShow = this.list.length === 0 ? true : false
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		display: flex;
		height: 100%;
	}
	.follow {
		height: 100%;
		flex: 1;
		box-sizing: border-box;
		padding-bottom: 50px;
		.follow-tab {
			border-bottom: 1px solid #f5f5f5;
			height: 50px;
			padding: 10px 20px;
			.follow-tab__box {
				display: flex;
				width: 100%;
				height: 100%;
				border: 1px solid $mk-base-color;
				border-radius: 4px;
				justify-content: center;
				.follow-tab__item {
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 14px;
					color: #666;
					&:first-child {
						border-right: 1px solid $mk-base-color;
					}
					&.active {
						color: red;
						font-weight: bold;
					}
				}
			}
		}
		.follow-list {
			height: 100%;
			flex: 1;
			box-sizing: border-box;
			.follow-list__swiper {
				height: 100%;
				.scroll {
					height: 100%;
				}
			}
		}
	}
	.no-data {
		padding: 50px;
		font-size: 14px;
		color: #999;
		text-align: center;
	}
</style>
