/*
该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

//引入createStore，专门用于创建redux中最为核心的store对象（4.x后推荐configureStore）
import {configureStore,combineReducers} from '@reduxjs/toolkit'
//引入为Count组件服务的reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
//引入redux-devtools-extension
//import {composeWithDevTools} from 'redux-devtools-extension' //不需要在文件里配置也可以用开发者工具了

//汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({
    he:countReducer,
    rens:personReducer
})

//暴露store
export default configureStore({
    reducer: allReducer,
    middleware: [thunk],
    // enhancers: [composeWithDevTools()] //写法fromGPT 不知为啥用了会error 不需要在文件里配置也可以用开发者工具了
})