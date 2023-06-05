import React from 'react'
import ReactDOM from 'react-dom/client'
import { HooksApp } from './HooksApp'

import './index.css'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { CounterApp } from './01-useState/CounterApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HooksApp />
    <CounterWithCustomHook />
  </React.StrictMode>,
)
