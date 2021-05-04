/**
 * APP Module
 */

// StoreOptions, Module
import { Module } from 'vuex'
import IRootState from '@/store/interface'
import { getSidebarCollapsed, setSidebarCollapsed } from '@/utils/storage'

export interface IAppState {
  sidebar: {
    collapsed: boolean
  }
}

const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'

const app: Module<IAppState, IRootState> = {
  namespaced: true,
  state: () => ({
    sidebar: {
      collapsed: getSidebarCollapsed(),
    },
  }),
  mutations: {
    [TOGGLE_SIDEBAR](state, collapsed: boolean) {
      state.sidebar.collapsed = collapsed
    },
  },
  getters: {
    sidebar: (state) => state.sidebar,
  },
  actions: {
    toggleSidebar({ commit }, collapsed: boolean) {
      commit(TOGGLE_SIDEBAR, collapsed)
      setSidebarCollapsed(collapsed)
    },
  },
}

export default app
