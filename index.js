const defaultGlobalName = '__SAVED_APP_STATE__'

module.exports = (globalName = defaultGlobalName) => ({
  onStateChange: (data, state, prev, caller, createSend) => {
    window[globalName] = state
  },
  wrapInitialState: (obj) => {
    if (!window[globalName]) return obj
    return window[globalName]
  }
}
)
