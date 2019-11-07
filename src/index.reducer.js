const initialState = {
    text:5
}

// //这是reducer
// const reducer = (state = tiger, action) => {
//     switch (action.type) {
//         case '涨工资':
//             return state += 100;
//         case '扣工资':
//             return state -= 100;
//         default:
//             return state;
//     }
// }


const reducer = function(state,action){
    console.log(state)
    switch(action.type){
        case '涨工资':
            return {text:action.text+10000}
        case '扣工资':
            return {text:action.text-1}
        default:
            return initialState;
    }
}

export default reducer