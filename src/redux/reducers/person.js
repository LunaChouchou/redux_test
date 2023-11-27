import { ADD_PERSON } from "../constant";


const initState = [{id:'001',name:'tom',age:18}]
export default function personReducer(preState=initState,action){
    const {type,data} =action
    switch (type) {
        case ADD_PERSON:    //若是添加一个人
            //preState.unshift(date) //此处不可以这样写，这样会导致preState被改写，presonReducer就不是纯函数了
            return [data,...preState]
        default:
            return preState
    }
}