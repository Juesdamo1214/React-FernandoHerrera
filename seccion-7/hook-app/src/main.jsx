import React from 'react'
import ReactDOM from 'react-dom/client'
import { HooksApp } from './HooksApp'

import './index.css'
import { Layout } from './05-useLayoutEffect/Layout'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { MultipleCustomHooks } from './03-example/MultipleCustomHooks'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { CounterApp } from './01-useState/CounterApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Layout />
  // </React.StrictMode>
)
