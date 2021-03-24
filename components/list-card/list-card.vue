<template>
	<view @click="open">
		<!-- 基础卡片 -->
		<view class="listcard" v-if="item.mode === 'base'">
			<view class="listcard-img">
				<image :src="item.cover[0]" mode=""></image>
			</view>
			<view class="listcard-content">
				<view class="listcard-content__titel">
					<text>{{item.title}}</text>
					<like :types="types" :item="item"></like>
				</view>
				<view class="listcard-content__des">
					<text class="listcard-content__des-label">{{item.classify}}</text>
					<text class="listcard-content__des-browse">{{item.browse_count}}浏览</text>
				</view>
			</view>
		</view>
		<!-- 多图模式 -->
		<view class="listcard column" v-if="item.mode === 'column'">
			<view class="listcard-content">
				<view class="listcard-content__titel">
					<text>{{item.title}}</text>
					<like :types="types" :item="item"></like>
				</view>
				<view class="listcard-image">
					<view class="listcard-img" v-for="(item, index) in item.cover" :key="index" v-if="index < 3">
						<image :src="item" mode=""></image>
					</view>
				</view>
				<view class="listcard-content__des">
					<text class="listcard-content__des-label">{{item.classify}}</text>
					<text class="listcard-content__des-browse">{{item.browse_count}}浏览</text>
				</view>
			</view>
		</view>
		<!-- 大图模式 -->
		<view class="listcard image" v-if="item.mode === 'image'">
			<view class="listcard-image">
				<image :src="item.cover[0]" mode=""></image>
			</view>
			<view class="listcard-content">
				<view class="listcard-content__titel">
					<text>{{item.title}}</text>
					<like :types="types" :item="item"></like>
				</view>
				<view class="listcard-content__des">
					<text class="listcard-content__des-label">{{item.classify}}</text>
					<text class="listcard-content__des-browse">{{item.browse_count}}浏览</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default () {
					return {}
				}
			},
			types: {
				type: String,
				default: ''
			}
		},
		created () {
			
		},
		data() {
			return {
				
			};
		},
		methods: {
			open () {
				const item = this.item
				this.$emit('click', item)
				const params = {
					_id: item._id,
					title: item.title,
					author: item.author,
					create_time: item.create_time,
					thumbs_up_count: item.thumbs_up_count,
					browse_count: item.browse_count,
					is_author_like: item.is_author_like
				}
				uni.navigateTo({
					url: "/pages/home-detail/home-detail?params=" + JSON.stringify(params)
				})
			}
		}
	}
</script>

<style lang="scss">
	.listcard {
		display: flex;
		margin: 10px;
		padding: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
		box-sizing: border-box;
		.listcard-img {
			flex-shrink: 0;
			width: 60px;
			height: 60px;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.listcard-content {
			padding-left: 10px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 100%;
			.listcard-content__titel {
				position: relative;
				padding-right: 30px;
				font-size: 14px;
				color: #333;
				font-weight: 400;
				line-height: 1.2;
				text {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
			}
			.listcard-content__des {
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				.listcard-content__des-label {
					padding: 0 5px;
					margin-right: 5px;
					border: 1px solid $mk-base-color;
					border-radius: 15px;
					color: $mk-base-color;
				}
				.listcard-content__des-browse {
					color: #999;
					line-height: 1.5;
				}
			}
		}
	
		&.column {
			.listcard-content {
				width: 100%;
				padding-left: 0;
				.listcard-image {
					display: flex;
					justify-content: space-between;
					margin-top: 10px;
					width: 100%;
					height: 70px;
					.listcard-img {
						width: 100px;
						// margin-left: 10px;
						// width: 100%;
						// border-radius: 5px;
						// overflow: hidden;
						&:first-child {
							margin-left: 0;
						}
						image {
							width: 100%;
							height: 100%;
						}
					}
				}
				.listcard-content__des {
					margin-top: 10px;
				}
			}
		}
	
		&.image {
			flex-direction: column;
			.listcard-image {
				width: 100%;
				height: 100px;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.listcard-content {
				padding-left: 0;
				margin-top: 10px;
				.listcard-content__des {
					margin-top: 10px;
				}
			}
		}
	}
</style>
