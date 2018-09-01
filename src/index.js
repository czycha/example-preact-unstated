import { h, render } from 'preact'
import App from './App'
import 'preact/devtools'

const el = document.getElementById('app')
render(<App />, el)
