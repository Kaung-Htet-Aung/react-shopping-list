const initialState={
    lists:[
        {
         text:"to learn javascript and react",
         quantity:1,
        },
        {
            text:"to learn javascript and reactto learn javascript and react",
            quantity:1,
        }
     ]
}


const counterReducer=(state=initialState,action)=>{
    switch(action.type){
        case "increment": return{
           ...state,
           lists:state.lists.map((l,i)=>
            i===action.index?{text:l.text,quantity:l.quantity+1}:l
           )
        }
    
        case "decrement": return{
            ...state,
            lists:state.lists.map((l,i)=>
             i===action.index&&l.quantity>1?{text:l.text,quantity:l.quantity-1}:l
            )
         }
        case 'addItem':return{
            ...state,
            lists:[...state.lists,{text:action.inputText,quantity:1}]
        }

        default:return state;
    }
}

export default counterReducer;