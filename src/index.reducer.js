const initialState = {
    text:5000
}




const reducer = function(state = initialState ,action){
    console.log(state)
    switch(action.type){
        case '涨工资':
            return {text:action.text+100}
        case '扣工资':
            return {text:action.text-100}
        default:
            return initialState;
    }
}

export default reducer