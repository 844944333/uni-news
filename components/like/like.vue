<template>
	<view class="icons" @click.stop="likeTap(item._id)">
		<uni-icons :type="like ? 'heart-filled' : 'heart'" size="22" color="#F07373"></uni-icons>
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
		data() {
			return {
				like: false
			};
		},
		watch: {
			item (value) {
				this.like = this.item.is_like
			}
		},
		created () {
			this.like = this.item.is_like
		},	
		methods: {
			likeTap (article_id) {
				this.like = !this.like
				this.setUpdateLike(article_id)
			},
			setUpdateLike (article_id) {
				uni.showLoading()
				this.$api.update_like({
					article_id
				}).then(res => {
					uni.hideLoading()
					uni.showToast({
						title:this.like?'收藏成功':'取消收藏',
						icon:'none'
					})
					uni.$emit('update_article', this.types)
					this.formData.is_like = !this.formData.is_like
					console.log(res);
				}).catch(()=>{
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style lang="scss">
	.icons {
		position: absolute;
		right: 0;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 20px;
		height: 20px;
	}
</style>
