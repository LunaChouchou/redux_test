/*
该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

//引入createStore，专门用于创建redux中最为核心的store对象（4.x后推荐configureStore）
import {configureStore} from '@reduxjs/toolkit'
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
//引入汇总之后的reducer
import reducer from './reducers'
//引入redux-devtools-extension
//import {composeWithDevTools} from 'redux-devtools-extension' //不需要在文件里配置也可以用开发者工具了

//暴露store
export default configureStore({
    reducer: reducer,
    middleware: [thunk]
    // enhancers: [composeWithDevTools()] //写法fromGPT 不知为啥用了会error 不需要在文件里配置也可以用开发者工具了
})