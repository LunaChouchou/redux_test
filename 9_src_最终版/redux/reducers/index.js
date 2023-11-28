/* 该文件用于汇总所有的reducer为一个总的reducer */

//引入combineReducers，用于汇总多个reducer
import {combineReducers} from '@reduxjs/toolkit'
//引入为Count组件服务的reducer
import count from './count'
//引入为Person组件服务的reducer
import persons from './person'

//汇总所有的reducer变为一个总的reducer
export default combineReducers({
    count, //汇总reducer的时候就是在定义state，这是在定义state里的count
    persons
})