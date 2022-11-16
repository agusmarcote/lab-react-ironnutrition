import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.min.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox';
import FoodForm from './Components/FoodForm';
import React, { useState } from "react"
import Search from './Components/Search';

function App() {

  const [foodsArray, setFoodsArray] = useState(foods)
  const [filterfoodsArray, setFilterFoodsArray] = useState(foods)

  function foodHandler (newFood){
    setFoodsArray(prevstate => {
      return [...prevstate, newFood]   // aca se agrega el newFood al array actualizado(...prevstate). Lo que viene despues de  ',' se agrega 
    })
  }

  function searchHandler (searchStringHandler) {
    console.log(searchStringHandler)
    const researchStringData = foodsArray.filter((food) => {
      return food.name.toLowerCase().includes(searchStringHandler.toLowerCase())
    })
    setFilterFoodsArray(researchStringData)
  }
  

  function deleteHandler (x){
    const newArray = foodsArray.filter((food) => {
      return food.name !== x
    })
    setFoodsArray(newArray)
    setFilterFoodsArray(newArray)
  }


  return (
    <div className="App">
      <Search onSearchData={searchHandler} />
      <FoodForm onNewFood={foodHandler}/>
      <FoodBox foods={filterfoodsArray} onDeleteData={deleteHandler}/>
    </div>
  );
}

export default App;
