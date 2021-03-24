<template>
	<view class="tab">
		<scroll-view scroll-x class="tab-scroll">
			<view class="tab-scroll__box">
				<view class="tab-scroll__item" v-for="(item, index) in list" :key="index" @click="clickTab(index)" :class="{active: activeIndex === index}">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<view class="tab-icons" @click="open">
			<u-icon name="setting" size="38"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default () {
					return {}
				}
			},
			tabIndex: {
				type: Number,
				default: 0
			}
		},
		watch: {
			tabIndex (value) {
				this.activeIndex = value
			}
		},
		data() {
			return {
				activeIndex: 0
			};
		},
		methods: {
			clickTab (index) {
				this.activeIndex = index
				this.$emit('tab', index)
			},
			open () {
				uni.navigateTo({
					url: "/pages/home-label/home-label"
				})
			}
		}
	}
</script>

<style lang="scss">
	.tab {
		width: 100%;
		display: flex;
		border-bottom: 1px solid #F5F5F5;
		background-color: #fff;
		box-sizing: border-box;
		.tab-scroll {
			flex: 1;
			overflow: hidden;
			box-sizing: border-box;
			.tab-scroll__box {
				display: flex;
				align-items: center;
				flex-wrap: nowrap;
				height: 45px;
				box-sizing: border-box;
				.tab-scroll__item {
					flex-shrink: 0;
					padding: 0 10px;
					color: #333;
					font-size: 14px;
					&.active {
						color: $mk-base-color;
					}	
				}
			}
		}
		.tab-icons {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 45px;
			&::after {
				content: "";
				position: absolute;
				left: 0;
				top: 12px;
				bottom: 12px;
				width: 1px;
				background-color: #ddd;
			}
		}
	}
</style>
