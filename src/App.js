import Form from "./components/Form";
import './styles/App.css'
import React, { useState } from 'react';
import { useSelector,useDispatch} from "react-redux";
import ShopItemList from "./components/ShopItemList";

function App() {
  
  const [inputText, setInputText] = useState("");
 
  const dispatch=useDispatch();
  const lists=useSelector(state=>state.counter.lists)
  

  function addItem(){
     dispatch({type:'addItem',inputText:inputText})
  }
  function increment(index){
       dispatch({type:'increment',index})
  }
  function decrement(index){
    dispatch({type:'decrement',index})
}
  return (
    <div className="App">

        <Form setInputText={setInputText} addItem={addItem}/>
        <ShopItemList shopItems={lists} increment={increment} decrement={decrement}/>
    </div>
  );
}

export default App;
