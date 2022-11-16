import './FoodBox.css';
import React, { useState } from "react"
import { Card, Col, Button } from 'antd';
// function FoodBox (){

//     return(

//     )
// }

function FoodBox(props) {
    let foodArray = props.foods
    
    const [newArrays, setNewArray] = useState(foodArray)

    const deleteFood = (x) => {
        props.onDeleteData(x)
        }
    
      



    return (
        <div>
            <h1>Food List</h1>
            <div className='foodBoxCard'>
                {foodArray.map((food) => (
                    <Col>
                        <Card
                            title={food.name}
                            style={{ width: 230, height: 300, margin: 10 }}
                        >
                            <img src={food.image} width={80} alt="food" />
                            <p>Calories: {food.calories}</p>
                            <p>Servings: {food.servings}</p>
                            <p>
                                <b>Total Calories:{food.calories * food.servings}</b> kcal
                            </p>
                            <Button type="primary" onClick={() => deleteFood(food.name)}> Delete </Button>
                        </Card>
                    </Col>
                ))}  
            </div>
        </div>

    );
}



export default FoodBox