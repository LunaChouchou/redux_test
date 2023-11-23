//引入Count的UI组件
import CountUI from '../../components/Count'
//引入action
import {
    createDecrementAction, 
    createIncrementAction, 
    createIncrementAsyncAction} from '../../redux/count_action'

//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'


//a函数返回的对象中的key就作为传递给UI组件props的keyvalue就作为传递给UI组件props的value——状态
function mapStateToProps(state){
    return {count:state} //相当于<CountUI n={900}/>
}
//b函数返回的对象中的key就作为传递给UI组件props的keyvalue就作为传递给UI组件props的value——操作状态的方法
function mapDispatchToProps(dispatch) {
    return {
        jia: (number) => { //小括号和大括号可以省略
            //通知redux执行加法
            dispatch(createIncrementAction(number))
        },
        jian:number => dispatch(createDecrementAction(number)),
        jiaAsync:(number,time) =>dispatch(createIncrementAsyncAction(number,time))
    }
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
