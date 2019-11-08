import { createStore } from 'redux'
const initialState = {
   name:"张山"
}
const reducer = function(state = initialState ,action){
    switch(action.type){
        case '涨工资':
            return Object.assign({},action.obj)
        case '扣工资':
            return Object.assign({},action.obj)
        default:
            return state;
    }
}

//创建store
const store = createStore(reducer);

export default store