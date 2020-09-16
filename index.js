
const redux = require('redux')
const createStore = redux.createStore
const combineReducer = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
    
}

function buyIceream() {
    return {
        type: BUY_ICECREAM,
        info: 'First redux action'
    }
    
}

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCream: 20
// }

const initialStateCake = {
    numOfCakes: 10  
}

const initialStateIceCream = {
    numOfIceCream: 20   
}

const CakeReducer = (state=initialStateCake, action) =>{
    switch (action.type)  {
        case BUY_CAKE:
            return{
                ...state,
                numOfCakes: state.numOfCakes -1
            }
          
            default : return state
    }
}

const IceCreamReducer = (state=initialStateIceCream, action) =>{
    switch (action.type)  {
            case BUY_ICECREAM:
            return{
                ...state,
                numOfIceCream: state.numOfIceCream -1
            }
            default : return state
    }
}
/*
const reducer = (state=initialState, action) =>{
    switch (action.type)  {
        case BUY_CAKE:
            return{
                ...state,
                numOfCakes: state.numOfCakes -1
            }
            case BUY_ICECREAM:
            return{
                ...state,
                numOfIceCream: state.numOfIceCream -1
            }
            default : return state
    }
} */


const rootReducer = combineReducer({

    cake: CakeReducer,
    IceCream: IceCreamReducer

})

const store =  redux.createStore(rootReducer)
console.log('Initial state', store.getState())
const unsubscribed= store.subscribe(() => console.log('updates state', store.getState())) 
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceream())
store.dispatch(buyIceream())
unsubscribed()
