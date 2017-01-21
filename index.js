const windowProp = '__CHOO_RESUME__'

module.exports = app => {
  if (window[windowProp]) {
    // Stop the last runnning app if one exists and swap it with the new one
    if (window[windowProp].app) window[windowProp].app.stop()
    window[windowProp].app = app
  } else {
    // Save the current app on the window
    window[windowProp] = { app: app, state: null }
  }
  return {
    onStateChange: (state, data, prev, caller, createSend) => {
      window[windowProp].state = state
    },
    wrapInitialState: (obj) => window[windowProp].state || obj
  }
}
