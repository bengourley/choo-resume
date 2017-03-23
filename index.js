const defaultGlobalName = '__SAVED_APP_STATE__';

module.exports = (app, globalName = defaultGlobalName) => {
  window[globalName] = window[globalName] || {};

  app.use((state, emitter) => {
    window[globalName].emitter && window[globalName].emitter.removeAllListeners();
    window[globalName].emitter = emitter;
    Object.assign(state, window[globalName].state || {});
    emitter.on('*', function (messageName, data) {
      window[globalName].state = state;
    })
  })

  return app;
}
