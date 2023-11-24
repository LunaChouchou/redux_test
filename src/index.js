import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import store from './redux/store'
import {Provider} from 'react-redux'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App/>
    </Provider>
)

//检测redux中状态的改变，如果redux的状态发生了改变，那么重新渲染App组件
// store.subscribe(() => {
//     createRoot(document.getElementById('root')).render(<App/>)
// })