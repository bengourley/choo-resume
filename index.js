const defaultGlobalName = '__SAVED_APP_STATE__'

module.exports = (app, globalName = defaultGlobalName) => {
  if (window[`${globalName}__prev__`]) window[`${globalName}__prev__`].stop()
  window[`${globalName}__prev__`] = app
  return {
    onStateChange: (state, data, prev, caller, createSend) => {
      window[globalName] = state
    },
    wrapInitialState: (obj) => {
      if (!window[globalName]) return obj
      return window[globalName]
    }
  }
}
