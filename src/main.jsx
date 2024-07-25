import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HookApp } from './HookApp'
import { store } from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <HookApp />
    </Provider>
  </React.StrictMode>,
)
