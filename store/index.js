import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		historyLists: uni.getStorageSync("__history") || [],
		article_is_like: false,
		userinfo: uni.getStorageSync('__userinfo') || {}
	},
	actions: {
		// 获取用户信息
		set_userinfo ({commit}, userinfo) {
			uni.setStorageSync("__userinfo", userinfo)
			commit("SET_USERINFO", userinfo)
		},
		// 将搜索历史添加到存储
		set_history ({commit, state}, history) {
			let list = state.historyLists
			list.unshift(history)
			uni.setStorageSync('__history', list)
			commit('SET_HISTORY_LISTS', list)
		},
		// 将搜索历史从存储中清除
		clearHistory ({commit}) {
			uni.removeStorageSync('__history')
			commit("CLEAR_HISTORY")
		},
		changeArticleIsLike ({commit}) {
			commit("CHANGE_ARTICLE_IS_LIKE")
		}
	},
	mutations: {
		SET_USERINFO (state, userinfo) {
			state.userinfo = userinfo
		},
		SET_HISTORY_LISTS (state, history) {
			state.historyLists = history
		},
		CLEAR_HISTORY (state) {
			state.historyLists = []
		},
		CHANGE_ARTICLE_IS_LIKE (state) {
			state.article_is_like = !state.article_is_like
		}
	}
})