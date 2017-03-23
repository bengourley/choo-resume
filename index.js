const defaultGlobalName = '__SAVED_APP_STATE__'

module.exports = (globalName = defaultGlobalName) => (state, emitter) => {
  Object.assign(state,window[globalName] || {});

	emitter.on('*', function (messageName, data) {
    window[globalName] = state;
  })
}
