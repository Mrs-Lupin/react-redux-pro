import { createSlice } from '@reduxjs/toolkit'

const counterStore = createSlice({
  name: 'counter',
  //初始化状态数据
  initialState: {
    count: 0
  },
  //修改数据的同步方法
  reducers: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    addToNum(state,action){
      state.count=action.payload 
    }
  }
})

//解构出创建action对象的函数  （actionCreater）
const { increment, decrement, addToNum } = counterStore.actions
//获取reducer函数
const reducer = counterStore.reducer
//导出创建action对象的函数和reducer函数
//按需导出
export { increment, decrement, addToNum }
//默认导出
export default reducer