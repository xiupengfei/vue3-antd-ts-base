// import { ref, onBeforeUpdate, Ref } from 'vue';
import { useRoute, RouteLocationMatched } from 'vue-router'
// import { AppRouteRecordRaw } from '@/router/types'

const useParentRoutes = (): RouteLocationMatched[] => {
  const route = useRoute()
  return route.matched.filter(matched => matched.name !== route.name)
}

export default useParentRoutes