import { Container } from 'unstated'
import UID from 'uid'

class CounterContainer extends Container {
  state = {
    uids: []
  }
  addUID () {
    const uids = [...this.state.uids]
    uids.push(UID())
    return this.setState({ uids })
  }
  removeUID (uid) {
    return this.setState(({ uids }) => ({
      uids: uids.filter((_uid) => _uid !== uid )
    }))
  }
}

export default CounterContainer
