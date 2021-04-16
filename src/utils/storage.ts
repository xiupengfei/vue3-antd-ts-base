
const Storage = globalThis.localStorage

enum ECollapsed { T = 'T', F = 'F' }

// App
const sidebarCollapsedKey = '--sidebar-collapsed--'
export const getSidebarCollapsed = () => Storage.getItem(sidebarCollapsedKey) === ECollapsed.T
export const setSidebarCollapsed = (collapsed: boolean) =>
  Storage.setItem(sidebarCollapsedKey, collapsed ? ECollapsed.T : ECollapsed.F)

const localeKey = '--locale--'
export const getLocale = () => Storage.getItem(localeKey)
export const setLocale = (locale: string) => Storage.setItem(localeKey, locale)

// Auth
const tokenKey = '--token--'
export const getToken = () => Storage.getItem(tokenKey)
export const setToken = (token: string) => Storage.setItem(tokenKey, token)
export const removeToken = () => Storage.removeItem(tokenKey)