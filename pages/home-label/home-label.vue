<template>
	<view>
		<view class="label-box">
			<view class="label-header">
				<text class="label-title">我的标签</text>
				<text class="label-edit" @click="editLabel">{{is_edit?'完成':'编辑'}}</text>
				</text>
			</view>
			<uni-load-more v-if="loading" status="loading" iconType="snow"></uni-load-more>
			<view v-else class="label-content">
				<view class="label-content__item" v-for="(item, index) in labelList" :key="item._id">
					{{item.name}}
					<uni-icons v-if="is_edit" class="icons-close" color="red" type="close" @click="del(index)"></uni-icons>
				</view>
				<view v-if="labelList.length === 0" class="no-data">
					当前没有数据
				</view>
			</view>
		</view>
		
		<view class="label-box">
			<view class="label-header">
				<text class="label-title">推荐标签</text>
			</view>
			<uni-load-more v-if="loading" status="loading" iconType="snow"></uni-load-more>
			<view v-else class="label-content">
				<view class="label-content__item" v-for="(item, index) in list" :key="item._id" @click="add(index)">
					{{item.name}}
				</view>
				<view v-if="list.length === 0" class="no-data">
					当前没有数据
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				labelList: [],		// 我的标签
				list: [],			// 推荐标签
				is_edit: false,
				loading: true
			}
		},
		onLoad () {
			this.getLabel()
		},
		methods: {
			add (index) {
				if (!this.is_edit) return
				this.labelList.push(this.list[index])
				this.list.splice(index, 1)
			},
			del (index) {
				this.list.push(this.labelList[index])
				this.labelList.splice(index, 1)
			},
			editLabel () {
				if (this.is_edit) {
					this.is_edit = false
					this.updateLabel(this.labelList)
				} else {
					this.is_edit = true
				}
			},
			updateLabel (label) {
				let newArrIds = []
				label.forEach(item => {
					newArrIds.push(item._id)
				})
				uni.showLoading()
				this.$api.update_label({
					label: newArrIds
				}).then(res => {
					uni.hideLoading()
					uni.showToast({
						title: "更新成功"
					})
					uni.$emit('labelChange')
				}).catch(() => {
					uni.hideLoading()
				})
			},
			getLabel () {
				this.loading = true
				this.$api.get_label({
					type: 'all'
				}).then(res => {
					const {data} = res
					this.labelList = data.filter(item => item.current)
					this.list = data.filter(item => !item.current)
					this.loading = false
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f5f5f5;
	}
	.label-box {
		background-color: #fff;
		margin-bottom: 10px;
		.label-header {
			padding: 10px 15px;
			font-size: 14px;
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #f5f5f5;
			.label-title {
				color: #666;
			}
			.label-edit {
				font-weight: bold;
				color: #30b33a;
			}
		}
		.label-content {
			padding: 15px;
			padding-top: 0;
			display: flex;
			flex-wrap: wrap;
			.label-content__item {
				padding: 2px 5px;
				margin: 12px 10px 0 0;
				border: 1px solid #666;
				color: #666;
				font-size: 14px;
				border-radius: 4px;
				position: relative;
				.icons-close {
					position: absolute;
					right: -8px;
					top: -8px;
					background-color: #fff;
					border-radius: 50%;
				}
			}
		}
	}
	
	.no-data {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		color: #666;
		padding: 50px 0;
		width: 100%;
	}
</style>
