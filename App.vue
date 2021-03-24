<script>
	export default {
		onLaunch: function() {
			// 在启动应用的时候执行，只执行一次
			this.$api.get_user({
				user_id: "5fe4196206add500011eb071"
			}).then(res => {
				const {data} = res
				this.$store.dispatch("set_userinfo", data)
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import 'uview-ui/index.scss';
	@import '@/components/gaoyia-parse/parse.css';
	@import '@/components/u-parse/u-parse.css';
	/*每个页面公共css */
</style>
