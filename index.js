const defaultGlobalName = '__SAVED_APP_STATE__';

module.exports = (app, sa = defaultGlobalName) => {
  window[sa] = window[sa] || {};

  app.use((state, emitter) => {
    window[sa].emitter && window[sa].emitter.removeAllListeners();
    window[sa].emitter = emitter;
    Object.assign(state, window[sa].state || {});
    emitter.on('*', function (messageName, data) {
      window[sa].state = state;
    })
  })

  return app;
}
