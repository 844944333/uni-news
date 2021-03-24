<template>
	<view class="list-author">
		<view class="list-author__img">
			<image :src="author.avatar" mode=""></image>
		</view>
		<view class="list-author__content">
			<view class="content-title">
				{{author.author_name}}
			</view>
			<view class="content-des">
				<view class="content-des__label">
					{{author.professional}}
				</view>
				<view class="content-des__info">
					<text>发帖 {{author.article_ids.length}}</text>
					<text>粉丝 {{author.fans_count}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			author: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.list-author {
		display: flex;
		padding: 10px 0;
		margin: 0 10px;
		box-sizing: border-box;
		border-bottom: 1px solid #f5f5f5;
		.list-author__img {
			flex-shrink: 0;
			width: 40px;
			height: 40px;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.list-author__content {
			width: 100%;
			margin-left: 10px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.content-title {
				position: relative;
				padding-right: 30px;
				font-size: 14px;
				color: #333;
				font-weight: bold;
				line-height: 1.2;
			}
			.content-des {
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				.content-des__label {
					color: #666;
				}
				.content-des__info {
					color: #999;
					line-height: 1.5;
					text:first-child {
						margin-right: 10px;
					}
				}
			}
		}
	}
</style>
