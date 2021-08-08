import { useStore } from 'vuex'

export const STORE = () => {
  const store = useStore()
  return {
    STORE: store,
    STATE: store.state,
    DISPATCH: store.commit,
    COMMIT: store.commit
  }
}
