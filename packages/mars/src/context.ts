import { Action } from './actions'

export const context = {
  enabled: false,
  ensureEnabled() {
    if (!this.enabled) {
      throw new Error('Context not enabled!')
    }
  },
  actions: [] as Action[],
  // Counts depth of conditional transactions after the failed one
  conditionalDepth: 0,
}
