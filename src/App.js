import { h } from 'preact'
import { Provider, Subscribe } from 'unstated'
import CounterContainer from './CounterContainer'

const Adder = () => (
  <Subscribe to={[CounterContainer]}>
    {(store) => (
      <div>
        <button onClick={() => { store.addUID() }}>
          Add UID
        </button>
        (currently {store.state.uids.length})
      </div>
    )}
  </Subscribe>
)

const Display = () => (
  <Subscribe to={[CounterContainer]}>
    {(store) => (
      <div style={{background: '#eee'}}>
        {store.state.uids.map((uid) => (
          <div
            key={uid}
            style={{fontWeight: 'bold', cursor: 'not-allowed'}}
            onClick={() => { store.removeUID(uid) }}
          >
            {uid}
          </div>
        ))}
      </div>
    )}
  </Subscribe>
)

const App = () => (
  <Provider>
    <div>
      <Adder />
      <Display />
    </div>
  </Provider>
)

export default App
