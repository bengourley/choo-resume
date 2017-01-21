const test = require('tape')
const resume = require('./')

test('choo-resume', t => {
  global.window = {}

  // First app
  let stopCalled = false
  const app = { stop: () => { stopCalled = true } }
  const plugin = resume(app)
  const initialState = {}
  t.equal(plugin.wrapInitialState(initialState), initialState, 'should return initial state on first run')
  t.equal(global.window.__CHOO_RESUME__.app, app, 'should store app on the window')
  const secondState = { foo: 1 }
  plugin.onStateChange(secondState, {}, initialState, 'test')
  t.equal(global.window.__CHOO_RESUME__.state, secondState, 'should store state on the window')
  t.equal(stopCalled, false, 'stop() should not yet be called')

  // Hot-swapped app
  let stopCalled2 = false
  const app2 = { stop: () => { stopCalled2 = true } }
  const plugin2 = resume(app2)
  t.equal(stopCalled, true, 'stop() from first app should now be called')
  t.equal(stopCalled2, false, 'stop() from second app should not be called')
  const initialState2 = {}
  t.equal(plugin2.wrapInitialState(initialState2), secondState, 'should return saved state on first run')
  t.end()
})
