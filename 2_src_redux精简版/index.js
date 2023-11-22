import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import store from './redux/store'

createRoot(document.getElementById('root')).render(<App/>)

store.subscribe(() => {
    createRoot(document.getElementById('root')).render(<App/>)
})